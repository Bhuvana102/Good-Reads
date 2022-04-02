# GoodReads - Sprint3 Closure

Run the below command to run the WebApp Server
>`ng serve`

# Development server
Run the below commands to start the development server.
> `cd WebApp`

> `ng serve`

> `cd ../backend`

> `go run main.go `

First the localhost:4200 will start upon ng serve and then a new tab for cypress test will also open upon running the cypress related commands.

# Sprint 2 Demo Run

Run Backend :
![Running-the-code](https://user-images.githubusercontent.com/97717233/152629613-ff8847d5-6d0e-4dfb-ae27-daa01fbb36d6.gif)

Run FrontEnd :
![Running-the-code(1)](https://user-images.githubusercontent.com/97717233/152629631-86175819-b4a1-435c-b726-158fa617fcfd.gif)

Run FrontEndTestScripts : `npx cypress open' or 'npm run e2e`

Run BackEndTestSrcipts : `go test -v`


# Backend
API :: 
The below API's are used to fetch the details from database and return it to the calling API so that data in FRONTEND can be rendered based on the data stored in BACKEND
1. API to return Book Details by ID
2. API to post book reviews
3. API to fetch book reviews
4. API to add book reviews
5. API to fetch ratings of a book by ID
6. Unit Test Cases for APIs


The Postman commands and sample examples can be viewed here : https://documenter.getpostman.com/view/19432934/UVeGqRHi  

## 1. API to return Book Details by ID
The /api/getBook API is used to fetch a particular Book by its ID as requested from the frontend Webpage.

Sample API usage and Output

http://localhost:8080/api/getBook?id=5

![image](https://user-images.githubusercontent.com/61014960/156866162-7c2cec5c-28df-49c1-83e3-1813902854d3.png)


## 2. API to post book reviews

Method Type: POST
API will receive a POST request from the body in JSON format. This JSON is Decoded to a struct type Book and insert the values into database books.db books table as per the user's request.

Sample API usage via POSTMAN



After the insertion API will return values in JSON format of the information inserted in DB and the ID generated for the book review.

## 3. API to fetch book reviews

Method Type: GET
API will receive a GET request from the body in JSON format. This JSON is Decoded to a struct type Book and insert the values into database books.db books table as per the user's request.

Sample API usage via POSTMAN


## 4. API to add book reviews

Method Type: GET
API will receive a GET request from the body in JSON format. This JSON is Decoded to a struct type Book and insert the values into database books.db books table as per the user's request.

Sample API usage via POSTMAN

## 5. API to fetch ratings of a book by ID

Method Type: GET
API will receive a GET request from the body in JSON format. This JSON is Decoded to a struct type Book and insert the values into database books.db books table as per the user's request.

Sample API usage via POSTMAN


## 6. Unit Test Cases for APIs

> `go test -v`

We have given existing data in Database to test if the APIs are returning the expected data as per the request.

![image](https://user-images.githubusercontent.com/61014960/156866328-a08ede8b-a182-4367-9cd9-8aa97f74ff03.png)

# Front End

- The below modules are created as part of Sprint 3 - UI in Good Reads Web Application
1. Added book details page.
2. Added book attributes component.
3. Added book reviews component.
4. Cypress Integration Test for book details feature.
 
## 1. Added book details page
###  https://localhost:4200/book-details/:id

Upon the user clicking a book from one of the genre pages, we will be redirected to a details page which will display the individual books components.

Sample Images:




## 2. Added book attributes component

This particular component is integrated to the book details page which is responsible for displaying the books different attributes like the title of the book,
author name, publisher name, description of the book, etc.

Sample Image:



## 3. Added book reviews component

The book details page is further extended to include displaying the reviews and ratings whenever a user clicks the book name from the genre page.

Sample Demo :


## 4. Cypress Integration Test for book details feature

Performed unit testing on the book details component.



