import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontaner";
import Watchpage from "./components/Watchpage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body />,
      children:[
        {
          path:"/",
          element:<Maincontainer />
        },
        {
          path:"watch",
          element:<Watchpage />
        }
      ]
    },
  ]);

  return (
    <Provider store={appStore}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
