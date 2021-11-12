import React,{useState} from 'react';
import {
    Button,
    Flex,
    Heading,
    Icon,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import { FaChevronDown} from "react-icons/fa";
import {Link, animateScroll as scroll} from 'react-scroll';
import image from '../../assets/img/layout.jpg'
export function HomeLayout():JSX.Element {

  function ScrollingDown(e:any){
    e.preventDefault();
    scroll.scrollToBottom({
      duration:1000
    });

  }
    return (
      <Stack h={'540px'} w="95%" m="0px auto" direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading as="h3" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                color="#217983"
               >
                Desarrollamos
              </Text>
              <br />{' '}
              <Text color={'#217983'} as={'span'}>
                soluciones digitales
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
             impulsamos a tu empresa a lo mas alto
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                bg={'#217983'}
                color={'white'}
                _hover={{
                  bg: '#03636D',
                }}>
                Comenzamos
              </Button>
            </Stack>
            <Flex justifyContent={"flex-end"}>
         <Icon onClick={(e)=>{ScrollingDown(e)}} _hover={{color:"rgb(50, 121, 129)"}}  cursor={"pointer"} as={FaChevronDown} w={12} h={8} color="#03636D"></Icon>
            </Flex>
            
          </Stack>
         
        </Flex>
        <Flex w={{base:"100%", md:"90%", lg:"60%"}} padding="15px 0px">
          <Image
             rounded={'md'}
             alt={'Go Smile agencia de marketing'}
             src={image}
             willChange={"auto"}
             objectFit={'cover'}
             width={"100%"}
           
          />
        </Flex>
      </Stack>
    );
  }
