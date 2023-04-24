import React from 'react';
import { Box, Button,ButtonGroup,Stack, IconButton,useBreakpointValue,Image, Center} from '@chakra-ui/react'
import { Avatar, AvatarGroup } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import  avatar from '../Asssets/avatar.png'
import logo from '../Asssets/Logo.png'

const Navbar = () => {
    const isDesktop = useBreakpointValue({ base: false,lg: true, })
      return (
        
            <Box py={{ base: '5', lg: '5', }} justify="space-between" p={3} >
                   
                {isDesktop ? (
                
                            <Stack direction='row' justify="space-between" >  
                            <Image alt='Oshigaki Kisame' src={logo}  h={20} />
                            <Center>                 
                              <ButtonGroup variant="link" w={600}  gap={5}>
                                {['Home', 'Call With Astrologer', 'Live(Comming Soon)'].map((item) => (
                                  <Button key={item} color='#fff' 
                                    _hover={{ color: "#FD9D54",}}
                                    >{item}</Button>
                                ))}
                              </ButtonGroup>
                             </Center>   
                              <AvatarGroup   >                       
                              <Avatar name="image" src={avatar} />
                              </AvatarGroup>
                             </Stack>
                          
                         ) : (
                          <Stack direction='row'>
                          <IconButton
                              variant="ghost"
                              icon={<FiMenu fontSize="1.25rem" />}
                              aria-label="Open Menu"
                              color='#fff'
                            />
                          <Image alt='Oshigaki Kisame' src={logo}  w={32} h={12} /> 
                          </Stack>
               
                )}
              
            </Box>     
     
   )
}

export default Navbar
