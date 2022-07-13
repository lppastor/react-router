import './Avatar.css'

function Avatar() {
    return (
        <div className="div-avatar">
            <div className='container-img-avatar'>
                <img className="img-avatarr" src="https://www.coladaweb.com/wp-content/uploads/2020/12/20201202-foguete.png" alt=""/>
            </div>
            <hr className='separador-avatar'/>
            <div className='container-descricao-avatar'>
                <p className='titulo-avatar'><strong>Gestão de Imóveis</strong></p>
                <p className='descricao-avatar'>Empresa: </p>
                <p className='descricao-avatar'>Plano: </p>
            </div>
        </div>
    )
}

export default Avatar