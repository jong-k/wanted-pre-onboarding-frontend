import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./assets/main.scss";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
