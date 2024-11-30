import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";

export const UseLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:4000/api/user/login", {
        email,
        password,
      });

      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(response.data));

      // Dispatch login action
      dispatch({ type: "LOGIN", payload: response.data });

      setIsLoading(false);
    } catch (err) {
      // Handle error response
      setError(
        err.response?.data?.error || "Something went wrong. Please try again."
      );
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
