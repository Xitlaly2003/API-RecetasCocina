import express from 'express';
import { getCuatrimestres, createCuatrimestre, getCuatrimestre, deleteCuatrimestre } from '../controllers/cuatrimestre.controller';

const router = express.Router();

router.get('/:id_usuario', getCuatrimestres);
router.post('/:id_usuario', createCuatrimestre);
router.get('/:id_usuario/:cuatrimestre_id', getCuatrimestre);
router.delete('/:id_usuario/:cuatrimestre_id', deleteCuatrimestre);

export default router;