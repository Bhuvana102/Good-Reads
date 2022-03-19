package model

import (
	"encoding/json"
	"good-reads/views"
	"log"
	"strconv"
)

func FetchGenre(gid string) []byte {

	// var genre views.Genres
	// DB.Where("id", gid).Find(&genre)
	// body, _ := json.Marshal(genre)
	// return body

	Id, _ := strconv.Atoi(gid)

	log.Println("fetching genres for id num - ", gid)

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
