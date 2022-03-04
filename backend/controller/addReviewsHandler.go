package controller

import (
	"encoding/json"
	"good-reads/model"
	"good-reads/views"
	"net/http"
)

func AddReviewsHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		if r.Method == http.MethodPost {
			data := views.Review{}
			json.NewDecoder(r.Body).Decode(&data)
			err := model.AddReviewFunc(data)
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
