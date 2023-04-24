import React,{useState} from 'react'
import { Box, Center, Image ,Skeleton} from '@chakra-ui/react'
import {Stack } from '@chakra-ui/react'
import Visitingcards from '../Components/Visitingcards'
import Astrologer1 from '../Asssets/Astrologer1.png'
import Astrologer2 from '../Asssets/Astrologer2.png'
import Astrologer3 from '../Asssets/Astrologer3.png'
import Astrologer4 from '../Asssets/Astrologer4.png'
import Astrologer5 from '../Asssets/Astrologer5.png'
import Astrologer6 from '../Asssets/Astrologer6.png'
import Astrologer7 from '../Asssets/Astrologer7.png'
import Astrologer9 from '../Asssets/Astrologer9.png'
import Manyproblemonesolution from '../Asssets/Manyproblemonesolution.png'
import Crackedge from '../Asssets/Crackedge.png'

const Section3 = () => {
  const [loader, setLoader] = useState(false);  
  const img={
    img1: Astrologer1,
    img2: Astrologer2,
    img3: Astrologer3,
    img4: Astrologer4,
    img5: Astrologer5,
    img6: Astrologer6,
    img7: Astrologer7,
    img9: Astrologer9   
  }

  
  setTimeout(() => {
    setLoader(true)
  }, 12000);


  return (
    <>
   {loader?
    <Center>
    <Box bgColor={'#FFEFE3'} w={1220}h={1450}>
    <Center>
    <Image src={Manyproblemonesolution} bgColor={'#FFEFE3'}/>
    </Center>
    <Center> 
    <Stack direction={'row'} spacing='24px' bgColor={'#FFEFE3'} py={10}>
   
    <Stack direction={'column'}  >
      <Visitingcards img={img.img7}/>
      <Visitingcards img={img.img1}/>
      <Visitingcards img={img.img9}/>
    </Stack>
    <Stack direction={'column'} paddingTop={7}>
      <Visitingcards img={img.img2}/>
      <Visitingcards img={img.img3}/>
      <Visitingcards img={img.img4}/>
      </Stack>
      <Stack direction={'column'} >
      <Visitingcards img={img.img5}/>
      <Visitingcards img={img.img6}/>
      <Visitingcards img={img.img7}/>
     </Stack>
   </Stack>
    </Center> 
   <Center> 
   <Image src={Crackedge} bgColor={'#fff'}/>
   </Center> 
   </Box>
   </Center>:<Skeleton>
  <div>contents wrapped</div>
  <div>won't be visible</div>
</Skeleton>}</>
  )
}

export default Section3
