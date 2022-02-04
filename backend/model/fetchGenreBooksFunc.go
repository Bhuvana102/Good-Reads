package model

import "good-reads/views"

func FetchGenreBooksFunc(gid string) []views.Book {
	var books []views.Book
	DB.Where("genre_id", gid).Find(&books)
	return books
}
