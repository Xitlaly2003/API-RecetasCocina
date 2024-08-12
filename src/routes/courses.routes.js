import { Router } from "express";
import * as courseController from '../controllers/courses.controller';
import { verifyToken, isStudent, isProfessor, isAdminOrProfessor } from '../middlewares/authJwt';

const router = Router();

//Establecer ruta cursos mediante GET
router.get('/', courseController.getCourses); //YA
router.get('/my-courses', [verifyToken, isStudent], courseController.getCoursesForStudent); //YA
router.post('/', [verifyToken, isAdminOrProfessor], courseController.createCourse); //YA
router.get('/:courseId', courseController.getCourseById); //YA
router.post('/by-division', [verifyToken, isStudent], courseController.getCoursesByDivision);
router.put('/:courseId', [verifyToken, isAdminOrProfessor], courseController.updateCourseById); //YA
router.delete('/:courseId', [verifyToken, isAdminOrProfessor], courseController.deleteCourseById); //YA
router.post('/:courseId/request', [verifyToken, isStudent], courseController.requestEnrollment); //YA
router.get('/pending/requests', [verifyToken, isProfessor], courseController.getPendingRequests); //YA
router.put('/request/:requestId', [verifyToken, isProfessor], courseController.handleEnrollmentRequest); //YA
router.put('/remove-student/:courseId', [verifyToken, isProfessor], courseController.removeStudentFromCourse); //YA
router.get('/student/requests', [verifyToken, isStudent], courseController.getStudentRequests); //YA

export default router;