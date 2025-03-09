// write the book component code here
import React from "react";

const BookCard = ({ name, image, author, genre }) => {
  return (
    <div className="border-black border-1 ">
      <img src={image} width="300px" height="300px" className="h-3/4" alt="" />
      <h1 className="font-bold">Name:{name}</h1>
      <h2 className="font-bold">Author:{author}</h2>
      <h3 className="font-bold">Genre:{genre}</h3>
    </div>
  );
};

export default BookCard;
