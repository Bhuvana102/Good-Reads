package controller

import (
	"fmt"
	"good-reads/model"
	"net/http"
)

func GetGenreForIDHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		fmt.Println("Request received")
		if r.Method == http.MethodGet {
			fmt.Println("Fetching Genre details for for reqested Genre ID:", r.URL.Query().Get("id"))
			bId := r.URL.Query().Get("id")
			data := model.FetchGenre(bId)
			w.Header().Set("content-type", "application/json")
			w.Write(data)
			// w.WriteHeader(http.StatusOK)
			// json.NewEncoder(w).Encode(data)
			//fmt.Println(data)
		}

		// vars := mux.Vars(r)
		// key := vars["id"]

		// key = "5"
		// body := model.FetchGenre(key)

		// w.Header().Set("content-type", "application/json")
		// w.Write(body)

	}
}

func GetGenresHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		fmt.Println("Request received")

		body := model.FetchAllGenre()
		w.Header().Set("content-type", "application/json")
		w.Write(body)

	}
}
