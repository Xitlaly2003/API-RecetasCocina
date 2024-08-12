"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCourseById = exports.requestEnrollment = exports.removeStudentFromCourse = exports.handleEnrollmentRequest = exports.getStudentRequests = exports.getPendingRequests = exports.getCoursesForStudent = exports.getCoursesByDivision = exports.getCourses = exports.getCourseById = exports.deleteCourseById = exports.createCourse = void 0;
var _Courses = _interopRequireDefault(require("../models/Courses"));
var _Divisions = _interopRequireDefault(require("../models/Divisions"));
var _Users = _interopRequireDefault(require("../models/Users"));
var _Roles = _interopRequireDefault(require("../models/Roles"));
var _EnrollmentRequest = _interopRequireDefault(require("../models/EnrollmentRequest.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Asegúrate de tener este modelo para gestionar las solicitudes de inscripción

// Obtener todos los cursos
var getCourses = exports.getCourses = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var cursos;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _Courses["default"].find().populate('division', 'name').populate('professor', 'name email').populate('students', 'name email');
        case 3:
          cursos = _context.sent;
          res.json(cursos);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: 'Error al obtener los cursos',
            error: _context.t0.message
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getCourses(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Obtener todos los cursos en los que un estudiante está inscrito
var getCoursesForStudent = exports.getCoursesForStudent = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var studentId, student, studentRole, isStudent, courses;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          studentId = req.userId; // Obtén el ID del estudiante del token
          _context2.prev = 1;
          _context2.next = 4;
          return _Users["default"].findById(studentId).populate('roles');
        case 4:
          student = _context2.sent;
          _context2.next = 7;
          return _Roles["default"].findOne({
            name: "student"
          });
        case 7:
          studentRole = _context2.sent;
          isStudent = student.roles.some(function (role) {
            return role._id.equals(studentRole._id);
          });
          if (isStudent) {
            _context2.next = 11;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: "El usuario no tiene rol de estudiante"
          }));
        case 11:
          _context2.next = 13;
          return _Courses["default"].find({
            students: studentId
          }).populate('division', 'name').populate('professor', 'name email').populate('students', 'name email');
        case 13:
          courses = _context2.sent;
          res.json(courses);
          _context2.next = 20;
          break;
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            message: 'Error al obtener los cursos',
            error: _context2.t0.message
          });
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 17]]);
  }));
  return function getCoursesForStudent(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Crear un curso
var createCourse = exports.createCourse = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, name, description, divisionName, duration, isActive, professorEmail, division, professor, professorRole, isProfessor, newCourse, savedCourse;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, name = _req$body.name, description = _req$body.description, divisionName = _req$body.divisionName, duration = _req$body.duration, isActive = _req$body.isActive, professorEmail = _req$body.professorEmail; // Verificar que la división exista
          _context3.next = 4;
          return _Divisions["default"].findOne({
            name: divisionName
          });
        case 4:
          division = _context3.sent;
          if (division) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Division no encontrada"
          }));
        case 7:
          _context3.next = 9;
          return _Users["default"].findOne({
            email: professorEmail
          }).populate('roles');
        case 9:
          professor = _context3.sent;
          if (professor) {
            _context3.next = 12;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Profesor no encontrado"
          }));
        case 12:
          _context3.next = 14;
          return _Roles["default"].findOne({
            name: "professor"
          });
        case 14:
          professorRole = _context3.sent;
          isProfessor = professor.roles.some(function (role) {
            return role._id.equals(professorRole._id);
          });
          if (isProfessor) {
            _context3.next = 18;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "El usuario no tiene rol de profesor"
          }));
        case 18:
          if (professor.division.equals(division._id)) {
            _context3.next = 20;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "El profesor no pertenece a la misma division que el curso"
          }));
        case 20:
          // Crear un nuevo curso
          newCourse = new _Courses["default"]({
            name: name,
            description: description,
            division: division._id,
            duration: duration,
            isActive: isActive,
            professor: professor._id
          });
          _context3.next = 23;
          return newCourse.save();
        case 23:
          savedCourse = _context3.sent;
          res.status(201).json(savedCourse);
          _context3.next = 30;
          break;
        case 27:
          _context3.prev = 27;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: _context3.t0.message
          });
        case 30:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 27]]);
  }));
  return function createCourse(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Obtener un curso por su ID
var getCourseById = exports.getCourseById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var courseId, course;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          courseId = req.params.courseId;
          _context4.prev = 1;
          _context4.next = 4;
          return _Courses["default"].findById(courseId).populate('division', 'name').populate('professor', 'name email');
        case 4:
          course = _context4.sent;
          if (course) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: 'Curso no encontrado'
          }));
        case 7:
          res.json(course);
          _context4.next = 13;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          res.status(500).json({
            message: 'Error al obtener el curso',
            error: _context4.t0.message
          });
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 10]]);
  }));
  return function getCourseById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// Obtener cursos por nombre de división
