import React from 'react';
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
import { feature, FeaturesDescriptweb } from './FeaturesDescriptweb';
  
  export default function DescriptWebPage():JSX.Element {
    return (
      <Box p={4} style={{marginBottom:"100px"}}>
        <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
          <Heading as={"h3"}><Text fontSize={'4xl'} position={"relative"}  _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 0,
                left: 0,
                bg: '#CED3DC',
                align:"center",
                zIndex: -1,
              }}> ¿Por qué deberias contratarnos?</Text></Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            En <strong style={{color:"#217983"}}>Go Smile</strong> tenemos demasiados motivos para que nos contrates , acá te dejamos los que creemos más importantes
          </Text>
        </Stack>
  
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {FeaturesDescriptweb.map((feature:feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box  px={2}>
                 {feature.icon}
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }