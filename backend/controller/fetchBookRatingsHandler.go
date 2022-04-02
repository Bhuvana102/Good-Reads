package controller

import (
	"encoding/json"
	"fmt"
	"good-reads/model"
	"net/http"
)

func FetchBookRatingsHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		if r.Method == http.MethodGet {
			fmt.Println("Fetching data for reqested Book ID:", r.URL.Query().Get("id"))
			bId := r.URL.Query().Get("id")
			data := model.FetchBookRatingsFunc(bId)
			w.WriteHeader(http.StatusOK)
			json.NewEncoder(w).Encode(data)
			// fmt.Println(data)
		}
	}
}
