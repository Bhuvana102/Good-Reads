package main

import (
	"fmt"
	"good-reads/controller"
	"good-reads/model"

	"github.com/gorilla/mux"

	"net/http"
)

func main() {

	model.Connect()
	fmt.Println("Connected to database")
	r := mux.NewRouter()

	controller.ApiHandler(r)

	fmt.Println("Server started")
	http.ListenAndServe("localhost:8080", r)
}
