import { useState } from "react";

interface Product {
  id: number,
  name: string
}

export const ProductsPage = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1, name: "Apple"
    },
    {
      id: 2, name: "Milk"
    },
    {
      id: 3, name: "Break"
    }
  ]);

  const select = (id: number): undefined => {
    setSelected(id);
  }

  return (
    <>
      <h3>Products</h3>

      <ul style={{ listStyle: "none"}}>
        {products.map(item => (
          <li
            key={item.id}
            onClick={() => select(item.id)}
            style={
              {
                cursor: "pointer",
                padding: "0.5rem",
                color: selected === item.id ? "#141414" : "white",
                background: selected === item.id ? "#eee" : "transparent"
              }
            }
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}