import React from 'react'
import Subtitle from '../../componets/subtitle/subtitle'
import Petesc from '../../componets/Petesc/Petesc'

const Banho = () => {
  return (
    <div>
  <div className='cont'> <Subtitle>Escolha seu pet</Subtitle></div>
<div className='conti'>
<Petesc link={"/finaliz"}>cachorro</Petesc>
<Petesc link={"/finaliz"}>gato</Petesc>

</div>
    </div>
  )
}

export default Banho
