import { useProductStore } from "@/entities/product";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = useProductStore((s) => s.getById(id!));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <h3 className="text-lg  mt-2 mb-2">Product:</h3>
      <p className="text-gray-600">Name: <b>{product.title}</b></p>
      <p className="text-gray-600">Price: <b>${product.price}</b></p>
    </>
  );
}