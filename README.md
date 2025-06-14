# API de Gestión de Usuarios

Este proyecto fue desarrollado como parte de una prueba técnica para el cargo de **Desarrollador Jr. Backend**.

La finalidad es implementar una API RESTful que permita la gestión de usuarios mediante operaciones CRUD conectadas a una base de datos PostgreSQL. El enfoque está en demostrar conocimientos de backend, estructura de código, uso de variables de entorno, modularización, y buenas prácticas en el manejo de rutas, controladores y base de datos.

---

## Puntos extra aplicados

- ✅ Se implementó una estructura modular basada en el patrón MVC, separando controladores, rutas y capa de acceso a datos. Esto facilita el mantenimiento y escalabilidad del proyecto.
- ⚠️ Se trabajó parcialmente en la configuración con Docker y Docker Compose, pero fue descartada por temas de rendimiento local.


## Requisitos de la prueba (cumplidos)

- [x] API REST con operaciones CRUD completas
- [x] Base de datos relacional (PostgreSQL)
- [x] Script SQL incluido (`db.sql`)
- [x] Variables de entorno (.env)
- [x] Buen manejo de rutas y modularización
- [x] Control de errores y mensajes HTTP claros
- [x] Documentación clara del proyecto (`README.md`)

---

## 🔧 Cómo ejecutar el proyecto

1. Clona el repositorio:

git clone https://github.com/Mariafmm/GestionDeUsuarios.git
cd GestionDeUsuarios

2. instala dependecias:
npm install

3. Configura las variables de entorno:
agrega el archivo .env que esta adjunto en el correo

4. Crea la base de datos y ejecuta el script:
createdb usuarios
psql -U postgres -d usuarios -f database/db.sql.
Si no deseas usar la terminal, puedes crear la base de datos usuarios en pgAdmin y ejecutar manualmente el contenido del archivo database/db.sql en el Query Tool.”

5. inicia el servidor:
npm run dev

| Método | Ruta             | Descripción        |
|--------|------------------|--------------------|
| GET    | /api/users       | Obtener todos      |
| GET    | /api/users/:id   | Obtener por ID     |
| POST   | /api/users       | Crear usuario      |
| PUT    | /api/users/:id   | Actualizar usuario |
| DELETE | /api/users/:id   | Eliminar usuario   |

ejemplo de json para peticion post y put:
{
  "nombre": "Valentina Torres",
  "email": "valentina@example.com",
  "edad": 28
}

---

## Lo que aprendí y qué mejoraría

### ¿Qué aprendí?

- Reforcé la estructura de una API REST usando Node.js, Express y PostgreSQL.
- Utilicé consultas SQL parametrizadas para evitar inyecciones.
- Organicé el proyecto de forma modular (tipo MVC).

### ¿Qué mejoraría?

- Incluir pruebas automatizadas (unitarias y de integración).
- Completar la integración con Docker y docker-compose.
- Utilizar un ORM como Prisma o Sequelize para manejar mejor la base de datos.
