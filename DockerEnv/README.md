## MyResume


* Clone your repository to the system
* runt he following command to build and start the services

```
mkdir /root/MyCV
cd /root/MyCV
git clone https://github.com/akhilrajmailbox/MyResume.git MyResume
docker run -d -p 80:80 -p 443:443 -v /root/MyCV/letsencrypt:/etc/letsencrypt -v /root/MyCV/REPO_NAME:/opt/REPO_NAME -e "APP_NAME=REPO_NAME" --name myresume --hostname myresume akhilrajmailbox/myresume:latest
```
**change the `REPO_NAME` with your repository name.**


**SSL Configuration**

* configure your DNS to point the subdomain to your system public ip address
* after the DNS propagation time, login to the docker container and execute the following command and give your input accordingly

```
certbot --apache -d mycv.mydomain.com
```