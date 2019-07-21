import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleare from './app/middlewares/auth';

const upload = multer(multerConfig);
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});
routes.use(authMiddleare);
routes.put('/users', UserController.update);

export default module.exports = routes;
