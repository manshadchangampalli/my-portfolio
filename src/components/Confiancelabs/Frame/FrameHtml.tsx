import { Html } from "@react-three/drei";
import { angle } from "../../../../utils";
import "./frameCss.css";

export function FrameHtml() {
    return (
        <Html
            transform
            occlude
            position={[0, 0, -0.005]}
            rotation={[angle(0), angle(180), 0]}
            distanceFactor={1}
            pointerEvents="auto"
            scale={2.5}
            style={{
                width: "430px",
                height: "670px",
                pointerEvents: "auto",
                backgroundColor: "#000000",
            }}>
            <div className="bg">
                <img
                    className="circle1"
                    src="/texture/confiancelabs/circle_gradient.png"
                    alt=""
                />
                <img
                    className="circle2"
                    src="/texture/confiancelabs/circle_gradient.png"
                    alt=""
                />
                <span>2022-2023</span>
                <h1>CONFIANCELABS</h1>
                <h3>Full Stack Developer</h3>
                <p>
                    Had the awesome opportunity to wear almost every hat possible — UI/UX designer, front-end dev, back-end dev, and even the accidental DevOps guy. Built
                    apps using Angular, React, and Node.js, and dove into AWS land with SAM, API Gateway, DynamoDB, OpenSearch, and all those serverless goodies. Also
                    made real-time features with WebSockets and set up CI/CD so things didn't explode on deployment. Designed plenty of clean interfaces in Figma too —
                    overall, a fun ride where I learned a lot and broke only a "reasonable" number of things.
                </p>
            </div>
        </Html>
    );
}

