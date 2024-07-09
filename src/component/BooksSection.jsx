
import { useFormik } from "formik"
import {LibraryContext} from './Dashboard'
import { useContext } from "react"
const BooksSection = () => {
    const {bookList,isEdit, setTitle, setIsbn, setAuthor, setPublishDdate,
        addNewBook
    } = useContext(LibraryContext)

    const validate = values => {
        const errors = {};
      
        if (!values.title) {
          errors.title = '*Book title is required';
        }
      
        if (!values.isbn) {
          errors.isbn = '*ISBN num is required';
        }
      
        if (!values.author) {
          errors.author = '*Author name is required';
        }
        if (!values.publish) {
            errors.publish = '*Publish Date is required';
          }
        // return the errors object
        return errors;
      }    

      const style = {
        color : "red",
        fontweight : "italic"
      }

     const book_formik = useFormik({
        initialValues: {
          title: '',
          isbn: '',
          author: '',
          publish: ''
        },
        validate, // validate function
        onSubmit: values => {
          console.log(values);

        addNewBook(values)

        //Resetting to Blank values in Form
        book_formik.resetForm()
        }
      });

    let i = 1;

    return (
        <div>
            <div className="row">
            <div className="col-md-6" style={{ height: "500px", width: "50%", overflowX: "auto" }} >
            {/* */}
            <div className="row" key={i++}>
                {bookList.map(book => {
                    return (
                        <div className="card" style={{ width: "18rem" }} key={book.isbn}>
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">By {book.author}</h6>
                                <p className="card-text">ISBN# {book.isbn}</p>
                                <p className="card-subtitle mb-2 text-muted">Publish Date: {book.publish_date}</p>
                                <a href="#" className="card-link">Edit</a>
                                <a href="#" className="card-link">Delete</a>
                            </div>
                        </div>
                    )
                })
                }
                </div>
            </div>
            <div className="col-md-6" style={{ width: "50%" }}>BOOKS
                <form onSubmit={book_formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title_lbl">Book Title</label>
                        <input type="text" className="form-control" placeholder="Enter book Title"
                            id="title"
                            // value={book_formik.values.title}
                            // onChange={book_formik.handleChange}
                            // onBlur={book_formik.handleBlur} 
                            {...book_formik.getFieldProps('title')}/>
                    </div>
                    {book_formik.touched.title && book_formik.errors.title ? <div style={style}>{book_formik.errors.title}</div> : null}
                    <br />
                    <div className="form-group">
                        <label htmlFor="author_lbl">Author</label>
                        <input type="text" className="form-control" placeholder="Enter book Author"
                            id="author"
                            // value={book_formik.values.author}
                            // onChange={book_formik.handleChange}
                            // onBlur={book_formik.handleBlur}
                            {...book_formik.getFieldProps('author')}/>
                    </div>
                    {book_formik.touched.isbn && book_formik.errors.isbn ? <div style={style}>{book_formik.errors.author}</div> : null}
                    <br />
                    <div className="form-group">
                        <label htmlFor="isbn_lbl">ISBN Number</label>
                        <input type="text" className="form-control" placeholder="Enter book ISBN num"
                            id="isbn"
                            // value={book_formik.values.isbn}
                            // onChange={book_formik.handleChange}
                            // onBlur={book_formik.handleBlur}
                            {...book_formik.getFieldProps('isbn')}/>
                    </div>
                    {book_formik.touched.isbn && book_formik.errors.isbn ? <div style={style}>{book_formik.errors.isbn}</div> : null}
                    <br />
                    <div className="form-group">
                        <label htmlFor="publish_lbl">Publish Date</label>
                        <input type="text" className="form-control" placeholder="Enter Published date"
                            id="publish"
                            // value={book_formik.values.publish}
                            // onChange={book_formik.handleChange}
                            // onBlur={book_formik.handleBlur} 
                            {...book_formik.getFieldProps('publish')}/>
                    </div>
                    {book_formik.touched.publish && book_formik.errors.publish ? <div style={style}>{book_formik.errors.publish}</div> : null}
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>&emsp;
                    <button type="button" className="btn btn-primary" disabled={!isEdit ? true : false }>Update</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default BooksSection