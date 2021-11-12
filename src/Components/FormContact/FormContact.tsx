import React from 'react';
import { Stack, FormControl, Input, Text , FormLabel ,Flex , Select, Textarea, Button, SimpleGrid} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { authphone } from '../../Constants/Constants';
import {
    name,
    required,
    authpassword,
    authemail,
    lastname,
  } from "../../Constants/Constants";
import { emailService } from '../../Services/emailService';
export function FormContact ():JSX.Element{

  
let {handleSubmit,register, formState: { errors, isSubmitting, }} = useForm({mode:"onTouched"})
    async function onSubmit(form:any, e:any){
      try{
      let sendEmail = await  emailService(form);
      e.target.reset()
      }catch(err){
          console.log(err)
      }
      
      
     } 
    return(
     <Stack style={{margin:"20px auto"}} p="20px"  boxShadow={"0px 1px 1px #cccc"} w={{ base:"90%", md:"70%", lg:"80%"}} justifyContent={"center"} >
     <Text mb="10px" as="h5" fontSize={"4xl"} color={"#217983"} textDecoration={"underline"}>
         Contactacnos
        </Text>
     <form onSubmit={handleSubmit(onSubmit)} >
    <SimpleGrid  columns={{ base: 1, md: 2 }}  spacing={8}>
     <FormControl>
          <FormLabel >Name</FormLabel>
          <Input
            background="white"
            color="black"
            type="text"
            {...register("name", {
              required: name.MSGREQUIRED
             
            })}
          />
          <Text fontSize="md" color="red">
            {errors.name?.message ? errors.name.message : ""}
          </Text>
          </FormControl>
          <FormControl >
          <FormLabel>Apellido</FormLabel>
          <Input
          
            background="white"
            color="black"
            type="text"
            
            {...register("apellido", {
              required: lastname.MSGREQUIRED,
             
            })}
          />
          <Text fontSize="md" color="red">
            {errors.apellido?.message ? errors.apellido.message : ""}
          </Text>
          </FormControl>
        
    <FormControl >
          <FormLabel>Telefono</FormLabel>
          <Input
            background="white"
            color="black"
            type="text" placeholder="ejemplo: 54 9 3416 05 4814" 
            {...register("telefono", {
              pattern: {
                value: authphone.PATTERN,
                message: authphone.PATTERNMSG,
              },
            })}
          />
        <Text fontSize="md" color="red">
            {errors.telofono?.message ? errors.telefono.message : ""}
          </Text>
   </FormControl>

<FormControl >
          <FormLabel>Email</FormLabel>
          <Input
            background="white"
            color="black"
            type="text"
            {...register("email", {
              required: authemail.REQUIRED,
              pattern: {
                value: authemail.PATTERN,
                message: authemail.PATTERNMSG,
              },
            })}
          />
          <Text fontSize="md" color="red">
            {errors.email?.message ? errors.email.message : ""}
          </Text>
          </FormControl>
          </SimpleGrid>
   <FormControl style={{marginTop:"25px"}}>
    <FormLabel >Servicio: </FormLabel>
   <Select defaultValue={"Sitio web y redes sociales"}  {...register("servicio", {
              required: "el asunto es obligatorio",
            
            })}>
    <option  value="Sitio web y redes sociales">Sitio web y redes sociales</option>
    <option value="sitio web">Sitio web</option>
    <option value="redes sociales">Redes sociales</option>
    <option value="Posicionamiento">Posicionamiento</option>
   </Select>

   </FormControl>
   <FormControl marginTop="25px">
  <FormLabel>Consulta: </FormLabel>
  <Textarea height={"100px"} type="text" {...register("asunto")}/>
   </FormControl>
    <Flex w="100%" justifyContent="flex-end" marginTop="10px">
    <Button background={"#03636D"} color="white" _hover={{background:"#217983"}} type="submit" >Enviar</Button>
    </Flex>
    
     </form>
     </Stack>

    )
}