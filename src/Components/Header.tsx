import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-indigo-400 text-white p-4 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Flipcart</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" >Home</a>
            </li>
            <li>
              <a href="#" >Shop</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
