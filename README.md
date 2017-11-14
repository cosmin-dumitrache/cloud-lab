# Startup Engineering Cloud Lab

This project contains a basic full stack MEVN app. MEVN stands for: Mongo, Express, Vue, Node.

You can find a good tutorial about how to create a project like this [here](https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0).

To get this app started you need to do these three steps:

## 1. Setup MongoDB

Get [MongoDB](https://docs.mongodb.com/manual/installation/) installed and running on localhost:27017

Create a database called ```university``` and populate it with the following student documents:

```json
{
  "students": [
    {
      "firstName": "Mircea",
      "lastName": "Ene",
      "mark": 9.9
    },
    {
      "firstName": "Ana",
      "lastName": "Florea",
      "mark": 9.5
    },
    {
      "firstName": "Alex",
      "lastName": "Dumitru",
      "mark": 8.7
    },
    {
      "firstName": "Maria",
      "lastName": "Coman",
      "mark": 8.2
    },
    {
      "firstName": "Marius",
      "lastName": "Luca",
      "mark": 7.8
    },
    {
      "firstName": "Gigel",
      "lastName": "Popescu",
      "mark": 5
    }
  ]
}
```

## 2. Start the Node/Express server

First, make sure you have Node and NPM installed. Then, do this:

```
$ cd server
$ npm install
$ npm run start
```

Now open your browser at: http://localhost:8081/students

## 3. Start the Vue client app

First, make sure you have Node and NPM installed. Then, do this:

```
$ cd client
$ npm install
$ npm run dev
```

Now open your browser at: http://localhost:8080

## Deploying to a cloud VM

### The server

In order to make it easy to daemonize the server, you can use a process manager like [PM2](http://pm2.keymetrics.io/).

```
$ pm2 start src/app.js
```

This will spawn your Node server listening on localhost:8081.

### The client

To build your Vue app for production, simply run:

```
$ npm run build
```

This will create an optimized version of your app inside a directory called ```dist```. This contains all the files needed to run your app in production. We will use Nginx to serve these static files.

### Reverse proxy

It's a good idea to have a reverse proxy listening on port 80. You can user [NGINX](https://nginx.org/) for that.

Nginx should attempt to serve static files from your Vue app dist directory, for any request going to http://your-server/

There should be one exception to this. For requests going to http://your-server/api/some-path, it should defer to your api server listening on localhost:8081.

Here's and example Nginx configuration file you could use.

```
$ sudo vim /etc/nginx/sites-enabled/default
```

```
server {
	listen 80 default_server;
	listen [::]:80 default_server;

  # this should point to your Vue app dist directory
	root /path/to/vue/app/dist/directory; 

  # default files to serve from a directory
	index index.html index.htm index.nginx-debian.html;

	server_name _;

  # serve static resources for Vue app when hitting /
	location / {
		try_files $uri $uri/ /index.html;
	}

  # proxy to node js api when hitting /api
	location /api {
		proxy_pass http://localhost:8081;
		rewrite ^/api/?(.*) /$1 break;
	}

}
```
