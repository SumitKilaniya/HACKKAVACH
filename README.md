# HACKKAVACH

A modular, layered security platform designed to detect, contain, and remediate threats across applications and infrastructure with real-time monitoring, alert visualization, and incident response capabilities.

## Overview

HACKKAVACH is a comprehensive security operations platform that provides:
- **Real-time threat detection** using signature-based and heuristic detection engines
- **Interactive dashboard** for alert visualization and incident management
- **Incident response tools** including SOS alerting, incident dispatch, and CCTV integration
- **Geo-spatial monitoring** with Mapbox integration for location-aware threat tracking
- **Multi-layered architecture** spanning from user-facing UI to infrastructure-level security controls

**Live Demo**: [Guardian Network Dashboard](https://guardian-network--connectwithsumi.replit.app/dashboard)

## Architecture

HACKKAVACH follows a 5-layer architectural model:

### 1. **Presentation Layer**
   - React + TypeScript web dashboard for operators
   - Real-time incident visualization and alert management
   - CLI tools for operational tasks
   - Technologies: React 18, TypeScript, Mapbox GL, Firebase

### 2. **API / Application Layer**
   - RESTful APIs for telemetry ingestion and alert retrieval
   - Authentication, authorization, and request validation
   - Rate-limiting and API security
   - Technologies: Node.js (NestJS/Express), JWT/OAuth2, OpenAPI

### 3. **Detection & Orchestration Layer**
   - Signature-based and heuristic detection engines
   - Alert enrichment and prioritization
   - Automated playbooks for containment and response
   - Rule management system
   - Technologies: Python, scikit-learn, PyTorch, Celery/RQ

### 4. **Data Layer**
   - PostgreSQL: Transactional data and metadata
   - Elasticsearch: Full-text search and analytics
   - Redis: Caching and job queues
   - S3-compatible storage: Artifacts and logs

### 5. **Infrastructure & Security Layer**
   - Containerization: Docker
   - Orchestration: Kubernetes + Helm
   - IaC: Terraform/CloudFormation
   - Secrets Management: HashiCorp Vault
   - Observability: Prometheus, Grafana, Loki

## Project Structure

```
hackkavach/
├── hack/
│   └── kavach-web/              # React-based security dashboard
│       ├── src/
│       │   ├── components/       # UI components
│       │   │   ├── layout/       # Header, Sidebar, Footer
│       │   │   ├── incidents/    # Incident management UI
│       │   │   ├── auth/         # Authentication components
│       │   │   ├── map/          # Geo-spatial visualization
│       │   │   └── common/       # Reusable UI components
│       │   ├── types/            # TypeScript interfaces
│       │   ├── utils/            # Formatters and constants
│       │   ├── styles/           # Global styles
│       │   ├── services/         # Firebase integration
│       │   ├── hooks/            # Custom React hooks
│       │   ├── App.tsx           # Root component
│       │   └── index.tsx         # Entry point
│       ├── public/               # Static assets
│       └── package.json
├── services/
│   └── api/                      # Backend API service
│       ├── src/
│       │   └── index.ts          # API entry point
│       └── package.json
├── package.json                  # Monorepo root
└── PROJECT_KAVACH.md             # Detailed project specification
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, TypeScript, Mapbox GL 3.0, Firebase 10.7 |
| **Backend APIs** | Node.js, NestJS/Express, TypeScript |
| **Detection/ML** | Python, scikit-learn, PyTorch |
| **Databases** | PostgreSQL, Elasticsearch, Redis |
| **Storage** | MinIO (S3-compatible) |
| **Messaging** | RabbitMQ, Redis Streams, Celery |
| **Infrastructure** | Docker, Kubernetes, Helm, Terraform |
| **CI/CD** | GitHub Actions |
| **Observability** | Prometheus, Grafana, Loki, Sentry |
| **Testing** | Jest, pytest, Cypress |

## Core Features

### Dashboard Components

- **Header** (`Header.tsx`): Top navigation and user controls
- **Sidebar** (`Sidebar.tsx`): Incident list, SOS button, CCTV simulator
- **IncidentList** (`IncidentList.tsx`): Real-time incident tracking with status updates and dispatch functionality
- **SOSButton** (`SOSButton.tsx`): Emergency alert trigger
- **CCTVSimulator** (`CCTVSimulator.tsx`): Simulates security camera feeds for testing
- **IncidentDetail** (`IncidentDetail.tsx`): Detailed incident investigation view
- **Map Component**: Geo-spatial threat visualization with Mapbox

### Key Functionality

- **Incident Management**: Track, filter, and dispatch security incidents
- **Real-time Alerts**: Color-coded alerts (red for critical SOS, orange for warnings)
- **Authentication**: Firebase-based user authentication with auth wrapper component
- **Status Tracking**: Monitor incident lifecycle from active → dispatched → resolved
- **Timestamp Formatting**: Automatic timestamp parsing and display

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Docker & Docker Compose (for local infrastructure)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SumitKilaniya/HACKKAVACH.git
   cd HACKKAVACH
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Development Setup**
   
   Install Turbo (monorepo orchestrator):
   ```bash
   npm install -g turbo
   ```

### Running the Application

**Development Mode** (all services):
```bash
npm run dev
```

**Build for Production**:
```bash
npm run build
```

**Run Tests**:
```bash
npm run test
```

**Lint Code**:
```bash
npm run lint
```

### Frontend (Kavach Web)

```bash
cd hack/kavach-web
npm install
npm start
```

The React application will start on `http://localhost:3000`

### Backend API

```bash
cd services/api
npm install
npm run dev
```

The API server will start in development mode with auto-reload enabled.

## Development Roadmap

### Short-term (MVP)
- ✅ Local development environment with Docker Compose
- ✅ Minimal Kubernetes Helm chart
- ⏳ Core telemetry ingestion
- ⏳ Signature-based detection engine
- ⏳ Alert dashboard and REST APIs

### Mid-term
- ML-based anomaly detection models
- Alert correlation and automation
- Enhanced authentication & RBAC
- Audit logging and fine-grained policies
- Identity provider integration

### Long-term
- Federated multi-tenant deployments
- SIEM & SOAR integrations
- Community rule repository
- Integration marketplace (Slack, PagerDuty, ServiceNow)
- Advanced SDK and API ecosystem

## Project Conventions

- **Language**: TypeScript for frontend and APIs; Python for ML/detection components
- **Branching**: GitHub Flow (feature branches → PRs into main)
- **CI/CD**: GitHub Actions for linting, tests, image builds, and Helm releases
- **Code Quality**: ESLint, TypeScript strict mode, unit and integration tests
- **Testing**: Jest/React Testing Library for frontend; pytest for backend; Cypress for E2E

## Contributing

Contributions are welcome! Please:

1. Create a feature branch from `main`
2. Write tests for new functionality
3. Ensure all tests pass (`npm run test`)
4. Lint your code (`npm run lint`)
5. Submit a pull request with a clear description

## Documentation

See [`PROJECT_KAVACH.md`](./PROJECT_KAVACH.md) for detailed architectural specifications, technology decisions, and implementation guidelines.

## License

[Add your license information here]

## Support & Contact

For issues, feature requests, or questions:
- Open an issue on GitHub
- Visit the live dashboard: [Guardian Network](https://guardian-network--connectwithsumi.replit.app/dashboard)

---

**Last Updated**: April 2026  
**Version**: 0.1.0 (MVP)