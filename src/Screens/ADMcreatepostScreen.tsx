import { Stack, Center } from '@chakra-ui/layout';
import React from 'react';
import { useParams } from 'react-router';
import FormNewPost from '../Components/FormNewPost/FormNewPost';
import { Spinner } from '@chakra-ui/spinner';
import { useFormNews } from '../Components/FormNewPost/FormNewsHooks/useFormNews';
function AdmCreatePostScreen():JSX.Element{
let {id}:{id:any} = useParams();
let {editmood, newsdata}:{editmood:boolean, newsdata?:any} =  useFormNews(id);

if(editmood === true){
if(newsdata.loading === false){
return (
<Stack w="95%" m="0px auto" maxH="800px" mb="20px">
  {newsdata.loading === false &&(
        <Center>
         <Spinner color="blue" size="lg"></Spinner>
        </Center>      
      )} 
      </Stack>

)}else{
return (
<Stack w="95%" m="0px auto" maxH="800px" mb="20px">
       {newsdata.error? (
       <Center>
       <h3>Ocurrió un error</h3>
       </Center>
       ):(
       <FormNewPost post={newsdata.data}/>
       )
       }

 </Stack>
)}
}else{
        return (
                <Stack w="95%" m="0px auto" maxH="800px" mb="20px">
                <FormNewPost />
               </Stack>
               )
}


}



export default AdmCreatePostScreen;


