package model

import (
	"fmt"
	"good-reads/views"
	"math"

	"gorm.io/gorm"
)

func AddReviewFunc(review views.Review) (views.Review, error) {
	review_insert := views.Review{Book_ID: review.Book_ID, User_ID: review.User_ID, Rating: review.Rating, Review: review.Review}
	DB.Select("Book_ID", "User_ID", "Rating", "Review").Create(&review_insert)
	fmt.Println("Data inserted to DB with ID : ", review_insert.Review_Num)

	DB.Model(views.Book{}).Where("ID = ?", review.Book_ID).UpdateColumn("no_of_ratings", gorm.Expr("no_of_ratings + ?", 1))
	DB.Model(views.Book{}).Where("ID = ?", review.Book_ID).UpdateColumn("no_of_reviews", gorm.Expr("no_of_reviews + ?", 1))

	DB.First(&review, "Review_Num = ?", review_insert.Review_Num)
  UpdateBookTable(review)

	return review, nil



}

func UpdateBookTable(review views.Review) {

	DB.Model(views.Book{}).Where("ID = ?", review.Book_ID).UpdateColumn("no_of_ratings", gorm.Expr("no_of_ratings + ?", 1))

	if review.Review != "" {
		DB.Model(views.Book{}).Where("ID = ?", review.Book_ID).UpdateColumn("no_of_reviews", gorm.Expr("no_of_reviews + ?", 1))
	}

	var avg_rating float64
	ratings := FetchBookRatingsFunc(review.Book_ID)
	avg_rating = math.Round(float64(ratings.Five*5+ratings.Four*4+ratings.Three+ratings.Two*2+ratings.One) / float64(ratings.Five+ratings.Four+ratings.Three+ratings.Two+ratings.One))
	DB.Model(views.Book{}).Where("ID = ?", review.Book_ID).UpdateColumn("avg_rating", avg_rating)

}
