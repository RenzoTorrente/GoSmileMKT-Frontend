

import React from 'react';
import { Flex,Box, Stack,Text, Heading,Button,Image, Icon } from '@chakra-ui/react';
import { HiCreditCard,HiCurrencyDollar} from "react-icons/hi";
import {  RiBankLine } from "react-icons/ri";
import mercadopago from '../../assets/img/mercadopago.png'
import mediosdepago from '../../assets/img/mediosbanner.png'
export function MediosdePago():JSX.Element{
let items:any []= [
    {
    title:"Efectivo",
    describe:"Ponté en contacto con nosotros y te indicaremos como abonar de esta manera",
    icon:HiCreditCard
    },{
        title:"Transferencia bancaria",
        describe:"puedes pagarnos en efectivo si te acercas al local",
        icon:RiBankLine
    },{
        title:"Credito/Debito",
        describe:"puedes pagarnos en efectivo si te acercas al local",
        icon:HiCurrencyDollar
    }
]


 return (
    <Stack p={{base:"5px", md:"15px", lg:"20px"}} heigth={'400px'} w={{base:"100%", md:"80%", lg:"70%"}} style={{margin:"0px auto"}}  direction={{ base: 'column', md: 'row' }}> 
    <Flex spacing={4} w={'full'} height={"90%"} maxW={'lg'}  flexWrap={"wrap"} justifyContent={"center"}>
      <Box w="90%" marginBottom={{base:"15px", md:"30px", lg:"60px"}} >
      <Heading>
      <Text color="#217983"  align="center" fontSize={{base:"2xl", md:"3xl", lg:"4xl"}}>
      <span style={{color:"rgba(139, 132, 132, 0.8)"}}>Todos  </span> los medios de pago
      </Text>
      </Heading>
      </Box>
      <Box >
      <Image  willChange={"auto"}
             objectFit={'cover'} src={mediosdepago}></Image>
      </Box>
    </Flex>
    <Flex justify={"center"} style={{margin:"0px auto"}} w={{base:"70%", md:"90%", lg:"70%"}}>
    <Image objectFit={'cover'} src={mercadopago}></Image>

    </Flex>
  
     
     
    
    </Stack>
 )

 }