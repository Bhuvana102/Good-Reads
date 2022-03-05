# GoodReads - Sprint2 Closure

Run the below command to run the WebApp Server
>`ng serve --proxy-config proxy.config.json`

# Development server
Run the below commands to start the development server.
> `cd WebApp`

> `ng serve --proxy-config proxy.config.json`

> `cd ../backend`

> `go run main.go `

First the localhost:4200 will start upon ng serve and then a new tab for cypress test will also open upon running the cypress related commands.

# Sprint 2 Demo Run

Run Backend :
![Running-the-code](https://user-images.githubusercontent.com/97717233/152629613-ff8847d5-6d0e-4dfb-ae27-daa01fbb36d6.gif)

Run FrontEnd :
![Running-the-code(1)](https://user-images.githubusercontent.com/97717233/152629631-86175819-b4a1-435c-b726-158fa617fcfd.gif)

Run FrontEndTestScripts :


Run BackEndTestSrcipts :


# Backend
API :: 
The below API's are used to fetch the details from database and return it to the calling API so that data in FRONTEND can be rendered based on the data stored in BACKEND
1. Implemented CORS for Front End API Access
2. API to return Book Details by ID
3. API to post book reviews
4. Unit Test Cases for APIs


The Postman commands and sample examples can be viewed here : https://documenter.getpostman.com/view/19432934/UVeGqRHi  

## 1. Implemented CORS for Front End API Access

We implemented Cross-Origin Resource Sharing (CORS) to the backend application to serve api requests coming from Frontend server.

###Implementation

Add the following header to Handler Func of APIs

> w.Header().Set("Access-Control-Allow-Origin", "*")


## 2. API to return Book Details by ID
The /api/getBook API is used to fetch a particular Book by its ID as requested from the frontend Webpage.

Sample API usage and Output

http://localhost:8080/api/getBook?id=5

![image](https://user-images.githubusercontent.com/61014960/156866162-7c2cec5c-28df-49c1-83e3-1813902854d3.png)


## 3. API to post book reviews

Method Type: POST
API will receive a POST request from the body in JSON format. This JSON is Decoded to a struct type Book and insert the values into database books.db books table as per the user's request.

Sample API usage via POSTMAN

![image](https://user-images.githubusercontent.com/61014960/152491281-6dc95cd0-635e-4994-87f8-e0f8d6e4a651.png)

After the insertion API will return values in JSON format of the information inserted in DB and the ID generated for the book.

Sample Demo :
![Postman(2)](https://user-images.githubusercontent.com/97717233/152629596-b53a92a1-f9fe-413b-a7f7-c8f774fc28db.gif)


## 4. Unit Test Cases for APIs

> `go test -v`

We have given existing data in Database to test if the APIs are returning the expected data as per the request.

![image](https://user-images.githubusercontent.com/61014960/156866328-a08ede8b-a182-4367-9cd9-8aa97f74ff03.png)

# Front End

> `npx cypress open' or 'npm run e2e`

- The below modules are created as part of Sprint 2 - UI in Good Reads Web Application
1. Upgraded Login Page to Be user-friendly
2. Resized Home Page Slider for better UI Experience
3. Hover Feature on Genre listing
4. Logout Feature from Frontend
5. Added tooltip feature in genre page
6. Cypress Unit Test for Login Feature
7. Cypress Integration Test for Genre LIst 
 
## 1. Upgraded Login Page to Be user-friendly
###  https://localhost:4200/login

On top of the existing login page UI, a register feature UI is added to allow user registration and user management to be taken up in the upcoming sprints. We improved on the user experience and usability of the login page. 

Sample Images:

![Login](https://user-images.githubusercontent.com/92141914/156864595-97b3f14e-43c7-4b88-a94c-5834bbd2d66c.png)
![Register](https://user-images.githubusercontent.com/92141914/156864599-b485e0e3-c51b-418e-9b52-087335ccdbc1.png)


## 2. Resized Home Page Slider for better UI Experience

In the previous sprint, we noticed a user experience issue in the home page slider where the images are oversized with respect to the form factor ratio. We resolved this to maintain the form factor intact.

Sample Image:
![home](https://user-images.githubusercontent.com/92141914/156864663-48193b77-e99f-4001-9074-36d043222354.png)


## 3. Hover Feature on Genre listing

We extended the Genre listing to include the list on hovering. Hovering browse now lists the genres directly instead of a click event

Sample Demo :

![trim 4FB88363-547B-4AC7-BF6B-F6F904D720DE](https://user-images.githubusercontent.com/92141914/156863955-22b9c166-e0a1-49d3-a0e5-1ba08d41eb4a.GIF)

## 4. Logout Feature from Frontend

Implemented a new feature to logout the application from frontend perspective. Once the user logs out, the user would be prompted to re-login

![Logout](https://user-images.githubusercontent.com/41356950/156865076-c0a2a5e4-c78f-4e80-96d4-51648906a841.png)


![Logged Out](https://user-images.githubusercontent.com/41356950/156865079-cf44a97f-8a39-41f3-a7d2-fd2fa134ae76.png)


## 5. Added tooltip feature in genre page

Developed a new tooltip feature which will get displayed upon hovering over every book in the genre Page called 'Horror'. Althought dynamically implemented for 
every genre, for now you wouldn't be able to see this feature on other genre pages as we have not dynamically included other genres to reflect different list of 
books for genre. Once we add more books for other pages, you will also be able to see the same tooltip appear on every book under every genre.


![tooltip](https://user-images.githubusercontent.com/41356950/156865157-9989c27a-db1b-4ddc-89f2-e64b8ec816f4.png)



## 6. Cypress Unit Test for Login Feature

Installed the Cypress framework and added the login.specs.ts file to perform unit testing for the login feature we have implemented as part of our website.
We have implemented the following 5 test cases as part of unit testing.
1) Logging in without entering any credentials.
2) Logging in with login id and no password.
3) Logging in without login id and just password.
4) Logging in with wrong login id and password.
5) Logging in with the right credentials.

![Cypress Unit Test](https://user-images.githubusercontent.com/41356950/156865229-e4616ee9-6ac2-40be-9acb-d81ef16e85cb.png)


## 7. Cypress Integration Test for Genre List

As mentioned above, we have also used Cypress to show that the integration testing which is basically to show that both frontend and backend has been integrated
well and as part of this testing we have tried to implement the following test cases
1) To login and dynamically retrieve the genre 'Horror'.
2) To dynamically retrieve the genre 'Thriller'.
3) To select the genre 'Romance' dynamically.
4) To select the genre 'Classics'.
5) To dynamically select the genre 'Cook-books'.

The test cases above are only to show that the unit and integration works. More test cases will be added upon addition of more features.


![Integration Test](https://user-images.githubusercontent.com/41356950/156865234-091cc8d9-078d-407c-a232-3bcf45e204dd.png)

