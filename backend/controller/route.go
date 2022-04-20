package controller

import (
	"net/http"

	"github.com/gorilla/mux"
)

func Starter() *mux.Router {
	r := mux.NewRouter()
	subRoute := r.PathPrefix("/api").Subrouter()

	subRoute.HandleFunc("/getGenreForID", GetGenreForIDHandler()).Methods(http.MethodGet, http.MethodPost, http.MethodOptions)
	subRoute.HandleFunc("/getGenres", GetGenresHandler()).Methods(http.MethodGet, http.MethodPost, http.MethodOptions)

	subRoute.HandleFunc("/fetchGenreBooks", FetchGenreBooksHandler()).Methods(http.MethodGet, http.MethodOptions)

	subRoute.HandleFunc("/fetchTopBooksForGenre", FetchTopBooksForGenreHandler()).Methods(http.MethodGet, http.MethodOptions)

	subRoute.HandleFunc("/insertBook", InsertBookHandler()).Methods(http.MethodPost, http.MethodOptions)

	subRoute.HandleFunc("/getBook", FetchBookDataHandler()).Methods(http.MethodGet, http.MethodOptions)

	subRoute.HandleFunc("/addReviews", AddReviewsHandler()).Methods(http.MethodPost, http.MethodOptions)

	subRoute.HandleFunc("/retrieveReviews", RetrieveReviewsHandler()).Methods(http.MethodGet, http.MethodOptions)

	subRoute.HandleFunc("/fetchBookRatings", FetchBookRatingsHandler()).Methods(http.MethodGet, http.MethodOptions)
	return subRoute
}
