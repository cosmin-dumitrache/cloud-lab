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
