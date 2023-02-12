const issueStatus = [
    { code: 0, color: 'gray'},
    { code: 10, color: 'blue'},
    { code: 20, color: 'orange'},
    { code: 99, color: 'teal'},
]

export const resolveColor = (code: number) : string => {
    const currentStatus = issueStatus.find(status => status.code === code);
    return currentStatus?.color ?? 'gray';
}