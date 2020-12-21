# shop API

nodeJs project built with Express to provide API capabilities to Create, Read, Update and Delet store's and storeIten's (sellable goods)

current available endpoints:

- /stores
  GET: obtain list of all registered stores in database
  no params required
  
  POST: create new store
  ```
  {
	"name": "Chimichangas 4 U & me",
  "owner": "John Doe",
  "address": "223 max way",
  "rnc": "111111111"
  }
  ```
  
- /stores/:id
  GET: obtain details for a given store
  no params required
  
  PUT: update details for a given store
  ```
  {
	"name": "Chimichangas 4 U & me",
  "owner": "John Doe",
  "address": "223 max way",
  "rnc": "111111111"
  }
  ```
  
  DELETE: delete a given store
  no params required
  
- /stores/:id/item
  POST: create a new item within the scope of a given store
  ```
  {             
  "name": "ButterFinger 2",
  "description": "Chocolate Bar",
  "value": 1.05,
  "availability": 100
   }
   ```
  
- /stores/:id/item/:id
  GET: obtain details for a given item
  no params required
  
  PUT: update details for a given item
  ```
  {             
  "name": "ButterFinger 2",
  "description": "Chocolate Bar",
  "value": 1.05,
  "availability": 100
   }
  ```
  
  DELETE: delete a given item
  no params required


---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


## Install

    $ git clone https://github.com/francinelucca/shopAPI/
    $ cd shopAPI
    $ npm install

## Configure app

Open 'src\db.js` then edit it with your settings. You will need:

- A running instance of mongoDb and a dedicated database to run the project;
- substitute 'mongoURI' with local uri to database;

## Running the project

    $ npm start
