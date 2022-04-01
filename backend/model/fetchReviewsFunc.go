package model

import (
	"fmt"
	"good-reads/views"
	"strconv"
)

func FetchReviewsFunc(id string, bookID string) []views.Review {
	var reviews []views.Review
	rid, _ := strconv.Atoi(id)
	var ids1 = id
	println(ids1)
	for i := 1; i < 10; i++ {
		temp := int(rid) + i
		ids1 = ids1 + "," + strconv.Itoa(temp)
	}
	fmt.Println("Review_Num IN (" + ids1 + ") AND Book_ID = " + bookID)
	DB.Where("Review_Num IN (" + ids1 + ") AND Book_ID = " + bookID).Find(&reviews)
	return reviews
}
