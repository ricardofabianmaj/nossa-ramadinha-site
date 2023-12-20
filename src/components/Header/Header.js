import ImagemIcones from '../midia/LittleIcons.png'

function Header(){
  return (
    <header>
        <div className='header'>
          <h1>NOSSA RAMADINHA MELHOR</h1>
          <p>Lutando pela comunidade</p>
          <img id='ImagemIcones' src={ImagemIcones} alt='Imagem de Pequenos Icones'/>
        </div>
    </header>
  )
}

export default Header