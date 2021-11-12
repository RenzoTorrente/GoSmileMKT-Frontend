
import React from 'react';
import { RegisterComponent } from '../Components/RegisterComponent/RegisterComponent';
import { Box, Flex } from '@chakra-ui/react';
function RegisterScreen():JSX.Element{
return(
    <Flex alignItems="center"  w="90%" h="100vh" m="0px auto">
      <RegisterComponent/>
    </Flex>
)

}
export default RegisterScreen;