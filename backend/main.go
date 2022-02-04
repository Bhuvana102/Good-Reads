package main

import (
	"fmt"
	"good-reads/model"
)

func main() {

	model.Connect()
	// defer db.Close
	fmt.Println("Connected to database")
}
