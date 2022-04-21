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



# Sprint 2 Demo Run

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
2.
3.. Unit Test Cases for APIs


The Postman commands and sample examples can be viewed here :
https://documenter.getpostman.com/view/19432934/UVeGqRHi  

## 1. API to Fetch the Top 5 books for a Given Genre
The /fetchTopBooksForGenre?id=5 API is used to fetch the top 5 Books for any given Genre ID

Sample API usage and Output
http://localhost:8080/api/fetchTopBooksForGenre?id=5

![Screenshot (46)](https://user-images.githubusercontent.com/97717233/164354684-24c9ba6c-e80e-41c0-929e-3ba46cd3cc0e.png)



## 2. API to post book reviews


## 3. Unit Test Cases for APIs

> `go test -v`

We have given existing data in Database to test if the APIs are returning the expected data as per the request.

![Screenshot (44)](https://user-images.githubusercontent.com/97717233/164353099-9af4e147-74d0-4310-a619-b321ea5f966a.png)



