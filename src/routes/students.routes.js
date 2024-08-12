import { Router } from "express";
import * as studentsCtrl from '../controllers/students.controller';
import { authJwt } from '../middlewares';

const router = Router();

//Establecer ruta estudiantes mediante GET
router.get('/', studentsCtrl.getStudents);
router.get('/:studentId', studentsCtrl.getStudentById);
router.post('/', [authJwt.verifyToken, authJwt.isAdmin], studentsCtrl.createStudent)
router.put('/:studentId', [authJwt.verifyToken, authJwt.isAdmin], studentsCtrl.updateStudentById);
router.delete('/:studentId', [authJwt.verifyToken, authJwt.isAdmin], studentsCtrl.deleteStudentById);

export default router;