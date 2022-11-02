import React from 'react';
import Avartar from './\bAvartar';

export default function Profile({ image, name, title, isNew}) {
    
    return (
        <div className='profile'>
            <Avartar image={image} isNew={isNew}></Avartar>
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

