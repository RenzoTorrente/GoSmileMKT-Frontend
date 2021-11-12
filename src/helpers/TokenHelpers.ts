import { TOKEN } from "../Constants/Constants";

export function AddToken(token:any){
localStorage.setItem(TOKEN, token);
}

export function DeleteToken(){
localStorage.removeItem(TOKEN)
}

export function GetToken(){
let token = localStorage.getItem(TOKEN);
if(!token){
    return false;
}else{
    return token;
}
}
