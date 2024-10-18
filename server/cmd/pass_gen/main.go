package main

import (
	"log"
	"net/http"
	"pass_generator/internal/handlers"

	h "github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	router.StrictSlash(true)

	headers := h.AllowedHeaders([]string{"X-Requested-With", "Origin", "Content-Type", "Authorization", "Access-Control-Allow-Origin"})
	origins := h.AllowedOrigins([]string{"http://localhost:3000/"})
	methods := h.AllowedMethods([]string{"GET", "POST", "PUT", "OPTIONS", "DELETE"})

	handlers.Handlers(router)
	router.Use()
	withCors := h.CORS(methods, headers, origins)

	log.Fatal(http.ListenAndServe(":8080", withCors(router)))
}
