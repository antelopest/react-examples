import { RouterProvider } from "react-router-dom";
import { router } from "@app/providers/routers";

const App = () => (
  <RouterProvider router={router} />
);

export default App;