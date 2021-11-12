import React from 'react';
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Stack,
    Wrap,
    IconButton,
    Button,
    VStack,
    HStack
    
  } from '@chakra-ui/react';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { FormContactScreen } from '../Components/ContactScreen/FormContactScreen';
import DescriptWebPage from '../Components/webProductsComponents/DescriptWebPage';
import styles from '../Components/ContactScreen/contactScreen.module.css';
 function ScreenContact() {
    return (
       <div className={styles.container_contact} >
       <Flex  className={styles.column_contact} w={{base:"90%", md:"25%"}} justifyContent={"center"} >
       <Box>
           <Heading color="white" align="center">Contact</Heading>
              <Text color="whiteAlpha.800" align="center" mt={{ sm: 3, md: 3, lg: 5 }}>
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8 }} w="100%" >
                    <VStack style={{margin:"0px auto"}} w="100%" spacing={4} align="center" alignItems="flex-start">
                   
                      
                      <Button
                        marginBottom={10}
                        size="md"
                        height="48px"
                        width="80%"
                        variant="ghost"
  
                        color="#ffff"
                        style={{margin:"0px auto", marginBottom:"10px"}}
                        background={"whiteAlpha.300"}
                        _hover={{ border: '2px solid #217983' }}
                        leftIcon={<MdPhone color="#ffff"  size="20px" />}>
                        <Text paddingStart={3} paddingRight={12} >  +54 0341-662156</Text>  
                      </Button>
                      <Button
                       size="md"
                       height="48px"
                       background={"whiteAlpha.300"}
                       width="80%"
                       variant="ghost"
                       color="#ffff"
                       style={{margin:"20px auto"}}
                        _hover={{ border: '2px solid #217983' }}
                        leftIcon={<MdEmail color="#ffff" size="20px" />}>
                        smmarketing@gmail.com
                      </Button>
                     
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={3}
                    px={5}
                    justifyContent={"space-around"}
                    heigh="100%"
                    alignItems="flex-end">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#217983' }}
                      icon={<MdFacebook size="28px"  color="white"/>}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#217983' }}
                      icon={<BsGithub size="28px" color='white' />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#217983' }}
                      icon={<BsDiscord size="28px"  color="white"/>}
                    />
                  </HStack>
                </Box>
       
       </Flex>

     <Flex height={"500px"} className={styles.box_contact} w={{base:"90%", md:"50%"}}>
      <FormContactScreen/>
     </Flex>
     <Box  w="90%" style={{margin:"100px auto"}}>
     <DescriptWebPage/>
     </Box>
     
       </div>
    
          
   
    );
  }
  export default ScreenContact;