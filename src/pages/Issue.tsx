import React from 'react'
import {Badge, Box,} from '@chakra-ui/react'
import {useGetAllIssuesQuery} from '../store'
import AppSpinner from "../components/AppSpinner";
import AppDataTable from "../components/AppDataTable";
import IssueDTO from "../models/issueDTO";

const Issue = () => {
  const { data, error, isLoading } = useGetAllIssuesQuery({});

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
      renderCell: (row: IssueDTO) => <Badge colorScheme={row.statusCode === 0 ? "yellow" : "teal"}>{row.statusText}</Badge>
    },
  ]

  const createIssueTable = () => (
    <AppDataTable
      data={data?.data ?? []}
      columns={columns}
      caption="Issues Table"
      noRecordMessage="We found nothing"
    />
  );
  
  return (
    <div>
      {!!error && (
        <Box>An error occured</Box>
      )}
      {isLoading && !error && <AppSpinner /> }
      {data && !error && !isLoading && (
        createIssueTable()
      )}
    </div>
  )
}

export default Issue