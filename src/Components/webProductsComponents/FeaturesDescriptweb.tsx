
import {FcOnlineSupport, FcPlanner, FcVoicePresentation, FcGoogle, FcMultipleDevices, FcMoneyTransfer, FcPlus, FcHome } from "react-icons/fc";
import React from 'react';
import { Icon } from '@chakra-ui/react';
export const FeaturesDescriptweb = [
{
  id:1,
  title:"comunicación personalizada",
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  icon:<Icon w={6} h={6} as={FcOnlineSupport}></Icon>
},
{
  id:2,
  title:"Entregas a tiempo",
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  icon:<Icon w={6} h={6} as={FcPlanner}></Icon>
},
{
  id:3,
  title:"Nuestros clientes nos avalan",
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  icon:<Icon w={6} h={6} as={FcVoicePresentation}></Icon>
},
{
  id:4,
  title:"Visibilidad en Google",
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  icon:<Icon w={6} h={6} as={FcGoogle}></Icon>
},
{
  id:6,
  title:"Precios acordes",
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  icon:<Icon w={6} h={6} as={FcMoneyTransfer}></Icon>
},
{
  id:5,
  title:"Nos comprometemos con el proyecto",
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  icon:<Icon w={6} h={6} as={FcMultipleDevices}></Icon>
},

{
  id:7,
  title:"Combinación de servicios",
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  icon:<Icon w={6} h={6} as={FcPlus}></Icon>
},
{
  id:8,
  title:"Sin moverte de tu casa",
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  icon:<Icon w={6} h={6} as={FcHome}></Icon>
},
]

export type feature = {
id:number,
title:string,
text:string,
icon:any
}