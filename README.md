# Northcoders News

Northcoders News is a social news aggregation, web content rating and discussion website similar to Reddit.

[LIVE DEMO](https://nc-news-fe.herokuapp.com/)

The articles that make up this site are divided into topics: Football, Cooking and Coding.

* Each article has user curated ratings and can be up or down voted using the arrows.

* Users can add comments about an article and those comments can be up or down voted.

* A user can also add comments and remove comments, but only their own. If you try to delete another user's comment you will be denied access!

### Routes

| Route |   |
| ------|---|
| `GET /api/topics` | Get all the topics |
| `GET /api/topics/:topic_id/articles` | Return all the articles for a certain topic |
| `GET /api/articles` | Returns all the articles |
| `GET /api/articles/:article_id/comments` | Get all the comments for a individual article |
| `POST /api/articles/:article_id/comments` | Add a new comment to an article. This route requires a JSON body with a comment key and value pair e.g: {"comment": "This is my new comment"} |
| `PUT /api/articles/:article_id` | Increment or Decrement the votes of an article by one. This route requires a vote query of 'up' or 'down' e.g: /api/articles/:article_id?vote=up |
| `PUT /api/comments/:comment_id` | Increment or Decrement the votes of a comment by one. This route requires a vote query of 'up' or 'down' e.g: /api/comments/:comment_id?vote=down |
| `DELETE /api/comments/:comment_id` | Deletes a comment |
| `GET /api/users/:username` | Returns a JSON object with the profile data for the specified user. |


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

To install this programme you will first need a commandline terminal such as **iTerm2** (for Mac) or **Terminator** (Linux/Unbuntu/Fedora) - or something similar. For more info on using the commandline see this [blog article](https://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything)

You will then need to install the following:

* Node.js 
* NPM

Check if Node.js is already installed by typing the following into the commandline (without the dollar sign):


```
$ node -v 
```

To install Node.js follow these [instructions](https://nodejs.org/en/download/package-manager/#osx)

Check if NPM is installed:

```
$ npm -v
```

To install NPM follow these [instructions](https://docs.npmjs.com/getting-started/installing-node)

### Installing Northcoders News

(Northcoders News consists of two aptly named parts: 

* ["Northcoders-News-Back-End"](https://github.com/ashcode1/Northcoders-News-API) - a backend REST API    

* ["Northcoders-News-Front-End"](https://github.com/ashcode1/Northcoders-News-Front-End) - a frontend user interface
  

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

* **Ashley Hopkins** - [github](https://github.com/ashcode1)

## License

This project is licensed under the MIT License

## Acknowledgments


* The [Northcoders](https://northcoders.com/start-coding?ads_cmpid=949839241&ads_adid=47028772797&ads_matchtype=b&ads_network=g&ads_creative=228828910521&utm_term=northcoders&ads_targetid=kwd-375530169794&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=Cj0KCQjwp_DPBRCZARIsAGOZYBT3fLL0ytyxD4YrK04zMgVM0T8YqqXfcIeKyjTQ61QL3UEpZk1K_ToaAmiCEALw_wcB) team for setting the challenge of this project and for creating and supporting an amazing network of developers in the north 
