import { Avatar, Box, Stack, Text, useColorModeValue,Image,Card,Center } from '@chakra-ui/react';
import userreview from '../Asssets/userreview.png'
import Ratings from '../Asssets/Ratings.png'
import testimony1 from '../Asssets/testimoy1.png'
import testimony2 from '../Asssets/testimoy2.png'
import testimony3 from '../Asssets/testimony3.png'
import testimony4 from '../Asssets/testimony4.png'
import testimony5 from '../Asssets/testimony5.png'
import testimony6 from '../Asssets/testimony6.png'
import testimony7 from '../Asssets/testimony7.png'

export default function WithLargeQuote() {
    const image ={
        testimony1:testimony1,
        testimony2:testimony2,
        testimony3:testimony3,
        testimony4:testimony4,
        testimony5:testimony5,
        testimony6:testimony6,
        testimony7:testimony7, 
    }
  return (
    <Center> 
     <Box> 
   
    <Card w={1222} >
    <Center> 
    <Box>
    <Image src={userreview}/>
   
    </Box>
    </Center>
    
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Box>
    <Image src={Ratings}/>
    </Box> 
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with 
      </Text>
      <Box textAlign={'center'} display={'flex'} >
        <Image
          src={testimony1}
          alt={'Jenny Wilson'}
          rounded={'full'} 
          px={'2'} 
          boxSize='80px'    
        />
         <Image
          src={testimony2}
          alt={'Jenny Wilson'}
          rounded={'full'} 
          px={'2'} 
          boxSize='90px'    
        />
         <Image
          src={testimony3}
          alt={'Jenny Wilson'}
          rounded={'full'}  
          px={'2'}   
          boxSize={'100PX'}      
        />
         <Image
          src={testimony4}
          alt={'Jenny Wilson'}
          rounded={'full'}
          px={'2'} 
          boxSize={'130PX'}         
        />
      
         <Image
          src={testimony5}
          alt={'Jenny Wlson'}
          rounded={'full'} 
          px={'2'} 
          boxSize={'100px'}         
        />
         <Image
          src={testimony6}
          alt={'Jenny Wilson'}
          rounded={'full'} 
          px={'2'}
          boxSize={'90px'}          
        />
         <Image
          src={testimony7}
          alt={'Jenny Wilson'}
          rounded={'full'}
          px={'2'} 
          boxSize={'80px'}          
        />
       </Box>
       <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        color={'orange'}>
       Henry
      </Text>
      </Stack>
     </Card>
     </Box> 
    </Center>
  );
}