
## AUTOR


Jonathan Zerpa


# API REST con Node.js, Express y JWT

API RESTful con autenticación JWT, refresh tokens, roles de usuario y CRUD para tareas.

## Características

- Autenticación con JWT
- Refresh tokens para renovación de sesión
- Dos roles de usuario: `admin` y `user`
- CRUD completo para entidad de tareas
- Protección de rutas con middlewares
- Manejo centralizado de errores
- Validación de datos
- Cookies HTTP-only seguras

## Requisitos

- Node.js 14+
- MongoDB
- npm o yarn

## Instalación

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Configurar variables de entorno en `.env`
4. Iniciar servidor: `npm start`

## Variables de entorno

Crear un archivo `.env` con las siguientes variables:
MONGODB_URI=mongodb://localhost:27017/jwt-api
ACCESS_TOKEN_SECRET=tu_secreto_acceso
REFRESH_TOKEN_SECRET=tu_secreto_refresh
PORT=3000

## Documentación de la API

### Autenticación

- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/refresh` - Renovar token de acceso
- `POST /api/auth/logout` - Cerrar sesión

### Tareas

- `GET /api/tasks` - Obtener todas las tareas (solo admin)
- `GET /api/tasks/my-tasks` - Obtener mis tareas
- `POST /api/tasks` - Crear nueva tarea
- `GET /api/tasks/:id` - Obtener tarea específica
- `PUT /api/tasks/:id` - Actualizar tarea
- `DELETE /api/tasks/:id` - Eliminar tarea

## Licencia

MIT