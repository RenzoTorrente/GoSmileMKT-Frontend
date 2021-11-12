
import React,{MouseEvent} from 'react'
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    Select,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import { BsPerson } from 'react-icons/bs';
  import {MdOutlineEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { authemail, name } from '../../Constants/Constants';
import { emailService } from '../../Services/emailService';
import styles from './contactScreen.module.css';
export function FormContactScreen(){

let {register, handleSubmit, formState:{errors, isSubmitting}} = useForm({mode:"onTouched"});
async function OnSubmit(form:any, e:any){
  try{
    console.log(form);
    e.target.reset();
    }catch(err){
        console.log(err)
    }

}
return (
    <Box w="100%" bg="white" borderRadius="lg">
     <form onSubmit={handleSubmit(OnSubmit)}>
    <Box m={8} color="#0B0E3F">
      <VStack spacing={3}>      
        <FormControl>
          <FormLabel>Your Name</FormLabel>
          <InputGroup  >
            <InputLeftElement
              pointerEvents="none"
              children={<BsPerson color="gray.800" />}
            />
            <Input type="text"  {...register("name",{
              required:name.MSGREQUIRED,
              maxLength:{
                value:100,
                message:name.MSGERRMAXNAME
              },minLength:{
                value:2,
                message:name.MSGERRMINAME

              }
            })} />
          </InputGroup>
         
        </FormControl>

        <FormControl  >
          <FormLabel>Mail</FormLabel>
          <InputGroup >
            <InputLeftElement
              pointerEvents="none"
              children={<MdOutlineEmail color="gray.800" />}
            />
            <Input  type={authemail.TYPE} {...register("email",{
              required:authemail.REQUIRED,
              pattern:{
                value:authemail.PATTERN,
                message:authemail.PATTERNMSG
              }
            })} size="md" />
            
          </InputGroup>
        
        </FormControl>
        <FormControl  >
        <FormLabel>Servicio</FormLabel>
        <Select defaultValue={"Sitio web y redes sociales"}  {...register("servicio",
        {
          required:"necesitamos saber el servicio"
        })} >
        <option  value="Sitio web y redes sociales">Sitio web y redes sociales</option>
        <option value="sitio web">Sitio web</option>
        <option value="redes sociales">Redes sociales</option>
        <option value="Posicionamiento">Posicionamiento</option>
        </Select>
        </FormControl>
        <FormControl >
          <FormLabel>Message</FormLabel>
          <Textarea {...register("asunto")}></Textarea>
          <Text fontSize="md" color="red">
            
          </Text>
        </FormControl>
        
        <FormControl float="right">
          <button
          type="submit"
           className={styles.button_send}
           >
            Send Message
          </button>
        </FormControl>

       

    
      </VStack>
    </Box>
    </form >
  </Box>
)

}