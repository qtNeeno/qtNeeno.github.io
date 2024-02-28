
import "./App.css";
import Resume from "./components/Resume/Resume";
import AboutMe from "./components/About me/AboutMe";
import Dashboard from "./components/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ABOUT_ME } from "./Data/aboutMeData";

const router = createBrowserRouter([
  { path: '/', element: <Dashboard />},
  { path: '/resume', element: <Resume />},
  { path: '/about', element: <AboutMe name={ABOUT_ME.name} age={ABOUT_ME.age} description={ABOUT_ME.description} basedIn={ABOUT_ME.basedIn} />},
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
