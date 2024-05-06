import'./footer.css'

function Footer(){
    return(
        <footer className="footer">
            <div  className='footer-itens'>
                <img src={require('./SESI.png')} width={120} className='sesi'/>
                <p className="texto-footer">&copy; 2024 Todos os direitos reservados. </p>
                <p className="text-footer"> Contato:(71)9.9999-9999 </p>
            </div>
        </footer>
    )
}

export default Footer;