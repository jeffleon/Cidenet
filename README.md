# Cidenet

instale el repositorio

`git clone https://github.com/jeffleon/Cidenet.git`

## API REST
para que la api rest funcione por favor ubicate en la carpeta users-api-rest

`cd Cidenet/users-api-rest`
* utiliza el comando go install para instalar las dependencias 
`go install`
* correr la api
`go run main.go`

* la api corre en el puerto 8000

### EndPoints
* GET /api/v1/users
* POST /api/v1/user/:id
* PATCH /api/v1/user/:id
* DELETE /api/v1/user/:id

### Depenpendencias usadas 

si por alguna razon la api no corre se utilizaron las siguientes dependencias 
* `go get github.com/gofiber/fiber/v2`

* `go get github.com/jinzhu/gorm`

* `go get github.com/jinzhu/gorm/dialects/sqlite`

## Front 
para que la api rest funcione por favor ubicate en la carpeta users-api-rest

`cd Cidenet/empleados_cedenet`
* instalar dependencias
`npm install `
* correr front
`npm run dev`

* la api corre en el puerto 3000

### Depenpendencias usadas 

* Semantic UI




