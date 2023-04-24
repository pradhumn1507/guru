import React from 'react'
import Navbar from '../Components/Navbar'
import { Box,Center, Flex } from '@chakra-ui/react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section6 from './Section6'
import Section4 from './Section4'
import Section5 from './Section5'
const Landingpage = () => {
  return ( 
    <Box >
      <Section1/> 
      <Section2/> 
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>  
    </Box> 
  )
}

export default Landingpage
