import React from 'react';
import { Stack, Box, SimpleGrid, Icon} from '@chakra-ui/react';
import { ContentBox, FeatureBox, contentData } from './contentbox';
function ServiceHome():JSX.Element{
  
    return (
    <Box p={4} style={{marginBottom:"40px"}}>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
    {contentData.map((elem, i)=>(
    <ContentBox key={i}  content={elem} />
    ))}
    </SimpleGrid>
    </Box>
    )

}
export default ServiceHome;