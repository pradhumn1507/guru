import * as React from 'react'
import Landingpage from './Pages/Landingpage'

import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  
  return (
    <ChakraProvider>
      <Landingpage />
    </ChakraProvider>
  )
}