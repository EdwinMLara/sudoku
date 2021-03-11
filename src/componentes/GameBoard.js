import React,{useState,useRef,
    useContext,useEffect} from 'react'
import Cuadro from './Cuadro';
import Tablero from './Tablero';
import {SudokuContext} from '../App'

function GameBoard() {
    const context = useContext(SudokuContext);
    const refValue = useRef(null);

    const getSudokeAsArray = () =>{
        let auxSudokuAsArray = [];
        for(let i=0;i<context.length;i++){
            auxSudokuAsArray = auxSudokuAsArray.concat(context[i]);
        }
        return auxSudokuAsArray;
    }

    const getTableros = () =>{
        let MatrixTableros = [];
        let aux1 = 0;
        let aux2 = 0;
        let tablero = 1;
        for(let i=1; i<8 ;i+=3){
            for(let k=1;k<8;k+=3){        
                MatrixTableros[aux1] = [];
                for(let i1=i-1;i1<=i+1;i1++){
                    for(let k1=k-1;k1<=k+1;k1++){
                        context[i1][k1].tablero = tablero;
                        MatrixTableros[aux1][aux2] = context[i1][k1];
                        aux2++;
                    }
                }
                aux2 = 0;
                aux1++;
                tablero++;
            }
        }
        return MatrixTableros;
    }

    const [sudoku,setSudoku] = useState(getTableros());
    const [sudokuAsArray,setSudokuAssArray] = useState(getSudokeAsArray());
    
    const [id,setId] = useState(-1);

    const onHandleSelectedClick = (e) =>{
        refValue.current.value = e.target.value;
    }

    const onHandleSodukuClick = (e) =>{
        let att = e.target.attributes;
        let id = parseInt(att.id.value);
        let tablero = parseInt(att.tablero.value);
        let value = att.value.value;
        setId(id);
        checkValidNumber(id,tablero);
    }

    const checkValidNumber = (id,tablero) =>{
        let arrayTab = sudoku[tablero -1];
        let sumTab = arrayTab.reduce((sum,item) =>{
            return  sum + item.value;
        })
        let obj =  arrayTab.filter(square => (square.id == id));
        let rows = sudokuAsArray.filter(square => (square.row == obj[0].row));
        let cols = sudokuAsArray.filter(square => (square.col == obj[0].col));
        console.log(obj);
        console.log(rows);
        console.log(cols);
    }

    /*useEffect(() => {
        console.log(id);
        if(id>-1){
            console.log("Entro");
            const filter = sudoku.filter(item => item.id == id);
            console.log("filter",filter[0]);
            let newArray = [...sudoku];
            let auxObj= {...filter[0],value : parseInt(refValue.current.value)};
            console.log("objecto",auxObj);
            newArray[id-1] = auxObj;
            console.log(newArray);
            setSudoku(newArray);
        }
    }, [id]);*/

    return (
            <div className="container">
                {sudoku.map((item,index) => {
                    return (
                        <div className="game" >
                            <Tablero key={index} cuadros={item} onClick={onHandleSodukuClick}/>
                        </div>
                    )
                })}
            <div>
                <input ref={refValue} defaultValue={1}/>
            </div>
            <div>
                {(function (nums){
                    for(let i=1;i<=9;i++){
                        nums.push(<Cuadro key={i} value={i} onClick={onHandleSelectedClick}/>);
                    }
                    return nums;
                })([])
                }
            </div>
        </div>
    )
}

export default GameBoard
