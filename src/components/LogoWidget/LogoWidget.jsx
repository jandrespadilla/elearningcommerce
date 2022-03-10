import './LogoWidget.css'
import logo from 'log.png'

function LogoWidget({titulo}) {
    return (
        <img src={logo} alt="{titulo}" className="logoWidget"  /> 
    
    )  
}

export default LogoWidget