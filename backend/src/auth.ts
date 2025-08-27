import { Request, Response, NextFunction } from 'express';

export enum Role {
  Admin = 'admin',
  User = 'user'
}

export function requireRole(role: Role) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.headers['x-role'];
    if (userRole === role) {
      return next();
    }
    res.status(403).json({ error: 'Forbidden' });
  };
}
