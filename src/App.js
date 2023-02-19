import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import SearchResultContainer from "./components/SearchResult/SearchResultContainer";
import WatchPage from "./components/WatchPage";
import store from "./Utils/store";

/**
 * Head
 * Body
 *  side bar
 *    manuitems
 *  Main Contaier
 *    Button List
 *    Video conatainer
 *      Video Cards
 */
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Head />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchResultContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Head /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
