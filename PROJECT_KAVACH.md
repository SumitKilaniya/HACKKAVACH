# KAVACH — Project Overview

KAVACH (HACKKAVACH) is a modular, layered security platform designed to detect, contain, and remediate threats across applications and infrastructure. It provides real-time monitoring, signature- and ML-based detection, automated containment playbooks, and integrations for SOC workflows.

## The 5 Layers (Architecture)

1. Presentation Layer
   - User-facing UI (web dashboard) and CLI for operators.
   - Focus: visualization of alerts, investigations, and manual controls for containment and remediation.
   - Technologies: React + TypeScript, Tailwind CSS, CLI via Node.js or Python click.

2. Application / API Layer
   - RESTful and gRPC APIs that expose system capabilities to the UI and external integrations.
   - Authentication, authorization, request validation, rate-limiting.
   - Technologies: Node.js (NestJS/Express) or Python (FastAPI), OpenAPI, JWT/OAuth2.

3. Detection & Orchestration (Business Logic) Layer
   - Core detection engines (signature-based, heuristics, ML models) and correlation/orchestration logic.
   - Alert enrichment, prioritization, automated playbooks (containment, quarantine, rollback), and rule management.
   - Technologies: Python (scikit-learn, PyTorch), rule engines, Celery/RQ for background jobs.

4. Data Layer
   - Stores telemetry, alerts, events, configuration, and model artifacts.
   - Components: PostgreSQL for transactional data and metadata, Elasticsearch for search and analytics, Redis for caching and queues, S3-compatible object storage for artifacts and logs.

5. Infrastructure & Security Layer
   - Deployment, secrets management, observability, and hardening controls.
   - IaC (Terraform/CloudFormation), containerization (Docker), orchestration (Kubernetes + Helm), secrets (HashiCorp Vault), policy-as-code (OPA/Gatekeeper).
   - Monitoring: Prometheus, Grafana, and centralized logging (Loki/Fluentd).

## Tech Stack (proposed)

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend / APIs: Node.js (NestJS) or Python (FastAPI), TypeScript/Python
- Detection / ML: Python, scikit-learn, PyTorch, Jupyter for model experiments
- Datastores: PostgreSQL, Elasticsearch, Redis, MinIO (S3-compatible)
- Messaging / Jobs: RabbitMQ / Redis Streams, Celery or RQ
- Infrastructure: Docker, Kubernetes, Helm, Terraform
- CI/CD: GitHub Actions (linting, tests, image build/push, helm chart release)
- Security: OpenID Connect / OAuth2, JWT, HashiCorp Vault, OPA
- Observability: Prometheus, Grafana, Loki, Sentry
- Testing: pytest, jest, supertest, cypress (E2E)

## Goals

Short-term (MVP)
- Provide an installable local development environment (Docker Compose) and a minimal Kubernetes Helm chart.
- Implement core telemetry ingestion, simple signature-based detection, alerting, and a web dashboard for viewing alerts.
- Expose REST APIs for telemetry ingestion and alert retrieval.

Mid-term
- Add ML-based anomaly detection models, alert correlation, and automatic playbooks for containment.
- Harden authentication and RBAC; integrate with identity providers.
- Implement role-based views, audit logging, and fine-grained policies.

Long-term
- Support federated deployments and multi-tenant operation for managed SOC offerings.
- Integrate with SIEMs and orchestration tools (SOAR), provide rich SDKs and integrations (Slack, PagerDuty, ServiceNow).
- Build a community-driven rule repository, model zoo, and marketplace for detection signatures and playbooks.

## Contributors & Conventions

- Code: TypeScript for frontend and main APIs; Python for detection/ML components.
- Branching: GitHub Flow (feature branches, PRs into main), protected main branch with required reviews and CI.
- Testing: Unit tests for core logic, integration tests for APIs, E2E for user journeys.

---

This file is the canonical project description for local development and for onboarding contributors. Keep it updated as architecture or priorities change.