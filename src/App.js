import { ReactComponent as Game } from './game.svg';
import './App.css';

function App() {
  return (
    <div className="App">


      <div className='Nav'>
        <div className='nav_top'>
          <h1>MB</h1>
          <h3>Web Developer</h3>

        </div>
        <div className='nav_menu'>
          <h3 className='about'>About</h3>
          <h3 className='myskills'>My Skills</h3>
          <h3 className='projects'>Projects</h3>
          <h3 className='contact'>Contact</h3>
        </div>
        <div className='nav_bottom'>
          <Game className='game' />
        </div>
      </div>


    </div>
  );
}

export default App;
