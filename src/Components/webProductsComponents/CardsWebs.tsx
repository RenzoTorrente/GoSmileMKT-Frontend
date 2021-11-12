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
    Flex,
    Image
  } from '@chakra-ui/react';
  import backgroundgreen from '../../assets/img/bannergreen.jpg';
  import styles from './productswebs.module.css';
  export function CardsWebScreen():JSX.Element{

return (
    <Stack w={{base:"90%", md:"100%", lg:"100%"}} style={{margin:"20px auto"}} minH={"auto"} flexDirection={{base:"column", md:"row", lg:"row"}} justifyContent={"space-around"}>
  
    <Flex w={{base:"100%", md:"30%", lg:"25%"}} className={styles.card_main} >
     <Flex background={"#FF758F"}  w="100%"  borderRadius={"15px"} h={{base:"auto", lg:"100px"}}  flexWrap={"wrap"} justifyContent={"center"}>
       <Box w={"90%"} style={{textAlign:"center"}}>
       <Text fontSize="3xl" color="white">Basico</Text>
      </Box>
      <Box w="100%" background={"#FF77A5"} height={{base:"auto", lg:"100px"}}>
       <Text color="white" fontSize="4xl" alignItems={"center"} align="center">$10.000</Text>
      </Box>
     </Flex>
     <Flex  w="100%" h={"auto"}
                bg={useColorModeValue('gray.50', 'gray.700')}
               >
                <List spacing={3}  w="100%"   marginTop={"20px"} marginBottom={"20px"}>
                  <ListItem h={{base:"30px", md:"35px", lg:"40px"}}  alignItems={"center"}>
                    <Text textAlign={"center"} paddingBottom={2}> Dominio Hosting</Text>
                    <Box w="100%" height={"1px"}  background={"#cccc"}>
                    </Box>
                  </ListItem>
                  <ListItem  h={{base:"30px", md:"35px", lg:"35px"}} >
                    <Text textAlign={"center"} paddingBottom={2}> Dominio Hosting</Text>
                    <Box w="100%" height={"1px"} background={"#cccc"}>
                    </Box>
                  </ListItem>
                  <ListItem h={{base:"30px", md:"35px", lg:"40px"}}>
                    <Text textAlign={"center"} paddingBottom={2}> Dominio Hosting</Text>
                    <Box w="100%" height={"1px"} background={"#cccc"}>
                    </Box>
                  </ListItem>
                  <ListItem h={{base:"30px", md:"35px", lg:"40px"}}>
                    <Text textAlign={"center"} paddingBottom={2}> Dominio Hosting</Text>
                    <Box w="100%" height={"1px"} background={"#cccc"}>
                    </Box>
                  </ListItem>
                  <ListItem h={{base:"30px", md:"35px", lg:"40px"}}>
                    <Text textAlign={"center"}> Dominio Hosting</Text>
                   
                  </ListItem>
                </List>
              
              </Flex>
              <Flex w="100%" justifyContent={"center"} paddingBottom={"20px"}height={"60px"}>
                <Button size="md"  id={styles.button_ft} >Contratar</Button>
               </Flex>
    </Flex>
    <Flex w={{base:"100%", md:"30%", lg:"25%"}} className={styles.card_main}>
     <Flex background={"#22C35E"}  w="100%"  borderRadius={"15px"} h={{base:"auto", lg:"100px"}}  flexWrap={"wrap"} justifyContent={"center"}>
       <Box w={"90%"} style={{textAlign:"center"}}>
       <Text fontSize="3xl" color="white">Basico</Text>
      </Box>
      <Box w="100%" backgroundImage={backgroundgreen} height={{base:"auto", lg:"100px"}}>
       <Text color="white" fontSize="4xl" alignItems={"center"} align="center">$10.000</Text>
      </Box>
     </Flex>
     <Flex  w="100%" h={"auto"}
                bg={useColorModeValue('gray.50', 'gray.700')}
               >
                <List spacing={3}  w="100%"   marginTop={"20px"} marginBottom={"20px"}>
                  <ListItem h={{base:"30px", md:"35px", lg:"40px"}}  alignItems={"center"}>
                    <Text textAlign={"center"} paddingBottom={2}> Dominio Hosting</Text>
                    <Box w="100%" height={"1px"}  background={"#cccc"}>
                    </Box>
                  </ListItem>
                  <ListItem  h={{base:"30px", md:"35px", lg:"35px"}} >
                    <Text textAlign={"center"} paddingBottom={2}> Dominio Hosting</Text>
                    <Box w="100%" height={"1px"} background={"#cccc"}>
                    </Box>
                  </ListItem>
                  <ListItem h={{base:"30px", md:"35px", lg:"40px"}}>
                    <Text textAlign={"center"} paddingBottom={2}> Dominio Hosting</Text>
                    <Box w="100%" height={"1px"} background={"#cccc"}>
                    </Box>
                  </ListItem>
                  <ListItem h={{base:"30px", md:"35px", lg:"40px"}}>
                    <Text textAlign={"center"} paddingBottom={2}> Dominio Hosting</Text>
                    <Box w="100%" height={"1px"} background={"#cccc"}>
                    </Box>
                  </ListItem>
                  <ListItem h={{base:"30px", md:"35px", lg:"40px"}}>
                    <Text textAlign={"center"}> Dominio Hosting</Text>
                   
                  </ListItem>
                </List>
              
              </Flex>
              <Flex w="100%" justifyContent={"center"} paddingBottom={"20px"}height={"60px"}>
                <Button size="md" colorScheme={"whatsapp"}>Contratar</Button>
               </Flex>
    </Flex>
    <Flex w={{base:"100%", md:"30%", lg:"25%"}} className={styles.card_main}>
     <Flex background={"#5595FF"}  w="100%"  borderRadius={"15px"} h={{base:"auto", lg:"100px"}}  flexWrap={"wrap"} justifyContent={"center"}>
       <Box w={"90%"} style={{textAlign:"center"}}>
       <Text fontSize="3xl" color="white">Basico</Text>
      </Box>
      <Box w="100%" background={"#97B2FF"} height={{base:"auto", lg:"100px"}}>
       <Text color="white" fontSize="4xl" alignItems={"center"} align="center">$10.000</Text>
      </Box>
     </Flex>
     <Flex  w="100%" h={"auto"}
                bg={useColorModeValue('gray.50', 'gray.700')}
               >
                <List spacing={3}  w="100%"   marginTop={"20px"} marginBottom={"20px"}>
                  <ListItem h={{base:"30px", md:"35px", lg:"40px"}}  alignItems={"center"}>
                    <Text textAlign={"center"} paddingBottom={2}> Dominio Hosting</Text>
                    <Box w="100%" height={"1px"}  background={"#cccc"}>
                    </Box>
                  </ListItem>
                  <ListItem  h={{base:"30px", md:"35px", lg:"35px"}} >
                    <Text textAlign={"center"} paddingBottom={2}> Dominio Hosting</Text>
                    <Box w="100%" height={"1px"} background={"#cccc"}>
                    </Box>
                  </ListItem>
                  <ListItem h={{base:"30px", md:"35px", lg:"40px"}}>
                    <Text textAlign={"center"} paddingBottom={2}> Dominio Hosting</Text>
                    <Box w="100%" height={"1px"} background={"#cccc"}>
                    </Box>
                  </ListItem>
                  <ListItem h={{base:"30px", md:"35px", lg:"40px"}}>
                    <Text textAlign={"center"} paddingBottom={2}> Dominio Hosting</Text>
                    <Box w="100%" height={"1px"} background={"#cccc"}>
                    </Box>
                  </ListItem>
                  <ListItem h={{base:"30px", md:"35px", lg:"40px"}}>
                    <Text textAlign={"center"}> Dominio Hosting</Text>
                   
                  </ListItem>
                </List>
              
              </Flex>
              <Flex w="100%" justifyContent={"center"} paddingBottom={"20px"}height={"60px"}>
                <Button  id={styles.button_th} size="md"   >Contratar</Button>
               </Flex>
    </Flex>    

    
    </Stack>
)

}