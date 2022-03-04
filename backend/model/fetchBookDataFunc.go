package model

import "good-reads/views"

func FetchBookDataFunc(bId string) views.Book {
	var book views.Book
	DB.Where("id", bId).Find(&book)
	return book
}
