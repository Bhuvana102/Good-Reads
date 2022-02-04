package model

import (
	"good-reads/views"
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func add_genresdb() {

	var genres1 views.Genres
	result := DB.Find(&genres1)

	if result.RowsAffected != 0 {
		return
	}

	var genres = []views.Genres{
		{Id: 1, Name: "Comedy", Description: "Comedy", Count: 5},
		{Id: 2, Name: "Romance", Description: "Romance", Count: 8},
		{Id: 3, Name: "Mystery", Description: "Mystery", Count: 10},
		{Id: 4, Name: "Thriller", Description: "Thriller", Count: 6},
		{Id: 5, Name: "Horror", Description: "Horror", Count: 5},
		{Id: 6, Name: "Suspense", Description: "Suspense", Count: 12},
	}

	DB.Create(&genres)
}

func Connect() *gorm.DB {
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
	add_genresdb()
	return DB
}
