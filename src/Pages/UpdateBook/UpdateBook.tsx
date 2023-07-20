/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useLoaderData, useNavigate } from "react-router-dom";
import { useUpdateBookMutation } from "../../Redux/Features/api/apiSlice";
import { ToastContainer, toast } from "react-toastify";

const UpdateBook = () => {
  const book = useLoaderData();
  const navigate = useNavigate();
  const [updatedData, { status }] = useUpdateBookMutation();
  console.log(status);

  const handleUpdateBook = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value ? form.title.value : book?.data?.title;
    const imageUrl = form.imageUrl.value
      ? form.imageUrl.value
      : book?.data?.imageUrl;
    const author = form.author.value ? form.author.value : book?.data?.author;
    const genre = form.genre.value ? form.genre.value : book?.data?.genre;
    const publicationDate = form.publication.value
      ? form.publication.value
      : book?.data?.publicationDate;
    const email = book?.data?.email;
    const wishlist = false;
    const reading = false;
    const finished = false;
    const time = book?.data?.time;

    const updateData = {
      title,
      imageUrl,
      author,
      genre,
      email,
      publicationDate,
      wishlist,
      reading,
      finished,
      time,
    };

    const option = {
      id: book?.data?._id,
      data: updateData,
    };

    updatedData(option);
    if (status) {
      form.reset();
      alert("Book Updated Successfully");
      navigate(`/book/${book?.data?._id}`);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center mt-5">
        <form
          className="mx-5 w-full md:w-2/3 lg:w-1/3 border border-gray-400 p-5 rounded-lg"
          onSubmit={handleUpdateBook}
        >
          <div>
            <h1 className="text-4xl text-center font-bold  my-5 font-1">
              Update Book
            </h1>
          </div>
          <div>
            <p className="my-2">Book Title</p>
            <input
              name="title"
              className="input input-bordered w-full mx-2"
              placeholder="Enter Book Title"
              type="text"
            />
          </div>
          <div>
            <p className="my-2">Book Image</p>
            <input
              name="imageUrl"
              className="input input-bordered w-full  mx-2"
              placeholder="Enter Image Url"
              type="text"
            />
          </div>
          <div>
            <p className="my-2">Author</p>
            <input
              name="author"
              className="input input-bordered w-full  mx-2"
              placeholder="Enter Author Name"
              type="text"
            />
          </div>
          <div>
            <p className="my-2">Genre</p>
            <input
              name="genre"
              className="input input-bordered w-full mx-2"
              placeholder="Enter Genre"
              type="text"
            />
          </div>
          <div>
            <p className="my-2">Publication Year</p>
            <input
              name="publication"
              className="input input-bordered md:w-full  mx-2"
              placeholder="Publication Date"
              type="number"
            />
          </div>
          <div>
            <button className="btn btn-primary w-full my-3">Submit</button>
          </div>
          <ToastContainer></ToastContainer>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
