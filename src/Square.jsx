import React from 'react'


function Square({value,onSquareClick}) {
  return (
    <div>
        <button onClick={onSquareClick} className='btn_one'>{value}</button>
    </div>
  )
}

export default Square