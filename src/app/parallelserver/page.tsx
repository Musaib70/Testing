import React from 'react'

type book = {
    id: number;
    name: string;
    type: string;
    available: boolean;
  };

async function fic() {
   const url = "https://simple-books-api.glitch.me/books?type=fiction"
    const res = await fetch(url,{cache:"no-store"})
    const format = res.json()
    return format;
}

async function nonfic() {
    const url = "https://simple-books-api.glitch.me/books?type=non-fiction"
    const res = await fetch(url,{cache:"no-store"})
    const format = res.json()
    return format;
 }

const page =async  () => {
    const fictionbooks = fic()
    const nonfictionbooks = nonfic()
    const [fiction, nonfiction] = await Promise.all([fictionbooks, nonfictionbooks])

 
    return (
        <div>
          <h1>Fiction Books</h1>
          <ul>
            {fiction.map((book: book) => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
    
          <h1>Non-Fiction Books</h1>
          <ul>
            {nonfiction.map((book: book) => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </div>
      );
}




export default page