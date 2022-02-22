package main

import (
	"fmt"
	"good-reads/controller"
	"good-reads/model"

	"net/http"

	"github.com/gorilla/mux"
)

func main() {

	model.Connect()
	fmt.Println("Connected to database")
	r := controller.Starter()

	fmt.Println("Server started")
	r.Use(mux.CORSMethodMiddleware(r))
	http.ListenAndServe(":8080", r)
}
