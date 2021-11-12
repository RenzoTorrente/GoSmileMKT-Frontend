import React from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
  } from '@chakra-ui/react';
  import { FaCheckCircle } from 'react-icons/fa';
import PriceWrapper from '../PlansWrapper';
export function PlansBox ():JSX.Element{

    return (
        <Box py={12}>
        <VStack spacing={2} w="80%" margin={"0px auto"} textAlign="center">
          <Heading as="h3" fontSize="4xl">
           Preparamos nuestros mejores planes solo tienes que elegir cual se adapta a tu demanda
          </Heading>

        </VStack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 8 }}
          py={10}>
          <PriceWrapper>
            <Box py={4} px={12} >
              <Text fontWeight="500" fontSize="2xl">
                Hobby
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  79
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
              <Box w="100%" pt={7}>
                <Button w="full" colorScheme={"green"} variant="outline">
                 Comenzar
                </Button>
              </Box>
            </Box>
            
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
             
            </VStack>
          </PriceWrapper>
  
          <PriceWrapper>
            <Box position="relative" >
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: 'translate(-50%)' }}>
                <Text
                  textTransform="uppercase"
                  background={"#22C35E"}
                  px={3}
                  py={1}
                  color={"white"}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="l">
                  Recomendado
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  Growth
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    149
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /month
                  </Text>
                </HStack>
                <Box  w="100%" pt={7}>
                  <Button w="full" colorScheme="whatsapp">
                    Comenzar
                  </Button>
                </Box>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    unlimited build minutes
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Lorem, ipsum dolor.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    5TB Lorem, ipsum dolor.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    5TB Lorem, ipsum dolor.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    5TB Lorem, ipsum dolor.
                  </ListItem>
                </List>
               
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Scale
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  349
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
              <Box w="100%" pt={7}>
                <Button w="full" colorScheme="green" variant="outline">
                  Comenzar
                </Button>
              </Box>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
              
            </VStack>
          </PriceWrapper>
        </Stack>
      </Box>

    )

}
export default PlansBox;