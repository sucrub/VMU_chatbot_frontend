import { Spin } from "antd";
import styles from "./index.styles";

const LoadingScreen = () => {
    return (
        <div style={styles.container}>
            <Spin size="large" style={styles.spin} />
        </div>
    );
}

export default LoadingScreen;