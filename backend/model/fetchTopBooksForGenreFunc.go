package model

import (
	"good-reads/views"
)

func FetchTopBooksForGenreHandler(genreid string, limit int) []views.Book {
	var books []views.Book
	DB.Where("genre_id = " + genreid).Order("avg_rating desc").Limit(limit).Find(&books)
	return books
}
