import axiosIntance from "../helpers/axios";
import { NewsType } from '../Components/FormNewPost/NewsType';


async function PostService(page:number):Promise<any>{
let resp = await axiosIntance.get(`/posts/${page}`);
return resp.data;
}
export default PostService;

export async function AddPost(post:FormData):Promise<any>{

    let resp = await axiosIntance.post('/post', post);
    
    return resp;

}
export async function GetPostById(id:any):Promise<any>{

    let resp = await axiosIntance.get(`/post/${id}`);
    
    return resp;

}
export async function UpdatePost(id:string, post:FormData):Promise<any>{
    console.log(post);
    let resp = await axiosIntance.patch(`/post/${id}`, post);
    
    return resp;

}
export async function DeleteNewService(id:string):Promise<any>{
    let resp = await axiosIntance.delete(`/post/${id}`);
    
    return resp;

}