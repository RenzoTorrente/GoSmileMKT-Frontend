import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Login from '../Components/LoginComponents/Login';

function LoginScreen():JSX.Element{
return(
    <Flex alignItems="center"  w="90%" h="100vh" m="0px auto">
      <Login/>
    </Flex>
)

}
export default LoginScreen;