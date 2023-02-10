import { Container, Card, CardBody } from '@chakra-ui/react'
import React from 'react';
import Issue from './Issue';

const Dashboard = () => {
  return (
    <div>
      <Container centerContent>
        <Card>
          <CardBody>
            <Issue />
          </CardBody>
        </Card>
      </Container>
    </div>
  )
}

export default Dashboard