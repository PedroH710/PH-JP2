import './nav.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav className="navbar">
            <img src={require('./SENAI.png')} alt='' width={150} className='senai'/>
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <Link className='navbar-link' to='/'>Home</Link>
                </li>
                <li className="navbar-item">
                    <Link className='navbar-link' to='/quemsomos'>Quem Somos?</Link>
                </li>
                <li className="navbar-item">
                    <Link className='navbar-link' to='/contato'>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar