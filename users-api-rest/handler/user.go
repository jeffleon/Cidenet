package handler

import (
	"github.com/gofiber/fiber/v2"
	"github.com/jeffleon/api-rest-users/database"
	"github.com/jeffleon/api-rest-users/model"
	"github.com/jeffleon/api-rest-users/utils"
	"strings"
	"time"
)

func GetUsers(c *fiber.Ctx) error {
	db := database.DBConn
	var users []model.User
	db.Find(&users)
	return c.Status(200).JSON(fiber.Map{"status": "success", "message": "Usuarios actuales", "data": users})
}

func GetUser(c *fiber.Ctx) error{
	id := c.Params("id")
	db := database.DBConn
	var user model.User
	db.Find(&user, id)
	return c.Status(200).JSON(fiber.Map{"status": "success", "data": user})
}

func NewUser(c *fiber.Ctx) error{
	db := database.DBConn
	user := new(model.User)
	var users []model.User

	err := c.BodyParser(user)
	trim_primer_nombre := strings.TrimSpace(user.Primer_nombre)
	trim_primer_apellido := strings.TrimSpace(user.Primer_apellido)

	db.Where("Primer_nombre = ?", user.Primer_nombre).Where("Primer_apellido = ?", user.Primer_apellido).Find(&users)

	user.Email = utils.Email_generator(trim_primer_nombre, trim_primer_apellido, len(users), user.Pais)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Couldn't create user", "data": err})

	}
	user.Estado = "Activo"
	db.Create(&user)

	return c.Status(201).JSON(fiber.Map{"status": "success", "message": "Se ha creado exitosamente el usuario", "data": user})
}

func UpdateUser(c *fiber.Ctx) error {
	type DataUpdateUser struct {
		Primer_nombre string `json:"primer_nombre"`
		Primer_apellido string `json:"primer_apellido"`
		Segundo_apellido string `json:"segundo_apellido"`
		Otros_nombres string `json:"otros_nombres"`
		Pais string `json:"pais"`
		Tipo_documento string `json:"tipo_documento"`
		Numero_identificacion string `json:"numero_identificacion"`
		Email string `json:"email"`
		Fecha_ingreso time.Time `json:"fecha_ingreso"`
		Area string `json:"area"`
		Estado string `json:"estado"`
	}
	var dataUU DataUpdateUser

	if err := c.BodyParser(&dataUU); err != nil {
		return c.Status(503).Send([]byte("error"))
	}
	var user model.User
	var users []model.User
	id := c.Params("id")
	db := database.DBConn
	db.First(&user, id)

	if user.Primer_nombre == "" {
		return c.Status(404).Send([]byte("El usuario no fue encontrado"))
	}

	trim_primer_nombre := strings.Trim(dataUU.Primer_nombre, " ")
	trim_primer_apellido := strings.Trim(dataUU.Primer_apellido, " ")

	db.Where("Primer_nombre = ?", dataUU.Primer_nombre).Where("Primer_apellido = ?", dataUU.Primer_apellido).Find(&users)

	user.Email = utils.Email_generator(trim_primer_nombre, trim_primer_apellido, len(users), user.Pais)

	user.Primer_nombre = dataUU.Primer_nombre
	user.Primer_apellido = dataUU.Primer_apellido
	user.Segundo_apellido = dataUU.Segundo_apellido
	user.Otros_nombres = dataUU.Otros_nombres
	user.Pais = dataUU.Pais
	user.Tipo_documento = dataUU.Tipo_documento
	user.Numero_identificacion = dataUU.Numero_identificacion
	user.Fecha_ingreso = dataUU.Fecha_ingreso
	user.Area = dataUU.Area
	user.Estado = "Activo"

	db.Save(&user)
	return c.Status(200).JSON(fiber.Map{"status": "success", "message": "Se ha actualizado exitosamente el usuario", "data": user})
}

func DeleteUser(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.DBConn

	var user model.User
	db.First(&user, id)
	if user.Primer_nombre == "" {
		return c.Status(404).Send([]byte("El usuario no fue encontrado"))
	}
	db.Delete(&user)
	return c.JSON(fiber.Map{"status": "success", "message": "Se ha actualizado exitosamente el usuario", "data": user})
}