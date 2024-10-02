import { Link } from "react-router-dom"
import '../style/component/menu.css'
import logo from '../assets/logo.png'

export const Menu = () => {
    return (
        <nav>
            <Link to='/'><img src={logo} alt="#" /></Link>

            <ul>
                <Link to='/'> Home </Link>
                <Link to='/about'> About </Link>
                <Link to='/data'> Data </Link>
                <Link to='/'> Page-1 </Link>
                <Link to='/'> Page-2 </Link>
                <Link to='/'> Page-3 </Link>
            </ul>
        </nav>
    )
}