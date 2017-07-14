# BandForge

#### An Epicodus Independent Project JavaScript week #3

#### By Joe Parsley

## Description

* This is a project demonstrating my ability with the angular CLI after just one week of exposure. Here's what I came up with!

## User Story:

* As a user, I'd like to visit a page to see a list of all team or club members.
* As a user, I'd like to click a team or club member's entry in the list to visit their profile page, which should include more details about them.
* As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do.
* As a user, I'd like all data persisted in a database, so it's always there when I need it.
* As an administrator, I want to add new users to the club. (User authentication is not required).
* As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details.
* As an administrator, need the option to delete a user, in case they leave the club or team.

## Installation Requirements

* You must install or have installed a current version of:

  * [Node and npm](https://nodejs.org/en/)

  * [TypeScript](https://www.typescriptlang.org/#download-links)

  * [Angular CLI](https://github.com/angular/angular-cli)


## Setup

* Clone this repository

  `$ git clone https://github.com/joeparsley/band-forge`


* Run the following commands from the root directory:

  `$ npm install`

  `$ bower install`

  This will download the project's dependencies

* Build the project,

  Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

* Run the server,

  Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* Within the src folder create a file in the app directory called `api-keys.ts`

  Copy and Paste this code to the file

  `export var masterFirebaseConfig = {
    apiKey: "AIzaSyDjSLfRQ75k45w1bCuRxsFjff5xOnQf9is",
    authDomain: "bandforge-c394c.firebaseapp.com",
    databaseURL: "https://bandforge-c394c.firebaseio.com",
    projectId: "bandforge-c394c",
    storageBucket: "",
    messagingSenderId: "677349144446"
    };
`
* You're good to go!

## Known Bugs

There are no known bugs at this time.

## Support and contact details

For feedback or support contact Joe Parsley at joewparsley@gmail.com

## Technologies Used

* HTML
* TypeScript
* JavaScript
* Angular 2
* Angular CLI
* Firebase
* jQuery
* NPM
* Bower
* Materialize

### License

MIT

Copyright (c) 2017 Joe Parsley
