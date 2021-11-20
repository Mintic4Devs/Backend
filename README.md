# Backend

PROYECTO 4DEVS 

Usar npm install 

Iniciar con npm start


Conectar a MONGODB

Metodo POST
http://localhost:3000/api/project/add

Utilizar esta estructura en Postman o similares para agregar un proyecto
{
     
   "name": "Nombre del proyecto",
   "fase": "Fase actual",
   "estado": "Estado activo/inactivo"

}

Metodo DELETE
http://localhost:3000/api/project/:id

Metodo GET
http://localhost:3000/api/projects

Metodo PUT
http://localhost:3000/api/project/update/:id
