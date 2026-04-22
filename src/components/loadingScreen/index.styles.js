import { useThemeColor } from "../../hook/useThemeColor";

export const useLoadingStyles = () => {
    const { COLOR } = useThemeColor();

    return {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: COLOR.menuBg,
        },
        spin: {
            transform: 'scale(2)'
        }
    };
};