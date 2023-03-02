import './style.css';
import reactIcon from "../../assets/react.svg"
export default function Header() {
    return (
        <>
        <div className='container-header'>
            <h1 className='title-todo'>TODO LIST</h1>
            <img className='img-logo' src={reactIcon} alt="" />
        </div>
        </>
    )
}