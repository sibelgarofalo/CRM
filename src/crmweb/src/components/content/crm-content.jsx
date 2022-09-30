import { Layout, Breadcrumb } from 'antd';

import './crm-content.less';

const CrmContent = (props) => {
    return (
        <div className='crm-content'>
            <Layout>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <Layout.Content>
                    Content
                </Layout.Content>
            </Layout>
        </div>
    )
};

export default CrmContent;