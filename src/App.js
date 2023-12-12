import './App.css';
import Header from "./components/layout/Header";
import Home from "./components/Home"
import Filter from './components/layout/Filter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <Filter />
     <Home />
     <Footer />
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
