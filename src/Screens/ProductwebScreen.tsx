import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';
import CarouselProductWeb from '../Components/webProductsComponents/carouselProductWeb';
import { CardsWebScreen } from '../Components/webProductsComponents/CardsWebs';
import descriptWebPage from '../Components/webProductsComponents/DescriptWebPage';
import DescriptWebPage from '../Components/webProductsComponents/DescriptWebPage';
export function ProductWebScren ():JSX.Element{

return (
    <Stack w="100%" minH={"100vh"}>
     <CarouselProductWeb/>
     <Stack w="85%" style={{margin:"20px auto"}}  >
         <CardsWebScreen/>
     </Stack>
     <DescriptWebPage/>
    </Stack>
)

}