import React,{useState} from "react";
import Circlerotate from "../Asssets/Circlerotate.png";
import sun from "../Asssets/sun.png";
import {Box,Stack,Image,Skeleton} from "@chakra-ui/react";
import Customcard from "../Components/Card";
import "./Section4.css";
import Health  from '../Asssets/Health.png'
import Money from '../Asssets/Money.png'
import Love from '../Asssets/Love.png'
import Houbandwife from '../Asssets/Husbandwife.png'
import Education from '../Asssets/Education.png'
import Grahashanti from '../Asssets/Grahashanti.png'
import Childbirth from '../Asssets/Childbirth.png'
import Job from '../Asssets/Job.png'
import Luckynumber from '../Asssets/Luckynumber.png'
import  Marriege from '../Asssets/Marriege.png'
import usertestimonial from '../Asssets/usertestimonial.png'
const Section4 = () => {
  const [loader, setLoader] = useState(false);
  
  const image = {
    img1: Health,
    img2: Money,
    img3: Love,
    img4: Houbandwife,
    img5: Education,
    img6: Grahashanti,
    img7: Childbirth,
    img8: Job,
    img9: Luckynumber,
    img10: Marriege,
  };
  setTimeout(() => {

    setLoader(true)
  }, 12000);
  return (
    <>
   {loader?
    <Box>
      <Box>
       <center>
           <Image src={usertestimonial} h={50}/>
         </center>
      <Stack  direction={'row'} p={20} justify={"space-between"} >
      <Stack gap={2}>
        <Customcard image={image.img10} />
        <Customcard image={image.img2} />
        <Customcard image={image.img8} />
        <Customcard image={image.img5} />
        <Customcard image={image.img3} />
      </Stack>
      <Stack>
      <Box className="container">
        <img className="react-logo" src={Circlerotate} />
        <img src={sun} />
      </Box>
      </Stack>
      <Stack gap={2}>
        <Customcard image={image.img1} />
        <Customcard image={image.img4} />
        <Customcard image={image.img7} />
        <Customcard image={image.img6} />
        <Customcard image={image.img9} />
      </Stack>
      </Stack>
      </Box>
    </Box>:<Skeleton>
  <div>contents wrapped</div>
  <div>won't be visible</div>
</Skeleton>}</>
  );
};

export default Section4;
