# Northcoders News

Northcoders News is a social news aggregation, web content rating and discussion website similar to Reddit.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To install this programme you will first need a commandline terminal such as **iTerm2** (for Mac) or **Terminator** (Linux/Unbuntu/Fedora) - or something similar. For more info on using the commandline see this blog article: (https://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything)

You will then need to install the following:

* Node.js 
* NPM

Check if Node.js is already installed by typing the following into the commandline (without the dollar sign):


```
$ node -v 
```

To install Node.js follow these instructions: (https://nodejs.org/en/download/package-manager/#osx)

Check if NPM is installed:

```
$ npm -v
```

To install NPM follow these instructions: 
(https://docs.npmjs.com/getting-started/installing-node)

### Installing Northcoders News

(Northcoders News consist of two aptly named parts: 

* "Northcoders-News-Back-End" - a backend REST API 
  (https://github.com/ashcode1/Northcoders-News-API)   

* "Northcoders-News-Front-End" - frontend user interface
  (https://github.com/ashcode1/Northcoders-News-Front-End)

To get these up and running you will need to clone both repositories onto your machine. Then you will need to keep three shells running in your terminal to run the backend database and server, and also the frontend server. Follow the instructions below:

**Clone both repos** 

* Click the green button towards the top right of the page
* Click the "Copy to clipboard" button
* On your machine navigate to your chosen folder using the commandline and paste in the link you just copied from the repo at the end of the following command:
```
$ git clone 
```
eg. 

```
$ git clone https://github.com/ashcode1/Northcoders-News-API"
```

**Install dependencies**

In each directory run the following command:

```
$ npm install
```

**Run the servers**

Open two shells in the new backend directory and type the following:

* 1st shell (database):

```
$ mongod
```
* 2nd shell (backend server running on port 3000):
```
$ npm start
```
Open a shell in the frontend directory:
* 3rd shell (frontend server also port 3000 but will suggest the next available port such as 3001 because the back end is already on 3000 - just type "y" and hit "enter" to confirm the switch)

```
$ npm start
```
~ "Would you like to run the app on another port instead? (Y/n)" 

```
$ y
```

If it doesn't open automatically, open a new tab in your browser at the appropriate URL. eg.

```
$ http://localhost:3001/
```
You should now be able to see the homescreen in the browser.


## Running the tests

Open a new shell in the frontend directory and run the following command:Tests

```
$ npm test
```

## Built With

* [Node.js](https://nodejs.org/en/) 
* [MongoDB](https://www.mongodb.com/) 
* [Express](https://expressjs.com/) 
* [React.js](https://reactjs.org/) 
* [Bulma](https://bulma.io/) 

## Authors

* **Ashley Hopkins** - (https://github.com/ashcode1)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* The Underscore team for building an awsome JavaScript library! (https://github.com/jashkenas/underscore)
* The Northcoders team for setting the challenge of re-implementing the Underscore library in natvie JavaScript!
