import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Invoice from "./features/invoice/Invoice";
import InvoiceDetail from "../src/features/invoice/InvoiceDetail";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Invoice />,
      },
      {
        path: "/invoice/:id",
        element: <InvoiceDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
