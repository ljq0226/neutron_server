
## Description

This is a quick starter for Nest.js with prisma.


## Installation

```bash
$ npm install
or $ yarn install 
```


## Operation Introduction

### install sql file
Before you run the app,you should find the sql file (/prisma/migrations/2022..._init/migration.sql) and install the sql in your local mysql database.

### add .env file
build a .env file in your project,the content like this:
(If your mysql username and password are "root" ,the first "root" is your username and the second 
 "root" is your password,"blog" is your databaseName)
```txt
DATABASE_URL="mysql://root:root@localhost:3306/blog"
```

### Running the app

```bash
$ npm run start
or $ yarn start
```
### watch mode
```bash
$ npm run dev
or $ yarn dev
```
### Check If Success

open http://localhost:8080/docs#/
you will see this picture
![](https://obs-pic-1309372570.cos.ap-chongqing.myqcloud.com/20221113222745.png)

then you should add one user in your database,and to try the /auth/login interface get the token
,get userinfo by verificating the token.
if you get the response with your created user info,congratulations,the starter is ok with your project.

