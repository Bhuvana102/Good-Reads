# API
The below API's are used to fetch the details from database and return it to the calling API so that data in FRONTEND can be rendered based on the data stored in BACKEND
1. Get Genre API
2. Get Particular Genre API
3. Get Books based on Genre
4. Insert Books into Database
5. API to return Book Details by ID
6. API to post book reviews
7. API to fetch book reviews
8. API to fetch ratings of a book by ID
9. API to Fetch the Top 5 books for a Given Genre
10. API to Register User
11. API to authenticate a user login
12. API to add a book to users wishlists

The Postman commands and sample examples can be viewed here : https://documenter.getpostman.com/view/19432934/UVeGqRHi

## 1. Get Genre API
#### http://localhost:8080/api/getGenres

Method : GET

This getGenres API is used to fetch all the Genres Present in The Genres Table from the Database.

Sample API and Sample Output
![Sample GetGenre API](https://github.com/Bhuvana102/Good-Reads/blob/main/Wiki-Images/localhost-GetGenre.png)

Sample Output :
![Sample Output](https://github.com/Bhuvana102/Good-Reads/blob/main/Wiki-Images/GetGenerate-Sample-Response.png)

Sample Demo :
![Postman](https://user-images.githubusercontent.com/97717233/152629582-80d900f1-09ca-439f-8458-c7ebf065b1ed.gif)

## 2. Get Particular Genre API
#### localhost:8080/api/getGenres/5

Method : GET
The getGenres/{id} API is used to fetch a particular Genre from the database based on the Genre ID requested from the frontend Webpage.

Sample API and Sample Output
![Get a Particular Genre](https://github.com/Bhuvana102/Good-Reads/blob/main/Wiki-Images/GetParticularGenre.png)

Sample Demo :
![Postman(1)](https://user-images.githubusercontent.com/97717233/152629591-0bdd823a-0f59-4bee-a344-6579229771b8.gif)


## 3. API to Insert books into Database
#### http://localhost:8080/api/insertBook

Method Type: POST
API will receive a POST request from the body in JSON format. This JSON is Decoded to a struct type Book and insert the values into database books.db books table as per the user's request.

Sample API usage via POSTMAN

![image](https://user-images.githubusercontent.com/61014960/152491281-6dc95cd0-635e-4994-87f8-e0f8d6e4a651.png)

After the insertion API will return values in JSON format of the information inserted in DB and the ID generated for the book.

Sample Demo :
![Postman(2)](https://user-images.githubusercontent.com/97717233/152629596-b53a92a1-f9fe-413b-a7f7-c8f774fc28db.gif)


## 4. API to fetch Books from the Database tagged with requested GenreID
#### http://localhost:8080/api/fetchGenreBooks?id=5

Method : GET
API will receive a request with Genre ID query in URL string and returns a array of all the books in DB tagged with the requested Genre ID in JSON format.

Sample API usage via POSTMAN

![image](https://user-images.githubusercontent.com/61014960/152610415-8d048b20-9943-4b76-a936-439fdee46489.png)

Sample Demo :
![Postman(3)](https://user-images.githubusercontent.com/97717233/152629602-5134250b-97cc-4688-8752-a18f63b72759.gif)

## 5. API to return Book Details by ID
#### http://localhost:8080/api/getBook?id=5

Method : GET
The /api/getBook API is used to fetch a particular Book by its ID as requested from the frontend Webpage.

Sample API usage and Output

![image](https://user-images.githubusercontent.com/61014960/156866162-7c2cec5c-28df-49c1-83e3-1813902854d3.png)

## 6. API to post book reviews
#### http://localhost:8080/api/addReviews

Method Type: POST
API will receive a POST request from the body in JSON format. This JSON is Decoded to a struct type Reviews and insert the values into database books.db books table as per the user's request.
1. It will insert the review datas to Review table as and when any user writes Reviews about the book.
2. It also calculates the review and ratin g count and increments it in the Book Table.

Sample API usage via POSTMAN

![Screenshot (40)](https://user-images.githubusercontent.com/97717233/161360105-52ca4686-feb0-4eef-80f7-587788e81411.png)


After the insertion API will return values in JSON format of the information inserted in DB and the ID generated for the book review.

## 7. API to fetch book reviews
#### http://localhost:8080/api/retrieveReviews?rindex=9&BookId=6

Method Type: GET
API will receive a GET request from the body in JSON format. This JSON is Decoded to a struct type Review and insert the values into database books.db books table as per the user's request.
This API returns top 10 the reviews for that particular BookID.
And based on the Review-Index, it returns the next 10 revies starting from index number Review-index

Sample API usage via POSTMAN

![Screenshot (41)](https://user-images.githubusercontent.com/97717233/161360074-5b062a90-e60d-470e-9c29-e47903eb88a8.png)

## 8. API to fetch ratings of a book by ID
#### http://localhost:8080/api/fetchBookRatings?id=2

Method Type: GET
API will receive a GET request from the body in JSON format. This JSON is Decoded to a struct type Book and insert the values into database books.db books table as per the user's request.

Sample API usage via POSTMAN
![image](https://user-images.githubusercontent.com/61014960/164803646-53a64cab-bf75-4f0f-8470-f8f14dc5f4ae.png)

## 9. API to Fetch the Top 5 books for a Given Genre
#### http://localhost:8080/api/fetchTopBooksForGenre?id=5

Method Type: GET
The /fetchTopBooksForGenre?id=5 API is used to fetch the top 5 Books for any given Genre ID

Sample API usage and Output

![Screenshot (46)](https://user-images.githubusercontent.com/97717233/164354684-24c9ba6c-e80e-41c0-929e-3ba46cd3cc0e.png)

![Postman 2022-04-20 21-37-43](https://user-images.githubusercontent.com/97717233/164355061-94613c3e-c498-4f31-9670-fe8e87ad50ec.gif)

## 10. API to Register User
#### http://localhost:8080/api/signUp

Method Type : POST
This API is to register a new user account.

Sample API usage and output

![image](https://user-images.githubusercontent.com/61014960/164603971-74292291-a612-446b-9b33-ee99934b0977.png)

## 11. API to authenticate User login
#### http://localhost:8080/api/login

Method Type : POST
This api will authenticate users email and password and return a json body that contains the status(true / false).

Sample API usage and output

![image](https://user-images.githubusercontent.com/61014960/164604362-c1e1462c-a002-4592-b14d-be2a20b0669b.png)

## 12. API to add a book to users wishlists
#### http://localhost:8080/api/addMyBooks

Method Type : POST

This api will associate book ids when a user adds a book to his/her wishlist based on users id.

Sample API usage and output 
![image](https://user-images.githubusercontent.com/61014960/164808225-6fbc42b3-c229-4b37-8152-fca7d60caadb.png)

