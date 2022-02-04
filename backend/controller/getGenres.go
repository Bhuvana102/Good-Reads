package controller

import (
	"fmt"
	"good-reads/model"
	"net/http"

	"github.com/gorilla/mux"
)

func GetGenreForIDHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Request received")

		vars := mux.Vars(r)
		key := vars["id"]

		body := model.FetchGenre(key)

		w.Header().Set("content-type", "application/json")
		w.Write(body)

	}
}

func GetGenresHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Request received")

		body := model.FetchAllGenre()
		w.Header().Set("content-type", "application/json")
		w.Write(body)

	}
}
