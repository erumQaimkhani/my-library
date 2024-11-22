// Import necessary dependencies
import React from "react";
import Image from "next/image";

// Define props structure for BookCard
interface BookCardProps {
  title: string;
  author: string;
  thumbnail: string;
  description: string;
}

// Functional component to display a single book
const BookCard: React.FC<BookCardProps> = ({ title, author, thumbnail, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow">
      {/* Book Thumbnail */}
      <Image
        src={thumbnail}
        alt={`Cover of ${title}`}
        width={150}
        height={200}
        className="rounded-md mx-auto"
      />

      {/* Book Title */}
      <h3 className="text-lg font-bold mt-4 text-center">{title}</h3>

      {/* Book Author */}
      <p className="text-sm text-gray-600 text-center">{author}</p>

      {/* Book Description */}
      <p className="text-sm text-gray-500 mt-2 line-clamp-3 text-justify">
        {description}
      </p>
    </div>
  );
};

export default BookCard;
