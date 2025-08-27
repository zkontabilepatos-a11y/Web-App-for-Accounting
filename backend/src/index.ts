import express from 'express';
import { requireRole, Role } from './auth';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/status', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/admin', requireRole(Role.Admin), (_req, res) => {
  res.json({ secret: '42' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
