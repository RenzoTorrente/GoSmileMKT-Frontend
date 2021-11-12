import Icon from '@chakra-ui/icon';
import { AttachmentIcon } from '@chakra-ui/icons';
import { Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { styled } from '@chakra-ui/system';
import React, { useState, useEffect } from "react";
import styles from './EditorPost.module.css';
import {useDropzone} from 'react-dropzone';


export function BoxImage(props:any) {
 let {postcontent , setcontent}:any = props;
 let [imagen , setimage]:any = useState({
   preview:postcontent.image
 });
 let {getRootProps, getInputProps, isDragActive } = useDropzone({
   accept:"image/*",
   multiple:false,
   onDropAccepted:(acceptedFiles)=>{
     console.log(acceptedFiles[0]);
      setimage({
        preview: URL.createObjectURL(acceptedFiles[0])
        })
        setcontent({
          ...postcontent,
          image: acceptedFiles[0]
        })
  },
  
 });

 return (
     <Stack w="100%" >
     <Stack border="0.5px dashed #ccc"  m="0px auto" h="300px" w="500px"  cursor="pointer" {...getRootProps()}>
      <input   type="file" name="image" {...getInputProps()}/>
  
      {
      imagen.preview && postcontent.image !== ""  ?(
        <div className={styles.boximage}>
          <img src={imagen.preview}  style={{height:"300px", width:"500px"}}/>
        </div>
      ):(
      <Flex w="100%" flexWrap="wrap" h="100%" alignItems="center" justifyContent="center">
         <Icon w={8} h={7}  color="gray" as={AttachmentIcon} />
         <Text size="sm" color="gray">  attach a picture</Text>
        </Flex>
        )
      }
     
     </Stack>   
      

  
     </Stack>
     
  )
}