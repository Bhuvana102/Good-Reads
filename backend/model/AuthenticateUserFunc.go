package model

import (
	"good-reads/views"
)

func AuthenticateUserFunc(user_auth views.User_Auth) views.User_Auth {
	var user views.User
	DB.Where("email", user_auth.Email).Find(&user)
	if user.Password == user_auth.Password {
		user_auth.ID = user.ID
		user_auth.Status = true
		user_auth.Username = user.Username
	} else {
		user_auth.ID = user.ID
		user_auth.Status = false
		user_auth.Username = user.Username
	}
	return user_auth
}
