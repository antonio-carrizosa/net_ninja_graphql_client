import {  useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({bookId}) => {    

    const  { loading, error, data } = useQuery(getBookQuery, { variables: {id: bookId}});    

  return (
   <>
    { loading && <div> Loading ... </div> }
    { data && <>  
              <h2> { data.book.name } </h2>
              <p> { data.book.genre }  </p>
              <p> {data.book.author.name} </p>
              <p> All books by this author: </p>
              <ul className="other-books">
                { data.book.author.books.map(book => 
                              <li key={book.id}> { book.name } </li>)
                }
              </ul>
              </> }
   </>
  )
}

export default BookDetails