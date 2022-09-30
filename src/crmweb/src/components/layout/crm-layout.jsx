import { Layout } from 'antd';

import { BrowserRouter as Router } from 'react-router-dom';

import CrmHeader from '../header/crm-header';
import CrmSider from '../sider/crm-sider';
import CrmContent from '../content/crm-content';

import './crm-layout.less';

const CrmLayout = (props) => {
    return (
        <Router>
            <div className="crm-layout">
                <Layout className='main-layout'>
                    <CrmHeader />
                    <Layout>
                        <CrmSider />
                        <CrmContent />
                    </Layout>
                </Layout>
            </div>
        </Router>
    )
};

export default CrmLayout;