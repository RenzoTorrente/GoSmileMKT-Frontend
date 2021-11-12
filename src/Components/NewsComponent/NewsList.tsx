import React,{MouseEvent} from 'react';
import { Table, Tbody, Thead, Tr, Th, Td, Button, Image, Flex ,Stack, Text} from '@chakra-ui/react';
import { NewType } from './NewsType';
import { useHistory } from 'react-router-dom';
import { DeleteNewService } from '../../Services/PostService';
import { useMutation, useQueryClient} from 'react-query';
const formatDate = ( date:string ):string => {
    //transform yyyy-mm-ddT00:00:00.000Z to yyyy-mm-dd
    return date.slice(0, 10);
}
function NewList({datas}:{datas:NewType[]}):JSX.Element{
  let history = useHistory();
  let queryClient = useQueryClient();
const {mutate,data,error, isError,isLoading, }:any = useMutation((DeleteNewService), {
  onSuccess:()=>queryClient.invalidateQueries("posts")
})
async  function deleteNews (e:MouseEvent<HTMLElement>, id:any){
  e.preventDefault();
   await mutate(id)
     
  }
return(
<Table size="sm" colorScheme='black' my={5} >

<Thead>
  <Tr>
    <Th textAlign='center' fontSize={{ base: "14px", md: "1rem"  }} >Nombre</Th>
    <Th  textAlign='center'fontSize={{ base: "14px", md: "1rem"}}>Fecha Creación</Th>
    <Th textAlign='center' fontSize={{ base: "14px", md: "1rem" }}>Acción</Th>
  </Tr>
</Thead>
<Tbody>
  { datas.map( (element:NewType) => (
      <Tr key={element.id}>
          <Td textAlign='center'>{element.title}</Td>
          <Td textAlign='center'>{formatDate(element.createdAt)}</Td>
          <Td textAlign='center'>
            <Button colorScheme='blue' size="xs" onClick={()=>{history.push(`/dashboard/createpost/${element.id}`)}} me={3} my={2} textAlign='center'>Editar</Button>
            <Button colorScheme='blue' size="xs" disabled={isLoading && true}  onClick={(e)=>{deleteNews(e, element.id)}} >Eliminar</Button>
          </Td>
      </Tr>
  ))}  
 </Tbody> 
</Table>

    )
}



export default NewList;