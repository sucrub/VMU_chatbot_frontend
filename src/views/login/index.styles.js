import { LOGIN_COLOR } from "../../configs/color";

const styles = {
    loginContainer: {
        position: 'fixed',
        inset: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: LOGIN_COLOR.bg,
        overflow: 'auto',
    },

    // Subtle dot-grid background
    bgGrid: {
        position: 'absolute',
        inset: 0,
        backgroundImage: `
            linear-gradient(rgba(31,111,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(31,111,235,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
    },

    bgGlow: {
        position: 'absolute',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(31,111,235,0.08) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
    },

    card: {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: 440,
        background: LOGIN_COLOR.surface,
        border: `1px solid ${LOGIN_COLOR.border}`,
        borderRadius: 12,
        padding: '40px 32px 36px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    logoRing: {
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: LOGIN_COLOR.bg,
        border: `1px solid ${LOGIN_COLOR.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        margin: '0 auto 20px',
    },

    logo: {
        width: 60,
        height: 60,
        objectFit: 'contain',
    },

    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 11,
        color: LOGIN_COLOR.blue,
        background: LOGIN_COLOR.blueAlpha,
        border: `1px solid ${LOGIN_COLOR.blueAlphaBorder}`,
        borderRadius: 20,
        padding: '2px 10px',
        marginBottom: 20,
        letterSpacing: '0.3px',
    },

    title: {
        fontSize: 15,
        fontWeight: 600,
        color: LOGIN_COLOR.textPrimary,
        textAlign: 'center',
        letterSpacing: '0.3px',
        lineHeight: 1.4,
        marginBottom: 6,
    },

    title2: {
        fontSize: 13,
        fontWeight: 400,
        color: LOGIN_COLOR.textMuted,
        textAlign: 'center',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        marginBottom: 32,
    },

    divider: {
        width: '100%',
        height: 1,
        background: '#21262d',
        marginBottom: 28,
    },

    googleButton: {
        width: '100%',
        height: 44,
        borderRadius: 8,
        border: `1px solid ${LOGIN_COLOR.border}`,
        background: LOGIN_COLOR.surfaceHover,
        color: LOGIN_COLOR.textPrimary,
        fontSize: 14,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        cursor: 'pointer',
    },

    footerText: {
        marginTop: 20,
        fontSize: 12,
        color: LOGIN_COLOR.textFaint,
        textAlign: 'center',
    },

    googleIcon: { width: 18, height: 18 },
};

export default styles;