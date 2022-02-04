package model

import (
	"fmt"
	"good-reads/views"
	"log"
)

func FetchGenres() {

	log.Println("fetching genres ...")

	var genres = []views.Genres{
		{Id: 1, Name: "Comedy", Description: "Comedy", Count: 5},
		{Id: 2, Name: "Romance", Description: "Romance", Count: 8},
		{Id: 3, Name: "Mystery", Description: "Mystery", Count: 10},
		{Id: 4, Name: "Thriller", Description: "Thriller", Count: 6},
		{Id: 5, Name: "Horror", Description: "Horror", Count: 5},
		{Id: 6, Name: "Suspense", Description: "Suspense", Count: 12}}

	DB.Create(&genres)

	for _, genre := range genres {
		fmt.Println(genre.Id, genre.Name)
	}

}
