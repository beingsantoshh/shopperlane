import Navbar from './Navbar.js'
import logo from './logo.png'

const Header = () => {
    return (
        <header>
            <div className='nav-area'>
                <a href='/' className='logo'>
                    {logo}
                </a>
                <Navbar/>
            </div>
        </header>
    )
}

export default Header;