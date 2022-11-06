import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar
                    image='https://images.unsplash.com/photo-1666526910907-7a9d64ab8f2b'
                    name='Bob'
                    size={200}
                />
                <p>안녕하세요!</p>
            </Navbar>
            <Navbar>
                <p>안녕하세요!</p>
            </Navbar>
            <Card>
                <p>test 1</p>
            </Card>
            <Card>
                <p>test 2</p>
            </Card>
        </div>
    );
}

function Navbar({children}) {
    return (
        <header style={{ backgroundColor : 'yellow' }}>{children}</header>
    )
}

function Avatar({ image, name, size}) {
    return (
        <div>
            <img
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{ borderRadius : '50%'}}
            />
        </div>
    )
}

function Card( {children} ){
    return (
        <div style={{
            width : '100px',
            height : '100px',
            backgroundColor : 'black',
            color : 'white',
            borderRadius : '20px',
            textAlign : 'center'
        }}>
            {children}
        </div>
    )
}

