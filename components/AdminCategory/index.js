import { Table } from 'antd'
import { columns, data } from './data'

const AdminCatagory = () => {
  return (
    <div className='w-[100%] ml-[36px] pr-[36px] pt-[40px] '>
        <Table columns={columns} dataSource={data} pagination={false} rowClassName={(record,index)=> "custom-hover-class"} />
    </div>
  )
}

export default AdminCatagory