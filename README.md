# 🦸 Tour of Heroes - Angular 21

![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)
![Node](https://img.shields.io/badge/Node.js-≥20-339933?style=flat-square&logo=node.js)
![.NET](https://img.shields.io/badge/.NET_Core-API-512BD4?style=flat-square&logo=dotnet)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/0gis0/tour-of-heroes-angular)

Proyecto Angular 21 basado en el tutorial "Tour of Heroes", conectado a una **API real en .NET Core** en lugar de datos en memoria.

## 📸 Screenshots

|                                           Dashboard                                           |                                           Heroes                                           |                                          Detalle                                           |                                          Búsqueda                                          |
| :-------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
| ![Dashboard](https://github.com/user-attachments/assets/c54786da-c1a7-49a0-bf45-aca5e690cb69) | ![Heroes](https://github.com/user-attachments/assets/a394f376-9566-4c7e-9441-a60797d51d61) | ![Detail](https://github.com/user-attachments/assets/36f6b884-b44d-4fe5-9947-34fb18ef5c6f) | ![Search](https://github.com/user-attachments/assets/01aa966d-fb96-48c8-a119-3d20feaaf6d1) |

## ✨ Características

- 🎯 Dashboard con héroes destacados
- 📋 CRUD completo de héroes
- 🔍 Búsqueda en tiempo real
- 🌐 Integración con API .NET Core
- 🔄 RxJS y Observables

## 🚀 Quick Start

```bash
# 1. Clonar e instalar
git clone https://github.com/0GiS0/tour-of-heroes-angular.git
cd tour-of-heroes-angular
npm install

# 2. Configurar API (editar src/assets/env.js)
window['env'] = { ApiUrl: 'http://localhost:5010/api/hero' };

# 3. Ejecutar
npm start
```

> ⚠️ Requiere la [API .NET Core](https://github.com/0GiS0/tour-of-heroes-dotnet-api) ejecutándose

## 📋 Requisitos

- **Node.js** ≥ 20
- **npm** ≥ 9
- **Backend API** en ejecución

## 🛠️ Scripts

| Comando                   | Descripción                                     |
| ------------------------- | ----------------------------------------------- |
| `npm start`               | Servidor de desarrollo en http://localhost:4200 |
| `npm run build`           | Build de producción                             |
| `npm test`                | Tests con Karma + Jasmine                       |
| `npm run lint`            | ESLint                                          |
| `npm run prettier-format` | Formatear código                                |

## 🏗️ Arquitectura

```
src/app/
 dashboard/        # Página principal
 heroes/           # Lista de héroes
 hero-detail/      # Edición de héroe
 hero-search/      # Búsqueda
 hero.service.ts   # Comunicación con API
 message.service.ts
```

### Diferencias con el tutorial original

1. **Sin API en memoria** - Usa `environment.apiUrl` en lugar de `HttpClientInMemoryWebApiModule`
2. **Configuración dinámica** - API URL configurable via `src/assets/env.js`
3. **Entornos separados** - `environment.ts` (dev) y `environment.prod.ts` (prod)

## 🔌 API Endpoints

| Método | Endpoint                | Acción       |
| ------ | ----------------------- | ------------ |
| GET    | `/api/hero`             | Listar todos |
| GET    | `/api/hero/{id}`        | Obtener uno  |
| GET    | `/api/hero?name={term}` | Buscar       |
| POST   | `/api/hero`             | Crear        |
| PUT    | `/api/hero/{id}`        | Actualizar   |
| DELETE | `/api/hero/{id}`        | Eliminar     |

## 🐳 Backend con Docker

Si no tienes el backend, usa Docker:

```bash
# Opción 1: Stack completo
cd .devcontainer && docker-compose up api db init-db

# Opción 2: Solo API (necesita DB externa)
docker run -d -p 5010:5000 \
  -e "ConnectionStrings__DefaultConnection=..." \
  ghcr.io/0gis0/tour-of-heroes-dotnet-api/tour-of-heroes-api:6b947c4
```

## 🌐 Sígueme

<div align="center">

[![YouTube](https://img.shields.io/youtube/channel/subscribers/UC140iBrEZbOtvxWsJ-Tb0lQ?style=for-the-badge&logo=youtube&color=red)](https://www.youtube.com/c/GiselaTorres?sub_confirmation=1)
[![GitHub](https://img.shields.io/github/followers/0GiS0?style=for-the-badge&logo=github)](https://github.com/0GiS0)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sígueme-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/giselatorresbuitrago/)
[![X](https://img.shields.io/badge/X-Sígueme-black?style=for-the-badge&logo=x)](https://twitter.com/0GiS0)

**¿Te gusta?** Dale una estrella | 💬 **¿Dudas?** Abre un issue

</div>
