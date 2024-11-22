// import React from "react";

// const Header: React.FC = () => {
//   return (
//     <header className="bg-blue-500 text-white p-4">
//       <nav className="flex justify-between items-center">
//         <h1 className="text-2xl">Book Library</h1>
//         <ul className="flex space-x-4">
//           <li><a href="#home" className="hover:text-gray-200">Home</a></li>
//           <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// /app/components/Header.tsx

import React from "react";
import Link from "next/link"; // Import Link component

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">My Book Library</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
