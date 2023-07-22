/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../Redux/hook";
import { setLoading, setUser } from "../../Redux/Features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { useGetSearchValueQuery } from "../../Redux/Features/api/apiSlice";
import BookCard from "../HomePage/BookCard";

const AllBooks = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { data } = useGetSearchValueQuery(search);
  console.log(data?.meta);
  // const { data } = useGetBooksQuery(undefined);

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  const handleSearch = (event: {
    preventDefault: () => void;
    target: { search: { value: any } };
  }) => {
    event.preventDefault();
    const searchValue = event.target.search.value;
    setSearch(searchValue);
  };

  return (
    <div className="mx-2">
      <div>
        <h1 className="font text-4xl md:text-6xl font-bold text-center md:my-20">
          Get Free Unlimited Book for Read
        </h1>
        <div className="my-8 flex justify-center">
          <form
            onSubmit={handleSearch}
            className="border rounded-lg w-80 flex justify-center"
          >
            <input
              name="search"
              placeholder="Search Your Input"
              className="input  w-full"
              type="text"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data?.data.map((book: { _id: any }) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default AllBooks;
