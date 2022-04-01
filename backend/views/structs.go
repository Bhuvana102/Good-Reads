package views

import (
	"time"
)

type Genres struct {
	Id          uint   `gorm:"primaryKey"`
	Name        string `JSON:"name"`
	Description string `JSON:"description"`
	Count       int32  `JSON:"count"`
	CreatedAt   time.Time
	UpdatedAt   time.Time
}

type Book struct {
	ID            uint    `gorm:"primaryKey"`
	Name          string  `JSON:"name"`
	Description   string  `JSON:"description"`
	AuthorName    string  `JSON:"authorname"`
	GenreId       int32   `JSON:"genreid"`
	PublisherName string  `JSON:"publishername"`
	ImageName     string  `JSON:"imagename"`
	PublishedYear string  `JSON:"publishedyear"`
	AvgRating     float32 `JSON:"avg_rating"`
	NoOfRatings   int32   `JSON:"no_of_ratings"`
	NoOfReviews   int32   `JSON:"no_of_reviews"`
	CreatedAt     time.Time
	UpdatedAt     time.Time
}

type Review struct {
	Review_Num    uint   `gorm:"primaryKey"`
	Book_ID       string `JSON:"Book_ID"`
	User_ID       string `JSON:"User_ID"`
	Rating        string `JSON:"Rating"`
	Review        string `JSON:"Review"`
	Reviewed_Date time.Time
}

type Ratings struct {
	Ratings_Id uint  `gorm:"primaryKey"`
	Book_Id    int32 `json:"book_id"`
	Five       int32 `json:"five_stars"`
	Four       int32 `json:"four_stars"`
	Three      int32 `json:"three_stars"`
	Two        int32 `json:"two_stars"`
	One        int32 `json:"one_stars"`
}
