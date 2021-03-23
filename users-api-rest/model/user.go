package model

import (
	"github.com/jinzhu/gorm"
	"time"
)

type User struct {
	gorm.Model
	Primer_nombre         string    `gorm:"size:255;not null" json:"primer_nombre"`
	Primer_apellido       string    `gorm:"size:255;not null" json:"primer_apellido"`
	Segundo_apellido      string    `gorm:"size:255;not null" json:"segundo_apellido"`
	Otros_nombres         string    `gorm:"size:255" json:"otros_nombres"`
	Pais                  string    `gorm:"size:255" json:"pais"`
	Tipo_documento        string    `gorm:"size:255" json:"tipo_documento"`
	Numero_identificacion string     `json:"numero_identificacion"`
	Email                 string    `gorm:"size:255;not null" json:"email"`
	Fecha_ingreso         time.Time `json:"fecha_ingreso"`
	Area                  string    `gorm:"size:255" json:"area"`
	Estado                string    `gorm:"size:255" json:"estado"`
}