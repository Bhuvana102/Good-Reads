package model

import (
	"fmt"
	"good-reads/views"

	"gorm.io/gorm"
)

func InsertBookFunc(book views.Book) error {
	book_insert := views.Book{Name: book.Name, Description: book.Description, AuthorName: book.AuthorName, GenreId: book.GenreId, PublisherName: book.PublisherName, ImageName: book.ImageName}
	DB.Select("name", "description", "author_name", "genre_id", "publisher_name", "image_name").Create(&book_insert)
	fmt.Println("Data inserted to DB with ID : ", book_insert.ID)
	DB.Model(views.Genres{}).Where("genre_id = ?", book.GenreId).UpdateColumn("count", gorm.Expr("count + ?", 1))
	return nil
}
