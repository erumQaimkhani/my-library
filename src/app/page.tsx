
// "use client";

// import React, { useState, useEffect } from "react";
// import BookCard from "./components/BookCard";
// import Header from "./components/Header";  // Import Header
// import Footer from "./components/Footer";  // Import Footer

// // Define the structure of a book
// interface Book {
//   title: string;
//   author: string;
//   thumbnail: string;
//   description: string;
// }

// const Home: React.FC = () => {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch books from Google Books API
//   const fetchBooks = async () => {
//     try {
//       const response = await fetch(
//         "https://www.googleapis.com/books/v1/volumes?q=subject:science"
//       );
//       const data = await response.json();
//       const formattedBooks = data.items.map((item: any) => ({
//         title: item.volumeInfo.title || "No Title",
//         author: item.volumeInfo.authors?.join(", ") || "Unknown Author",
//         thumbnail:
//           item.volumeInfo.imageLinks?.thumbnail ||
//           "https://via.placeholder.com/150",
//         description: item.volumeInfo.description || "No description available.",
//       }));
//       setBooks(formattedBooks);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks(); // Fetch books on mount
//   }, []);

//   if (loading) {
//     return <div className="text-center text-xl text-gray-500 mt-8">Loading Books...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       {/* Include the Header component */}
//       <Header />

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {/* Render a BookCard for each book */}
//         {books.map((book, index) => (
//           <BookCard
//             key={index}
//             title={book.title}
//             author={book.author}
//             thumbnail={book.thumbnail}
//             description={book.description}
//           />
//         ))}
//       </div>

//       {/* Include the Footer component */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;
"use client";

import React, { useState, useEffect } from "react";
import BookCard from "./components/BookCard";
import Header from "./components/Header";  // Import Header
import Footer from "./components/Footer";  // Import Footer

// Define the structure of a book
interface Book {
  title: string;
  author: string;
  thumbnail: string;
  description: string;
}

// Define the structure of the Google Books API response
interface GoogleBooksResponse {
  items: Array<{
    volumeInfo: {
      title: string;
      authors?: string[];
      imageLinks?: {
        thumbnail: string;
      };
      description?: string;
    };
  }>;
}

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch books from Google Books API
  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=subject:science"
      );
      const data: GoogleBooksResponse = await response.json(); // Type the response
      const formattedBooks = data.items.map((item) => ({
        title: item.volumeInfo.title || "No Title",
        author: item.volumeInfo.authors?.join(", ") || "Unknown Author",
        thumbnail:
          item.volumeInfo.imageLinks?.thumbnail ||
          "https://via.placeholder.com/150",
        description: item.volumeInfo.description || "No description available.",
      }));
      setBooks(formattedBooks);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(); // Fetch books on mount
  }, []);

  if (loading) {
    return <div className="text-center text-xl text-gray-500 mt-8">Loading Books...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Include the Header component */}
      <Header />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render a BookCard for each book */}
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            thumbnail={book.thumbnail}
            description={book.description}
          />
        ))}
      </div>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

export default Home;
