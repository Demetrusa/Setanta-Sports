import './App.scss';
import Button from './components/button/Button.jsx';
import Navbar from './layout/Navbar.jsx';
import Footer from './layout/footer/Footer';
import Leagues from './layout/leagues/Leagues';

function App() {
  return (
    <div className="App">
      <div className='App__header'>
        <Navbar navPd={true}/>
        <div className='btn-pd'>
          <Button />
        </div>
      </div>
      <Leagues />
      <Footer />
    </div>
  );
}

export default App;
