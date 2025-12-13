import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h3 className="text-lg mt-2 mb-2">Home:</h3>
      <Link className="text-blue-500 hover:underline" to="/products">Products</Link>
    </>
  );
}