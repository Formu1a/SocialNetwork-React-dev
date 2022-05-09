import dialogReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {
    _state: {
        profilePage:{
            posts:[
                {id:1, message:"Hey,why nobody love me ?", likeCounts:23},
                {id:2, message:"Its our new program! Hey!", likeCounts:4},
                ],
            newPostText:''
        },
    
        dialogsPage:{
            messages:[
                {id:1, message:"Hi"},
                {id:2, message:"How are you?"},
                {id:3, message:"Hi Yatora )"},
                {id:4, message:"Hi Julia"},
                {id:5, message:"Hi Dima"},
                ],
                newMessageText:'',
            dialogs:[
                    {id:1, name:"Dima"},
                    {id:2, name:"Arina"},
                    {id:3, name:"Anton"},
                    {id:4, name:"Oleg"},
                    {id:5, name:"Igor"},
                    {id:6, name:"Yoto"},
                    ],
        },
        sidebar:{}
    },
    _callSubscriber(){},

    getState(){
        return this._state
    },

    subscribe(observer){
        this._callSubscriber= observer
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)

        this._callSubscriber(this._state)
    }
    
}

export default store

