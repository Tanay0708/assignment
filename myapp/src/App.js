import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Partners from './components/Partners';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Partners />
      <Footer />  
    </div>
  );
}

export default App;
