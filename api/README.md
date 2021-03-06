## Starting Clean
+ install docker - https://docs.docker.com/installation/
+ install docker-compose - https://docs.docker.com/compose/install/

### Removing all running containers
docker rm $(docker ps -a -q)

### Removing all images
docker rmi $(docker images -q)

## Basic (follow the steps carefully)
+ git clone https://github.com/retroconduct/docker-lumen.git
+ docker-compose up (will download, build and start services)
+ docker ps (you will see all 3 services up and ports exposed)
+ rename html/lumen/.env-bkp to .env and set database configurations (read instruction in .env file)
+ docker exec phpfpm composer install -d /srv/http/ (alertnatively you can run composer locally and install vendors for lumen)
+ go to http://localhost and you should see Lumen landing page (if everything is in order)

## Lumen
+ sudo chown www-data:www-data -R storage/ (to give permissions to write for logs and such)
+ docker exec phpfpm php /srv/http/artisan migrate (this will create a sample migration)
+ docker exec phpfpm php /srv/http/artisan db:seed (seeds with sample data)
+ go to http://localhost:8000/users and you should all user records
+ good to go then.

This repository will be updated in due course with necessary modificatons.# lumen-skel-lnmp
