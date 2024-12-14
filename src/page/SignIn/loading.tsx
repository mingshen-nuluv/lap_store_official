import React from 'react';
import { Button , Alert, Spin, Switch } from 'antd';

const App: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <>
      <Spin spinning={loading}>
        <Alert
          type="info"
          message="Alert message title"
          description="Further details about the context of this alert."
        />
      </Spin>
     
      <div>
      <Button type="primary" htmlType="submit">
        <Switch checked={loading} onChange={setLoading} />
        Submit
      </Button>
      
      </div>
    </>
  );
};

export default App;