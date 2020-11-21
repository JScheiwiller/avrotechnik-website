import React from 'react';
import wheel from './assets/images/wheel.png';
import weld from './assets/images/weld.png';
import sew from './assets/images/sew.png';

const ImageHolder = ({ src }) =>
  <img className='image mainitem' src={src}></img>

const images = [wheel, weld, sew];

const App = () =>
  <div className='root'>
    <header className='horiflex'>
      <span>Avrotechnik</span>
      <span>Connect</span>
    </header>
    <div className='horiflex'>
      <div className='maintext'>
        Come fly the friendly skies, but better.
      </div>
      {images.map(e => <ImageHolder key={e} src={e}/>)}
    </div>
    <footer>
      <div>details</div>
    </footer>
  </div>

export default App;