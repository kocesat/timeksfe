import { Box, Center } from '@chakra-ui/react'
import React from 'react';
import Issue from './Issue';

const Dashboard = () => {
  return (
    <div>
      <Box overflowX='auto' maxWidth='100%'>
        <Issue />
      </Box>
    </div>
  )
}

export default Dashboard