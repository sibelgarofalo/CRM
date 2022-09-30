import { Layout } from 'antd';
import CrmHeader from '../header/crm-header';
import CrmSider from '../sider/crm-sider';
import CrmContent from '../content/crm-content';

import './crm-layout.less';

const CrmLayout = (props) => {
    return (
        <div className="crm-layout">
            <Layout className='main-layout'>
                <CrmHeader />
                <Layout>
                    <CrmSider />
                    <CrmContent />
                </Layout>
            </Layout>
        </div>
    )
};

export default CrmLayout;