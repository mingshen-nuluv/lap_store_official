import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import { Flex, Rate } from "antd";

const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Rate className="heart_icon" character={<HeartOutlined />} allowHalf />
  </Flex>
);

export default App;
