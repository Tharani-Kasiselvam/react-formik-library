
import BooksSection from "./BooksSection"
import AuthorsSection from "./AuthorsSection"
import { createContext, useState } from "react"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'


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

    // const [bookCardId,setBookCardId] = 
    let Aindex = 1
    let Bindex = 1

    const [isBookEdit,setIsBookEdit] = useState(false)
    const [isAuthEdit,setIsAuthEdit] = useState(false)



    const [bookList,setBookList] = useState([
        {
            "bookId" : Bindex++,
            "title": "Cue the Sun!",
            "isbn": 5001,
            "author": "Emily Nussbaum",
            "publish_date": "2023-04-08",
        },
        {
            "bookId" : Bindex++,
            "title": "The Work of Art",
            "isbn": 5002,
            "author": "Adam Moss",
            "publish_date": "2022-02-28",
        },
        {
            "bookId" : Bindex++,
            "title": "The Coast Road",
            "isbn": 5003,
            "author": "Alan Murrin",
            "publish_date": "2024-03-01",
        }
    ]
    )
    const [currBookIndex,setcurrBookIndex] = useState(bookList.length)

    const [authorList,setAuthorList] = useState([
        {
            "authorId" : Aindex++,
            "name": "Adam Moss",
            "id": "AUT001",
            "dob": "1966-02-22",
            "bio": "Adam Moss is an American magazine and newspaper editor. From 2004 to 2019, he was the editor-in-chief of New York magazine. Under his editorship, New York was repeatedly recognized for excellence, notably winning Magazine of the Year in 2013, and General Excellence both in print and online in 2010."
        },
        {
            "authorId" : Aindex++,
            "name": "Emily Nussbaum",
            "id": "AUT002",
            "dob": "1962-04-15",
            "bio": "Emily Nussbaum is an American television critic. She served as the television critic for The New Yorker from 2011 until 2019. In 2016, she won the Pulitzer Prize for Criticism."
        }
    ])

    const toastAlerts = (message, status) => {
        if (status == "success") {
            toast.success(message, { position: "top-center", theme: "colored", autoClose: "500" })
        }

        else {
            toast.error(message, { position: "top-center", theme: "colored", autoClose: "500" })
        }
    }

    const [currAuthIndex,setcurrAuthIndex] = useState(authorList.length)


    const addNewBook = (values) => {
        console.log("Value of curr BookIndex",currBookIndex);
       const newBook = {
            bookId : currBookIndex+1,
            title : values.title,
            isbn : values.isbn,
            author : values.author,
            publish_date : values.publish
       }
       
       setBookList([...bookList,newBook])
       toastAlerts("New Book ADDED successfully", "success")
       setcurrBookIndex(newBook.bookId)
    }

    const addNewAuthor = (values) => {
        console.log("Value of curr AuthorIndex",currAuthIndex);
        const newAuthor = {
            authorId : currAuthIndex+1,
            name : values.name,
            id : values.id,
            dob : values.dob,
            bio : values.bio
       }
       
       setAuthorList([...authorList,newAuthor])
       toastAlerts("New Author ADDED successfully", "success")
       setcurrAuthIndex(newAuthor.authorId)
    }

    const updateBook = (values) => {
        console.log("---Edited Booklist-ID---",values.bookId)
        const editedBookList = bookList.map(book=>{
            if(values.bookId == book.bookId){
                 console.log("---Edited Booklist IF Condn--", book.publish_date,"---",values.publish)
                return {...book, 
                    title : (book.title == values.title) ? book.title : values.title ,
                    isbn : (book.isbn == values.isbn) ? book.isbn : values.isbn ,
                    author : (book.author == values.author) ? book.author : values.author ,
                    publish_date : (book.publish_date == values.publish) ? book.publish_date : values.publish
                }
            }
            return book
        })
        console.log("---Edited Booklist---",editedBookList)
        setBookList(editedBookList)
        toastAlerts("Book EDITED successfully", "success")
    }

    const updateAuthor = (values) => {
        console.log("---Edited AuthorList-ID---",values.authorId)
        const editedAuthorList = authorList.map(author=>{
            if(values.authorId == author.authorId){
                 console.log("---Edited AuthorList IF Condn--")
                return {...author, 
                    name : (author.name == values.name) ? author.name : values.name ,
                    id : (author.id == values.id) ? author.id : values.id ,
                    dob : (author.dob == values.dob) ? author.dob : values.dob ,
                    bio : (author.bio == values.bio) ? author.bio : values.bio ,
                }
            }
            return author
        })
        console.log("---Edited AuthorList---",editedAuthorList)
        setAuthorList(editedAuthorList)
        toastAlerts("Author EDITED successfully", "success")
    }

    const loadPostDelBook = (postDelBookList) => {
        setBookList(postDelBookList)
        toastAlerts("Book DELETED successfully", "success")
    }

    const loadPostDelAuthor = (postDelAuthList) => {
        setAuthorList(postDelAuthList)
        toastAlerts("Author DELETED successfully", "success")
    }

    return (
        <div>
            <LibraryContext.Provider value={{bookList, authorList, isBookEdit, setIsBookEdit, isAuthEdit,setIsAuthEdit,
                setTitle, setIsbn, setAuthor, setPublishDdate, setName, setAuthId, setDob, setBio,
                addNewBook, updateBook, setcurrBookIndex, addNewAuthor, updateAuthor, loadPostDelBook, loadPostDelAuthor
            }}>
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand" to="#" >
                    <img src="../book.png"
                        width={80} height={80} className="d-inline-block align-top" alt='books' />
                    Library Management System
                </div>
            </nav>
            <div className="container-fluid">
            <ToastContainer />
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