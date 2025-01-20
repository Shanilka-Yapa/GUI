import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app=express();

app.use(express.json());
app.use(cors());

//---------------------------
//MySQL database connection
const dbConfig={
    host:'bbditfo1uidjot2cquil-mysql.services.clever-cloud.com',       //Replace with your MySQL host
    user:'unifsqjndlrncxhc',            //Replace with your MySQL username
    password: 'lafI7CxwAFzMmAhGaIV6',           //Replace with your MySQL password
    database: 'bbditfo1uidjot2cquil',    //Replace with your MySQL database name
};
//Create a MySQL connection
const connection=mysql.createConnection(dbConfig);

//connect to the MySQL database
connection.connect((err)=>{
    if(err){
        console.error('Error connecting to MySQL:',err.message);
    }else {
        console.log('Connected to MySQL database!');
    }

});

//-------------------------------------

app.get('/book', (req, res) => {
    const query = 'SELECT * FROM Books'; // SQL query to fetch all books
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching books:', err.message);
            res.status(500).json({ error: 'Failed to fetch books from database' });
        } else {
            res.status(200).json(results); // Send the results as a JSON response
        }
    });
});

app.get('/about',(req, res)=>{
    res.send("About us");
})

app.get('/',(req, res)=>{
    res.send("Hello world");
})

app.listen(5435,()=>{
    console.log("Server is running on port 5435");
})