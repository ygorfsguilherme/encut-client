import './Footer.css'
import Whatsapp from '/icon/whatsapp.svg';
import Linkedin from '/icon/linkedin.svg';
import Facebook from '/icon/facebook.svg';

function Footer() {
  return (
    <footer>
        <div className='copyright'>
            <span>
                &copy; 2022 - Encurtador de URL
            </span>

            <span className='developer'>
                Desenvolvido por <a href="#">Ygor Guilherme</a>
            </span>
        </div>

        <div className='social_media'>
            <a href="#">
                <img src={Whatsapp} alt="whatsapp" />
            </a>

            <a href="#">
                <img src={Linkedin} alt="linkedin" />
            </a>

            <a href="#">
                <img src={Facebook} alt="facebook" />
            </a>            
        </div>
    </footer>
  )
}

export default Footer