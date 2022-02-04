package main

import (
	"fmt"
	"good-reads/model"
)

func main() {

	model.Connect()
	fmt.Println("Connected to database")
	model.FetchGenres()
	// defer db.Close

}
