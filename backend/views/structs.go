package views

import (
	"time"
)

type Genres struct {
	Id          uint   `gorm:"primaryKey"`
	Name        string `JSON:"name"`
	Description string `JSON:"description"`
	Count       int    `JSON:"count"`
	CreatedAt   time.Time
	UpdatedAt   time.Time
}

type Book struct {
	ID            uint   `gorm:"primaryKey"`
	Name          string `JSON:"name"`
	Description   string `JSON:"description"`
	AuthorID      uint   `JSON:"authorid"`
	GenreId       int    `JSON:"genreid"`
	PublisherName string `JSON:"publishername"`
	ImageName     string `JSON:"imagename"`
	CreatedAt     time.Time
	UpdatedAt     time.Time
}
