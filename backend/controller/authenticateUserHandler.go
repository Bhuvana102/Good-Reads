package controller

import (
	"encoding/json"
	"good-reads/model"
	"good-reads/views"
	"net/http"
)

func AuthenticateUserHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:4200")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "*")
		if r.Method == http.MethodPost {
			data := views.User_Auth{}
			json.NewDecoder(r.Body).Decode(&data)
			user_auth := model.AuthenticateUserFunc(data)
			w.WriteHeader(http.StatusOK)
			user_auth.Password = ""
			json.NewEncoder(w).Encode(user_auth)
		}
	}
}
