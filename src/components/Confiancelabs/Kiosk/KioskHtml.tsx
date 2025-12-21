import { Html } from "@react-three/drei";
import { useMemo } from "react";
import { angle } from "@/utils/angle";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import "./kioskCss.css";

export function KioskHtml() {
    const { isMd, isLg } = useBreakpoints();

    const getPosition = useMemo((): [number, number, number] => {
        if (isLg) {
            return [1.5, 0, -0.0001];
        } else if (isMd) {
            return [-1, 1.1, -0.98];
        } else {
            return [0, 0.6, -0.58];
        }
    }, [isMd, isLg]);

    return (
        <Html
            transform
            occlude
            position={getPosition}
            rotation={[0, angle(180), 0]}
            distanceFactor={1}
            pointerEvents="auto"
            scale={1}
            style={{
                width: "550px",
                height: "670px",
                pointerEvents: "auto",
                backgroundColor: "#ffffff",
            }}>
            <div className="kiosk-bg">
                <img className="kiosk-image" src="/texture/confiancelabs/kiosk.webp" alt="" />
                <div className="box">
                    <h2 className="box-title">Interactive Kiosk Ordering System</h2>
                    <p className="box-description">
                        A self-service kiosk solution that enables customers to browse menus, customize orders, and complete transactions independently. Built with <span className="tech-highlight">React</span> for the frontend interface, integrated with <span className="tech-highlight">Node.js</span> backend services, and powered by <span className="tech-highlight">AWS</span> infrastructure. The system features intuitive touch interactions, real-time menu updates, and seamless payment processing, reducing wait times and enhancing the customer dining experience.
                    </p>
                </div>
            </div>
        </Html>
    );
}

