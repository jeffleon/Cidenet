package utils

import (
	"strconv"
)

func Email_generator(trim_primer_nombre string,trim_ptimer_apellido string, cantidad_usuarios int, pais string) string {
	var email string
	var primer_apellido_sin_espacios string

	for _, letter := range trim_ptimer_apellido {
		if letter != 32 {
			primer_apellido_sin_espacios += string(letter)
		}
	}

	if cantidad_usuarios == 0 {
		email = trim_primer_nombre + primer_apellido_sin_espacios + "@cidenet.com."
	} else {

		email = trim_primer_nombre + primer_apellido_sin_espacios + strconv.Itoa(cantidad_usuarios) + "@cidenet.com."
	}

	if pais == "Colombia" { email += "co" } else { email += "us"}

	return email
}
