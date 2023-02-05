import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IssueResponse from '../models/issueResponse';
import { API_BASE_URL } from '../utils/path';

const issueApi = createApi({
  reducerPath: 'issue',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getAllIssues: builder.query<IssueResponse, any>({
      query: () => {
        return {
          url: '/issue',
          method: 'GET',
        };
      }
    })
  })
});

export const { useGetAllIssuesQuery } = issueApi;
export { issueApi };