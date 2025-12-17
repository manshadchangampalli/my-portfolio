import useConfianceStore from "../../store/confianceStore";

const ConfianceLabsCamera = () => {
    const setCurrentCamera = useConfianceStore((state) => state.setCurrentCamera);
    return (
        <div
            style={{
                position: "fixed",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "10px",
                zIndex: 10,
            }}>
            <button
                style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    border: "1px solid #333",
                }}
                onClick={() => {
                    setCurrentCamera("tv");
                }}>
                tv
            </button>
            <button
                style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    border: "1px solid #333",
                }}
                onClick={() => {
                    setCurrentCamera("kiosk");
                }}>
                kiosk
            </button>
            <button
                style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    border: "1px solid #333",
                }}
                onClick={() => {
                    setCurrentCamera("kds");
                }}>
                kds
            </button>
            <button
                style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    border: "1px solid #333",
                }}
                onClick={() => {
                    setCurrentCamera("frame");
                }}>
                frame
            </button>
        </div>
    );
};

export default ConfianceLabsCamera;
