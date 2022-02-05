package controller

import (
	"github.com/gorilla/mux"
)

func Starter() *mux.Router {
	r := mux.NewRouter()
	subRoute := r.PathPrefix("/api").Subrouter()

	subRoute.HandleFunc("/getGenres/{id}", GetGenreForIDHandler())
	subRoute.HandleFunc("/getGenres", GetGenresHandler())

	subRoute.HandleFunc("/fetchGenreBooks", FetchGenreBooksHandler())

	subRoute.HandleFunc("/insertBook", InsertBookHandler())

	return subRoute
}
