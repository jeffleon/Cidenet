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
* __GET__  _/api/v1/users_
* __POST__  _/api/v1/user/:id_
* __PATCH__  _/api/v1/user/:id_
* __DELETE__  _/api/v1/user/:id_

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

ve a __htttp://localhost:3000/users__ para ver el manejo de empleados

### Depenpendencias usadas 

* Semantic UI




