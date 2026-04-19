const styles = {
    loginContainer: {
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
    },

    loginBackground: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center 70%",
        zIndex: 0
    },

    card: {
        position: "relative",
        zIndex: 1,

        width: "100%",
        maxWidth: 800,
        padding: "32px 24px",

        height: "100%",
        maxHeight: 500,

        borderRadius: 16,

        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16
    },

    logo: {
        width: 150,
        height: "auto",
        objectFit: "contain",
        display: "block"
    },

    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 16,
        width: "100%"
    },

    title: {
        margin: 0,
        fontSize: 24,
        fontWeight: 600
    },

    title2: {
        margin: 0,
        fontSize: 20,
        fontWeight: 500
    },

    form: {
        width: "100%",
        maxWidth: 600,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        marginTop: 40
    },

    googleButton: {
        height: 40,
        borderRadius: 8,
        border: "1px solid #ddd",
        background: "#fff",
        color: "#333",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8
    },

    googleIcon: {
        width: 18,
        height: 18
    },
};

export default styles;