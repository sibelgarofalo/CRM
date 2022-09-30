import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Breadcrumb, Input, Button, Radio } from 'antd';

import './crm-content.less';
import {
    FilterOutlined, FileAddOutlined, DeleteOutlined, EditOutlined
} from '@ant-design/icons';
import CrmRouter from '../router/crm-router';

const recordOptions = [
    {
        label: 'All',
        value: 'all'
    },
    {
        label: 'Active',
        value: 'active'
    },
    {
        label: 'Inactive',
        value: 'inactive',
        disabled: true
    }
]

const formatPath = (path) => {
    if (!path.includes('-')) {
        return path ? path.charAt(0).toUpperCase() + path.slice(1) : "";
    }
    path = path.replace('-', ' ');
    return path.toLowerCase().replace(/(^.|\s+.)/g, m => m.toUpperCase());
}

const CrmContent = (props) => {
    const [option, setOption] = useState('all');
    const location = useLocation();

    return (
        <div className='crm-content'>
            <Layout>
                <Layout.Header
                    className='toolbar'>
                    <Input.Search placeholder="input search text" style={{ width: 200 }} />
                    <div>
                        <Button type='primary' icon={<FilterOutlined />}>Filter</Button>
                    </div>
                </Layout.Header>
                <div className='content-header'>
                    <Breadcrumb className='breadcrumb'>
                        {
                            location.pathname
                                .split('/')
                                .map(item => <Breadcrumb.Item key={item}>{formatPath(item)}</Breadcrumb.Item>)
                        }
                    </Breadcrumb>
                    <div className='commands-group'>
                        <Radio.Group
                            size="small"
                            options={recordOptions}
                            optionType="button"
                            buttonStyle='solid'
                            onChange={(args) => setOption(args.target.value)}
                            value={option} />
                        <Button type='default' icon={<FileAddOutlined />} size="small">New</Button>
                        <Button type='default' icon={<EditOutlined />} size="small">Edit</Button>
                        <Button type='danger' icon={<DeleteOutlined />} size="small">Delete</Button>
                    </div>
                </div>
                <Layout.Content className='content'>
                    <CrmRouter />
                </Layout.Content>
            </Layout>
        </div>
    )
};

export default CrmContent;