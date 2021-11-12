import jwt_decode from "jwt-decode"
import { decodetoken } from './types';
import { GetToken } from './TokenHelpers';
export function getRoleUser(){
let token = GetToken();
console.log(token);
if(token === false){
    return false;
}else{
let {rol}:decodetoken = jwt_decode(token);
return rol;
}

}
export function getUserId(){
    let token = GetToken();
    if(token == false){
        return false;
    }else{
    let {user}:decodetoken = jwt_decode(token);
    return user;
    }

}