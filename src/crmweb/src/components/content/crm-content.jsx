import { useState } from 'react';
import { Layout, Breadcrumb, Input, Button, Radio } from 'antd';

import './crm-content.less';
import {
    FilterOutlined, FileAddOutlined, DeleteOutlined, EditOutlined
} from '@ant-design/icons';

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

const CrmContent = (props) => {
    const [option, setOption] = useState('all');

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
                        <Breadcrumb.Item>Customers</Breadcrumb.Item>
                        <Breadcrumb.Item>Find Customers</Breadcrumb.Item>
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
                    Content
                </Layout.Content>
            </Layout>
        </div>
    )
};

export default CrmContent;