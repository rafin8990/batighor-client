/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import {
  useGetReviewQuery,
  usePostCommentMutation,
} from "../../Redux/Features/api/apiSlice";
import { setLoading, setUser } from "../../Redux/Features/userSlice";
import { auth } from "../../Firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const BookDetails = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  // const { id } = useParams();
  // const { data: bookData } = useGetSingleBookQuery(id);
  // console.log(bookData);

  const [postComment] = usePostCommentMutation();
  const { user } = useAppSelector((state) => state.user);
  const book = useLoaderData();
  const {
    _id,
    title,
    author,
    publicationDate,
    genre,
    imageUrl,

    email,
  } = book?.data;

  const handleAddreview = (event: {
    target: any;
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const review = form.review.value;

    const reviewData = {
      email,
      review,
    };

    const option = {
      id: _id,
      data: reviewData,
    };
    postComment(option);
    form.reset();
  };
  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:5000/api/v1/books/deleteBook/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 1) {
          alert("book Deleted SuccessFully");
        }
      });
  };

  const { data } = useGetReviewQuery(_id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });

  return (
    <div className="mb-5 mt-5 mx-5 border p-5">
      <div className="md:flex justify-center items-center">
        <div>
          <img className="" src={imageUrl} alt="" />
        </div>
        <div className="lg:mx-10">
          <h1 className="text-xl md:text-4xl font font-bold">Title: {title}</h1>
          <p className="text-lg font-semibold">Author: {author}</p>
          <p className="text-lg font-semibold">Genre: {genre}</p>
          <p className="text-lg font-semibold">
            Publication Year: {publicationDate}
          </p>
          {user?.email === email && (
            <div>
              <Link to={`/updateBook/${_id}`}>
                <button className="text-md btn btn-success">Edit Book</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="text-md mx-2 btn btn-error"
              >
                Delete Book
              </button>
            </div>
          )}
        </div>
      </div>
      {user.email ? (
        <div className="mt-5 mx-2">
          <p className="text-3xl text-center font font-bold mt-5">
            {" "}
            Add a Review
          </p>
          <div className="flex justify-center mx-2">
            <form className="flex" onSubmit={handleAddreview}>
              <input
                name="review"
                className="input input-bordered w-60 md:w-80"
                required
                type="text"
              />
              <button type="submit" className="btn btn-primary">
                Add Review
              </button>
            </form>
          </div>
        </div>
      ) : (
        <p className="text-center font text-2xl font-bold  my-10">
          Please{" "}
          <Link to="/login">
            <span className="hover:underline text-blue-500"> Login</span>
          </Link>{" "}
          to add a Review
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5">
        {data?.data?.review.map((rev, i) => (
          <div className="border rounded-xl p-5" key={i}>
            <div>
              <div className="flex items-center">
                <img
                  className="w-12"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt=""
                />
                <p>Email: {rev.email}</p>
              </div>
            </div>
            <div>
              <p>"{rev.review}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
