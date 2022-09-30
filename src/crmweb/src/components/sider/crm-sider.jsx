import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    DashboardOutlined, CustomerServiceOutlined, SearchOutlined, FileAddOutlined,
    DollarOutlined, OrderedListOutlined,
    MenuFoldOutlined, LeftOutlined,
    MenuUnfoldOutlined, RightOutlined
} from '@ant-design/icons';

import './crm-sider.less';

const items = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        icon: <DashboardOutlined />,
        children: [
            {
                key: 'dashboard-sales',
                label: 'Sales Overview',
                icon: <DollarOutlined />,
            },
            {
                key: 'dashboard-orders',
                label: 'Orders Overview',
                icon: <OrderedListOutlined />,
            }
        ]
    },
    {
        key: 'customer',
        label: 'Customers',
        icon: <CustomerServiceOutlined />,
        children: [
            {
                key: 'customer-find',
                label: 'Find Customers',
                icon: <SearchOutlined />,
            },
            {
                key: 'customer-new',
                label: 'New Customer',
                icon: <FileAddOutlined />,
            }
        ]
    },
    {
        key: 'order',
        label: 'Orders',
        icon: <OrderedListOutlined />,
        children: [
            {
                key: 'order-find',
                label: 'Find Orders',
                icon: <SearchOutlined />,
            },
            {
                key: 'order-new',
                label: 'New Order',
                icon: <FileAddOutlined />,
            }
        ]
    }
]

const CrmSider = (props) => {

    const [collapsed, setCollapsed] = useState(false);

    const onClick = (args) => {
        console.log(args);
    }

    return (
        <div className='crm-sider'>
            <Layout.Sider
                theme='light'
                collapsed={collapsed}
                collapsible
                trigger={null}>
                <Menu
                    onClick={onClick}
                    defaultSelectedKeys={['dashboard-sales']}
                    defaultOpenKeys={['dashboard']}
                    mode="inline"
                    items={items}
                />
                {collapsed &&
                    <RightOutlined
                        style={{ fontSize: 16 }}
                        className='folder-menu'
                        onClick={() => setCollapsed(false)} />
                }
                {!collapsed &&
                    <LeftOutlined
                        style={{ fontSize: 16 }}
                        className='folder-menu'
                        onClick={() => setCollapsed(true)} />
                }
            </Layout.Sider>
        </div>
    )
};

export default CrmSider;