import React from 'react';
import {  List } from 'antd';
import '../Detail.css';

const data = [
  {
    
    title: 'Xem chính sách ưu đãi dành cho thành viên M-member',
  },
  {
    title: 'Mở thẻ vib nhận E-Voucher đến 699k',
  },
  {
    title: 'Giảm đến 500k khi thanh toán qua VNPAY-QR',
  },
  {
    title: 'Mở thẻ HSBC nhận E-Voucher đến 2.5 triệu',
  },
];

const App: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta

            title={<a className='title_list_footer' href=" ">{item.title}</a>}
            description=""
        />
      </List.Item>
    )}
  />
);

export default App;
