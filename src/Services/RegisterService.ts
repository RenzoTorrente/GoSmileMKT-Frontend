import axiosIntance from "../helpers/axios";

export async function RegisterService(form:any):Promise<any>{
    
 let data = await  axiosIntance.post("/signup", form);  

 return data;
 

}