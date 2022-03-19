package controller

import (
	"fmt"
	"good-reads/model"
	"net/http"

	"github.com/gorilla/mux"
)

func RetrieveReviewsHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		fmt.Println("Request received")

		vars := mux.Vars(r)
		key := vars["id"]

		key = "5"
		body := model.FetchGenre(key)

		w.Header().Set("content-type", "application/json")
		w.Write(body)

	}
}
