#!/bin/bash

# Please make sure you have yay
if type yay >/dev/null 2>&1; then 
  echo 'yay exists!' 
else 
  echo "Error: yay didn't exist!"
  echo "You can add archlinuxcn repository and use \'sudo pacman -S yay\' for example to install yay."
  exit 255
fi

# Install Hyprland and some other stuffs
echo "Start install Hyprland and some other stuffs."
yay -S qt5-wayland glfw-wayland hyprland wofi dunst nvidia-dkms linux-headers nvidia-utils pulseaudio networkmanager network-manager-applet screenkey pavucontrol cliphist 

# Disable Nouveau
sh ~/scripts/disable_nouveau.sh
echo "Nouveau has been disabled!"

# Install some fonts
echo "Installing fonts..."
sh ~/scripts/fonts.sh
echo "All fonts have been installed!"

# Config hosts
sudo cp ~/scripts/hosts /etc/hosts
echo "hosts has been configurated!"

# Config git
sh ~/scripts/git_config.sh
echo "git has been configurated!"

# Time sync
sh ~/scripts/time_sync.sh
echo "Time has been synced!"

# End
echo "All installation has been finished!"
