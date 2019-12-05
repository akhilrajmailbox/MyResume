#!/bin/bash
## apt-get update && apt-get install -y curl

export APP_NAME=${APP_NAME}

function initialsetup () {
    if [[ ! -z ${APP_NAME} ]] ; then
        cd /opt/${APP_NAME}
    else
        echo -e "APP_NAME need to set...! \n Task aborting...!"
        exit 1
    fi
}


function artifactbuild() {
    make setup
    make build
}

function webservice() {
    ## restarting the apache2 services
    /etc/init.d/apache2 stop
    rm -rf /var/www/html/*
    cp -r webroot/* /var/www/html/
    apachectl -D FOREGROUND
}


if [[ ${1} == build ]] ; then
    initialsetup
    artifactbuild
    webservice
else
cat << EOF
_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    options :
        build
        rebuild
_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
EOF
fi