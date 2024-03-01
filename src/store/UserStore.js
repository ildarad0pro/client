import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor(){
        this._isLogged = false
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }
    setIsAuth(bool){
        this._isAuth = bool
    }
    setIsLogged(bool){
        this._isLogged = bool
    }
    setUser(user){
        this._user = user
    }

    get isLogged(){
        return this._isLogged
    }
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}