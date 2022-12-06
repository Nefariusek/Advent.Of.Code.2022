#!/bin/bash

if [ -z "$1" ]; then
    echo 'An argument is missing'
    exit
else
    cd ./day$1 
    npx nodemon ./adventOfCode$1.js
fi