var getCoursesByDivision = exports.getCoursesByDivision = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var divisionName, division, courses;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          divisionName = req.body.divisionName;
          _context5.prev = 1;
          _context5.next = 4;
          return _Divisions["default"].findOne({
            name: divisionName
          });
        case 4:
          division = _context5.sent;
          if (division) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: 'División no encontrada'
          }));
        case 7:
          _context5.next = 9;
          return _Courses["default"].find({
            division: division._id
          }).populate('division', 'name').populate('professor', 'name email');
        case 9:
          courses = _context5.sent;
          if (!(courses.length === 0)) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: 'No se encontraron cursos para la división especificada'
          }));
        case 12:
          res.json(courses);
          _context5.next = 18;
          break;
        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json({
            message: 'Error al obtener los cursos',
            error: _context5.t0.message
          });
        case 18:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 15]]);
  }));
  return function getCoursesByDivision(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// Actualizar un curso por su ID
var updateCourseById = exports.updateCourseById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var courseId, _req$body2, name, description, divisionName, duration, isActive, professorEmail, division, professor, professorRole, isProfessor, updatedCourse;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          courseId = req.params.courseId;
          _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, divisionName = _req$body2.divisionName, duration = _req$body2.duration, isActive = _req$body2.isActive, professorEmail = _req$body2.professorEmail;
          _context6.prev = 2;
          _context6.next = 5;
          return _Divisions["default"].findOne({
            name: divisionName
          });
        case 5:
          division = _context6.sent;
          if (division) {
            _context6.next = 8;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "Division no encontrada"
          }));
        case 8:
          _context6.next = 10;
          return _Users["default"].findOne({
            email: professorEmail
          }).populate('roles');
        case 10:
          professor = _context6.sent;
          if (professor) {
            _context6.next = 13;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "Profesor no encontrado"
          }));
        case 13:
          _context6.next = 15;
          return _Roles["default"].findOne({
            name: "professor"
          });
        case 15:
          professorRole = _context6.sent;
          isProfessor = professor.roles.some(function (role) {
            return role._id.equals(professorRole._id);
          });
          if (isProfessor) {
            _context6.next = 19;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "El usuario no tiene rol de profesor"
          }));
        case 19:
          if (professor.division.equals(division._id)) {
            _context6.next = 21;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "El profesor no pertenece a la misma division que el curso"
          }));
        case 21:
          _context6.next = 23;
          return _Courses["default"].findByIdAndUpdate(courseId, {
            name: name,
            description: description,
            division: division._id,
            duration: duration,
            isActive: isActive,
            professor: professor._id
          }, {
            "new": true
          });
        case 23:
          updatedCourse = _context6.sent;
          if (updatedCourse) {
            _context6.next = 26;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            message: 'Curso no encontrado'
          }));
        case 26:
          res.json(updatedCourse);
          _context6.next = 32;
          break;
        case 29:
          _context6.prev = 29;
          _context6.t0 = _context6["catch"](2);
          res.status(400).json({
            message: 'Error al actualizar el curso',
            error: _context6.t0.message
          });
        case 32:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 29]]);
  }));
  return function updateCourseById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

// Eliminar un curso por su ID
var deleteCourseById = exports.deleteCourseById = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var courseId, deletedCourse;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          courseId = req.params.courseId;
          _context7.prev = 1;
          _context7.next = 4;
          return _Courses["default"].findByIdAndDelete(courseId);
        case 4:
          deletedCourse = _context7.sent;
          if (deletedCourse) {
            _context7.next = 7;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: 'Curso no encontrado'
          }));
        case 7:
          res.json({
            message: 'Curso eliminado'
          });
          _context7.next = 13;
          break;
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](1);
          res.status(500).json({
            message: 'Error al eliminar el curso',
            error: _context7.t0.message
          });
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 10]]);
  }));
  return function deleteCourseById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

