package main

import (
	"github.com/jeffleon/api-rest-users/database"
	"github.com/jeffleon/api-rest-users/router"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"log"
)


func main(){
	app := fiber.New()
	app.Use(cors.New())
	database.InitDatabase()
	defer database.DBConn.Close()

	router.SetupRoutes(app)

	log.Fatal(app.Listen(":8000"))
}
