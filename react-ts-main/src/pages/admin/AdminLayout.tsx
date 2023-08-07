import React, { useState } from 'react';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuFoldOutlined,
    UserAddOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <h2 style={{ color: "#fff" }} className='center'><i>Admin</i></h2>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} >
                    <Menu.Item key="1" icon={<AppstoreOutlined />}>
                        <Link to={'/admin'}>Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ShopOutlined />}>
                        <Link to={'/admin/products'}>Product Management</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<AppstoreOutlined />}>
                        <Link to={'/admin/category'}>Category</Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<UserAddOutlined />}>
                        <Link to={'/admin/user'}>User</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserAddOutlined />}>
                        <Link to={'/admin/signup'}>Sign Up</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined />}>
                        <Link to={'/admin/login'}>Log in</Link>
                    </Menu.Item>

                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial', height: '100vh' }}>
                    <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;

// import React, { useState } from 'react';
// import {
//     DesktopOutlined,
//     FileOutlined,
//     PieChartOutlined,
//     TeamOutlined,
//     UserOutlined,
//     MenuUnfoldOutlined,
//     MenuFoldOutlined
// } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
// import { Link } from 'react-router-dom';

// const { Header, Content, Footer, Sider } = Layout;

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem('Dashboard', '1', <PieChartOutlined />),
//     getItem('Product Management', '2', <DesktopOutlined />),
//     getItem('User', 'sub1', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];

// const AdminLayout: React.FC = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const {
//         token: { colorBgContainer },
//     } = theme.useToken();

//     return (
//         <Layout style={{ minHeight: '100vh' }}>
//             <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//                 <div className="demo-logo-vertical" />
//                 <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
//                 <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//             </Sider>

//             <Layout>
//                 <Header style={{ padding: 0, background: colorBgContainer }} >
//                     <Button
//                         type="text"
//                         icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//                         onClick={() => setCollapsed(!collapsed)}
//                         style={{
//                             fontSize: '16px',
//                             width: 64,
//                             height: 64,
//                         }}
//                     />
//                 </Header>
//                 <Content style={{ margin: '0 16px' }}>
//                     <Breadcrumb style={{ margin: '16px 0' }}>
//                         <Breadcrumb.Item>User</Breadcrumb.Item>
//                         <Breadcrumb.Item>Bill</Breadcrumb.Item>
//                     </Breadcrumb>
//                     <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
//                         Bill is a cat.
//                     </div>
//                 </Content>
//                 <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
//             </Layout>
//         </Layout>
//     );
// };

// export default AdminLayout;