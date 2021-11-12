import React from 'react';
import { Box,Flex,Heading,Stack,Text } from '@chakra-ui/react';
import { HomeLayout } from '../Components/HomeLayout/HomeLayout';
import ServiceHome from '../Components/ServicesComponent/ServicesComponet';
import { FormContact } from '../Components/FormContact/FormContact';
import SliderHome from '../Components/HomeComponents/SliderHome/Sliderhome';
function HomeScreen():JSX.Element{

    return (
        <Box maxWidth={"100vw"} minHeight={"100vh"}>
        <HomeLayout/>
        <Stack m="10px auto" w="85%" justifyContent="center">
        <Box mt="40px" w="100%" h="120px" > 
        <Heading as="span" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} variant={"link"} color="#03636D" ><Text as="h1"    position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '20%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#CED3DC',
                align:"center",
                zIndex: -1,
              }}  align="center">Go Smile Marketing</Text></Heading>
        <Text align="center" color={'gray.600'}  as="p" fontSize={"xl"} style={{fontStyle:"italic"}} >Preparados para brindarte  mejor servicio </Text>
        </Box>
        <ServiceHome/>
        </Stack>
        <Stack style={{marginTop:"20px"}}>
          <SliderHome/>
        </Stack>
        <Flex m="10px auto" w="85%">
        <FormContact/>
        </Flex>
        </Box>
        
        
    )


}
export default HomeScreen;