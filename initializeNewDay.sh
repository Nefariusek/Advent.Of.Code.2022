#!/bin/bash

if [ -z "$1" ]; then
    echo 'An argument is missing'
    exit
else
    if [ -d "./day$1" ]; then
        echo "Day $1 exists"
        exit
    else
        echo 'Sun rises...'
        mkdir ./day$1
        cp ./init.js ./day$1/adventOfCode$1.js
        echo 'A new day dawns!'
    fi
fi
