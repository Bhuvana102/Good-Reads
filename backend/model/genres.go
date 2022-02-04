package model

import (
	"encoding/json"
	"good-reads/views"
	"log"
	"strconv"
)

func FetchGenre(id string) []byte {

	Id, _ := strconv.Atoi(id)

	log.Println("fetching genres ...")

	/* var genres = []views.Genres{
		{Id: 1, Name: "Comedy", Description: "Comedy", Count: 5},
		{Id: 2, Name: "Romance", Description: "Romance", Count: 8},
		{Id: 3, Name: "Mystery", Description: "Mystery", Count: 10},
		{Id: 4, Name: "Thriller", Description: "Thriller", Count: 6},
		{Id: 5, Name: "Horror", Description: "Horror", Count: 5},
		{Id: 6, Name: "Suspense", Description: "Suspense", Count: 12}}

	DB.Create(&genres)

	for _, genre := range genres {
		fmt.Println(genre.Id, genre.Name)
	} */

	var genre views.Genres

	DB.First(&genre, "id = ?", Id)

	body, _ := json.Marshal(genre)

	return body

	/* data := views.Genres{
		Id: http.StatusOK,
		Name: "pong",
		Description: "",
		Count : ""
	} */
}

func FetchAllGenre() []byte {

	log.Println("fetching genres ...")

	var genre []views.Genres

	DB.Find(&genre)

	body, _ := json.Marshal(genre)

	return body

}
