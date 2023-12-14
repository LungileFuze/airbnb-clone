import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import Filter from "./components/layout/Filter";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Filter />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Routes>
        <Route path="/" element={<Modal />}/>
        </Routes>
        
        <Footer />
      </BrowserRouter>

      {/* 
          Home page 
            Header

          Banner
            Search

          Card

          Footer

          Search Page
            Header
      */}
    </div>
  );
}

export default App;
