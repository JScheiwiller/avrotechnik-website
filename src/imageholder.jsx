import React from 'react';
import arrow from './assets/svgs/arrow.svg';

const ImageHolder = ({ src, txt }) =>
    <div className='mainitem'>
        <img className='image' src={src} />
        <span className='imagecontent'>
            <div style={{display: 'inline-block'}}>
                <div className='marker' />
                <div className="imagetext">{
                    txt.map(e => <div key={e}>{e}</div>)
                }</div>
            </div>
            <img className='arrow' src={arrow} />    
        </span>
        
    </div>

export default ImageHolder;