import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';

import { Button } from 'antd';
import { CrmLayout } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CrmLayout />
  </React.StrictMode>
);