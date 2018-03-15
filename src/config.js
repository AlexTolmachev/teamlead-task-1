const apiUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,phone&noinfo'
const tableStructure = [
  {
    title: 'Name',
    dataIndex: 'firstName',
    key: 'firstName'
  },
  {
    title: 'Surname',
    dataIndex: 'lastName',
    key: 'lastName'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender'
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone'
  }
]

export {
  apiUrl,
  tableStructure
}