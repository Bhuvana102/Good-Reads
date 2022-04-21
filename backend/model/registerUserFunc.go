package model

import (
	"fmt"
	"good-reads/views"
)

func RegisterUserFunc(user views.User) error {
	user_register := views.User{Username: user.Username, Password: user.Password, Mobile: user.Mobile, Email: user.Email, FirstName: user.FirstName, LastName: user.LastName}
	DB.Select("first_name", "last_name", "username", "password", "mobile", "email").Create(&user_register)
	fmt.Println("Data inserted to DB with ID : ", user_register.ID)
	return nil
}
