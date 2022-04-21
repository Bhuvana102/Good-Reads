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
	Rating        uint8  `JSON:"Rating"`
	Review        string `JSON:"Review"`
	Reviewed_Date time.Time
}

type Ratings struct {
	Book_Id string `json:"book_id"`
	Five    uint   `json:"five_stars"`
	Four    uint   `json:"four_stars"`
	Three   uint   `json:"three_stars"`
	Two     uint   `json:"two_stars"`
	One     uint   `json:"one_stars"`
}

type User struct {
	ID        uint   `gorm:"primarykey"`
	FirstName string `gorm:"firstname"`
	LastName  string `json:"lastname"`
	Username  string `json:"username"`
	Password  string `json:"password"`
	Email     string `json:"email"`
	CreatedAt time.Time
	UpdatedAt time.Time
}
