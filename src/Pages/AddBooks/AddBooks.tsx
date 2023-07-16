/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import toast, { Toaster } from "react-hot-toast";
import { usePostBookMutation } from "../../Redux/Features/api/apiSlice";
import "./AddBook.css";
import { useAppSelector } from "../../Redux/hook";
import { useNavigate } from "react-router-dom";

export type IBooks = {
  title: string;
  imageUrl: string;
  author: string;
  genre: string;
  publicationDate: string;
  email: string | null;
  time: string;
  wishlist: boolean;
  reading: boolean;
  finished: boolean;
  review: string[];
};
const AddBooks = () => {
  const [postBook, { isError, isLoading }] = usePostBookMutation();
  const { user } = useAppSelector((state) => state.user);
  console.log(isError, isLoading);
  const navigate = useNavigate();
  const handleAddBooks = async (event: {
    preventDefault: () => void;
    target: any;
  }) => {
    event.preventDefault();

    try {
      const form = event.target;
      const title = form.title.value;
      const imageUrl = form.imageUrl.value;
      const author = form.author.value;
      const genre = form.genre.value;
      const publicationDate = form.publication.value;
      const email = user?.email;
      const wishlist = false;
      const reading = false;
      const finished = false;
      const time = new Date()
        .toLocaleDateString("en-GB", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .split("/")
        .reverse()
        .join("-");

      const bookData: IBooks = {
        title,
        imageUrl,
        author,
        genre,
        publicationDate,
        email,
        time,
        wishlist,
        reading,
        finished,
        review: [],
      };

      console.log(bookData);
      postBook({ data: bookData });
      toast.success("Book added successfully!");
      navigate("/allbooks");
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while adding the book.");
    }
  };
  return (
    <div className="min-h-screen  flex justify-center items-center">
      <form
        className=" w-1/3 border border-gray-400 p-5 rounded-lg"
        onSubmit={handleAddBooks}
      >
        <div>
          <h1 className="text-4xl text-center font-bold  my-5 font-1">
            Add Book
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
          <p className="my-2">Publication Date</p>
          <input
            name="publication"
            className="input input-bordered w-full  mx-2"
            placeholder="Publication Date"
            type="text"
          />
        </div>
        <div>
          <button className="btn btn-primary w-full my-3">Submit</button>
        </div>
        <Toaster></Toaster>
      </form>
    </div>
  );
};

export default AddBooks;
