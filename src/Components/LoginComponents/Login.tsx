import React from 'react';
import { Box,FormControl,Input,FormLabel,Stack,Button,FormHelperText } from '@chakra-ui/react';
import style from './Login.module.css';
import { useForm } from 'react-hook-form';
import { name, required, authpassword } from '../../Constants/Constants';
function Login():JSX.Element{
    const { handleSubmit,register,formState: { errors} } = useForm({mode:'onTouched'});
    function onSubmit(values:any){
    console.log('holaaa');
    console.log(values);
    }
    return (
        <Stack w={{base:"270px" , md:"80%", lg:"35%"}} spacing="30px" minH="320px" background="#142342"  color="white"  padding="20px 30px" m="0px auto" borderRadius="10px" >
            <form  className={style.form_control} onSubmit={handleSubmit(onSubmit)}>
            <FormControl marginTop="10px">
                <FormLabel>Name</FormLabel>
                <Input background="white" color="black" type="text" {...register("name", {
                     required:name.MSGREQUIRED,
                     })}/>
                <FormHelperText color="red">{errors.name?.message}</FormHelperText>
            </FormControl >
            <FormControl marginTop="30px">
                <FormLabel>Password</FormLabel>
                <Input background="white" color="black" type={authpassword.TYPE}  {...register("password", {
                    required:authpassword.MSGREQUIRED
                })}/>
                 <FormHelperText color="red">{errors.password?.message}</FormHelperText>
            </FormControl>
            <Button type="submit" background="#3e5898" _hover={{background:"#455b94"}} marginTop="30px" alignItems="center" w="100%">Enviar</Button>
            </form>
        </Stack>
       
    )

}
export default Login;