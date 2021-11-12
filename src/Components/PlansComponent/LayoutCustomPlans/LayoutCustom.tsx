

import React from 'react';
import { Flex,Box, Stack,Text, Heading,Button } from '@chakra-ui/react';
import styles from './LayoutCustom.module.css';
 export function LayoutCustomPlans():JSX.Element{

 return (
     <Box w={"full"} className={styles.layoutmain} style={{marginBottom:"30px"}}>
      <Flex p="10" height={"100%"} alignItems={"center"}w={{base:"80%", md:"70%", lg:"60%"}} margin={"0px auto"} justifyContent={"center"}>
      
      <Heading as="h3">
          <Text>Si ninguno de estos planes de adapta a tu necesidad, customiza tu plan   <Button mt="10px" marginLeft={"5px"} bg={'whiteAlpha.300'}
                 size="lg"
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
          Customizar
      </Button></Text>
          
      </Heading>
     
      </Flex>
     </Box>
 )

 }