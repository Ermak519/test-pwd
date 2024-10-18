package handlers

import "github.com/gorilla/mux"

func Handlers(r *mux.Router) {
	r.HandleFunc("/api/generate", handleGeneratePassword).Methods("POST", "GET")
}
