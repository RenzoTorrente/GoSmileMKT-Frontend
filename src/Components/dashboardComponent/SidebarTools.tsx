import { Box, Flex, Link, Icon,Stack } from '@chakra-ui/react'
import {
  SettingsIcon,
  EditIcon,
  ChatIcon,
  AtSignIcon,
  PhoneIcon,
} from '@chakra-ui/icons'
import React, { ReactChild } from 'react'
import { useHistory } from 'react-router'
import { CalendarIcon } from '@chakra-ui/icons'
function SideToolsBackOffice({children}:{children:ReactChild}): JSX.Element {
  const history = useHistory()
  const items: any [] = [
    {
      name: 'Editar Inicio',
      action: '/backoffice/home-edit',
      icon: EditIcon,
    },
    {
      name: 'Crear novedades',
      action: '/backoffice/news/create',
      icon: EditIcon,
    },
    {
      name: 'Actividades',
      action: '/backoffice/activities',
      icon: CalendarIcon,
    },
    {
      name: 'Crear Actividad',
      action: '/backoffice/activities/create',
      icon: EditIcon,
    },
    {
      name: 'Novedades',
      action: '/backoffice/news',
      icon: CalendarIcon,
    },
    {
      name: 'Crear Categoria',
      action: '/backoffice/categories/create',
      icon: EditIcon,
    },
    {
      name: 'Categoria',
      action: '/backoffice/categories',
      icon: CalendarIcon,
    },
    { name: 'Usuarios', action: '/backoffice/users', icon: AtSignIcon },
    {
      name: 'Mi organización',
      action: '/backoffice/edit-organization',
      icon: SettingsIcon,
    },
    { name: 'Contactos', action: '/backoffice/contacts', icon: PhoneIcon },
    { name: 'Testimonios', action: '/backoffice/testimonials', icon: ChatIcon },
  ]
  return (
    <Stack minH="100vh"
        w="100%"
    flexWrap="wrap"
    flexDirection="row"
    zIndex={0}>
    
        <Flex w={["20%", "25%", "15%"]} flexDirection="column" minH="500px" bg="#0D1821" justifyContent="space-around">
          {items.map((elem) => (
            <Link
              key={elem.name}
              w="100%"
              p={{base:"10px 10px", md:"10px 20px"}}
              fontSize={{ base: '12px', md: '14px', lg: '15px' }}
              textDecoration="none"
              color="white"
              _hover={{ textDecoration: 'none', background: '#081C2B' }}
              onClick={() => {
                history.push(elem.action)
              }}
            >
              <Icon as={elem.icon} w={4} h={4} pr="5px" />
              {elem.name}
            </Link>
          ))}
    
        </Flex>
      <Box w={["80%", "70%", "70%"]}>
      {children}   
      </Box>
     
      </Stack>
   
  )
}

export default SideToolsBackOffice