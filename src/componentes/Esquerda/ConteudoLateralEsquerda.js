import logo from '../../imagens/images.png';
import Menu from './TextMenu';
import './ConteudoLateralEsquerda.css'
import { PiHouseFill } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { CgAddR } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' className="logo"/>
            <ul>  
                <Menu icone={<PiHouseFill size="2vw" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Home"/>
                <Menu icone={<FiSearch  size="2vw" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Explorar"/>
                <Menu icone={<BiMessageSquareDetail size="2vw" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Mensagens"/>
                <Menu icone={<FaRegHeart size="2vw" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Notificações"/>
                <Menu icone={<CgAddR  size="2vw" style={{
                    color:'black',
                    alignSelf:'center',
                    justifySelf:"start",
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Publicar"/>
                <Menu icone={<CgProfile size="2vw" style={{
                    color:'black',
                    marginRight:'10%',
                    marginLeft:"10%",
                }}/>} nome="Perfil" className="perfil"/>
            </ul>
        </div>
    )
}

// export default ConteudoLateralEsquerda;