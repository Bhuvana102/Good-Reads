package controller

import (
	"net/http"

	"github.com/gorilla/mux"
)

func Starter() *mux.Router {
	r := mux.NewRouter()
	subRoute := r.PathPrefix("/api").Subrouter()

	subRoute.HandleFunc("/getGenres/{id}", GetGenreForIDHandler()).Methods(http.MethodGet, http.MethodPost, http.MethodOptions)
	subRoute.HandleFunc("/getGenres", GetGenresHandler()).Methods(http.MethodGet, http.MethodPost, http.MethodOptions)

	subRoute.HandleFunc("/fetchGenreBooks", FetchGenreBooksHandler()).Methods(http.MethodGet, http.MethodOptions)

	subRoute.HandleFunc("/insertBook", InsertBookHandler()).Methods(http.MethodPost, http.MethodOptions)

	subRoute.HandleFunc("/addReviews", AddReviewsHandler()).Methods(http.MethodPost, http.MethodOptions)

	return subRoute
}
