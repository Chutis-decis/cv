import './App.css';
import Display from './components/display/Display';
import Nav from './components/nav/Nav'
import Fotter from './components/footer/Fotter'
function App() {
  return (
    <div className='App'>
      <Nav/>
      <Display/>
      <Fotter/>
    </div>
  );
}

export default App;
