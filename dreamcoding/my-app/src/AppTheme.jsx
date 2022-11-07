import React from 'react';
import { useContext } from 'react';
import './AppTheme.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

// ContextAPI

export default function AppTheme() {
    return (
        <DarkModeProvider>
          <Header />
          <Main />
          <Footer />  
        </DarkModeProvider>
    );
}

function Header() {
    return <header className='header'>Header</header>
}

function Main() {
    return (
        <main className='main'>
            Main
            <Profile />
            <Products />
        </main>
    )
}

function Profile() {
    return (
        <div>
            Profile
            <User />
        </div>
    )
}

function User() {
    return <div>User</div>
}

function Products() {
    return (
        <div>
            Products
            <ProductDetail />
        </div>
    )
}

function ProductDetail() {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div>
            Prodect Detail
            <p>DarkMode: {darkMode.toString()}</p>
            <button onClick={()=>toggleDarkMode()}>Toggle</button>
        </div>
    )
}

function Footer() {
    return <footer className='footer'>Footer</footer>
}