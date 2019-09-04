var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cursoRouter = require('./routes/curso');
var professorRouter = require('./routes/professor');
var turmaRouter = require('./routes/turma');
var alunoRouter = require('./routes/aluno');
var avaliacaoRouter = require('./routes/avaliacao');
var notaRouter = require('./routes/nota');

var app = express();

const database = require('./config/database');
database('mongodb://localhost:27017/4not-2019-2');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/curso', cursoRouter);
app.use('/professor', professorRouter);
app.use('/turma', turmaRouter);
app.use('/aluno', alunoRouter);
app.use('/avaliacao', avaliacaoRouter);
app.use('/nota', notaRouter);

module.exports = app;
