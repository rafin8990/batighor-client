import { useEffect } from "react";
import { useAppDispatch } from "../../Redux/hook";
import { setLoading, setUser } from "../../Redux/Features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

const AllBooks = () => {
  const dispatch = useAppDispatch();

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
  return <div></div>;
};

export default AllBooks;
