import React, { Component,useState } from "react";
import { Box, Center, Image, Skeleton,SkeletonCircle,SkeletonText } from "@chakra-ui/react";
import vector from "../Asssets/Vector.png";
import usertestimonial from "../Asssets/usertestimonial.png";
import Carousel from "../Components/Carousal";
import Carousel2 from "../Components/Carousal2";



const Section2 = () => {
  const [loader, setLoader] = useState(false);

  setTimeout(() => {
    setLoader(true)
  }, 8000);
  return (
    <>{loader?
    <Box>
      <Center>
        <Box
          h={1200}
          w={1224}
          bg="#FFEFE3"
          justify="center"
          py={4}
          displat="flex"
          flexDirection="Column"
        >
          <Center key="vector">
            <Image src={vector} />
          </Center>

          <Box key="usertestimonial">
            <Center key="vector">
              <Image src={usertestimonial} />
            </Center>
          </Box>
          <Center>
            <Carousel/>
          </Center>
          <Center>
           <Box marginTop={20}>
            <Carousel2/>
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>:<Box padding="6" boxShadow="lg" bg="white">
    <SkeletonCircle size="10" />
    <SkeletonText mt="20" noOfLines={8} spacing="4" />
      </Box>}</>
  );
};

export default Section2;
