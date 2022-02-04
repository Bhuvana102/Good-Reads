package controller

import "github.com/gorilla/mux"

func Starter() *mux.Router {
	r := mux.NewRouter()
	subRoute := r.PathPrefix("/backend").Subrouter()
	return subRoute
}
