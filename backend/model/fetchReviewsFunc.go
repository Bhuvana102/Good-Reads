package model

import (
	"good-reads/views"
	"strconv"
)

func FetchReviewsFunc(id string) []views.Review {
	var reviews []views.Review
	rid, _ := strconv.Atoi(id)
	var ids1 = id
	for i := 1; i < 10; i++ {
		temp := int(rid) + i
		ids1 = ids1 + "," + strconv.Itoa(temp)
	}
	DB.Where("Review_Num IN (" + ids1 + ")").Find(&reviews)
	return reviews
}
