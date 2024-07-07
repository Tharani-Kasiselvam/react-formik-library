
import { useFormik } from "formik"

const BooksSection = () => {
    const book_records = [
        {
            "title": "Cue the Sun!",
            "isbn": 5001,
            "author": "Emily Nussbaum",
            "publish_date": "2023-04-08",
        },
        {
            "title": "The Work of Art",
            "isbn": 5002,
            "author": "Adam Moss",
            "publish_date": "2022-02-08",
        },
        {
            "title": "The Coast Road",
            "isbn": 5003,
            "author": "Alan Murrin",
            "publish_date": "2024-03-08",
        }
    ]

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
        }
      });


    return (
        <div>
            <div className="row">
            <div className="col-md-6" style={{ height: "50%", width: "70%" }}>
                {book_records.map(book => {
                    return (
                        <div className="card" style={{ width: "18rem" }} key={book.isbn}>
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">By {book.author}</h6>
                                <p className="card-text">ISBN# {book.isbn}</p>
                                <a href="#" className="card-link">Edit</a>
                                <a href="#" className="card-link">Delete</a>
                            </div>
                        </div>
                    )
                })
                }

            </div>
            <div className="col-md-6" style={{ width: "30%" }}>BOOKS
                <form onSubmit={book_formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title_lbl">Book Title</label>
                        <input type="text" className="form-control" placeholder="Enter book Title"
                            id="title"
                            value={book_formik.values.title}
                            onChange={book_formik.handleChange}
                            onBlur={book_formik.handleBlur} />
                    </div>
                    {book_formik.touched.title && book_formik.errors.title ? <div style={style}>{book_formik.errors.title}</div> : null}
                    <br />
                    <div className="form-group">
                        <label htmlFor="author_lbl">Author</label>
                        <input type="text" className="form-control" placeholder="Enter book Author"
                            id="author"
                            value={book_formik.values.author}
                            onChange={book_formik.handleChange}
                            onBlur={book_formik.handleBlur} />
                    </div>
                    {book_formik.touched.isbn && book_formik.errors.isbn ? <div style={style}>{book_formik.errors.author}</div> : null}
                    <br />
                    <div className="form-group">
                        <label htmlFor="isbn_lbl">ISBN Number</label>
                        <input type="text" className="form-control" placeholder="Enter book ISBN num"
                            id="isbn"
                            value={book_formik.values.isbn}
                            onChange={book_formik.handleChange}
                            onBlur={book_formik.handleBlur} />
                    </div>
                    {book_formik.touched.isbn && book_formik.errors.isbn ? <div style={style}>{book_formik.errors.isbn}</div> : null}
                    <br />
                    <div className="form-group">
                        <label htmlFor="publish_lbl">Publish Date</label>
                        <input type="text" className="form-control" placeholder="Enter Published date"
                            id="publish"
                            value={book_formik.values.publish}
                            onChange={book_formik.handleChange}
                            onBlur={book_formik.handleBlur} />
                    </div>
                    {book_formik.touched.publish && book_formik.errors.publish ? <div style={style}>{book_formik.errors.publish}</div> : null}
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default BooksSection