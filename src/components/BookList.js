import {gql, useQuery} from "@apollo/client";

const getBooksQuery = gql ` 
  {
    books{
      name
      id
    }
  }
  `;

const BookList = () => {

  const { loading, error, data } = useQuery(getBooksQuery);  

  return (
    <div>
      { loading && <div> Loading... </div> }

      {data && <ul id="book-list">
        
        { data.books.map( book => <li key={book.id}> { book.name } </li> ) }
        
      </ul>}

      {error && !loading && <p> Error: {error.message} </p> }
    </div>
  )
}

export default BookList;