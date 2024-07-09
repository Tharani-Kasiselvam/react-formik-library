
import BooksSection from "./BooksSection"
import AuthorsSection from "./AuthorsSection"
import { createContext, useState } from "react"

export const LibraryContext = createContext()

const Dashboard = () => {

    const [title,setTitle] = useState("")
    const [isbn,setIsbn] = useState("")
    const [author,setAuthor]=useState("")
    const [publishDate,setPublishDdate] = useState("")

    const [name,setName] = useState("")
    const [authId,setAuthId] = useState("")
    const [dob,setDob] = useState("")
    const [bio,setBio] = useState("")

    const [isEdit,setIsEdit] = useState(false)
    const [bookList,setBookList] = useState([
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
    )

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

    const addNewBook = (values) => {
       const newBook = {
            title : values.title,
            isbn : values.isbn,
            author : values.author,
            publish_date : values.publishDate
       }
       
       setBookList([...bookList,newBook])
    }

    return (
        <div>
            <LibraryContext.Provider value={{bookList, author_records, isEdit, 
                setTitle, setIsbn, setAuthor, setPublishDdate, addNewBook
            }}>
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
            </LibraryContext.Provider>
        </div>
    )
}

export default Dashboard