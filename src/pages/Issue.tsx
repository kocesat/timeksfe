import React from 'react'
import {
  List,
  ListItem,
  Stack,
  Badge,
  Skeleton,
} from '@chakra-ui/react'
import { useGetAllIssuesQuery } from '../store'

const Issue = () => {
  const { data, error, isLoading } = useGetAllIssuesQuery([]);
  return (
    <div>
      {error && (
        <p>An error occured</p>
      )}
      {!error && isLoading && (
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Stack>
      )}
      {!error && !isLoading && (
        <List spacing={3}>
          { data?.data?.map(issue => {
            return (
              <ListItem key={issue.key}>
                <Stack direction='row'>
                  <Badge colorScheme={issue.issueTypeText === 'Bug' ? 'red' : 'green'}>{ issue.issueTypeText }</Badge>
                  <p>{issue.description}</p>
                  <Badge colorScheme={issue.statusText === 'Todo' ? 'gray' : 'teal'} >{issue.statusText}</Badge>
                </Stack>
              </ListItem>
            );
          })}
        </List>
      )}
    </div>
  )
}

export default Issue