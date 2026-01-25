# Tour of Heroes - Angular 21

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/0gis0/tour-of-heroes-angular)

---

¡Hola developer 👋🏻! Este es un proyecto completo en Angular 21 basado en el famoso tutorial "Tour of Heroes" de Angular, pero con una diferencia importante: **está conectado a una API real en .NET Core** en lugar de usar datos en memoria. Es el ejemplo perfecto para aprender cómo integrar un frontend moderno con un backend robusto.

---

## 📑 Tabla de Contenidos

- [Características](#características)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Tecnologías](#tecnologías)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Scripts Disponibles](#scripts-disponibles)
- [Arquitectura y Modificaciones](#arquitectura-y-modificaciones)
- [Integración con la API](#integración-con-la-api)
- [Desarrollo](#desarrollo)
- [Sígueme en Mis Redes Sociales](#sígueme-en-mis-redes-sociales)

---

## ✨ Características

- 🎯 **Dashboard interactivo** con los héroes más destacados
- 📋 **Listado completo** de todos los héroes disponibles
- ➕ **Agregar nuevos héroes** a tu colección
- ✏️ **Editar detalles** de héroes existentes con formularios reactivos
- 🗑️ **Eliminar héroes** que ya no necesites
- 🔍 **Búsqueda en tiempo real** de héroes por nombre
- 🌐 **Integración real con API .NET Core** - Sin datos mock
- 🎨 **Interfaz moderna y responsive** construida con Angular 21
- 🚀 **Arquitectura escalable** siguiendo las mejores prácticas de Angular
- 🔄 **Manejo de estado** con RxJS y Observables
- ⚡ **Hot Reload** para desarrollo rápido

---

## 📸 Capturas de Pantalla

### Dashboard Principal

![Dashboard](https://github.com/user-attachments/assets/c54786da-c1a7-49a0-bf45-aca5e690cb69)
_Vista principal con los héroes destacados del momento_

### Listado de Héroes

![Heroes List](https://github.com/user-attachments/assets/a394f376-9566-4c7e-9441-a60797d51d61)
_Exploración completa de todos los héroes disponibles_

### Detalles del Héroe

![Hero Details](https://github.com/user-attachments/assets/36f6b884-b44d-4fe5-9947-34fb18ef5c6f)
_Edición en detalle de la información de cada héroe_

### Búsqueda Avanzada

![Search Feature](https://github.com/user-attachments/assets/01aa966d-fb96-48c8-a119-3d20feaaf6d1)
_Encuentra rápidamente cualquier héroe por su nombre_

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- **Angular 21** - Framework principal
- **TypeScript 5.9** - Lenguaje de programación
- **RxJS 7.8** - Programación reactiva
- **Angular Router** - Navegación entre vistas
- **Angular Forms** - Manejo de formularios
- **Angular HttpClient** - Comunicación con la API

### Backend

- **.NET Core API** - Servicio REST ([Ver repositorio](https://github.com/0GiS0/tour-of-heroes-dotnet-api))
- **SQL Server** - Base de datos

### Herramientas de Desarrollo

- **ESLint** - Análisis estático de código
- **Prettier** - Formateo automático
- **Husky** - Git hooks pre-commit
- **Karma + Jasmine** - Testing unitario
- **GitHub Codespaces** - Entorno de desarrollo en la nube

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** versión 18.19 o superior
- **npm** versión 9 o superior
- **Angular CLI** versión 21 o superior
- **Git** para clonar el repositorio
- **API Backend en ejecución** ([Tour of Heroes .NET API](https://github.com/0GiS0/tour-of-heroes-dotnet-api))

> ⚠️ **Importante:** Este proyecto requiere que la API en .NET Core esté ejecutándose para funcionar correctamente.

---

## 🚀 Instalación

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/0GiS0/tour-of-heroes-angular.git
cd tour-of-heroes-angular
```

### Paso 2: Instalar dependencias

```bash
npm install
```

### Paso 3: Configurar la URL de la API

El proyecto utiliza variables de entorno para conectarse a la API. Los archivos de configuración están en:

- `src/environments/environment.ts` - Para desarrollo
- `src/environments/environment.prod.ts` - Para producción

Ejemplo de configuración en `environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api/heroes',
};
```

### Paso 4: Iniciar el Backend

Antes de ejecutar este proyecto, asegúrate de tener la API .NET Core ejecutándose. Sigue las instrucciones del repositorio:

👉 [Tour of Heroes .NET API - Instrucciones de instalación](https://github.com/0GiS0/tour-of-heroes-dotnet-api)

### Paso 5: Ejecutar la aplicación Angular

```bash
npm start
```

La aplicación estará disponible en: **http://localhost:4200**

---

## 💻 Uso

Una vez que la aplicación esté ejecutándose, podrás:

1. **Explorar el Dashboard** - Navega a la página principal para ver los héroes destacados
2. **Ver todos los héroes** - Haz clic en "Heroes" en el menú de navegación
3. **Buscar héroes** - Utiliza el buscador en el dashboard para encontrar héroes específicos
4. **Agregar un héroe** - En la vista de héroes, escribe un nombre y haz clic en "Add hero"
5. **Editar un héroe** - Haz clic en cualquier héroe para ver sus detalles y editarlos
6. **Eliminar un héroe** - En la lista de héroes, haz clic en la "X" junto al nombre

### Ejemplo de uso de la API

El servicio `HeroService` gestiona todas las operaciones CRUD:

```typescript
// Obtener todos los héroes
this.heroService.getHeroes().subscribe((heroes) => {
  console.log(heroes);
});

// Buscar héroes por nombre
this.heroService.searchHeroes('Spider').subscribe((results) => {
  console.log(results);
});
```

---

## 📜 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Inicia el servidor de desarrollo en modo watch.
La aplicación se recargará automáticamente si realizas cambios en el código.
Accede a: http://localhost:4200

### `npm run build`

Compila el proyecto para producción en la carpeta `dist/`.
Optimiza la compilación para obtener el mejor rendimiento.

### `npm run build-with-api-url`

Compila el proyecto usando variables de entorno externas.
Útil para despliegues en contenedores o servicios cloud.

### `npm test`

Ejecuta los tests unitarios usando Karma y Jasmine.

### `npm run lint`

Analiza el código en busca de problemas con ESLint.

### `npm run prettier-check`

Verifica si el código cumple con las reglas de formato.

### `npm run prettier-format`

Formatea automáticamente todo el código del proyecto.

---

## 🏗️ Arquitectura y Modificaciones

Este proyecto está basado en el [tutorial oficial de Angular](https://angular.io/tutorial), pero incluye modificaciones importantes para trabajar con una API real:

### Cambios Principales

#### 1. **Eliminación de la API en Memoria**

Se ha comentado el módulo `HttpClientInMemoryWebApiModule` que simulaba una API:

```typescript
// Ya no se usa:
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
```

#### 2. **Configuración de la URL de la API Real**

En `hero.service.ts`, ahora se usa una URL configurable:

```typescript
export class HeroService {
  // Antes: private heroesUrl = 'api/heroes';
  private heroesUrl = environment.apiUrl; // URL a la API real
}
```

#### 3. **Gestión de Entornos**

Se utilizan archivos de entorno para diferentes configuraciones:

- **Development** (`environment.ts`): API local o de desarrollo
- **Production** (`environment.prod.ts`): API de producción

Angular selecciona automáticamente el archivo correcto según el comando de build.

#### 4. **Actualización del Método PUT**

Se mejoró el método `updateHero` para construir correctamente la URL:

```typescript
updateHero(hero: Hero): Observable<any> {
  const url = `${this.heroesUrl}/${hero.id}`;
  return this.http.put(url, hero, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}
```

### Estructura del Proyecto

```
tour-of-heroes-angular/
├── src/
│   ├── app/
│   │   ├── dashboard/           # Componente del dashboard
│   │   ├── hero-detail/         # Detalles de héroe
│   │   ├── heroes/              # Lista de héroes
│   │   ├── hero-search/         # Búsqueda de héroes
│   │   ├── hero.service.ts      # Servicio principal
│   │   ├── message.service.ts   # Servicio de mensajes
│   │   └── app.component.ts     # Componente raíz
│   ├── environments/            # Configuraciones de entorno
│   ├── assets/                  # Recursos estáticos
│   └── styles.css              # Estilos globales
├── angular.json                 # Configuración de Angular
├── package.json                # Dependencias del proyecto
└── tsconfig.json               # Configuración de TypeScript
```

---

## 🔌 Integración con la API

### Endpoints Utilizados

La aplicación consume los siguientes endpoints de la API .NET Core:

| Método | Endpoint                  | Descripción                  |
| ------ | ------------------------- | ---------------------------- |
| GET    | `/api/heroes`             | Obtiene todos los héroes     |
| GET    | `/api/heroes/{id}`        | Obtiene un héroe específico  |
| GET    | `/api/heroes?name={name}` | Busca héroes por nombre      |
| POST   | `/api/heroes`             | Crea un nuevo héroe          |
| PUT    | `/api/heroes/{id}`        | Actualiza un héroe existente |
| DELETE | `/api/heroes/{id}`        | Elimina un héroe             |

### Ejemplo de Petición

```typescript
// GET todos los héroes
getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
}
```

### Manejo de Errores

Todas las peticiones incluyen manejo de errores robusto:

```typescript
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
```

---

## 🔧 Desarrollo

### Desarrollo Local

Para trabajar en modo desarrollo con hot reload:

```bash
npm start
```

### Build para Producción

Para crear una versión optimizada:

```bash
npm run build
```

Los archivos compilados se generarán en `dist/angular-tour-of-heroes/`.

### Linting y Formato

Antes de hacer commit, asegúrate de ejecutar:

```bash
npm run lint              # Verifica errores de código
npm run prettier-format   # Formatea el código
```

> 💡 **Tip:** El proyecto incluye Husky para ejecutar automáticamente Prettier en los archivos staged antes de cada commit.

### Testing

Ejecuta los tests unitarios con:

```bash
npm test
```

### GitHub Codespaces

Este proyecto está optimizado para GitHub Codespaces. Haz clic en el badge al inicio del README para abrir un entorno de desarrollo completo en tu navegador.

---

## 🌐 Sígueme en Mis Redes Sociales

Si te ha gustado este proyecto y quieres ver más contenido como este, no olvides suscribirte a mi canal de YouTube y seguirme en mis redes sociales:

<div align="center">

[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UC140iBrEZbOtvxWsJ-Tb0lQ?style=for-the-badge&logo=youtube&logoColor=white&color=red)](https://www.youtube.com/c/GiselaTorres?sub_confirmation=1)
[![GitHub followers](https://img.shields.io/github/followers/0GiS0?style=for-the-badge&logo=github&logoColor=white)](https://github.com/0GiS0)
[![LinkedIn Follow](https://img.shields.io/badge/LinkedIn-Sígueme-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giselatorresbuitrago/)
[![X Follow](https://img.shields.io/badge/X-Sígueme-black?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/0GiS0)

</div>

---

<div align="center">

**¿Te ha resultado útil este proyecto?** ⭐ Dale una estrella en GitHub

**¿Tienes preguntas o sugerencias?** 💬 Abre un issue o pull request

**Hecho con ❤️ usando Angular y .NET Core**

</div>
