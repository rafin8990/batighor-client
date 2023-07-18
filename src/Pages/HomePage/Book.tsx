/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetBooksQuery } from "../../Redux/Features/api/apiSlice";
import BookCard from "./BookCard";

const Book = () => {
  const { data } = useGetBooksQuery(undefined);
  return (
    <div className="mx-2">
      <div>
        <h1 className="font text-4xl md:text-6xl font-bold text-center md:my-20">
          Choose Your Book From Here
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data?.data.slice(0, 10).map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Book;
