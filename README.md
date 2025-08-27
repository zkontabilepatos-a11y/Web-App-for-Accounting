# Web App for Accounting

This repository hosts a sample accounting platform built with an **API‑first** mindset and an **Agile** development workflow. The project is intentionally lightweight and serves as a starting point for experimenting with integrations such as Stripe, Plaid and Auth0.

## Technology Stack

### Backend

- **Node.js** + **TypeScript** using the Express.js framework
- PostgreSQL (via the `pg` driver)
- Role‑based access control middleware example

### Frontend

- **React** + **TypeScript**
- Material‑UI components
- Redux state management

## Getting Started

### Backend

```bash
cd backend
npm install       # install dependencies
npm run dev       # start development server
```

The backend exposes a simple health check at `/api/status` and a protected route at `/api/admin` which expects an `x-role: admin` header.

### Frontend

```bash
cd frontend
npm install       # install dependencies
npm run start     # launch Vite dev server
```

The frontend renders a basic dashboard component and can be expanded with additional views and Redux slices.

## Agile Workflow

Development proceeds in small iterations:

1. Define user stories and acceptance criteria.
2. Implement backend and frontend tasks separately through feature branches.
3. Ensure code is covered with tests and linting before merging.
4. Demonstrate increments to stakeholders for feedback.

## Security and Compliance Considerations

- Enforce HTTPS (TLS 1.3) and encrypt sensitive data at rest using AES‑256.
- Use managed key services (e.g. AWS KMS) for encryption keys.
- Implement RBAC and audit logging for all privileged actions.
- Plan for SOC 2 and PCI DSS compliance as the platform grows.

## Performance Targets

- Page load time: `<2s` for dashboard pages
- API response time: `<500ms` for standard queries
- Database queries: `<100ms` for simple operations

## License

This project is released under the [MIT License](LICENSE.md).
