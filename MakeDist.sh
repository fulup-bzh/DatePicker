#!/bin/sh

if ! test -d node_modules
then
 echo "install nodejs dependencies"
 npm install
fi

echo 'Build JS/CSS in dist'
grunt
