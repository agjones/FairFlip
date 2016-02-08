var app = require('express');
var router = app.Router();
var path = require('path');
//var Student = require('../models/Student');

// This router is mounted at /api....so /student here translate to /api/student

/*router.route('/student')
    .get(function (req, res, next) {
        Student.find(function (err, students) {
            if (err) next(err);
            else res.json(students);
        });
    })
    .post(function (req, res, next) {
        Student.create(req.body, function (err, student) {
            console.log(req.body);
            if (err) next(err);
            else res.json(student);
        });
    });


router.route('/teacher/:teacher_id')
    .delete(function (req, res, next) {
        Lesson.remove({
            _id: req.params.lesson_id
        }, function (err) {
            if (err) next(err);
            else res.sendStatus(204);
        });
    })
    .put(function (req, res, next) {
        Teacher.findByIdAndUpdate(req.params.teacher_id, req.body, function (err, teacher) {
            if (err) next(err);
            if (!teacher) {
                err = new Error("Teacher Not Found");
                err.status = 404;
                next(err);
            } else res.json(teacher);
        });
    });


r
// 404 handler
router.use(function (req, res, next) {
    var err = new Error("Invalid API route");
    err.status = 404;
    next(err);
});

// prints stacktrace only in dev mode
router.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);

    if (process.env.NODE_ENV == "development" || app.get('env') == "development")
        res.json({
            "status": err.status,
            "message": err.message,
            "errors": err.errors,
            "stack": err.stack
        });
    else res.json({
        "status": err.status,
        "errors": err.errors,
        "message": err.message
    });
});*/

module.exports = router;