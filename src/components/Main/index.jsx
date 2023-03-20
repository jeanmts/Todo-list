import "./style.css";
import { useState } from "react";
import Card from "../../components/Card";



export default function Main() {
    const [inputName, setInputName] = useState(' ')
    const [valueInput, setValueInput] = useState([])


    function handleValueInput () {
        if(inputName === " ") {
            return
        }
        setValueInput([...valueInput, inputName])    
        setInputName(" ")
    }
    return (
        <>
        <div className="container-main">
            <div className="container-input-task">
                <input className="input-main"
                type="text" 
                placeholder="Digite a Sua Tarefa"
                value={inputName}
                onChange={(e)=> setInputName(e.target.value)}            
                />
                <button className="btn-addTask" onClick={handleValueInput}>Adicionar</button>
            </div>
            <div className="container-task">
                <ul className="ul-task">
              {valueInput.map((item, indice)=> {
                  return (
                   <Card
                   key={item}
                   item={item}
                   indice={indice}
                   valueInput={valueInput}
                   setValueInput={setValueInput}
                   />
                   )
                })}
                </ul>
            </div>
            <div></div>
        </div>
        </>
    )
};
