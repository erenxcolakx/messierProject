import './Header.css';
import messier from '../assets/messier.png';
function Header(){
    return(
        <header className="d-flex justify-content-center">
            <img src={messier} id='messierImg' />
            <h1 className="bebas-neue-regular" id='messierTitle'>Messier Objects</h1>
        </header>
    );
}

export default Header;