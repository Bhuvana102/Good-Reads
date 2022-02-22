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
	AuthorName    string `JSON:"authorname"`
	GenreId       int    `JSON:"genreid"`
	PublisherName string `JSON:"publishername"`
	ImageName     string `JSON:"imagename"`
	PublishedYear string `JSON:"publishedyear"`
	AvgRating     int    `JSON:"avg_rating"`
	NoOfReviews   int    `JSON:"no_of_reviews"`
	NoOfRatings   int    `JSON:"no_of_ratings"`
	CreatedAt     time.Time
	UpdatedAt     time.Time
}
