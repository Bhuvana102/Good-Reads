package controller

import (
	"encoding/json"
	"good-reads/model"
	"good-reads/views"
	"net/http"
)

func AuthenticateUserHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		if r.Method == http.MethodPost {
			data := views.User_Auth{}
			json.NewDecoder(r.Body).Decode(&data)
			user_auth := model.AuthenticateUserFunc(data)
			w.WriteHeader(http.StatusFound)
			user_auth.Password = ""
			json.NewEncoder(w).Encode(user_auth)
		}
	}
}
