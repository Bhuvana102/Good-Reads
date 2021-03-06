package controller

import (
	"encoding/json"
	"fmt"
	"good-reads/model"
	"net/http"
)

func FetchTopBooksForGenreHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		if r.Method == http.MethodGet {
			fmt.Println("Fetching top Books for reqested Genre ID:", r.URL.Query().Get("id"))
			gId := r.URL.Query().Get("id")
			data := model.FetchTopBooksForGenreHandler(gId, 5)
			w.WriteHeader(http.StatusOK)
			json.NewEncoder(w).Encode(data)
		}
	}
}
