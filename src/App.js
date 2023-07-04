import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Detial from "./pages/Detail";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import fetchData from "./action/createAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // const fetchData = async () => {
  //--------with thunk----------

  //--------whithout thunk------------
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       data.map((obj) => {
  //         obj.image = `https://picsum.photos/200?random=${obj.id}`;
  //       });
  //       console.log(data);
  //       dispatch({ type: "SET_POST", payload: data });
  //     } else {
  //       throw new Error("Error fetching data");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/item/:id" element={<Detial />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
