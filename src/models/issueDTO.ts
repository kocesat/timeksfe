export default interface IssueDTO {
  key: number;
  description: string;
  statusCode: number;
  statusText: string;
  issueTypeCode: number;
  issueTypeText: string;
  closed: boolean;
}