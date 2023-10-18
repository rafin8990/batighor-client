const Library = () => {
  return (
    <div className="lg:w-[1440px] mx-auto md:mt-20 ">
      <div className="md:flex items-center">
        <div className="md:w-1/2 mb-5 mt-10 mx-5">
          <img
            className=" rounded-2xl"
            src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"
            alt=""
          />
        </div>
        <div className="md:w-1/2 lg:ml-20 ">
          <h1 className="text-4xl md:text-6xl font-bold mx-2">
            The only thing that you absolutely have to know is the location of
            the library
          </h1>
          <p className="mx-2 mt-2">
            A library is a collection of sources of information and similar
            resources, made accessible to a defined community for reference or
            borrowing. It provides physical or digital access to material and
            may be a physical building or room, or a virtual space, or both. A
            library's collection can include books, periodicals, newspapers,
            manuscripts, films, maps, prints, documents, microform, CDs,
            cassettes, videotapes, DVDs, Blu-ray Discs, e-books, audiobooks,
            databases, and other formats. Libraries range in size from a few
            shelves of books to several million items. Sidney Sheldon perfectly
            describes: “Libraries store the energy that fuels the imagination.
            They open up windows to the world and inspire us to explore and
            achieve, and contribute to improving our quality of life.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Library;
