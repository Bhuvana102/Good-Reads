package controller

import (
	"encoding/json"
	"fmt"
	"good-reads/model"
	"net/http"
)

func FetchGenreBooksHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		if r.Method == http.MethodGet {
			fmt.Println("Fetching data for reqested genre ID:", r.URL.Query().Get("id"))
			gid := r.URL.Query().Get("id")
			data := model.FetchGenreBooksFunc(gid)
			w.WriteHeader(http.StatusOK)
			json.NewEncoder(w).Encode(data)
			fmt.Println(data)
		}
	}
}
