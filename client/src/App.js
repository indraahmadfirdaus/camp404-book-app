import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddBookPage from "./pages/AddBookPage";
import EditBookPage from "./pages/EditBookPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/tambah-buku" element={<AddBookPage />} />
          <Route path="/edit-buku/:id" element={<EditBookPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
