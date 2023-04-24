import React,{useState} from 'react'
import { Carousel } from "react-responsive-carousel";
import { Box,Image, Center,Link,Flex ,Skeleton,SkeletonCircle,SkeletonText} from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import section1background from '../Asssets/section1background.png'
import homepagetext from '../Asssets/homepagetext.png'
import './section1.css'
import customersupport from '../Asssets/customersupport.png'
import refund from '../Asssets/refund.png'
import verifiedastrologer from '../Asssets/verifiedastrologer.png'
import privecy from '../Asssets/privecy.png'
import securepayment from '../Asssets/securepayment.png'
import custombuton from '../Components/Button';
const Section1 = () => {
  const [loader, setLoader] = useState(false);
    const slides = [
        {
            image: section1background
         },
        {
            image: section1background
         },
        {
          image: section1background
        }
      ];
      
    const links = [
        {
            name: '24 X 7 Customer Support',
            image: customersupport
        },
        {
            name: '100% Refund if Unsatisfied',
            image: refund
        },
        {
            name: 'Private & Confidential',
            image: verifiedastrologer
        },
        {
            name: 'Verified Customer',
            image: privecy
        },
        {
            name: 'Secure Payment',
            image: securepayment
        }

    ]
    setTimeout(() => {
      setLoader(true)
    }, 2000);
  return (
    <>
    {loader?
     <Box  bgImage={section1background}
      bgPosition="center"
      bgRepeat="no-repeat"
      h={548}
      key='nav'>
        <Navbar/>     
        <Center bg='transparent' p='5' color='white' axis='both'  >
         <div className='middleheading'>
         <Image src={homepagetext} alt='homepage heading'/>
         <custombuton md={'full'} text={'Cuntact us'} bg={'#D97122'} />
         </div>       
       </Center>
        <Box alignItems="center" justifyContent="space-evenly"  display="flex"  py={8} >
        {links.map(link => (<Box display="flex">
        <Image  src={link.image} px={2}/>
        <Link className={link.className} color='#fff' py={3} >{link.name}</Link>
        </Box> ))}
        </Box>
        <Box>   
        </Box>
      </Box>:<Box padding="6" boxShadow="lg" bg="white">
    <SkeletonCircle size="10" />
    <SkeletonText mt="20" noOfLines={8} spacing="4" />
      </Box>}
      </>
  )
}

export default Section1
