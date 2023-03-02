import "./style.css";
import iconExcluir from "../../assets/excluir.svg";



export default function Card({item, setValueInput, indice, valueInput}) {

  function handleDeleteTask(indice) {
    
    let taskTemp = [...valueInput]
      taskTemp.splice(indice, 1)
    setValueInput(taskTemp)
    
  }
  return (
      
      <div className="container-li-task">
        <li className="li-card">{item}</li>
        <img className="imgIconDel" onClick={()=> handleDeleteTask(indice)} src={iconExcluir}/>
      </div>
    )
}
