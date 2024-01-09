/**
 * Author: DrowsyFlesh
 * Create: 2020/11/26
 * Description:
 */
/* global clients */
self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting()); // Activate worker immediately
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim()); // Become available to all pages
});

self.addEventListener('message', function(e) {
    const {type, title, icon, actions = [], data = {}, autoCloseInterval = 0, ...rest} = e.data || {};
    if (type === 'notification') {
        if (title) {
            const options = {
                icon,
                data,
                ...rest,
            };

            if (data.useActions) {
                options.actions = actions;
            }

            self.registration.showNotification(title, options).then(() => {
                void self.registration.getNotifications().then((list) => {
                    const notification = list.find((n) => n.title === title);
                    if (notification) {
                        if (autoCloseInterval && data.autoClose) {
                            setTimeout(() => notification.close(), autoCloseInterval);
                        }
                    }
                });
            });
        }
    } else {
        console.error('error message type', type);
    }
});

self.addEventListener('notificationclick', function(event) {
    const {notification, action} = event;
    const {data = {}} = notification;
    new Promise((resolve) => {
        if (data.useActions) { // 如果启用按钮，则判断是否有action
            resolve(!!action);
        } else {
            resolve(true);
        }
    }).then((jump) => {
        if (jump) {
            clients.matchAll().then(function(clients) {
                const targetClient = clients.find(client => client.url.match(/(background|_generated_background_page).html/));
                if (targetClient) {
                    targetClient.postMessage({
                        target: 'tabController',
                        event: 'create',
                        url: data.url,
                        strict: false,
                    });
                    targetClient.postMessage({
                        target: 'googleAnalytics',
                        event: 'send',
                        hitType: 'event',
                        category: 'sw',
                        action: 'open_notification',
                        label: data.url,
                    });
                }
            });
        }
        // 点击后始终会关闭通知
        event.notification.close();
    });
}, false);
