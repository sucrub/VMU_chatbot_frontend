import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
    FileTextOutlined,
} from '@ant-design/icons';

const { Sider, Content } = Layout;

const menuItems = [
    {
        key: '/',
        icon: <HomeOutlined />,
        label: 'Home',
    },
    {
        key: '/example',
        icon: <AppstoreOutlined />,
        label: 'Example',
    },
    {
        key: '/profile',
        icon: <UserOutlined />,
        label: 'Profile',
    },
    {
        key: '/reports',
        icon: <FileTextOutlined />,
        label: 'Reports',
    },
    {
        key: '/settings',
        icon: <SettingOutlined />,
        label: 'Settings',
    },
];

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuClick = ({ key }) => {
        navigate(key);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={setCollapsed}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'sticky',
                    top: 0,
                    left: 0,
                }}
            >
                {/* Logo area */}
                <div style={{
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: collapsed ? 18 : 22,
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    marginBottom: 8,
                    transition: 'font-size 0.2s',
                }}>
                    {collapsed ? 'A' : 'MyApp'}
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                    onClick={handleMenuClick}
                />
            </Sider>

            <Layout>
                <Content style={{ margin: '24px 16px', padding: 24 }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;