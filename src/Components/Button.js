import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react';

export default function custombuton({md,text,bg}) {
  return (
   
      <Button
      
        /* flex={1} */
        px={4}
        w={200}
        fontSize={'sm'}
        rounded={md}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg:'#d1d1d1',
          color:'#000'
        }}
        bg={bg}
        _focus={{
          bg: 'blue.500',
        }}>
        {text}
      </Button>
  );
}