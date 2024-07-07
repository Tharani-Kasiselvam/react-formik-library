import { useFormik } from "formik"

const AuthorsSection = () => {

    const author_records = [
        {
            "name": "Adam Moss",
            "id": "AUT001",
            "dob": "20-FEB-1966",
            "bio": "Adam Moss is an American magazine and newspaper editor. From 2004 to 2019, he was the editor-in-chief of New York magazine. Under his editorship, New York was repeatedly recognized for excellence, notably winning Magazine of the Year in 2013, and General Excellence both in print and online in 2010."

        },
        {
            "name": "Emily Nussbaum",
            "id": "AUT002",
            "dob": "3-APR-1962",
            "bio": "Emily Nussbaum is an American television critic. She served as the television critic for The New Yorker from 2011 until 2019. In 2016, she won the Pulitzer Prize for Criticism."
        }
    ]

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
                <div className="col-md-6" style={{ height: "50%", width: "70%" }}>
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
                <div className="col-md-6" style={{ width: "30%" }}>
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