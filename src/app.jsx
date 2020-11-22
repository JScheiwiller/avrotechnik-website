import React from 'react';

import Logo from './logo';
import ImageHolder from './imageholder';

// Image files
import wheel from './assets/images/wheel.png';
import weld from './assets/images/weld.png';
import sew from './assets/images/sew.png';
import contact from './assets/svgs/contact.svg';
import connect from './assets/svgs/connect.svg';

const images = [
    { src: wheel, txt: ['Components &', 'Landing Gear'] },
    { src: weld, txt: ['Welding,', 'Machining, &', 'Fabrication'] },
    { src: sew, txt: ['Upholstery &', 'Soft Goods'] }
];

const App = () =>
    <div className='root'>
        <header className='rowflex'>
            <Logo />
            <div className='rowflex connectcontainer'>
                <div style={{ cursor: 'pointer' }}>
                    <span className='ctcntext'>Contact</span>
                    <img src={contact} className='ctcnimg contactimg' />
                </div>
                <div
                    onClick={() => window.open('https://www.linkedin.com/company/avrotechnik-aviation-services-ltd')}
                    style={{ cursor: 'pointer' }}>
                    <span className='ctcntext'>Connect</span>
                    <img src={connect} className='ctcnimg connectimg' />
                </div>
            </div>
        </header>
        <div className='rowflex responsiveflex'>
            <div className='maintext'>
                <div className='bigtext'>Come fly the friendly skies, but better.</div>
                <div className='smalltext'>We specialize in repair and overhaul services for the Beech 1900/King Air, BAe 146/Avro RJ, and Dash 8 aircraft.</div>
            </div>
            {images.map(({ src, txt }, i) => <ImageHolder key={i} src={src} txt={txt} />)}
        </div>
        <footer>
            <div className='footertext'>
                <div>© 2020 AvroTechnik.</div>
                <div>150 Palmer Rd NE</div>
                <div>Calgary, AB, T2E 7R3</div>
            </div>
        </footer>
    </div>

export default App;