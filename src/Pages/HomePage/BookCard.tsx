/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const BookCard = ({ book }) => {
  return (
    <div className="mb-5">
      <div className="card w-96 h-[600px] bg-base-100 shadow-xl">
        <figure>
          <img className="w-1/2" src={book.imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <p className="font-semibold text-lg">Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>Publication Year: {book.publicationDate}</p>
          <div className="card-actions justify-end">
            <Link to={`/book/${book?._id}`}>
              {" "}
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
