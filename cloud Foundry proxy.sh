#!/bin/bash

set HTTP_PROXY_HOST=proxy.wdf.sap.corp
set HTTP_PROXY_PORT=8080
set HTTPS_PROXY_HOST=proxy.wdf.sap.corp
set HTTPS_PROXY_PORT=8080
set HTTPS_PROXY=http://proxy.wdf.sap.corp:8080/
set HTTP_PROXY=http://proxy.wdf.sap.corp:8080/
set NO_PROXY=.local,.sap.corp,localhost
echo 'proxy enabled'
