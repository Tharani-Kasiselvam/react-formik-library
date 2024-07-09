import { useFormik } from "formik"
import {LibraryContext} from './Dashboard'
import { useContext } from "react"

const AuthorsSection = () => {
    const {authorList, addNewAuthor,isAuthEdit,setIsAuthEdit} = useContext(LibraryContext)

    const validate = values => {
        const errors = {};

        //Authors error
        if (!values.authid) {
            errors.authid = '*Author Id is required';
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
            authid: '',
            name: '',
            dob: '',
            bio: ''
        },
        validate, // validate function
        onSubmit: values => {
            console.log(values);
            addNewAuthor(values)
              //Resetting to Blank values in Form
              author_formik.resetForm()
        }
    });

    const style = {
        color: "red",
        fontweight: "italic"
    }

    let authIndex = 0

    function loadAuthorButtons(){
        if(!isAuthEdit){
            return(
                <div>
                <button className='btn btn-success' style={{margin:"10px"}}>Add Author</button>
                <button className='btn btn-success' style={{backgroundColor: "#0b0b0b",margin:"10px", color: "lightblue"}} disabled>
                    Update Author</button>
                </div>
            )
        }
        else{
            return(
                <div>
                <button className='btn btn-success' style={{backgroundColor: "#0b0b0b",margin:"10px", color: "lightblue"}} disabled>
                    Add Author</button>
                <button className='btn btn-success' style={{margin:"10px"}}>Update Author</button>
                </div>
            )
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6" style={{ height: "500px", width: "50%", overflowY:"auto"}}>
                    {authorList.map(author => {
                        return (
                            <div className="card" style={{ width: "18rem" }} key={authIndex++}>
                                <div className="card-body">
                                    <h5 className="card-title">{author.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">ID: {author.id}</h6>
                                    <p className="card-text"><b>Biography:</b><br /> &emsp;&emsp;{author.bio}</p>
                                    <p className="card-subtitle mb-2 text-muted">Date of Birth: {author.dob}</p>
                                    <a href="#" className="card-link">Edit</a>
                                    <a href="#" className="card-link">Delete</a>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="col-md-6" style={{ width: "50%" }}>
                    AUTHOR
                    <form onSubmit={author_formik.handleSubmit} >
                        {/* onSubmit={author_formik.handleSubmit} */}
                        <div className="form-group">
                            <label htmlFor="authid_lbl">Author ID</label>
                            <input type="text" className="form-control" placeholder="Enter Author ID"
                                id="authid"
                                // value={author_formik.values.authid}
                                // onChange={author_formik.handleChange}
                                // onBlur={author_formik.handleBlur} 
                                {...author_formik.getFieldProps('authid')}/>
                        </div>
                        {author_formik.touched.authid && author_formik.errors.authid ? <div style={style}>{author_formik.errors.authid}</div> : null}
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
                            <input type="text" className="form-control" placeholder="Enter book ISBN num"
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
                                {...author_formik.getFieldProps('bio')}/>
                        </div>
                        {author_formik.touched.dob && author_formik.errors.dob ? <div style={style}>{author_formik.errors.bio}</div> : null}
                        <br />
                        {/* <button type="submit" className="btn btn-primary">Add</button> */}
                        {loadAuthorButtons()}
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AuthorsSection

