import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

function PriceWrapper({ children }: { children: React.ReactNode }) {
    return (
      <Box
        mb={4}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: 'center', lg: 'flex-start' }}
        borderColor={useColorModeValue('gray.200', 'gray.500')}
        borderRadius={'xl'}>
        {children}
      </Box>
    );
  }
  export default PriceWrapper;