## MyResume


* Clone your repository to the system
* runt he following command to build and start the services

```
docker run -d -p 80:80 -p 443:443 -v /root/REPO_NAME:/opt/REPO_NAME -e "APP_NAME=REPO_NAME" --name myresume --hostname myresume akhilrajmailbox/myresume:latest
```
**change the `REPO_NAME` with your repository name.**