// Solicitar inscripción a un curso (Solo Estudiante)
var requestEnrollment = exports.requestEnrollment = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var courseId, studentId, course, student, studentRole, isStudent, newRequest, savedRequest;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          courseId = req.params.courseId;
          studentId = req.userId; // Asume que el ID del estudiante se obtiene del token
          _context8.prev = 2;
          _context8.next = 5;
          return _Courses["default"].findById(courseId);
        case 5:
          course = _context8.sent;
          if (course) {
            _context8.next = 8;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: "Curso no encontrado"
          }));
        case 8:
          _context8.next = 10;
          return _Users["default"].findById(studentId).populate('roles');
        case 10:
          student = _context8.sent;
          _context8.next = 13;
          return _Roles["default"].findOne({
            name: "student"
          });
        case 13:
          studentRole = _context8.sent;
          isStudent = student.roles.some(function (role) {
            return role._id.equals(studentRole._id);
          });
          if (isStudent) {
            _context8.next = 17;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: "El usuario no tiene rol de estudiante"
          }));
        case 17:
          // Crear una nueva solicitud de inscripción
          newRequest = new _EnrollmentRequest["default"]({
            course: courseId,
            student: studentId,
            status: 'pending'
          });
          _context8.next = 20;
          return newRequest.save();
        case 20:
          savedRequest = _context8.sent;
          res.status(201).json(savedRequest);
          _context8.next = 27;
          break;
        case 24:
          _context8.prev = 24;
          _context8.t0 = _context8["catch"](2);
          res.status(500).json({
            message: 'Error al solicitar inscripción',
            error: _context8.t0.message
          });
        case 27:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[2, 24]]);
  }));
  return function requestEnrollment(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

// Obtener todas las solicitudes pendientes para los cursos
var getPendingRequests = exports.getPendingRequests = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var professorId, courses, courseIds, pendingRequests;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          professorId = req.userId; // Asume que el ID del profesor se obtiene del token
          // Obtener todos los cursos del profesor
          _context9.next = 4;
          return _Courses["default"].find({
            professor: professorId
          });
        case 4:
          courses = _context9.sent;
          if (!(courses.length === 0)) {
            _context9.next = 7;
            break;
          }
          return _context9.abrupt("return", res.status(404).json({
            message: "No se encontraron cursos para el profesor."
          }));
        case 7:
          // Obtener todas las solicitudes pendientes para los cursos del profesor
          courseIds = courses.map(function (course) {
            return course._id;
          });
          _context9.next = 10;
          return _EnrollmentRequest["default"].find({
            course: {
              $in: courseIds
            },
            status: 'pending'
          }).populate('course', 'name').populate('student', 'name email');
        case 10:
          pendingRequests = _context9.sent;
          res.json(pendingRequests);
          _context9.next = 17;
          break;
        case 14:
          _context9.prev = 14;
          _context9.t0 = _context9["catch"](0);
          res.status(500).json({
            message: 'Error al obtener solicitudes pendientes',
            error: _context9.t0.message
          });
        case 17:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 14]]);
  }));
  return function getPendingRequests(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

// Aprobar o rechazar una solicitud (Solo Profesor)
var handleEnrollmentRequest = exports.handleEnrollmentRequest = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var requestId, status, request, course, professorId, updatedRequest, courseUpdate;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          requestId = req.params.requestId;
          status = req.body.status;
          _context10.prev = 2;
          _context10.next = 5;
          return _EnrollmentRequest["default"].findById(requestId).populate('course');
        case 5:
          request = _context10.sent;
          if (request) {
            _context10.next = 8;
            break;
          }
          return _context10.abrupt("return", res.status(404).json({
            message: "Solicitud no encontrada"
          }));
        case 8:
          // Verificar que el curso exista
          course = request.course;
          if (course) {
            _context10.next = 11;
            break;
          }
          return _context10.abrupt("return", res.status(404).json({
            message: "Curso no encontrado"
          }));
        case 11:
          // Verificar que el usuario sea un profesor del curso
          professorId = req.userId;
          if (course.professor.equals(professorId)) {
            _context10.next = 14;
            break;
          }
          return _context10.abrupt("return", res.status(403).json({
            message: "Acceso no autorizado"
          }));
        case 14:
          if (['approved', 'rejected'].includes(status)) {
            _context10.next = 16;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            message: "Estado inválido"
          }));
        case 16:
          // Actualizar el estado de la solicitud
          request.status = status;
          _context10.next = 19;
          return request.save();
        case 19:
          updatedRequest = _context10.sent;
          if (!(status === 'approved')) {
            _context10.next = 29;
            break;
          }
          _context10.next = 23;
          return _Courses["default"].findByIdAndUpdate(course._id, {
            $addToSet: {
              students: request.student
            }
          }, {
            "new": true
          });
        case 23:
          courseUpdate = _context10.sent;
          if (courseUpdate) {
            _context10.next = 26;
            break;
          }
          return _context10.abrupt("return", res.status(500).json({
            message: "Error al actualizar el curso"
          }));
        case 26:
          // Respond with the updated course
          res.json({
            request: updatedRequest,
            course: courseUpdate
          });
          _context10.next = 30;
          break;
        case 29:
          // Respond with the updated request if not approved
          res.json(updatedRequest);
        case 30:
          _context10.next = 36;
          break;
        case 32:
          _context10.prev = 32;
          _context10.t0 = _context10["catch"](2);
          console.error("Error en handleEnrollmentRequest:", _context10.t0);
          res.status(500).json({
            message: 'Error al manejar la solicitud',
            error: _context10.t0.message
          });
        case 36:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[2, 32]]);
  }));
  return function handleEnrollmentRequest(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

// Eliminar un estudiante de un curso (Solo Profesor)
var removeStudentFromCourse = exports.removeStudentFromCourse = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var courseId, studentEmail, course, professorId, student, isStudentEnrolled, updatedCourse;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          courseId = req.params.courseId;
          studentEmail = req.body.studentEmail;
          _context11.prev = 2;
          _context11.next = 5;
          return _Courses["default"].findById(courseId).populate('professor', 'email');
        case 5:
          course = _context11.sent;
          if (course) {
            _context11.next = 8;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            message: "Curso no encontrado"
          }));
        case 8:
          // Verificar que el usuario sea un profesor del curso
          professorId = req.userId;
          if (course.professor._id.equals(professorId)) {
            _context11.next = 11;
            break;
          }
          return _context11.abrupt("return", res.status(403).json({
            message: "Acceso no autorizado"
          }));
        case 11:
          _context11.next = 13;
          return _Users["default"].findOne({
            email: studentEmail
          });
        case 13:
          student = _context11.sent;
          if (student) {
            _context11.next = 16;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            message: "Estudiante no encontrado"
          }));
        case 16:
          // Verificar que el estudiante esté inscrito en el curso
          isStudentEnrolled = course.students.some(function (studentId) {
            return studentId.equals(student._id);
          });
          if (isStudentEnrolled) {
            _context11.next = 19;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            message: "El estudiante no está inscrito en el curso"
          }));
        case 19:
          _context11.next = 21;
          return _Courses["default"].findByIdAndUpdate(courseId, {
            $pull: {
              students: student._id
            }
          }, {
            "new": true
          }).populate('students', 'name email');
        case 21:
          updatedCourse = _context11.sent;
          res.json(updatedCourse);
          _context11.next = 28;
          break;
        case 25:
          _context11.prev = 25;
          _context11.t0 = _context11["catch"](2);
          res.status(500).json({
            message: 'Error al eliminar al estudiante del curso',
            error: _context11.t0.message
          });
        case 28:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[2, 25]]);
  }));
  return function removeStudentFromCourse(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

// Obtener cursos en los que el estudiante ha hecho solicitudes pendientes
var getStudentRequests = exports.getStudentRequests = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var studentId, requests, courseIds, courses, coursesWithRequests;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          studentId = req.userId; // Asume que el ID del estudiante se obtiene del token
          // Obtener todas las solicitudes pendientes del estudiante
          _context12.next = 4;
          return _EnrollmentRequest["default"].find({
            student: studentId,
            status: 'pending'
          }).populate('course', 'name description duration');
        case 4:
          requests = _context12.sent;
          if (!(requests.length === 0)) {
            _context12.next = 7;
            break;
          }
          return _context12.abrupt("return", res.status(404).json({
            message: "No se encontraron solicitudes pendientes para el estudiante."
          }));
        case 7:
          // Obtener cursos únicos basados en las solicitudes
          courseIds = _toConsumableArray(new Set(requests.map(function (request) {
            return request.course._id;
          })));
          _context12.next = 10;
          return _Courses["default"].find({
            _id: {
              $in: courseIds
            }
          });
        case 10:
          courses = _context12.sent;
          // Añadir estado de solicitud pendiente a cada curso
          coursesWithRequests = courses.map(function (course) {
            var request = requests.find(function (request) {
              return request.course._id.equals(course._id);
            });
            return _objectSpread(_objectSpread({}, course._doc), {}, {
              // Propiedades del curso
              pendingRequest: request ? true : false // Añadir campo para solicitudes pendientes
            });
          });
          res.json(coursesWithRequests);
          _context12.next = 18;
          break;
        case 15:
          _context12.prev = 15;
          _context12.t0 = _context12["catch"](0);
          res.status(500).json({
            message: 'Error al obtener los cursos con solicitudes pendientes del estudiante',
            error: _context12.t0.message
          });
        case 18:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 15]]);
  }));
  return function getStudentRequests(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();