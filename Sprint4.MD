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
The /fetchTopBooksForGenre?id=5 API is used to fetch the top 5 Genres

Sample API usage and Output

http://localhost:8080/api/getBook?id=5



## 2. API to post book reviews

Method Type: POST
API will receive a POST request from the body in JSON format. This JSON is Decoded to a struct type Reviews and insert the values into database books.db books table as per the user's request.
1. It will insert the review datas to Review table as and when any user writes Reviews about the book.
2. It also calculates the review and ratin g count and increments it in the Book Table.

Sample API usage via POSTMAN

![Screenshot (40)](https://user-images.githubusercontent.com/97717233/161360105-52ca4686-feb0-4eef-80f7-587788e81411.png)


After the insertion API will return values in JSON format of the information inserted in DB and the ID generated for the book review.

## 3. API to fetch book reviews

Method Type: GET
API will receive a GET request from the body in JSON format. This JSON is Decoded to a struct type Review and insert the values into database books.db books table as per the user's request.
This API returns top 10 the reviews for that particular BookID.
And based on the Review-Index, it returns the next 10 revies starting from index number Review-index

Sample API usage via POSTMAN

![Screenshot (41)](https://user-images.githubusercontent.com/97717233/161360074-5b062a90-e60d-470e-9c29-e47903eb88a8.png)


## 4. API to fetch ratings of a book by ID

Method Type: GET
API will receive a GET request from the body in JSON format. This JSON is Decoded to a struct type Book and insert the values into database books.db books table as per the user's request.

Sample API usage via POSTMAN


## 5. Unit Test Cases for APIs

> `go test -v`

We have given existing data in Database to test if the APIs are returning the expected data as per the request.

![Screenshot (44)](https://user-images.githubusercontent.com/97717233/164353099-9af4e147-74d0-4310-a619-b321ea5f966a.png)



