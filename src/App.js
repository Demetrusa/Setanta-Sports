import './App.scss';
import Button from './components/button/Button.jsx';
import Navbar from './layout/Navbar.jsx';
import Footer from './layout/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='App__header'>
        <Navbar navPd={true}/>
        <div className='btn-pd'>
          <Button />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
