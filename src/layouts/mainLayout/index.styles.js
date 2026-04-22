// hook/useLayoutStyles.js
import { useThemeColor } from "../../hook/useThemeColor";

export const useLayoutStyles = () => {
    const { COLOR } = useThemeColor();

    const styles = {
        root: {
            minHeight: '100vh',
            background: COLOR.contentBg,
        },

        sider: {
            background: COLOR.siderBg,
            borderRight: `1px solid ${COLOR.border}`,
            overflow: 'hidden',
            height: '100vh',
            position: 'sticky',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.2s'
        },

        logo: {
            width: 32,
            height: 32,
            marginRight: 12,
            flexShrink: 0
        },

        siderContainer: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },

        header: (collapsed) => ({
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: collapsed ? '0 4px' : '0 16px',
            borderBottom: `1px solid ${COLOR.border}`,
            flexShrink: 0,
            transition: 'padding 0.2s',
        }),

        logoText: {
            color: COLOR.menuText,
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: 0.5,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        },

        collapseBtn: (collapsed) => ({
            width: 28,
            height: 28,
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: COLOR.menuMuted,
            flexShrink: 0,
            marginLeft: collapsed ? 'auto' : 0,
            marginRight: collapsed ? 'auto' : 0,
            transition: 'background 0.15s, color 0.15s',
        }),

        menuWrapper: {
            overflowY: 'auto',
            overflowX: 'hidden',
            paddingTop: 8,
        },

        avatarContainer: (collapsed) => ({
            marginTop: 'auto',
            padding: 'auto',
            borderTop: `1px solid ${COLOR.border}`,
            flexShrink: 0,
        }),

        avatarRow: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            padding: '6px 8px',
            borderRadius: 8,
            cursor: 'pointer',
            transition: 'background 0.15s',
            overflow: 'hidden',
        },

        avatar: {
            background: '#1f6feb',
            fontSize: 13,
            fontWeight: 600,
            flexShrink: 0,
        },

        userInfo: {
            overflow: 'hidden',
        },

        userName: {
            fontSize: 13,
            fontWeight: 600,
            color: COLOR.menuText,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },

        userEmail: {
            fontSize: 11,
            color: COLOR.menuMuted,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },

        contentLayout: {
            background: COLOR.contentBg,
        },

        content: {
            margin: '24px 16px',
            padding: 24,
            color: COLOR.contentText,
            background: COLOR.contentBg,
        },

        logoutHover: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 12px',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 14,
            color: COLOR.menuHover,
            transition: 'background 0.15s',
            userSelect: 'none',
            minWidth: 160,
        }
    };

    const siderMenuStyles = `
        .menu.ant-menu-dark {
            background: ${COLOR.menuBg} !important;
        }
        .menu.ant-menu-dark .ant-menu-item {
            color: ${COLOR.menuText} !important;
            border-radius: 6px !important;
            margin: 2px 8px !important;
            width: calc(100% - 16px) !important;
        }
        .menu.ant-menu-dark .ant-menu-item:hover {
            background: ${COLOR.menuHover} !important;
        }
        .menu.ant-menu-dark .ant-menu-item-selected {
            background: ${COLOR.menuSelectedBg} !important;
            color: ${COLOR.menuSelected} !important;
        }
        .menu.ant-menu-dark .ant-menu-item-selected .anticon,
        .menu.ant-menu-dark .ant-menu-item-selected span {
            color: ${COLOR.menuSelected} !important;
        }
        .user-popover .ant-popover-inner {
            background: #161b22 !important;
            border: 1px solid #30363d !important;
        }
    `;

    return { styles, siderMenuStyles };
};