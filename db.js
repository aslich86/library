const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'aslich', // Ganti dengan username MySQL Anda
  password: '1234', // Ganti dengan password MySQL Anda
  database: 'perpustakaan', // Ganti dengan nama database MySQL Anda
});

module.exports = pool;
