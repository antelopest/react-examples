import { useProductStore } from "@/entities/product";
import { NavLink } from "react-router-dom";

export const ProductsPage = () => {
  const products = useProductStore((s) => s.products);
  return (<>
    <h3 className="text-lg mt-2 mb-2">Products:</h3>

    <ul className="space-y-2">
      {products.map((p) => (
        <li key={p.id}>
          <NavLink
            to={`/products/${p.id}`}
            className="text-blue-500 hover:underline"
          >
            {p.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </>);
}