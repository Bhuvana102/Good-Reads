package controller

import (
	"encoding/json"
	"fmt"
	"good-reads/model"
	"net/http"
)

func RetrieveReviewsHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		fmt.Println("Request received")
		if r.Method == http.MethodGet {
			fmt.Println("Fetching top 10 reviews from review num :", r.URL.Query().Get("rindex"))
			fmt.Println("Book ID :", r.URL.Query().Get("BookID"))
			rid := r.URL.Query().Get("rindex")
			bookID := r.URL.Query().Get("BookID")
			data := model.FetchReviewsFunc(rid, bookID)
			w.Header().Set("content-type", "application/json")
			w.WriteHeader(http.StatusOK)
			json.NewEncoder(w).Encode(data)

		}

	}
}
