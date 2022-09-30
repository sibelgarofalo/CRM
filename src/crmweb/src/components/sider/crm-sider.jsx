import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    DashboardOutlined, CustomerServiceOutlined, SearchOutlined, FileAddOutlined,
    DollarOutlined, OrderedListOutlined,
    LeftOutlined,
    RightOutlined
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
    const [menuSelected, setMenuSelected] = useState('dashboard');
    const [subMenuSelected, setSubMenuSelected] = useState('dashboard-sales');
    const navigate = useNavigate();
    const location = useLocation();

    const onClick = (args) => {
        const path = args.keyPath.reverse().join('/');
        setMenuSelected(args.keyPath[0]);
        setSubMenuSelected(args.keyPath[1]);
        navigate(path);
    }

    const onOpenChange = (args) => {
        setMenuSelected(args[1])
    }

    useEffect(() => {
        if (location.pathname.length > 1) {
            // we select correct menu item
            const paths = location.pathname.split('/');
            setMenuSelected(paths[1]);
            setSubMenuSelected(paths[2]);
        } else {
            // root path, we redirect on page refresh
            navigate(`${menuSelected}/${subMenuSelected}`);
        }
    }, []);

    return (
        <div className='crm-sider'>
            <Layout.Sider
                theme='light'
                collapsed={collapsed}
                collapsible
                trigger={null}>
                <Menu
                    onClick={onClick}
                    onOpenChange={onOpenChange}
                    selectedKeys={[subMenuSelected]}
                    openKeys={[menuSelected]}
                    defaultSelectedKeys={[subMenuSelected]}
                    defaultOpenKeys={[menuSelected]}
                    mode="inline"
                    items={items}
                />
                {collapsed &&
                    <RightOutlined
                        style={{ fontSize: 14 }}
                        className='folder-menu'
                        onClick={() => setCollapsed(false)} />
                }
                {!collapsed &&
                    <LeftOutlined
                        style={{ fontSize: 14 }}
                        className='folder-menu'
                        onClick={() => setCollapsed(true)} />
                }
            </Layout.Sider>
        </div>
    )
};

export default CrmSider;