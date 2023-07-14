/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const AddBooks = () => {
  const handleAddBooks = (event: {
    preventDefault: () => void;
    target: any;
  }) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const imageUrl = form.imageUrl.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const publicationDate = form.publication.value;
    const email = "";
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

    const bookData = {
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
    };

    console.log(bookData);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        className=" border border-gray-400 p-5 rounded-lg"
        onSubmit={handleAddBooks}
      >
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
      </form>
    </div>
  );
};

export default AddBooks;
