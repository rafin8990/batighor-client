import { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateBook = () => {
  const book = useLoaderData();
  console.log(book?.data);
  const {} = book?.data;
  const handleUpdateBook = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  console.log(book);
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
              className="input input-bordered w-full  mx-2"
              placeholder="Publication Date"
              type="number"
            />
          </div>
          <div>
            <button className="btn btn-primary w-full my-3">Submit</button>
          </div>
          <Toaster></Toaster>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
