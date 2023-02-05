import { Container, Card, CardBody, Text, Switch, FormControl, FormLabel, Divider } from '@chakra-ui/react'
import React from 'react'
import Issue from './Issue';

interface Props {
  message: string;
}

const Dashboard = ({ message } : Props) => {
  return (
    <div>
      <Container centerContent>
        <Card>
          <CardBody>
            <Text>{ message }</Text>
            <Divider size='lg' />
            <FormControl display='flex' alignItems='center'>
              <FormLabel>
                Are you interested?
              </FormLabel>
              <Switch 
                colorScheme='teal'
                size='lg' 
                defaultChecked
              />
            </FormControl>
            <Issue />
          </CardBody>
        </Card>
      </Container>
    </div>
  )
}

export default Dashboard