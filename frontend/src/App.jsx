import { createBrowserRouter, Outlet, RouterProvider, useNavigate, Link } from "react-router-dom";

// =========> Imports = Libraries & Hooks <=========
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorElement } from "./Helper";
// import { SiteData } from "./SiteData";
// import { AuthContextProvider } from "./context/AuthContext";
// import { useAuthContext } from "./Hooks";

// Importing elements
// import { MakeNavItems } from "./components/MainNav";
// import Footer from "./components/Footer";
// import ErrorElement from "./components/Error";

// Importing Pages
// import { AuthTab } from "./pages/AuthPage";
// import { Home } from "./pages/Home";


// Application Pages
// import { Apps, TaskApp } from "./pages/Tasks2";


// =========> Layout = PageLayout <=========
export function PageLayout() {
  // const { user } = useAuthContext();
  return (
    <div className="PageLayout">
      <header>
        {/* <MakeNavItems data={SiteData.PublicMenu} /> */}
        {/* <BraidCrumbs /> */}
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}


// React Router
const router = createBrowserRouter([
  {
    // {path: "team", element: <h1>Team</h1>, loader: , ErrorBoundary:, children:[{}]},
    path: "/*",
    element: <PageLayout />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <h1>Home</h1> },
      { path: "logout", element: <h1>logout</h1> },
      { path: "login", element: <h1>login</h1> },
      {
        path: "about",
        children: [
          { index: true, element: <h1>About</h1> },
          { path: "team", element: <h1>Team</h1> },
          { path: "vision", element: <h1>Vision</h1> },
        ],
      },
      {
        path: "support",
        children: [
          { index: true, element: <h1>Support</h1> },
          { path: "FAQ", element: <h1>FAQ</h1> },
          { path: "contact", element: <h1>Contact</h1> },
        ],
      },
      {
        path: "admin",
        children: [{ index: true, element: <h1>Admin</h1> }],
      },
      { path: "*", element: <h1>404 Not found</h1> },
    ],
  },
]);

export default function App() {
  return (
    <div className="App">
          <RouterProvider router={router} />
          <ToastContainer position="bottom-right" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
    </div>
  );
}



// =========> Action = LogOut <=========
// export async function LogoutAction() {
//   localStorage.removeItem("user");
//   const { dispatch } = useAuthContext();
//   dispatch({ type: "LOGOUT" });
//   const navigate = useNavigate();
//   navigate("/");
// }





