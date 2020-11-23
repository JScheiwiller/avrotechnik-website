import React from 'react';

import Logo from './logo';
import ImageHolder from './imageholder';
import Linked from './linked';

// Image files
import wheel from './assets/images/wheel.png';
import weld from './assets/images/weld.png';
import sew from './assets/images/sew.png';
import contact from './assets/svgs/contact.svg';
import connect from './assets/svgs/connect.svg';
import mapPin from './assets/svgs/map-pin.svg';

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
                    <img src={contact} className='svgs contactimg' />
                </div>
                <div
                    onClick={() => window.open('https://www.linkedin.com/company/avrotechnik-aviation-services-ltd')}
                    style={{ cursor: 'pointer' }}>
                    <span className='ctcntext'>Connect</span>
                    <img src={connect} className='svgs connectimg' />
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
            <Linked classNames='footertext' link='https://goo.gl/maps/eHgm9AxtLYn6N8if6'>
                <div>© 2020 AvroTechnik.</div>
                <div className='blueunderline'>150 Palmer Rd NE</div>
                <span className='blueunderline'>Calgary, AB, T2E 7R3</span><img src={mapPin} className='svg map-pin'/>
            </Linked>
        </footer>
    </div>

export default App;