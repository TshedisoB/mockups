import "../src/Components/css/App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Employment from "./Components/Employment";
import Statement from "./Components/Statement";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Hire from "./Components/Hire";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Employment />
      <Statement />
      <Testimonials />
      <Contact />
      <Hire />
    </div>
  );
}

export default App;
