import { gql, useQuery } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBook = () => {

  const { loading, error, data } = useQuery(getAuthorsQuery);  

  return (
    <div>     
      {data && (
        <form id="add-book">
          <div className="field">
            <label>Book name:</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Genre:</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Author:</label>
            <select>
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
