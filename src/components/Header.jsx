import globe from "../assets/img/globe.png"
const Header = () => {
  return (
    <nav>
      <img src={globe} alt="globe-icon"/>
      <span>my travel journal.</span>
    </nav>
  )
}

export default Header;