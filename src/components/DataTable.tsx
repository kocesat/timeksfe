import React, {ReactNode} from "react";
import {Box, Center, Spinner, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import AppSpinner from "./AppSpinner";

interface Column<T> {
  key: string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  isNumeric?: boolean;
  renderCell?: (row: T) => React.ReactNode;
}

interface Props<T> {
  data: T[];
  striped?: Nullable<boolean>;
  caption?: Nullable<string>;
  noRecordMessage?: Nullable<string>;
  columns: Column<T>[];
  isLoading?: boolean;
  tableSize?: 'sm' | 'md' | 'lg';
}

const AppDataTable = <T extends unknown>({
  data, striped, caption, columns, noRecordMessage,
  tableSize, isLoading
 }: Props<T>) => {
  let variant: string = 'simple';
  if (striped) {
    variant = 'striped';
  }

  const renderTable = () => {
    return (
      <TableContainer>
        <Table variant={variant} size={tableSize ?? 'md'}>
        <TableCaption placement='top'>{caption ?? ''}</TableCaption>
        <Thead>
          <Tr>
            {columns.map(col => {
              return <Th key={col.key}>{col.header}</Th>
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data.length === 0 && (
            <Tr>
              <Td>{noRecordMessage}</Td>
            </Tr>
          )}
          {!!data && data.map((row: any, index) => {
            return (
              <Tr key={row.key}>
                {columns.map(col => {
                  let cell: ReactNode = row[col.key];
                  if (!!col.renderCell) {
                    cell = col.renderCell(row);
                  }
                  return (
                    <Td key={col.key + index} isNumeric={col.isNumeric ?? false}>{cell}</Td>
                  )
                })}
              </Tr>
            )
          })}
        </Tbody>
        <Thead>
          <Tr>
            {columns.map(col => {
              return <Th key={col.key}>{col.header}</Th>
            })}
          </Tr>
        </Thead>
      </Table>
    </TableContainer>
    );
  }

  return (
    <React.Fragment>
      {isLoading && (
        <Center height='50vh' borderWidth='1px' borderRadius='lg'>
          <Spinner
            thickness='4px'
            speed='0.45s'
            emptyColor='gray.200'
            color='teal'
            size='xl'
          />
        </Center>
      )}
      {!isLoading && renderTable()}
    </React.Fragment>
  );
};

export default AppDataTable;