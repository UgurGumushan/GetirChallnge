# Getir Challenge

This project delivers the requirements in the Getir Challenge file, provided by the Getir HR. The file is not published in a public repository.

Author: Uğur Gümüşhan

Date Posted: 22.06.2020

## Prerequisites
1. Node.js v13.9.0
2. NPM 6.14.4
3. Jest 26.0.1

##Cloning the Project
1. Create a folder in your computer for the Project
2. Go to the project directory in the terminal
3. Run "git clone https://github.com/UgurGumushan/GetirChallnge.git"

## Runing The project:

1. Go to the project folder in the terminal
2. Run "node index.js"

## Running Tests
1. Go to the project directory in the terminal
2. Run "npm run test"

## Sending requests to the server
1. Choose a tool to send requests: (curl, Postman...)
2. Enter the URI: "http://getir-challenge-ugur-gumushan.herokuapp.com". to send requests to the local host if you ran the code on your computer, use "http://localhost:3000"
3. Choose "POST" request
4. Choose x-www-form-urlencoded for encoding
5. Tested values are as follows:
`startDate=1980-12-31
endDate=2020-12-31
minCount=0
maxCount=9999`

### cURL request example
curl --location --request POST 'http://getir-challenge-ugur-gumushan.herokuapp.com' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'startDate=1980-12-31' \
--data-urlencode 'endDate=2020-12-31' \
--data-urlencode 'minCount=0' \
--data-urlencode 'maxCount=9999'