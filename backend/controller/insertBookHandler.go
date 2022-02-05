package controller

import (
	"encoding/json"
	"good-reads/model"
	"good-reads/views"
	"net/http"
)

func InsertBookHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPost {
			data := views.Book{}
			json.NewDecoder(r.Body).Decode(&data)
			err := model.InsertBookFunc(data)
			if err != nil {
				w.Write([]byte("There is an error"))
				return
			}
			w.WriteHeader(http.StatusCreated)
			w.Write([]byte("Data inserted to DB successfully"))
			json.NewEncoder(w).Encode(data)
		}
	}
}
