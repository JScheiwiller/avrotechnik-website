import React from 'react';
import wheel from './assets/images/wheel.jpg';
import weld from './assets/images/weld.jpg';
import sew from './assets/images/sew.jpg';

const App = () =>
  <div>
    <header className='flexcontainer'>
      <span>Avrotechnik</span>
      <span>Connect</span>
    </header>
    <div className='flexcontainer'>
      <div className='maintext'>
        Come fly the skies
      </div>
      <img height='500' width='300' src={wheel}></img>
      <img height='500' width='300' src={weld}></img>
      <img height='500' width='300' src={sew}></img>
    </div>
    <footer>
      <div className='left'>details</div>
    </footer>
  </div>


export default App;