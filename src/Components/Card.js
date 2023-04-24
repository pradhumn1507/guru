import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Image } from '@chakra-ui/react'

const Customcard = ({image}) => {
  return (
    <Card maxW='md' w={200} >
    <Image
    objectFit='cover'
    src={image}
    alt='Chakra UI'
    h={70}
    
  />
  </Card>
  )
}

export default Customcard
