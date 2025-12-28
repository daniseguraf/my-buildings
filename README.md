# 🏢 My Buildings - Enterprise Building Management System

<div align="center">

**A modern, full-stack building management platform built with cutting-edge technologies**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-11.0+-red?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![React](https://img.shields.io/badge/React-19.2+-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-7.0+-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![pnpm](https://img.shields.io/badge/pnpm-10.23+-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Architecture](#-architecture) • [Roadmap](#-roadmap)

</div>

---

## 🎯 Overview

**My Buildings** is a comprehensive building management system designed to streamline property administration, employee management, unit tracking, and facility operations. Built with enterprise-grade architecture and modern best practices, it provides a robust solution for property managers, building administrators, and facility operators.

### Why My Buildings?

- ⚡ **High Performance**: Optimized React 19 with Compiler, efficient database queries with Prisma
- 🏗️ **Scalable Architecture**: Monorepo structure with shared types and clean separation of concerns
- 🎨 **Modern UI/UX**: Beautiful interface built with Mantine UI and professional design patterns
- 🔒 **Type-Safe**: End-to-end TypeScript with OpenAPI schema generation
- 📱 **Responsive**: Mobile-first design that works seamlessly across all devices
- 🐳 **Docker Ready**: Containerized database for easy deployment
- 📊 **PDF Generation**: Built-in PDF reports using pdfmake

---

## ✨ Features

### Current Features

- **🏢 Building Management**
  - Complete CRUD operations for buildings
  - Property type classification (Residential, Commercial, Mixed)
  - Detailed building information (floors, address, contact details)
  - Building status tracking and soft delete support

- **👥 Employee Management**
  - Employee profiles with role assignment
  - Multiple roles support (Manager, Security, Cleaner, Maintenance, Gardener, Receptionist)
  - Employment history tracking
  - Active/inactive status management

- **🏠 Unit Management**
  - Unit tracking per building
  - Unit types (Apartment, Office, Commercial)
  - Status management (Available, Occupied, Maintenance)
  - Floor-based organization

- **🏛️ Common Areas**
  - Common area registration
  - Capacity management
  - Active/inactive status

### Coming Soon

- 🔐 Authentication & Authorization (JWT, Role-based access control)
- 📅 Booking System for common areas
- 🎫 Maintenance ticket system
- 📊 Advanced analytics dashboard
- 📱 Push notifications
- 🌐 Multi-language support (i18n)
- 📧 Email notifications
- 📈 Reporting and data visualization

---

## 🛠️ Tech Stack

### Backend

- **[NestJS](https://nestjs.com/)** - Progressive Node.js framework for scalable server-side applications
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM for type-safe database access
- **[PostgreSQL](https://www.postgresql.org/)** - Advanced open-source relational database
- **[pdfmake](https://pdfmake.github.io/docs/)** - Client/server-side PDF printing
- **[Swagger/OpenAPI](https://swagger.io/)** - API documentation and type generation
- **[class-validator](https://github.com/typestack/class-validator)** - Decorator-based validation

### Frontend

- **[React 19](https://react.dev/)** - Latest React with React Compiler for automatic optimization
- **[Mantine UI](https://mantine.dev/)** - Comprehensive React component library
- **[TanStack Query](https://tanstack.com/query)** - Powerful data synchronization and caching
- **[React Router 7](https://reactrouter.com/)** - Modern routing solution
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client
- **[Vite](https://vite.dev/)** - Next-generation frontend tooling

### DevOps & Tools

- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[Docker](https://www.docker.com/)** - Containerization platform
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[ESLint](https://eslint.org/)** - Code quality and consistency
- **[Prettier](https://prettier.io/)** - Code formatting

---

## 🏗️ Architecture

### Monorepo Structure

```
my-buildings/
├── packages/
│   ├── backend/          # NestJS API server
│   │   ├── src/
│   │   │   ├── buildings/     # Buildings module
│   │   │   ├── employees/     # Employees module
│   │   │   ├── printer/       # PDF generation service
│   │   │   ├── prisma/        # Database service
│   │   │   └── common/        # Shared decorators & DTOs
│   │   ├── prisma/
│   │   │   └── schema.prisma  # Database schema
│   │   └── fonts/             # Fonts for PDF generation
│   │
│   ├── frontend/         # React application
│   │   ├── src/
│   │   │   ├── app/           # App configuration & routes
│   │   │   ├── features/      # Feature-based modules
│   │   │   ├── components/    # Shared components
│   │   │   ├── hooks/         # Custom React hooks
│   │   │   └── lib/           # Utilities & configs
│   │   └── public/
│   │
│   └── shared/           # Shared types between FE & BE
│       └── src/
│           └── types/         # Generated TypeScript types
│
├── docker-compose.yaml   # Docker services configuration
└── pnpm-workspace.yaml  # Monorepo workspace config
```

### Design Patterns & Best Practices

- **Module-based architecture** in NestJS for separation of concerns
- **Feature-based structure** in React for scalability
- **Type generation** from OpenAPI specs for type safety across FE/BE
- **Repository pattern** with Prisma for data access
- **DTO validation** with class-validator decorators
- **Error handling** with global exception filters
- **API versioning** for backward compatibility
- **Soft deletes** for data integrity

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **pnpm** >= 10.23
- **Docker** & **Docker Compose** (for database)
- **PostgreSQL** 14+ (or use Docker)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/daniseguraf/my-buildings.git
cd my-buildings
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the `packages/backend` directory:

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/my_buildings?schema=public"
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=my_buildings

# Server
PORT=3000
NODE_ENV=development
```

4. **Start the database**

```bash
docker-compose up -d
```

5. **Run database migrations**

```bash
cd packages/backend
pnpm migrate
```

6. **Generate Prisma client and types**

```bash
pnpm generate
```

### Running the Application

#### Development Mode

Run both frontend and backend concurrently:

```bash
# From root directory
pnpm dev
```

Or run them separately:

```bash
# Backend only (http://localhost:3000)
pnpm dev:backend

# Frontend only (http://localhost:5173)
pnpm dev:frontend
```

#### Production Build

```bash
# Build all packages
pnpm build

# Build individually
pnpm build:backend
pnpm build:frontend

# Start production server
cd packages/backend
pnpm start:prod
```

### Available Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `pnpm dev`          | Run all packages in development mode |
| `pnpm dev:frontend` | Run only frontend                    |
| `pnpm dev:backend`  | Run only backend                     |
| `pnpm build`        | Build all packages                   |
| `pnpm lint`         | Lint all packages                    |
| `pnpm format`       | Format code with Prettier            |
| `pnpm migrate`      | Run database migrations              |
| `pnpm generate`     | Generate Prisma client & types       |

---

## 📡 API Documentation

Once the backend is running, access the interactive API documentation:

- **Swagger UI**: [http://localhost:3000/api/v1](http://localhost:3000/api/v1)
- **OpenAPI JSON**: [http://localhost:3000/api/v1-json](http://localhost:3000/api/v1-json)

### Key Endpoints

- `GET /api/v1/buildings` - List all buildings
- `POST /api/v1/buildings` - Create a new building
- `GET /api/v1/buildings/:id` - Get building details
- `PATCH /api/v1/buildings/:id` - Update building
- `DELETE /api/v1/buildings/:id` - Soft delete building
- `GET /api/v1/employees` - List all employees
- `POST /api/v1/employees` - Create employee

---

## 🧪 Testing

```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# Test coverage
pnpm test:cov
```

---

## 📈 Database Schema

The application uses PostgreSQL with Prisma ORM. Key entities:

- **Building**: Core entity for property management
- **Employee**: Staff members managing buildings
- **Unit**: Individual units within buildings
- **CommonArea**: Shared spaces in buildings

### Relationships

- Building → Employee (many-to-one via manager)
- Building → Unit (one-to-many)
- Building → CommonArea (one-to-many)

For detailed schema, see [`packages/backend/prisma/schema.prisma`](packages/backend/prisma/schema.prisma)

---

## 🗺️ Roadmap

See [ROADMAP.md](ROADMAP.md) for detailed development plan.

**Upcoming Features:**

- [ ] Authentication & Authorization system
- [ ] Booking system for common areas
- [ ] Maintenance ticket management
- [ ] Advanced dashboard with analytics
- [ ] PDF report generation
- [ ] Email notifications
- [ ] Mobile app (React Native)
- [ ] Multi-tenant support
- [ ] Internationalization (i18n)

---

## 👤 Author

**Your Name**

- GitHub: [@daniseguraf](https://github.com/daniseguraf)
- LinkedIn: [linkedin.com/in/daniel-segura-fang](https://linkedin.com/in/daniel-segura-fang)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ and TypeScript

</div>
