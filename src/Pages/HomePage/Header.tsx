import "./header.css";
const Header = () => {
  return (
    <div className="md:flex justify-center items-center">
      <div className="">
        <h1 className="font-1 text-6xl font-bold ">
          A Collection Of Books <br /> Your Most Beloved
        </h1>
        <p className="text-lg">
          A lectus ac pulvinar tincidunt accumsan ullamcorper dolor at lectus
          acsed <br /> facilisis hac molestie aliquam ut blandit.
        </p>
      </div>
      <div>
        <img src="https://i.ibb.co/TRBRzXM/Untitled-1.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
