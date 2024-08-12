"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var courseController = _interopRequireWildcard(require("../controllers/courses.controller"));
var _authJwt = require("../middlewares/authJwt");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var router = (0, _express.Router)();

//Establecer ruta cursos mediante GET
router.get('/', courseController.getCourses); //YA
router.get('/my-courses', [_authJwt.verifyToken, _authJwt.isStudent], courseController.getCoursesForStudent); //YA
router.post('/', [_authJwt.verifyToken, _authJwt.isAdminOrProfessor], courseController.createCourse); //YA
router.get('/:courseId', courseController.getCourseById); //YA
router.post('/by-division', [_authJwt.verifyToken, _authJwt.isStudent], courseController.getCoursesByDivision);
router.put('/:courseId', [_authJwt.verifyToken, _authJwt.isAdminOrProfessor], courseController.updateCourseById); //YA
router["delete"]('/:courseId', [_authJwt.verifyToken, _authJwt.isAdminOrProfessor], courseController.deleteCourseById); //YA
router.post('/:courseId/request', [_authJwt.verifyToken, _authJwt.isStudent], courseController.requestEnrollment); //YA
router.get('/pending/requests', [_authJwt.verifyToken, _authJwt.isProfessor], courseController.getPendingRequests); //YA
router.put('/request/:requestId', [_authJwt.verifyToken, _authJwt.isProfessor], courseController.handleEnrollmentRequest); //YA
router.put('/remove-student/:courseId', [_authJwt.verifyToken, _authJwt.isProfessor], courseController.removeStudentFromCourse); //YA
router.get('/student/requests', [_authJwt.verifyToken, _authJwt.isStudent], courseController.getStudentRequests); //YA
var _default = exports["default"] = router;