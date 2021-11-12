import React,{ ReactElement } from "react";
import { Box, Stack, Flex, Text, Icon, Button } from '@chakra-ui/react';
import { FcMultipleDevices,FcSelfie, FcPositiveDynamic } from 'react-icons/fc';

export interface FeatureBox {
    title: string;
    text: string;
    icon: ReactElement;
  }
  

export let contentData :FeatureBox [] =[
    {
        title:"Desarrollo de sitios webs",
        text:"Tener prensencia en la web es indispensable para cualquier negocio de estos tiempos",
        icon:<Icon as={FcMultipleDevices} w={10} h={10} />
    } ,
    {
        title:"Redes Sociales",
        text:"Nos encargamos de manejar tus redes sociales de la mejor manera",
        icon:<Icon as={FcSelfie} w={10} h={10} />
    } ,
    {
        title:"Posicionamiento de marca",
        text:"Posicionamos tu marca en el mundo digital, trabajando el SEO y optimizando tu contenido",
        icon:<Icon as={FcPositiveDynamic} w={10} h={10} />
    }  

]



export function ContentBox({content}:{content:FeatureBox}):JSX.Element{

   return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}

        justify={'center'}
        alignSelf={"center"}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>

        {content.icon}
        
      </Flex>
      <Text fontWeight={600} as={"h2"} align="center" color="#217983">{content.title}</Text>
      <Text color={'gray.600'}  align="center" >{content.text}</Text>
      <Button variant="link"  color="#217983" justifyContent="center"  background="white">Conocer</Button>
    </Stack>
   ) 
}