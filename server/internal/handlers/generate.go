package handlers

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"pass_generator/internal/services"
)

func handleGeneratePassword(w http.ResponseWriter, req *http.Request) {
	log.Printf("handling generate pwd %s\n", req.URL.Path)

	body, err := io.ReadAll(req.Body)
	if err != nil {
		log.Printf("Error reading body: %v", err)
		http.Error(w, "can't read body", http.StatusBadRequest)
		return
	}

	var params services.Requirements

	err = json.Unmarshal(body, &params)
	if err != nil {
		log.Printf("Error reading body: %v", err)
		http.Error(w, "can't read body", http.StatusBadRequest)
		return
	}

	pwd, err := services.GeneratePassword(params)
	if err != nil {
		log.Printf("<ERROR: '%s'>\n", err)
		return
	}

	renderJSON(w, pwd)
}
