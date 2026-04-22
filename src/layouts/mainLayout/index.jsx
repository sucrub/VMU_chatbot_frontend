import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Popover, Avatar } from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import { COLOR } from '../../configs/color';
import { siderMenuStyles, styles } from './index.styles';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuth, selectUser } from '../../store/slices/authSlice';

const { Sider, Content } = Layout;

const menuItems = [
    { key: '/', icon: <UserOutlined /> , label: 'Thông tin người dùng' },
    { key: '/class', icon: <AppstoreOutlined />, label: 'Danh sách lớp học' },
    { key: '/example', icon: <HomeOutlined />, label: 'Example' }
];

const UserPopoverContent = ({ logout }) => {
    return (
        <div
            style={styles.logoutHover}
            onMouseEnter={e => e.currentTarget.style.background = '#21262d'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            onClick={logout}
        >
            <LogoutOutlined style={{ fontSize: 14, color: '#f85149' }} />
            <span style={{ color: '#f85149' }}>
                Log out
            </span>
        </div>
    );
};

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const user = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(clearAuth());
        navigate('/login');
    };

    return (
        <Layout style={styles.root}>
            <style>{siderMenuStyles}</style>

            <Sider
                className="sider"
                collapsed={collapsed}
                style={styles.sider}
            >
                <div style={styles.siderContainer}>
                    {/* Header */}
                    <div style={styles.header(collapsed)}>
                        {!collapsed && (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="/logo.svg" alt="Logo" style={styles.logo} />
                                <span style={styles.logoText}>
                                    Chatbot
                                </span>
                            </div>
                        )}

                        <div
                            onClick={() => setCollapsed(!collapsed)}
                            style={styles.collapseBtn(collapsed)}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = COLOR.menuHover;
                                e.currentTarget.style.color = COLOR.menuText;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = COLOR.menuMuted;
                            }}
                        >
                            {collapsed
                                ? <MenuUnfoldOutlined style={{ fontSize: 14 }} />
                                : <MenuFoldOutlined style={{ fontSize: 14 }} />}
                        </div>
                    </div>

                    {/* Menu */}
                    <div style={styles.menuWrapper}>
                        <Menu
                            className="menu"
                            theme="dark"
                            mode="inline"
                            selectedKeys={[location.pathname]}
                            items={menuItems}
                            inlineCollapsed={collapsed}
                            onClick={({ key }) => navigate(key)}
                        />
                    </div>

                    {/* Avatar */}
                    <div style={styles.avatarContainer(collapsed)}>
                        <Popover
                            overlayClassName="user-popover"
                            content={<UserPopoverContent logout={handleLogout} />}
                            trigger="click"
                            placement="top"
                            open={popoverOpen}
                            onOpenChange={setPopoverOpen}
                            color={COLOR.menuBg}
                        >
                            <div
                                style={styles.avatarRow}
                                onMouseEnter={e => e.currentTarget.style.background = COLOR.menuHover}
                                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                            >
                                <Avatar
                                    size={30}
                                    style={styles.avatar}
                                    src={user?.avatar}
                                />
                            </div>
                        </Popover>
                    </div>
                </div>
            </Sider>

            <Layout style={styles.contentLayout}>
                <Content style={styles.content}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;