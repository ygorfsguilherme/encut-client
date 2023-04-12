import './Menu.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <a href="#">
        <img className='logo' src="/image/logo.png" alt=""/>
      </a>
      
      <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Quem somos</a></li>
          <li><a href="#">Sobre</a></li>
      </ul>
    </nav>
  )
}

export default Navbar