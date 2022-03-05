# GoodReads - Sprint1 Closure

Run the below command to run the WebApp Server
>`ng serve --proxy-config proxy.config.json`

# Development server
Run the below commands to start the development server.
> `cd WebApp`

> `ng serve --proxy-config proxy.config.json`

> `cd ../backend`

> `go run main.go `

> 'npx cypress open' or 'npm run e2e'

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

This getGenres API is used to fetch all the Genres Present in The Genres Table from the Database.

Sample API and Sample Output
![Sample GetGenre API](https://github.com/Bhuvana102/Good-Reads/blob/main/Wiki-Images/localhost-GetGenre.png)

Sample Output :
![Sample Output](https://github.com/Bhuvana102/Good-Reads/blob/main/Wiki-Images/GetGenerate-Sample-Response.png)

Sample Demo :
![Postman](https://user-images.githubusercontent.com/97717233/152629582-80d900f1-09ca-439f-8458-c7ebf065b1ed.gif)


## 2. API to return Book Details by ID
The getGenres/{id} API is used to fetch a particular Genre from the database based on the Genre ID requested from the frontend Webpage.

Sample API and Sample Output
![Get a Particular Genre](https://github.com/Bhuvana102/Good-Reads/blob/main/Wiki-Images/GetParticularGenre.png)

Sample Demo :
![Postman(1)](https://user-images.githubusercontent.com/97717233/152629591-0bdd823a-0f59-4bee-a344-6579229771b8.gif)


## 3. API to post book reviews

Method Type: POST
API will receive a POST request from the body in JSON format. This JSON is Decoded to a struct type Book and insert the values into database books.db books table as per the user's request.

Sample API usage via POSTMAN

![image](https://user-images.githubusercontent.com/61014960/152491281-6dc95cd0-635e-4994-87f8-e0f8d6e4a651.png)

After the insertion API will return values in JSON format of the information inserted in DB and the ID generated for the book.

Sample Demo :
![Postman(2)](https://user-images.githubusercontent.com/97717233/152629596-b53a92a1-f9fe-413b-a7f7-c8f774fc28db.gif)


## 4. Unit Test Cases for APIs

API will receive a request with Genre ID query in URL string and returns a array of all the books in DB tagged with the requested Genre ID in JSON format.

Sample API usage via POSTMAN

![image](https://user-images.githubusercontent.com/61014960/152610415-8d048b20-9943-4b76-a936-439fdee46489.png)

Sample Demo :
![Postman(3)](https://user-images.githubusercontent.com/97717233/152629602-5134250b-97cc-4688-8752-a18f63b72759.gif)


# Front End

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


## 2. Resized Home Page Slider for better UI Experience


## 3. Hover Feature on Genre listing


## 4. Logout Feature from Frontend


## 5. Added tooltip feature in genre page


## 6. Cypress Unit Test for Login Feature


## 7. Cypress Integration Test for Genre LIst




