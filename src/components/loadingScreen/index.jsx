import { Spin } from "antd";
import { useLoadingStyles } from "./index.styles";

const LoadingScreen = () => {
    const styles = useLoadingStyles();
    return (
        <div style={styles.container}>
            <Spin size="large" style={styles.spin} />
        </div>
    );
}

export default LoadingScreen;