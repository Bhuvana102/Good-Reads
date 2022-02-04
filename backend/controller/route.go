package controller

import (
	"github.com/gorilla/mux"
)

func Starter() *mux.Router {
	r := mux.NewRouter()
	subRoute := r.PathPrefix("/api").Subrouter()
	subRoute.HandleFunc("/insertBook", InsertBookHandler())
	subRoute.HandleFunc("/getGenres/{id}", GetGenreForIDHandler())
	subRoute.HandleFunc("/getGenres", GetGenresHandler())
	return subRoute
}

// func ApiHandler(r *mux.Router) {

// 	r.HandleFunc("/getGenres/{id}", func(w http.ResponseWriter, r *http.Request) {
// 		fmt.Println("Request received")

// 		vars := mux.Vars(r)
// 		key := vars["id"]

// 		body := model.FetchGenre(key)

// 		w.Header().Set("content-type", "application/json")
// 		w.Write(body)

// 	})
// 	r.HandleFunc("/getGenres", func(w http.ResponseWriter, r *http.Request) {
// 		fmt.Println("Request received")

// 		body := model.FetchAllGenre()
// 		w.Header().Set("content-type", "application/json")
// 		w.Write(body)

// 	})
// }
