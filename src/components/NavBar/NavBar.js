import './NavBar.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="light" fixed="top" >
            <Container>
                <Nav className='m-auto py-2'>
                    <Nav.Link><Link to='/tiktuk/' className="navLink">Trending</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;

//<Nav.Link><Link to='/profile'>Profile</Link></Nav.Link>