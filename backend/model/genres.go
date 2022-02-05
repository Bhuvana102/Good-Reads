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

	var genre views.Genres

	DB.First(&genre, "id = ?", Id)

	body, _ := json.Marshal(genre)

	return body

}

func FetchAllGenre() []byte {

	log.Println("fetching genres ...")

	var genre []views.Genres

	DB.Find(&genre)

	body, _ := json.Marshal(genre)

	return body

}
