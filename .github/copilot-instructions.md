# Copilot Instructions for Tour of Heroes Angular

## Project Overview

Angular 21 frontend application based on the official Angular tutorial. Designed to work with an external .NET Core API (not in-memory).

## Architecture

### Key Components

- **AppModule** (`src/app/app.module.ts`): NgModule-based (not standalone). Components declared here.
- **HeroService** (`src/app/hero.service.ts`): Central data service using HttpClient for all CRUD operations.
- **MessageService** (`src/app/message.service.ts`): Logging service that displays operations in the UI.

### Routes (`src/app/app-routing.module.ts`)

- `/dashboard` - Home page (default redirect from `/`)
- `/heroes` - Hero list with add/delete
- `/detail/:id` - Hero detail with edit

### Environment Configuration

API URL is configured via `src/environments/`:

- `environment.ts` - Development
- `environment.prod.ts` - Production (replaced at build time via `angular.json` fileReplacements)

**Dynamic API URL**: Uses `window['env']['ApiUrl']` pattern for runtime configuration (see `src/assets/env.js`).

## Development Commands

```bash
npm start          # Dev server at http://localhost:4200
npm run build      # Production build to dist/angular-tour-of-heroes/browser
npm run lint       # ESLint with @angular-eslint
npm test           # Karma + Jasmine tests
npm run prettier-format  # Format all files
```

## Important Conventions

### Code Style

- **ESLint rules temporarily disabled**: `prefer-standalone` and `prefer-inject` are OFF in `.eslintrc.json`
- Component prefix: `app-` (e.g., `app-heroes`, `app-dashboard`)
- Directive prefix: `app` (camelCase)
- Prettier enforced via husky pre-commit hooks

### Testing

- Uses Karma + Jasmine (not Jest)
- Test files co-located: `*.spec.ts` next to source files
- `jasmine-core@^5.0.0` required (v6 incompatible with karma-jasmine-html-reporter)

### HTTP Pattern

All API calls follow this pattern in `HeroService`:

```typescript
return this.http.get<Hero[]>(this.heroesUrl).pipe(
  tap((_) => this.log('operation description')),
  catchError(this.handleError<Hero[]>('methodName', []))
);
```

## GitHub Workflows

Located in `.github/workflows/`:

- `ci.yml` - Main CI pipeline
- `the-suggester.yml` - AI-powered code suggestions using Copilot CLI + Playwright MCP
- `smart-labeler.yml` - Auto-labels issues/PRs using Copilot CLI
- `release.yml` - Release management

## Dependencies

- Requires external API running at `http://localhost:5010/api/hero` (or configured via env)
- In-memory API (`angular-in-memory-web-api`) is available but commented out in AppModule

## Running the Backend (Outside Dev Container)

If you're not inside the dev container and need to run the backend API, use the Docker image from `.devcontainer/docker-compose.yaml`:

```bash
# Run the API container (includes SQL Server database)
docker run -d --name heroes-api \
  -e ASPNETCORE_ENVIRONMENT=Development \
  -e "ConnectionStrings__DefaultConnection=Server=db,1433;Initial Catalog=heroes;Persist Security Info=False;User ID=sa;Password=P@ssword;TrustServerCertificate=True;" \
  -p 5010:5000 \
  ghcr.io/0gis0/tour-of-heroes-dotnet-api/tour-of-heroes-api:6b947c4
```

Or use docker-compose from the `.devcontainer` folder to get the full stack (API + SQL Server + init scripts):

```bash
cd .devcontainer
docker-compose up api db init-db
```

**Configure the frontend to connect to the API** by setting the `API_URL` environment variable before building:

```bash
export API_URL=http://localhost:5010/api/hero
npm run build-with-api-url  # Uses envsub to inject API_URL into src/assets/env.js
```

For development with `npm start`, edit `src/assets/env.js` directly:

```javascript
window['env'] = { ApiUrl: 'http://localhost:5010/api/hero' };
```

## File Structure

```
src/app/
├── app.module.ts          # Root module (NgModule-based)
├── app-routing.module.ts  # Route definitions
├── hero.service.ts        # API communication
├── message.service.ts     # UI logging
├── hero.ts                # Hero interface
├── dashboard/             # Dashboard component
├── heroes/                # Hero list component
├── hero-detail/           # Hero edit component
├── hero-search/           # Search component
└── messages/              # Message display component
```
