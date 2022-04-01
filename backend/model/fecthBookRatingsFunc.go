package model

import (
	"fmt"
	"good-reads/views"
)

func FetchBookRatingsFunc(bId string) views.Ratings {
	var ratings = views.Ratings{
		Book_Id: bId,
		Five:    0,
		Four:    0,
		Three:   0,
		Two:     0,
		One:     0,
	}
	var reviews []views.Review
	DB.Where("book_id = ?", bId).Find(&reviews)
	for _, review := range reviews {
		switch review.Rating {
		case 5:
			ratings.Five++
		case 4:
			ratings.Four++
		case 3:
			ratings.Three++
		case 2:
			ratings.Two++
		case 1:
			ratings.One++
		}
	}
	fmt.Println(ratings)
	return ratings
}
