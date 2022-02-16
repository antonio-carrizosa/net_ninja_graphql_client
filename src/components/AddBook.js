import {  useQuery, useMutation } from "@apollo/client";
import useForm from "../hooks/useForm";
import { getAuthorsQuery, addBookMutation, getBooksQuery } from "../queries/queries";

const AddBook = () => {

  const { loading, error, data } = useQuery(getAuthorsQuery);  
  const [addBook, mutationStatus ] = useMutation(addBookMutation);
  // const [addBook, {loading, error, data} ] = useMutation(addBookMutation);

  const {formValues, handleOnChange} = useForm({name: '', genre: '', authorId: ''});  

  const onSubmit = (e) => {
    e.preventDefault();    
    if (formValues.authorId !== 'Select author'){
      addBook({variables: formValues, refetchQueries: [ { query: getBooksQuery} ] } );      
    }
  }  

  return (
    <div>     
      {data && (
        <form onSubmit={onSubmit} id="add-book">
          <div className="field">
            <label>Book name:</label>
            <input type="text" name="name" onChange={handleOnChange} />
          </div>
          <div className="field">
            <label>Genre:</label>
            <input type="text" name="genre" onChange={handleOnChange} />
          </div>
          <div className="field">
            <label>Author:</label>
            <select name="authorId" onChange={handleOnChange}>
              <option>Select author</option>

              { loading && <option disabled> Loading Authors... </option> }

              { data && data.authors.map( author => 
                            <option key={author.id} value={author.id}>
                                 { author.name } 
                            </option> )
              }

            </select>
          </div>
          <button>+</button>
        </form>
      )}      
      {error && <p> Error: {error.message} </p>}
    </div>
  );
};

export default AddBook;
