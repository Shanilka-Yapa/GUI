import React, { useEffect, useState } from 'react';

function App() {
    const [books, setBooks] = useState([]);//state to store books
    const [loading,setloading]=useState(true);//state for loading status
    const[error,setError]=useState(null);//state for errors

    // Fetch books from the API
    useEffect(() => {
        fetch('http://localhost:5435/book')  // Replace with your API URL
            .then((response) => {
                if(!response.ok) {
                    throw new Error ('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setBooks(data);//update books state with api data
                setloading(false);//set loading to false
            })
            .catch((err) => {
                setError(err.message);//set error msg
                setloading(false);//set loading to false
            });
    }, []);

    //render loading spinner or error msg
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    //render books directly
    console.log(books);
    return (
        <div>
            <h1>Book List</h1>
            <div style={{display:'flex', flexWrap:'wrap',gap:'16px'}}>
                {books.map((book)=>(
                    <div
                        key={book.book_id}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius:'8px',
                            padding:'16px',
                            width: '200px',
                            boxShadow:'0 2px 5px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <h3>{book.title}</h3>
                        <p>Price: ${book.price}</p>
                        <p>Amount: {book.amount}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default App;


