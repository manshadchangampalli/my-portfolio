import { Html } from "@react-three/drei";
import { useMemo } from "react";
import { angle } from "@/utils/angle";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import "./tvCss.css";

export function TvHtml() {
    const { isMd, isLg } = useBreakpoints();

    const getPosition = useMemo((): [number, number, number] => {
        if (isLg) {
            return [1.5, 0, -0.0001];
        } else if (isMd) {
            return [-1, 1.5, -0.08];
        } else {
            return [0, 0.85, -0.05];
        }
    }, [isMd, isLg]);

    return (
        <Html
            transform
            occlude
            position={getPosition}
            rotation={[0, angle(180), 0]}
            distanceFactor={2.22}
            pointerEvents="auto"
            scale={1}
            style={{
                width: "1000px",
                height: "545px",
                pointerEvents: "auto",
                backgroundColor: "#ffffff",
            }}>
            <div className="tv-bg">
                <img className="tv-image" src="/texture/confiancelabs/tv.webp" alt="" />
                <div className="box">
                    <h2 className="box-title">Real-Time Time-Based Menu Management System</h2>
                    <p className="box-description">
                        A dynamic menu management system that lets restaurants schedule and display menus based on time—breakfast, lunch, dinner, or custom slots. The customer app is built in <span className="tech-highlight">React</span>, with an <span className="tech-highlight">Angular</span> dashboard for managing content. Powered by <span className="tech-highlight">AWS SAM</span>, <span className="tech-highlight">AWS WebSocket</span>, and <span className="tech-highlight">DynamoDB</span>, it delivers real-time updates, high performance, and seamless syncing across devices. Restaurant owners can easily create, update, and automate menu schedules so customers always see the right menu at the right time.
                    </p>
                </div>
            </div>
        </Html>
    );
}

