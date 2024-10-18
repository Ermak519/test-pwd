package services

import (
	"log"
	"math/rand"
	"strings"
)

type Requirements struct {
	Length    uint16 `json:"length,omitempty"`
	UpperCase bool   `json:"upper_case"`
	LowerCase bool   `json:"lower_case"`
	Symbols   bool   `json:"symbols"`
	Numbers   bool   `json:"numbers"`
}

type Passwords struct {
	Data []string `json:"data"`
}

const SYMBOLS = "!@#$%^&*()_+"
const NUMBERS = "0123456789"
const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz"

const PASSWORDS_COUNT = 6

func GeneratePassword(r Requirements) (Passwords, error) {
	var passChars []string

	if r.LowerCase {
		passChars = append(passChars, LOWER_CASE)
	}
	if r.Numbers {
		passChars = append(passChars, NUMBERS)
	}
	if r.UpperCase {
		passChars = append(passChars, UPPER_CASE)
	}
	if r.Symbols {
		passChars = append(passChars, SYMBOLS)
	}

	sumbolsForPassword := strings.Join(passChars, "")
	log.Printf("sumbolsForPassword %s", sumbolsForPassword)

	mod := uint64(len(sumbolsForPassword))
	var res []string

	for i := 0; i < PASSWORDS_COUNT; i++ {
		tmp := ""
		for len(tmp) < int(r.Length) {
			index := rand.Uint64() % mod
			tmp += string(sumbolsForPassword[index])
		}
		res = append(res, tmp)
	}

	pass := Passwords{Data: res}

	return pass, nil
}
