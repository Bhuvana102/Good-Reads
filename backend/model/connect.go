package model

import (
	"good-reads/views"
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	log.Println("sqlite-database.db opening...")
	db, err := gorm.Open(sqlite.Open("./databases/books.db"), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	} else {
		log.Println("books.db opened")
	}
	db.AutoMigrate(&views.Genres{})
	db.AutoMigrate(&views.Book{})
	DB = db
}
