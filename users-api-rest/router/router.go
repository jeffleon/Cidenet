package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/jeffleon/api-rest-users/handler"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api")
	V1 := api.Group("/v1")

	V1.Get("/users", handler.GetUsers)
	V1.Get("/user/:id", handler.GetUser)
	V1.Post("/user", handler.NewUser)
	V1.Patch("/user/:id", handler.UpdateUser)
	V1.Delete("/user/:id", handler.DeleteUser)
}
