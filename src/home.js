import './home.css'

function Home(){
    return(
        <div className="Home">
            <div className='Titulos'>
                <h2 className='Titulo'>Bem-Vindo a Página inicial da Nossa Av2</h2>
                <p className='Sub-titulo'>Caralho</p>
            </div>
            <div className='Fotos'>
                <img className='FOTO5' src={require('./FOTO5.jpg')} width={200} height={300}/>
                <img className='FOTO6' src={require('./FOTO6.jpg')} width={200} height={300}/>
                <img className='FOTO7' src={require('./FOTO7.jpg')} width={200} height={300}/>
                <img className='HOME' src={require('./HOME.jpg')} width={200} height={300}/>
            </div>
            <div className='Textos'>
                <p className='Textinho1'>
                    Vista de cima Cimatec park!!!!!
                </p>
                <p className='Textinho2'>
                   Portaria Senai cimatec
                </p>
                <p className='Textinho3'>
                   Portaria SESI Saúde Piatã
                </p>
                <p className='Textinho4'>
                    Portaria SESI Piatã
                </p>
            </div>
        </div>
    )
}

export default Home