import { Router } from 'express';
import multer from 'multer';

/** Controllers. */
import OrphanagesController from './controllers/OrphanagesCrontroller';

/** Configs. */
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;