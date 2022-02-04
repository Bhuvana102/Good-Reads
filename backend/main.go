package main

import (
	"fmt"
	"good-reads/controller"
	"good-reads/model"
	"log"
	"net/http"
)

func main() {

	r := controller.Starter()
	model.Connect()
	fmt.Println("Connected to database")
	model.FetchGenres()
	fmt.Println("Server started")
	log.Fatal(http.ListenAndServe("localhost:8080", r)) //starting a server on port 8080
	// defer db.Close

}
