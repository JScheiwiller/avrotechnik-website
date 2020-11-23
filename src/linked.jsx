import React from 'react';

const Linked = ({ children, classNames = '', link }) => <div
    className={classNames}
    onClick={() => window.open(link)}
    style={{ cursor: 'pointer' }}>
    {children}
</div>

export default Linked;