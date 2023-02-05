import IssueDTO from "./issueDTO";

export default interface IssueResponse {
  data: IssueDTO[];
  message: string;
}