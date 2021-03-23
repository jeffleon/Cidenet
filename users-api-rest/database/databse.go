package database

import (
	"fmt"
	"github.com/jeffleon/api-rest-users/model"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var (
	DBConn *gorm.DB
)

func InitDatabase(){
	var err error
	DBConn, err = gorm.Open("sqlite3", "users.db")
	if err != nil {
		panic("Failed to connect to database")
	}
	fmt.Println("Database connection successfully openned")

	DBConn.AutoMigrate(&model.User{})

	fmt.Println("Database Migrated")
}