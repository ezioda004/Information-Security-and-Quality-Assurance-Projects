# Metric-Imperial Converter
A fullstack SPA made with React, React-Router, Express, Node which converts Metric units to Imperial and vice versa.

## Table of Contents

- [Installation](#installation)
- [User Stories](#UserStories)
- [Example Usage](#ExampleUsage)
- [Example Output](#ExampleOutput)
- [Live Preview](#LivePreview)


## Installation
### Quick Setup

#### Production

Run the following command to start the production server
`npm start`
Then head to `http://localhost:1337`

#### Development 

* To start backend server
This webapp uses nodemon, so make sure you have that installed, if not then run this command:
```
npm install -g nodemon
```

After installing nodemon, run these commands:
```
npm install
npm server
```
In the terminal it should say which port the server it's running on, if it's local server then you can head to `localhost:1337`

* To start client server
`cd` to `client` folder and run `npm start`, it'll start up the webpack server and open up the page on `localhost:3000`. There is proxy setup so any requests made will be redirected to the backend server.

## User Stories:
* App prevents the client from trying to guess(sniff) the MIME type.
* App prevents cross-site scripting (XSS) attacks.
* User can **GET** `/api/convert` with a singler parameter containing an accepted number and unit and have it converted.
* User can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
* User can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
* User can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
* If the unit of measurement is invalid, returned will be 'invalid unit'.
* If the number is invalid, returned with will 'invalid number'.
* If both are invalid, return will be 'invalid number and unit'.
* User can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
* App return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format {initNum} {initial_Units} converts to {returnNum} {return_Units} with the result rounded to 5 decimals.

## Example Usage:
* /api/convert?input=4gal
* /api/convert?input=5.4/3lbs
* /api/convert?input=1

## Example Output:
`{initNum: 3.1, initUnit: 'mi', returnNum: 5, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}`

## Live Preview:
The live preview of the SPA can be found here https://metric-imperial-convertor.herokuapp.com/