package main

import (
	"fmt"
	"good-reads/controller"
	"good-reads/model"

	"net/http"
)

func main() {

	model.Connect()
	fmt.Println("Connected to database")
	r := controller.Starter()

	fmt.Println("Server started")
	http.ListenAndServe("localhost:8080", r)
}
