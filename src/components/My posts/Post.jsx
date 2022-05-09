import s from './Post.module.css'

const Post = (props) => {
    return(
        <div className={`  ${s.post} `}>
            <img className={s.bomb} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQV124qNcKGFXUBkF0TwjDJthgJGTgbBjVz7G7pvy2YtjmzAOt7LRE8sCpXEzdIQdTQo&usqp=CAU" alt="" />
            <span className={s.item}>
            {props.message }
            </span>
            <div className={s.like}>
                <span>like</span> {props.likeCounts}
            </div>
        </div>
    )
    
    
}
export default Post;