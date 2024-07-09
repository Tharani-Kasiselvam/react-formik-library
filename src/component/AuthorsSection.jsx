import { useFormik } from "formik"
import {LibraryContext} from './Dashboard'
import { useContext } from "react"

const AuthorsSection = () => {
    const {author_records} = useContext(LibraryContext)

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
        }
    });

    const style = {
        color: "red",
        fontweight: "italic"
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6" style={{ height: "500px", width: "50%", overflowY:"auto"}}>
                    {author_records.map(author => {
                        return (
                            <div className="card" style={{ width: "18rem" }} key={author.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{author.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">ID: {author.id}</h6>
                                    <p className="card-text">Biography {author.bio}</p>
                                    <p className="card-subtitle mb-2 text-muted">DOB: {author.dob}</p>
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
                                value={author_formik.values.authid}
                                onChange={author_formik.handleChange}
                                onBlur={author_formik.handleBlur} />
                        </div>
                        {author_formik.touched.authid && author_formik.errors.authid ? <div style={style}>{author_formik.errors.authid}</div> : null}
                        <br />
                        <div className="form-group">
                            <label htmlFor="name_lbl">Author Name</label>
                            <input type="text" className="form-control" placeholder="Enter Author Name"
                                id="name"
                                value={author_formik.values.name}
                                onChange={author_formik.handleChange}
                                onBlur={author_formik.handleBlur} />
                        </div>
                        {author_formik.touched.name && author_formik.errors.name ? <div style={style}>{author_formik.errors.name}</div> : null}
                        <br />
                        <div className="form-group">
                            <label htmlFor="dob_lbl">Date Of Birth</label>
                            <input type="text" className="form-control" placeholder="Enter book ISBN num"
                                id="dob"
                                value={author_formik.values.dob}
                                onChange={author_formik.handleChange}
                                onBlur={author_formik.handleBlur} />
                        </div>
                        {author_formik.touched.dob && author_formik.errors.dob ? <div style={style}>{author_formik.errors.dob}</div> : null}
                        <br />
                        <div className="form-group">
                            <label htmlFor="bio_lbl">Biography</label>
                            <textarea type="text" className="form-control" placeholder="Author's Biography"
                                id="bio"
                                value={author_formik.values.bio}
                                onChange={author_formik.handleChange}
                                onBlur={author_formik.handleBlur} />
                        </div>
                        {author_formik.touched.dob && author_formik.errors.dob ? <div style={style}>{author_formik.errors.bio}</div> : null}
                        <br />
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AuthorsSection