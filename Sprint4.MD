# GoodReads - Sprint4 Closure

Run the below command to run the WebApp Server
>`ng serve`

# Development server
Run the below commands to start the development server.
> `cd WebApp`

> `ng serve`

> `cd ../backend`

> `go run main.go `

First the localhost:4200 will start upon ng serve and then a new tab for cypress test will also open upon running the cypress related commands.

# Project Boards
> Sprint 1 - https://github.com/Bhuvana102/Good-Reads/projects/2

> Sprint 2 - https://github.com/Bhuvana102/Good-Reads/projects/3

> Sprint 3 - https://github.com/Bhuvana102/Good-Reads/projects/4

> Sprint 4 - https://github.com/Bhuvana102/Good-Reads/projects/5

# Team
## Front-End
  1. Manish Kumar Reddy Gangula
  2. Vaishali Unnikrishnan Latha

## Back-End
  1. Srikar Chowdary Kantamani
  2. Bhuvana Venkatesh



# Sprint 4 Demo Run

Run Backend :
Main :
![Running-the-code](https://user-images.githubusercontent.com/97717233/152629613-ff8847d5-6d0e-4dfb-ae27-daa01fbb36d6.gif)

Test-Cases :
![all-test-cases](https://user-images.githubusercontent.com/97717233/164354069-93c16beb-bcce-4d12-8def-674c704da652.gif)

Run FrontEnd :


Run FrontEndTestScripts : `npx cypress open' or 'npm run e2e`

Run BackEndTestSrcipts : `go test -v`


# Backend
API :: 
The below API's are used to fetch the details from database and return it to the calling API so that data in FRONTEND can be rendered based on the data stored in BACKEND
1. API to Fetch the Top 5 books for a Given Genre
2. API to Register User
3. API to authenticate a user login
4. API to add a book to users wishlists
5.. Unit Test Cases for APIs


The Postman commands and sample examples can be viewed here :
https://documenter.getpostman.com/view/19432934/UVeGqRHi  

## 1. API to Fetch the Top 5 books for a Given Genre
The /fetchTopBooksForGenre?id=5 API is used to fetch the top 5 Books for any given Genre ID

Sample API usage and Output
http://localhost:8080/api/fetchTopBooksForGenre?id=5

![Screenshot (46)](https://user-images.githubusercontent.com/97717233/164354684-24c9ba6c-e80e-41c0-929e-3ba46cd3cc0e.png)

![Postman 2022-04-20 21-37-43](https://user-images.githubusercontent.com/97717233/164355061-94613c3e-c498-4f31-9670-fe8e87ad50ec.gif)


## 2. API to Register User
This API is to register a new user account.

Sample API usage and output
http://localhost:8080/api/signUp

![image](https://user-images.githubusercontent.com/61014960/164603971-74292291-a612-446b-9b33-ee99934b0977.png)

## 3. API to authenticate User login

This api will authenticate users email and password and return a json body that contains the status(true / false).

Sample API usage and output
http://localhost:8080/api/login

![image](https://user-images.githubusercontent.com/61014960/164604362-c1e1462c-a002-4592-b14d-be2a20b0669b.png)



## 3. Unit Test Cases for APIs

> `go test -v`

We have given existing data in Database to test if the APIs are returning the expected data as per the request.

![Screenshot (44)](https://user-images.githubusercontent.com/97717233/164353099-9af4e147-74d0-4310-a619-b321ea5f966a.png)


# Front End

- The below modules are created as part of Sprint 3 - UI in Good Reads Web Application
1. Added my books page.
2. Implemented user authentication.
4. Changed ratings to average ratings.
5. Added dynamic updating feature for reviews.
 
## 1. Added my books page.

This page will list all the books a user has added to his wish-list.

<img width="1440" alt="Screenshot 2022-04-22 at 2 56 46 AM" src="https://user-images.githubusercontent.com/92141914/164620855-994ba277-e3c6-45d2-a2bb-4a3ee239c49d.png">


## 2. Implemented user authentication

Created an interface where users can register themselves to the application. 
The registered user can access their respective account with their email id and password. Passwords are end-to-end encrypted.

Sample Image:
1)Registration
![Registration](https://user-images.githubusercontent.com/92141914/164620973-93c77d05-1133-4b99-8cb0-75889510863b.png)

2)Login

<img width="1440" alt="Screenshot 2022-04-22 at 2 59 43 AM" src="https://user-images.githubusercontent.com/92141914/164621563-0cd03ec8-13c8-4418-baaf-47bd641da71e.png">


## 3. Changed ratings to average ratings.

Based on the user input reviews and ratings, we will compute the average ratings for a particular book and map it to the corresponding book upon selection by user.

Sample Image :

<img width="1440" alt="Screenshot 2022-04-22 at 3 00 12 AM" src="https://user-images.githubusercontent.com/92141914/164621742-825ecd10-da8f-4440-8a6e-8482550ae423.png">


## 4.Added dynamic updating feature for reviews.

We updated the review posting feature to take him immediate effect and display reviews as and when it is posted.

Sample Demo:


## 5.Cypress
Added cypress test case for the mybooks page.

Sample Demo:

https://user-images.githubusercontent.com/92141914/164872721-7378e095-754f-41b2-8579-1d30f9ad4ce5.mp4





