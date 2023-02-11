import React from 'react'
import {Badge, Box, Button, Center,} from '@chakra-ui/react'
import {useGetAllIssuesQuery} from '../store'
import AppSpinner from "../components/AppSpinner";
import AppDataTable from "../components/DataTable";
import IssueDTO from "../models/issueDTO";
import { IssueStatusColor } from '../enums/IssueStatusColor';

const Issue = () => {
  const { data, error, isFetching, refetch } = useGetAllIssuesQuery({});

  const columns = [
    {
      key: 'issueTypeText',
      header: 'Issue Type',
      renderCell: (row: IssueDTO) => <Badge colorScheme={row.issueTypeText === 'Bug' ? "red" : "cyan"}>{row.issueTypeText}</Badge>
    },
    {
      key: 'description',
      header: 'Description'
    },
    {
      key: 'statusText',
      header: 'Status',
      renderCell: (row: IssueDTO) => <Badge colorScheme={resolveColor(row.statusCode)}>{row.statusText}</Badge>
    },
  ]

  const resolveColor = (statusCode: number): string => {
    const statusKey = 
      (Object.keys(IssueStatusColor) as Array<keyof typeof IssueStatusColor>)
        .find(key => IssueStatusColor[key].code === statusCode);
    return IssueStatusColor[statusKey ?? 'TODO'].color;
  }

  const createIssueTable = () => (
    <AppDataTable
      data={data?.data ?? []}
      columns={columns}
      caption="Issues Table"
      noRecordMessage="We found nothing"
      isLoading={isFetching}
    />
  );
  
  return (
    <React.Fragment>
      <Center>
        <Button onClick={() => refetch()}>Refetch</Button>
      </Center>
      {!!error && (
        <Box>An error occured</Box>
      )}
      {data && !error && (
        createIssueTable()
      )}
    </React.Fragment>
  )
}

export default Issue