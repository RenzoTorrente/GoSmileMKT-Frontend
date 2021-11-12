import React from 'react';
import PlansBox from '../Components/PlansComponent/plansBox/PlansBox';
import { Stack, Heading,Box, Text } from '@chakra-ui/react';
import { LayoutCustomPlans } from '../Components/PlansComponent/LayoutCustomPlans/LayoutCustom';
import { FormContact } from '../Components/FormContact/FormContact';
import { MediosdePago } from '../Components/mediosDePago/MediosdePago';

export function PlansScreen ():JSX.Element{

    return (
    <Stack>
    <PlansBox/>
    <LayoutCustomPlans/>
    <MediosdePago/>
    <Box w="90%" style={{margin:"0px auto"}}>
    <FormContact/>
    </Box>
    
    </Stack>

    )

}
export default PlansScreen;