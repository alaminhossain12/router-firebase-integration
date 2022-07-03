import { useEffect, useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const googleSignIn = () => {
      console.log("Sign In");
    };
  }, []);
  return [user, setUser];
};

export default useFirebase;
