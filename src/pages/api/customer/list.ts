import mysql from 'mysql';

const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

connection.connect(function (err: any) {
  if (err) {
      return console.error('error: ' + err.message);
  }
  console.log('MySQL Connection Successful.');
});

function getCustomers(req: any, res: any) {
    const query = `select * from \`${process.env.database}\`.customer`;
    connection.query(query, function (error, result, fields){
        if (error) throw error;
        res.status(200).json(result);
    })
}

export default getCustomers;