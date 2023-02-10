import React from 'react'
import {Badge, Box,} from '@chakra-ui/react'
import {useGetAllIssuesQuery} from '../store'
import AppSpinner from "../components/AppSpinner";
import AppDataTable from "../components/AppDataTable";
import IssueDTO from "../models/issueDTO";
import { IssueStatusColor } from '../enums/IssueStatusColor';

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
      renderCell: (row: IssueDTO) => <Badge colorScheme={resolveColor(row.statusCode)}>{row.statusText}</Badge>
    },
  ]

  const resolveColor = (statusCode: number): string => {
    const status = 
      (Object.keys(IssueStatusColor) as Array<keyof typeof IssueStatusColor>)
        .find(key => IssueStatusColor[key].code === statusCode);
    return IssueStatusColor[status ?? 'TODO'].color;
  }

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