
import './App.css';
import Menu from './components/Menu'
import NewsLetter from './components/NewsLetter';
import Services from './components/Services'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Services />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
