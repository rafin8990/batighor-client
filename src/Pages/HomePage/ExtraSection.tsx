const ExtraSection = () => {
  return (
    <div className="lg:w-[1440px] mx-auto mb-5 mt-10">
      <div className="md:flex justify-around items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mx-2">
            Books are the <br /> mirrors of the soul.
          </h1>
          <p className="mx-2">
            “The reason that fiction is more interesting than any other form of
            literature, to those who really like to study people, is that in
            fiction the author can really tell the truth without humiliating
            himself.”― Eleanor Roosevelt
          </p>
        </div>
        <div className="mx-2 md:w-1/2 md:ml-20 mt-2">
          <img
            className="rounded-2xl "
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8ZtPdjHy1u_aNLE4FISMpN5V6Pc9ESPDG3BY5nsyxJnsRTQed"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
