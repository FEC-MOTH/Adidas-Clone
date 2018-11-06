# Shoedidas Header

This repository contains a clone of the header, navbar, and live-search elements on Adidas.com, as they appeared in Novembe 2018.

## Running Development Environment Locally

To run locally
1) Install a current version of MySQL: `https://dev.mysql.com/doc/mysql-getting-started/en/`
2) Update npm to at least version 6.0.0: `npm install -g npm`
3) Install required node packages. From inside of the project directory, run: `npm install`
4) Copy the contents of the file in the root project directory titled `.env_sample` to a new file in the root project directory titled `.env`.

In the new `.env` file, update the values of the following three environment variables as follows:
`DB_USER_DEVELOPMENT=sampleUsername` // replace `sampleUsername` with your MySQL username.
`DB_PASS_DEVELOPMENT=samplePassword` // replace `samplePassword` with your MySQL password.
`DB_NAME_DEVELOPMENT=shoedidas_header` // `shoedidas_header` is the name of the database into which the component will attempt to seed data. You do not necessarily need to replace `shoedidas_header` with a new database name, however, you do need to create a new mySQL database named `shoedidas_header` on your system.

To do so, enter the MySQL shell, and enter 
`CREATE DATABASE shoedidas_header;`

(Make sure that the user designated in `sampleUsername` has access to this database!)

5) Seed the database: `npm run seed`
6) Initiate webpack continuous build: `npm run run react-dev`
7) Start server: `npm start`
8) In your browser, visit: `localhost:3000`

**IMPORTANT**: currently when you run `npm test`, the database designated in `shoedidas_header` will be dropped. Further, `npm test` is run as a pre-commit hook every time that you attempt to make a commit. This means that you should run `npm run seed` to seed the database after every commit.

(This issue will be fixed soon!)


## Adidas.com (10/27/18)
![adidas](https://i.imgur.com/cJG0tOL.png)

## Shoedidas (10/27/18)
![shoedidas](https://i.imgur.com/HWtOEGy.png)
