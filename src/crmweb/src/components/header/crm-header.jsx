import { Layout, Avatar, Dropdown, Menu, Space, Button } from 'antd';
import { DownOutlined, SettingOutlined, LogoutOutlined, SearchOutlined } from '@ant-design/icons';

import './crm-header.less';

const menu = (
    <Menu
        items={[
            {
                label: 'Logout',
                key: '1',
                icon: <LogoutOutlined />
            },
            {
                type: 'divider',
            },
            {
                label: 'Settings',
                key: '3',
                icon: <SettingOutlined />
            },
        ]}
    />
);

const CrmHeader = (props) => {

    return (
        <div className="crm-header">
            <Layout.Header
                className='crm-header-content'>
                <div className='logo' />
                <div className='commands'>
                    <Button shape="circle" icon={<SearchOutlined />} />
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a onClick={e => e.preventDefault()}>
                            <Space>
                                Sibel Garofalo
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </Layout.Header>
        </div>
    )
};

export default CrmHeader;