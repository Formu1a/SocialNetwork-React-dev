import s from "./DialogItem.module.css"
import { NavLink } from 'react-router-dom';

const Dialogitem = (props) =>{
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/Dialogs/"+ props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialogitem