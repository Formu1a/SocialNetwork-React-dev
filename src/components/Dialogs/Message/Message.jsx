import s from "./Message.module.css"



const Message =(props) =>{
    return(
        <div> 
            <div className={s.massage}>{props.dialog}</div>
        
        </div>
    )
}


export default Message