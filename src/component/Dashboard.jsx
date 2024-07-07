
import BooksSection from "./BooksSection"
import AuthorsSection from "./AuthorsSection"

const Dashboard = () => {



    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand" to="#" >
                    <img src="../book.png"
                        width={80} height={80} className="d-inline-block align-top" alt='books' />
                    Library Management System
                </div>
            </nav>
            <div className="container-fluid">
                <BooksSection />
                <div>
                    <hr />
                </div>
                <AuthorsSection />
            </div>
        </div>
    )
}

export default Dashboard