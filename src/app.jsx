import React from 'react';
import wheel from './assets/images/wheel.jpg';
import weld from './assets/images/weld.jpg';
import sew from './assets/images/sew.jpg';

const ImageHolder = ({ src }) => 
  // <img className='image mainitem' height='900' width='400' src={src}></img>
  <img className='image mainitem' src={src}></img>

const images = [wheel, weld, sew];

const App = () =>
  <div>
    <header className='flexcontainer'>
      <span>Avrotechnik</span>
      <span>Connect</span>
    </header>
    <div className='flexcontainer'>
      <div className='maintext'>
        Come fly the friendly skies, but better.
      </div>
      {images.map(e => <ImageHolder key={e} src={e}/>)}
    </div>
    <footer>
      <div className='left'>details</div>
    </footer>
    <div className='tfmd'/>
  </div>
  


export default App;