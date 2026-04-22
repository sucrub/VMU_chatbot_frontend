import { useThemeColor } from "../../hook/useThemeColor";

export const useClassListStyles = () => {
    const { CLASS_LIST_COLOR, GRID_LINE, GRID_GLOW } = useThemeColor();

    const styles = {
        container: {
            position: "relative",
            padding: 24,
            minHeight: "100vh",
        },

        bgGrid: {
            position: 'absolute',
            inset: 0,
            backgroundImage: `
                linear-gradient(${GRID_LINE} 1px, transparent 1px),
                linear-gradient(90deg, ${GRID_LINE} 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            opacity: 0.3,
            pointerEvents: 'none',
        },

        bgGlow: {
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: `
                radial-gradient(circle at center,
                ${GRID_GLOW} 0%,
                transparent 70%)
            `,
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
        },

        content: {
            position: "relative",
            zIndex: 1,
        },

        filterBar: {
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 20,
        },

        input: {
            width: 220,
            background: CLASS_LIST_COLOR.surface,
            border: `1px solid ${CLASS_LIST_COLOR.border}`,
            color: CLASS_LIST_COLOR.textPrimary,
        },

        select: {
            width: 180,
        },

        button: {
            height: 40,
            borderRadius: 8,
            border: `1px solid ${CLASS_LIST_COLOR.border}`,
            background: CLASS_LIST_COLOR.surfaceHover,
            color: CLASS_LIST_COLOR.textPrimary,
        },

        card: {
            borderRadius: 12,
            overflow: "hidden",
            background: CLASS_LIST_COLOR.surface,
            border: `1px solid ${CLASS_LIST_COLOR.border}`,
        },

        image: {
            width: "100%",
            height: 140,
            objectFit: "cover",
        },

        title: {
            fontSize: 15,
            fontWeight: 600,
            color: CLASS_LIST_COLOR.textPrimary,
            marginBottom: 6,
        },

        meta: {
            fontSize: 12,
            color: CLASS_LIST_COLOR.textMuted,
        }
    };

    return styles;
};