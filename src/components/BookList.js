import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div>
      
      <ul id="book-list">
      {loading && <div> Loading... </div>}

      {data && 
          data.books.map((book) => (
            <li key={book.id} onClick={ () => setSelectedBook(book.id) }> {book.name} </li>
          ))
          }          
      </ul>

      <div id="book-details">      
      { !selectedBook && <div> No book selected ... </div> }
      { selectedBook && <BookDetails bookId={selectedBook} />}
      </div>
      
      {error && !loading && <p> Error: {error.message} </p>}
    </div>
  );
};

export default BookList;
