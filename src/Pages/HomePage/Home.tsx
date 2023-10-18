/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { onAuthStateChanged } from "firebase/auth";
import { setLoading, setUser } from "../../Redux/Features/userSlice";
import { useAppDispatch } from "../../Redux/hook";
import Header from "./Header";
import { useEffect } from "react";
import { auth } from "../../Firebase/Firebase";
import Book from "./Book";
import ExtraSection from "./ExtraSection";
import Library from "./Library";

const Home = () => {
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
  return (
    <div>
      <div>
        <Header></Header>
        <Book></Book>
        <ExtraSection></ExtraSection>
        <Library></Library>
      </div>
    </div>
  );
};

export default Home;
