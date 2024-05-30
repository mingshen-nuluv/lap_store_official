import React from 'react';
import '../page/index.scss';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';


interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'Hà Nội',label: 'Hà Nội',
    children: [
      {
        value: 'Đống Đa',label: 'Đống Đa',
        children: [
          {
            value: 'Cát Linh',label: 'Cát Linh',
          },
          {
            value: 'Hàng Bột',label: 'Hàng Bột',
          },
          {
            value: 'Láng Hạ',label: 'Láng Hạ',
          },
          {
            value: 'Trung Tự',label: 'Trung Tự',
          },
          {
            value: 'Láng Thượng',label: 'Láng Thượng',
          },
          {
            value: 'Ô Chợ Dừa',label: 'Ô Chợ Dừa',
          },
          {
            value: 'Ngã Tư Sở',label: 'Ngã Tư Sở',
          },
          {
            value: 'Quốc Tử Giám',label: 'Quốc Tử Giám',
          },
          {
            value: 'Thổ Quan',label: 'Thổ Quan',
          },  
        ],
      },
      {
        value: 'Thanh Xuân',label: 'Thanh Xuân',
        children: [
          {
            value: 'Khương Mai',label: 'Khương Mai',
          },
          {
            value: 'Khương Trung',label: 'Khương Trung',
          },
          {
            value: 'Hạ Đình',label: 'Hạ Đình',
          },
          {
            value: 'Khương Đình',label: 'Khương Đình',
          },
          {
            value: 'Kim Giang',label: 'Kim Giang',
          },
          {
            value: 'Nhân Chính',label: 'Nhân Chính',
          },
          {
            value: 'Phương Liệt',label: 'Phương Liệt',
          },
          {
            value: 'Thanh Xuân Bắc',label: 'Thanh Xuân Bắc',
          },
          {
            value: 'Thanh Xuân Nam',label: 'Thanh Xuân Nam',
          },
          {
            value: 'Thanh Xuân Trung',label: 'Thanh Xuân Trung',
          },
          {
            value: 'Thượng Đình',label: 'Thượng Đình',
          },
        ],
      },
      {
        value: 'Hai Bà Trưng',label: 'Hai Bà Trưng',
        children: [
          {
            value: 'Bạch Đằng',label: 'Bạch Đằng',
          },
          {
            value: 'Bách Khoa',label: 'Bách Khoa',
          },
          {
            value: 'Bạch Mai',label: 'Bạch Mai',
          },
          {
            value: 'Minh Khai',label: 'Minh Khai',
          },
          {
            value: 'Nguyễn Du',label: 'Nguyễn Du',
          },
          {
            value: 'Lê Đại Hành',label: 'Lê Đại Hành',
          },
          {
            value: 'Bùi Thị Xuân',label: 'Bùi Thị Xuân',
          },
          {
            value: 'Phố Huế',label: 'Phố Huế',
          },
          {
            value: 'Ngô Thì Nhậm',label: 'Ngô Thì Nhậm',
          },
          {
            value: 'Vĩnh Tuy',label: 'Vĩnh Tuy',
          },

        ],
      },
      {
        value: 'Tây Hồ',label: 'Tây Hồ ',
        children: [
          {
            value: 'Bưởi',label: 'Bưởi',
          },
          {
            value: 'Thụy Khuê',label: 'Thụy Khuê',
          },
          {
            value: 'Xuân La',label: 'Xuân La',
          },
          {
            value: 'Nhật Tân',label: 'Nhật Tân',
          },
          {
            value: 'Quảng An',label: 'Quảng An',
          },
        ],
      },
      {
        value: 'Hoàng Mai',label: 'Hoàng Mai',
        children: [
          {
            value: 'Đại Kim',label: 'Đại Kim',
          },
          {
            value: 'Định Công',label: 'Định Công',
          },
          {
            value: 'Giáp Bát',label: 'Giáp Bát',
          },
          {
            value: 'Hoàng Liệt',label: 'Hoàng Liệt',
          },
          {
            value: 'Hoàng Văn Thụ',label: 'Hoàng Văn Thụ',
          },
          {
            value: 'Lĩnh Nam',label: 'Lĩnh Nam',
          },
          {
            value: 'Mai Động',label: 'Mai Động',
          },
          {
            value: 'Tân Mai',label: 'Tân Mai',
          },
          {
            value: 'Thanh Trì',label: 'Thanh Trì',
          },
          {
            value: 'Thịnh Liệt',label: 'Thịnh Liệt',
          },
          {
            value: 'Trần Phú',label: 'Trần Phú',
          },
          {
            value: 'Tương Mai',label: 'Tương Mai',
          },
          {
            value: 'Vĩnh Hưng',label: 'Vĩnh Hưng',
          },
          {
            value: 'Yên Sở',label: 'Yên Sở',
          },
          
        ],
      },
    ],
  },
  {
    value: 'Hồ Chí Minh',label: 'Hồ Chí Minh',
    children: [
      {
        value: 'Thủ Đức',label: 'Thủ Đức',
        children: [
          {
            value: 'An Khánh',label: 'Anh Khánh',
          },
          {
            value: 'Lợi Đông',label: 'Lợi Đông',
          },
          {
            value: 'An Phú',label: 'An Phú',
          },
          {
            value: 'Cát Lái',label: 'Cát Lái',
          },
        ],
      },
      {
        value: 'Gò Vấp',label: 'Gò Vấp',
        children: [
          {
            value: 'Phường 1',label: 'Phường 1',
          },
          {
            value: 'Phường 2',label: 'Phường 2',
          },
          {
            value: 'Phường 3',label: 'Phường 3',
          },
        ],
      },
      {
        value: 'Quận 1',label: 'Quận 1',
        children: [
          {
            value: 'Bến Nghé',label: 'Bến Nghé',
          },
        ],
      },
      {
        value: 'Quận 2',label: 'Quận 2 ',
        children: [
          {
            value: 'Bến thành',label: 'Bến thành',
          },
        ],
      },
      {
        value: 'Củ Chi',label: 'Củ Chi',
        children: [
          {
            value: 'An Phú',label: 'Anh Phú',
          },
        ],
      },
    ],
  },
];

const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};

const App: React.FC = () => (
  <Cascader className = 'cascader_drop' options={options} onChange={onChange} placeholder="Khu vực của bạn"  />
);

export default App;
