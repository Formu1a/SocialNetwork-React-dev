import { stopSubmit } from "redux-form";
import { securityAPI, usersAPI } from "../../api/api";

let SET_USER_DATE = "sao-data/auth/SET_USER_DATE";
let GET_CAPTCHA_URL_SUCCESS = "sao-data/auth/GET_CAPTCHA_URL_SUCCESS";

export type initialStateType ={
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null,
}


let initialState:initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case SET_USER_DATE:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

type setAuthUserDataPayloadType={
        userId:number | null
        email:string | null
        login:string | null
        isAuth:boolean
}

type setAuthUserDataType = {
    type: typeof SET_USER_DATE,
    payload: setAuthUserDataPayloadType
}


export const setAuthUserData = (userId:number | null, email:string | null, login:string | null, isAuth:boolean):setAuthUserDataType => {
    return {
        type: SET_USER_DATE,
        payload: {
            userId,
            email,
            login,
            isAuth,
        },
    };
};

type getCaptchaUrlSuccessType={
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload:{captchaUrl:string}
}

export const getCaptchaUrlSuccess = (captchaUrl:string):getCaptchaUrlSuccessType => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {
            captchaUrl,
        },
    };
};

export const getAuthUserData = () => async (dispatch:any) => {
    let response = await usersAPI.auth();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};



export const login =
    (email:string, password:string, rememberMe:boolean, captcha:null) => async (dispatch:any) => {
        let response = await usersAPI.login(
            email,
            password,
            rememberMe,
            captcha
        );
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let message =
                response.data.messages.length > 0
                    ? response.data.messages[0]
                    : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    };

export const logout = () => async (dispatch:any) => {
    let response = await usersAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};
export const getCaptchaUrl = () => async (dispatch:any) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
