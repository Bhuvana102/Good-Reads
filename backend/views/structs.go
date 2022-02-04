package views

import (
	"time"
)

type Genres struct {
	Id          uint   `gorm:"primaryKey"`
	Name        string `JSON:"name"`
	Description string `JSON:"description"`
	Count       int    `JSON:"count"`
	CreatedAt   time.Time
	UpdatedAt   time.Time
}
