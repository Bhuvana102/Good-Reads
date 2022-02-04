package main

import (
	"fmt"
	"good-reads/model"

	"github.com/gorilla/mux"

	"net/http"
)

func main() {

	model.Connect()
	fmt.Println("Connected to database")
	r := mux.NewRouter()
	r.HandleFunc("/getGenres/{id}", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Request received")

		vars := mux.Vars(r)
		key := vars["id"]

		body := model.FetchGenre(key)

		/* if r.Method == http.MethodGet {
			data := Genres{
				Code: http.StatusOK,
				Body: "pong",
			}
			json.NewEncoder(w).Encode(data)

		} */

		w.Write(body)

	})
	r.HandleFunc("/getGenres", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Request received")

		body := model.FetchAllGenre()
		w.Header().Set("content-type", "application/json")
		w.Write(body)

	})
	http.ListenAndServe("localhost:3000", r)
}
