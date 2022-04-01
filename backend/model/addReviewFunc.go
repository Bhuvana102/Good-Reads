package model

import (
	"fmt"
	"good-reads/views"

	"gorm.io/gorm"
)

func AddReviewFunc(review views.Review) error {
	review_insert := views.Review{Book_ID: review.Book_ID, User_ID: review.User_ID, Rating: review.Rating, Review: review.Review}
	DB.Select("Book_ID", "User_ID", "Rating", "Review").Create(&review_insert)
	fmt.Println("Data inserted to DB with ID : ", review_insert.Review_Num, review_insert.Rating)
	DB.Model(views.Book{}).Where("Book_ID = ?", review.Book_ID).UpdateColumn("NoOfRatings", gorm.Expr("NoOfRatings + ?", 1)).UpdateColumn("NoOfReviews", gorm.Expr("NoOfReviews + ?", 1))
	return nil
}
