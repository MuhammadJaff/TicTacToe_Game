import Square from './Square'

function Board({square,xIsNext,onPlay}) {

    const PlayIt = (i)=>{

	  if (calculateWinner(square) || square[i]){
	  	return;
	  };
      const nextSquare = square.slice();  
       xIsNext ?
       nextSquare[i] = "X":
       nextSquare[i] = "O"; 
      
      onPlay(nextSquare);
        
    }
      const winner = calculateWinner(square);
      let status;
      winner ? status = "Winner: " + winner :
      status = "Next player: " + (xIsNext ? 'X' : 'O');

  return (
    <div className='playBoard'>
		<div>{status}</div>
        <div className='rowline'>
            <Square onSquareClick={()=>PlayIt(0)}  value={square[0]}/>
            <Square onSquareClick={()=>PlayIt(1)}  value={square[1]}/>
            <Square onSquareClick={()=>PlayIt(2)}  value={square[2]}/>
        </div>
        <div className='rowline'>
            <Square onSquareClick={()=>PlayIt(3)}  value={square[3]}/>
            <Square onSquareClick={()=>PlayIt(4)}  value={square[4]}/>
            <Square onSquareClick={()=>PlayIt(5)}  value={square[5]}/>
        </div>
        <div className='rowline'>
            <Square onSquareClick={()=>PlayIt(6)}  value={square[6]}/>
            <Square onSquareClick={()=>PlayIt(7)}  value={square[7]}/>
            <Square onSquareClick={()=>PlayIt(8)}  value={square[8]}/>
        </div>
    </div>
  )
}
export default Board


function calculateWinner(square){
  const list = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i = 0; i < list.length; i++){
	const [a,b,c] = list[i];

	if(square[a] && square[a] === square[b] && square[a] === square[c]){
		return square[a]
	};
  }
  return null;
}

// (square[i]))function har bosilganda aynan usha button tekshiradi, oldin x yoki o bosilganmi yomi, bosilgan 
// ozgarmidi va pastga code ishlashi davom etmidi, 
// agar bo'sh bosa null qiymat beradi va bu false ga teng, keyin function davom etadi 
// va pastda ozgaradi.
// 
// (calculateWinner(square)) dan kegan javob ham huddi shunaqa 
// yoki null qaytadi va function davom etadi 
// yoki yutkan odam keladi va pastga davom etmidi.
// 
// const winner = calculateWinner(square) bu bilan 1ta variable functionni qiymatini oladi
// agar true bosa yani x yoki o yutgan bosa chiqaradi, yoq agar null bosa oyin davom eturadi.