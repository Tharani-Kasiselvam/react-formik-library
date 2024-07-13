import { useFormik } from "formik"
import { LibraryContext } from './Dashboard'
import { useContext } from "react"
import '../App.css'

const AuthorsSection = () => {
    const { authorList, isAuthEdit, setIsAuthEdit,
        addNewAuthor, updateAuthor, loadPostDelAuthor
    } = useContext(LibraryContext)

    const validate = values => {
        const errors = {};

        //Authors error
        if (!values.id) {
            errors.id = '*Author Id is required';
        }
        if (!values.name) {
            errors.name = '*Author Name is required';
        }
        if (!values.dob) {
            errors.dob = '*Author dob is required';
        }
        if (!values.bio) {
            errors.bio = '*Author bio is required';
        }

        // return the errors object
        return errors;
    }

    const author_formik = useFormik({
        initialValues: {
            authorId: '',
            name: '',
            id: '',
            dob: '',
            bio: ''
        },
        validate, // validate function
        onSubmit: values => {
            if (!isAuthEdit) {
                addNewAuthor(values)
                //Resetting to Blank values in Form
                author_formik.resetForm()
            }
            else {
                // updateAuthor
                setIsAuthEdit(false)
                updateAuthor(values)

                author_formik.resetForm()
            }
        }
    });

    const style = {
        color: "red",
        fontweight: "italic"
    }

    function loadAuthorButtons() {
        if (!isAuthEdit) {
            return (
                <div>
                    <button type="submit" className='btn btn-success' style={{ margin: "10px" }}>Add Author</button>
                    <button type="button" className='btn btn-success' style={{ backgroundColor: "#0b0b0b", margin: "10px", color: "lightblue" }} disabled>
                        Update Author</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <button className='btn btn-success' style={{ backgroundColor: "#0b0b0b", margin: "10px", color: "lightblue" }} disabled>
                        Add Author</button>
                    <button type='submit' className='btn btn-success' style={{ margin: "10px" }}>Update Author</button>
                </div>
            )
        }
    }

    const addNewAuthorButton = () => {
        author_formik.resetForm()
        setIsAuthEdit(false)
    }

    const editAuthor = (e) => {
        setIsAuthEdit(true)
        const selectedAuthId = e.target.id
        const selectedAuthor = authorList.filter((author) => {
            if (author.authorId == selectedAuthId) {
                return author
            }
        })
        author_formik.setFieldValue("authorId", selectedAuthor[0].authorId)
        author_formik.setFieldValue("name", selectedAuthor[0].name)
        author_formik.setFieldValue("id", selectedAuthor[0].id)
        author_formik.setFieldValue("dob", selectedAuthor[0].dob)
        author_formik.setFieldValue("bio", selectedAuthor[0].bio)
    }

    const deleteAuthor = (e) => {
        const selectedAuthId = e.target.id
        const postDelAuthList = authorList.filter((author) => {
            if (author.authorId != selectedAuthId) {
                return author
            }
        })
        loadPostDelAuthor(postDelAuthList)
    }

    return (
        <div>
            <div className="lib_sections"><h1>Author Section</h1></div>
            <div className="row">
                <div className="col-md-6" id="lib-card-div" style={{ height: "500px", width: "50%", overflowY: "auto" }}>
                    <button type="button" className="btn btn-primary" id="lib-add-btn" onClick={addNewAuthorButton}>ADD New Author</button>
                    {authorList.map(author => {
                        return (
                            <div key={author.authorId} className="card" id="lib_authcard" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{author.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">ID: {author.id}</h6>
                                    <p className="card-text" ><b>Biography:</b><br /> &emsp;&emsp;{author.bio}</p>
                                    <p className="card-subtitle mb-2 text-muted">Date of Birth: {author.dob}</p>
                                    <a href="#" id={author.authorId} className="card-link" onClick={editAuthor}>Edit</a>
                                    <a href="#" id={author.authorId} className="card-link" onClick={deleteAuthor}>Delete</a>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="col-md-6" id="lib_authcol" style={{ width: "45%" }}>
                    <form onSubmit={author_formik.handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="authid_lbl">Author ID</label>
                            <input type="text" className="form-control" placeholder="Enter Author ID"
                                id="id"
                                // value={author_formik.values.authid}
                                // onChange={author_formik.handleChange}
                                // onBlur={author_formik.handleBlur} 
                                {...author_formik.getFieldProps('id')} />
                        </div>
                        {author_formik.touched.id && author_formik.errors.id ? <div style={style}>{author_formik.errors.id}</div> : null}
                        <br />
                        <div className="form-group">
                            <label htmlFor="name_lbl">Author Name</label>
                            <input type="text" className="form-control" placeholder="Enter Author Name"
                                id="name"
                                // value={author_formik.values.name}
                                // onChange={author_formik.handleChange}
                                // onBlur={author_formik.handleBlur}
                                {...author_formik.getFieldProps('name')} />
                        </div>
                        {author_formik.touched.name && author_formik.errors.name ? <div style={style}>{author_formik.errors.name}</div> : null}
                        <br />
                        <div className="form-group">
                            <label htmlFor="dob_lbl">Date Of Birth</label>
                            <input type="date" className="form-control"
                                id="dob"
                                // value={author_formik.values.dob}
                                // onChange={author_formik.handleChange}
                                // onBlur={author_formik.handleBlur}
                                {...author_formik.getFieldProps('dob')} />
                        </div>
                        {author_formik.touched.dob && author_formik.errors.dob ? <div style={style}>{author_formik.errors.dob}</div> : null}
                        <br />
                        <div className="form-group">
                            <label htmlFor="bio_lbl">Biography</label>
                            <textarea type="text" className="form-control" placeholder="Author's Biography"
                                id="bio"
                                // value={author_formik.values.bio}
                                // onChange={author_formik.handleChange}
                                // onBlur={author_formik.handleBlur} 
                                {...author_formik.getFieldProps('bio')} />
                        </div>
                        {author_formik.touched.dob && author_formik.errors.dob ? <div style={style}>{author_formik.errors.bio}</div> : null}
                        <br />
                        {loadAuthorButtons()}
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AuthorsSection

