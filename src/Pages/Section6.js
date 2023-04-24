import React,{useState} from 'react';
import Logo from '../Asssets/Logo.png'
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,Input,
  chakra,
  VisuallyHidden,
  Textarea,
  useColorModeValue,
  Skeleton,
  Center
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube,FaFacebook } from 'react-icons/fa';
import custombuton from '../Components/Button';
import rozerpay from '../Asssets/rozerpay.png'
import paytm from '../Asssets/paytm.png'
import stripe from '../Asssets/stripe.png'

const SocialButton = ({children,label,href,}) => {
    return (
      
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};


export default function Footer() {
  const [loader, setLoader] = useState(false);

  setTimeout(() => {

    setLoader(true)
  }, 12000);
  return (
    <>
      {loader? 
    <Box
      bg='#BD5300'
      color='#fff'>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image src={Logo}/>
            </Box>
            <Text fontSize={'sm'}>
            About Guruji s2 to 3 lines what guruji do and how it works About Guruji s2 to 3 lines what guruji do and how it works
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'} >
                <FaTwitter  />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'} >
                <FaYoutube color='#F44336'/>
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Fecebook'} href={'#'} >
                <FaFacebook color='#1877F2' />
              </SocialButton>
            </Stack>
            <Stack align={'flex-start'}>
            <ListHeader>Trusted & Seal</ListHeader>
            <Stack direction={'row'} spacing={6}>
            <Image src={rozerpay}/>
            <Image src={paytm}/>
            </Stack>          
            <Image src={stripe}/>
          </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>Privacy</Link>
            <Link href={'#'}>T &C</Link>
            <Link href={'#'}>Varied Payment</Link>
            <Link href={'#'}></Link>
            <Link href={'#'}></Link>
            <Link href={'#'}></Link>
            <ListHeader>Collaborate</ListHeader>
            <Link href={'#'}>Clever Tap</Link>
            <Link href={'#'}>Exotel</Link>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Quora</Link>
            <Link href={'#'}>Google</Link>
            <Link href={'#'}>Youtube</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>Privacy</Link>
            <Link href={'#'}>T &C</Link>
            <Link href={'#'}>Varied Payment</Link>
            <Link href={'#'}></Link>
            <Link href={'#'}></Link>
            <Link href={'#'}></Link>
            <ListHeader>Important Link</ListHeader>
            <Link href={'#'}>Tarot Reader</Link>
            <Link href={'#'}>Vedic Astrology </Link>
            <Link href={'#'}>Palmistry </Link>
            <Link href={'#'}>Gemology</Link>
            <Link href={'#'}>Vastu</Link>
            <Link href={'#'}>Numerology</Link>
          </Stack>
          <Stack align={'flex-start'}>
          <Input
                placeholder='Your name'
                bg='#fff'
                color = '#fff'
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
                w={300}
              />
            <Input
                placeholder='mail id'
                bg='#fff'
                color = '#fff'
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
            <Textarea  placeholder='Write query' bg='#fff' />
            <Center >
            <Box justifyContent={'center'}>
            <custombuton md={'md'} text={'Submit'} bg={'#4B9C0C'} />
            </Box>
            </Center>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>:<Skeleton>
  <div>contents wrapped</div>
  <div>won't be visible</div>
</Skeleton>}</>
  );
}