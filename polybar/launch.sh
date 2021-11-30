#/bin/bash

if has polybar; then
	killall polybar
else 
	polybar main &
fi
