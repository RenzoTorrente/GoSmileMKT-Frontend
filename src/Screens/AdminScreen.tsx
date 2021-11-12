import { Center, Container, Flex, Stack,Box } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React,{MouseEvent} from 'react';
import { useQuery } from 'react-query';
import NewList from '../Components/NewsComponent/NewsList';
import { DummyNews } from '../Components/NewsComponent/NewsType';
import PostService from '../Services/PostService';
import { Redirect, useHistory } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { paginationhelper } from '../helpers/paginationhelper';
import style from '../Components/NewsComponent/NewsList.module.css'
import {Link, animateScroll as scroll} from 'react-scroll';
export function AdminScreen():JSX.Element{
let history = useHistory();
const [page, setPage] = React.useState(1)
let { isLoading, isError, data, error, isFetching}:any = useQuery(["posts", page], ()=> PostService(page), { keepPreviousData : true });

function Onclick(e:MouseEvent<HTMLElement>, number:number){
  e.preventDefault()
  if(number === -1 ){
  setPage(Math.max(page - 1, 1))
  }else if(number === 1){
   setPage( page + 1);
  }else{
    setPage(number)
  }
  scroll.scrollToTop({
    duration:100
  });

}
if(isLoading){
  return (  
      <Center>
        <Spinner size="xl" color="blue" thickness="5px" />
      </Center>
      )
}else if(isError){
  return(
<Center>
        <h4>Ocurrió un problema : {error}</h4>
  </Center>
  )
}else{
}
  return (

        <Container maxWidth="container.md"  p={{base:"0px"}}>
        <NewList  datas={data.posts}/>
        <Center mb="10px">
        <Button
          onClick={(e)=>Onclick(e, -1)}
          disabled={page === 1 }
        >
          previus
        </Button>{' '}
        {paginationhelper(data.pages, page).map((e:any)=>(
  
         <button disabled={page === parseInt(e)}  className={page === parseInt(e)  ? style.blockedbutton : style.button_pagination}  onClick={(i)=>Onclick(i, e)}>{e}  </button>
 
         )) }
        <Button
          onClick={(e)=>Onclick(e, 1)}
          // Disable the Next Page button until we know a next page is available
          disabled={page >= data.pages }
        >
          next
        </Button>{' '}
        
      </Center>
        </Container>
      
    )
    
}
