const express = require('express');
const db = require('./models');
/* const Sequelize = require('sequelize'); */
/* const mysql = require('mysql'); */

const app = express();
db.sequelize.sync();
/* 
const connection = mysql.createConnection({
	host: '127.0.0.1', // 호스트 주소
	post: 3306,
	user: 'root', // mysql user
	password: 'ghkdtkd112', // mysql password
	schema: 'sns', // mysql 데이터베이스
});
connection.connect(() => {
	console.log('ok');
}); */

/**
 * initial tasks except Koa middlewares
 */

/* const sequelize = new Sequelize('sns', 'root', 'ghkdtkd112', {
	host: 'localhost',
	dialect: 'mysql',
}); */

app.listen(5005, () => {
	console.log('sequelize');
});
