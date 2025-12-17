import { useCameraStore } from "../../store/cameraStore";

export function CameraControlButtons() {
    const truck = useCameraStore(state => state.truck);
    const zoom = useCameraStore(state => state.zoom);

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            zIndex: 10
        }}>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={() => truck(-2, 0)}>← Truck -2</button>
                <button onClick={() => truck(-1, 0)}>← Truck -1</button>
                <button onClick={() => truck(1, 0)}>Truck +1 →</button>
                <button onClick={() => truck(2, 0)}>Truck +2 →</button>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={() => zoom(-1)}>Zoom Out -1</button>
                <button onClick={() => zoom(-0.5)}>Zoom Out -0.5</button>
                <button onClick={() => zoom(0.5)}>Zoom In +0.5</button>
                <button onClick={() => zoom(1)}>Zoom In +1</button>
            </div>
        </div>
    );
}

