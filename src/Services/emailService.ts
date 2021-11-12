import axiosIntance from '../helpers/axios';

export async function emailService(form:any):Promise<any>{
let resp = await axiosIntance.post("/contact/consult", form);
return resp;
}