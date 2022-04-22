package model

import (
	"fmt"
	"good-reads/views"
	"strconv"
)

func AddMyBooksFunc(wishlist views.Wishlist) error {
	var temp views.Wishlist
	user_records := DB.Find(&temp, "user_id = ?", wishlist.UserId)
	if user_records.RowsAffected == 0 {
		wishlist.MyBooksIds = strconv.Itoa(wishlist.BookId)
		DB.Create(&wishlist)
	} else {
		temp.MyBooksIds = temp.MyBooksIds + "," + strconv.Itoa(wishlist.BookId)
		DB.Model(&wishlist).Where("user_id", wishlist.UserId).Update("my_books_ids", temp.MyBooksIds)
		fmt.Println(temp.MyBooksIds)
	}
	return nil
}
