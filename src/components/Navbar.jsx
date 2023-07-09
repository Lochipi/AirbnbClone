import { NavbarStyled } from "./styles/Navbar.styled"
import Logo from '../assets/airbnb-logo.svg'

function Navbar() {
  return (
    <NavbarStyled>
      <img src={Logo} />
    </NavbarStyled>
  )
}

export default Navbar
