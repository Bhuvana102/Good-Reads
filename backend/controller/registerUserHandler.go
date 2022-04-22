package controller

import (
	"encoding/json"
	"good-reads/model"
	"good-reads/views"
	"net/http"
)

func RegisterUserHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:4200")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "*")
		if r.Method == http.MethodPost {
			data := views.User{}
			json.NewDecoder(r.Body).Decode(&data)
			err := model.RegisterUserFunc(data)
			if err != nil {
				w.Write([]byte("There is an error"))
				return
			}
			w.WriteHeader(http.StatusCreated)
			json.NewEncoder(w).Encode(data)
		}
	}
}
