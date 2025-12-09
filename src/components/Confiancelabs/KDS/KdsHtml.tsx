import { Html } from "@react-three/drei";
import { angle } from "../../../../utils";
import "./kdsCss.css";

type OrderItemType = "item" | "modifier" | "allergy" | "rush";

interface OrderItem {
    type: OrderItemType;
    text: string;
    hasFlame?: boolean;
}

interface OrderTicket {
    status: "green" | "yellow" | "red";
    tableInfo: string;
    time: string;
    isLate?: boolean;
    items: OrderItem[];
}

interface DayCount {
    count: string;
    label: string;
    highlight?: boolean;
}

export function KdsHtml() {
    const renderOrderItem = (item: OrderItem, index: number) => {
        const prefix = item.type === "modifier" || item.type === "rush" ? "- " : "";
        const className = `order-${item.type}`;

        return (
            <div
                key={index}
                className={className}>
                {prefix}
                {item.text}
                {item.hasFlame && <span className="flame-icon">🔥</span>}
            </div>
        );
    };

    return (
        <Html
            transform
            occlude
            position={[0, 0, -0.0001]}
            rotation={[0, angle(180), 0]}
            distanceFactor={1}
            pointerEvents="auto"
            scale={1}
            style={{
                width: "725px",
                height: "720px",
                pointerEvents: "auto",
                backgroundColor: "#ffffff",
            }}>
            <div className="kds-bg">
                <div className="kds-container">
                    {/* Header Bar */}
                    <div className="kds-header">
                        <div className="header-left">
                            <span>GRILL STATION 1 | ACTIVE ORDERS | 18:45 PM</span>
                        </div>
                        <div className="header-right">
                            <span>Avg Ticket: 08:12 | Orders: 14</span>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="kds-main">
                        {/* Order Tickets Grid */}
                        <div className="orders-grid">
                            {orderTickets.map((ticket, index) => (
                                <div
                                    key={index}
                                    className={`order-ticket ticket-${ticket.status}`}>
                                    <div className="ticket-header">
                                        <span>{ticket.tableInfo}</span>
                                        <span className={ticket.isLate ? "ticket-late" : "ticket-time"}>{ticket.time}</span>
                                    </div>
                                    <div className="ticket-content">{ticket.items.map((item, itemIndex) => renderOrderItem(item, itemIndex))}</div>
                                </div>
                            ))}
                        </div>

                        {/* All Day Counts Sidebar */}
                        <div className="all-day-counts">
                            <div className="counts-header">ALL DAY COUNTS</div>
                            {dayCounts.map((count, index) => (
                                <div
                                    key={index}
                                    className={`count-item ${count.highlight ? "count-highlight" : ""}`}>
                                    <span className="count-number">{count.count}</span>
                                    <span className="count-label">{count.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="kds-footer">
                        {footerItems.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </div>
                </div>

                {/* Popup Box */}
                <div className="kds-popup">
                    <h2 className="popup-title">Kitchen Display System (KDS)</h2>
                    <p className="popup-description">
                        A real-time kitchen display system that streamlines order management and improves kitchen efficiency. Built with{" "}
                        <span className="tech-highlight">React</span> for the display interface, integrated with <span className="tech-highlight">WebSocket</span>{" "}
                        technology for live order updates, and powered by <span className="tech-highlight">AWS</span> infrastructure. The system provides instant order
                        notifications, order status tracking, and optimized workflow management, helping kitchen staff prepare orders faster and more accurately.
                    </p>
                </div>
            </div>
        </Html>
    );
}

const orderTickets: OrderTicket[] = [
    {
        status: "green",
        tableInfo: "Tbl 42 | Svr: Mark",
        time: "3:12",
        items: [
            { type: "item", text: "2x NY STRIP (14oz)" },
            { type: "modifier", text: "Med Rare" },
            { type: "modifier", text: "Extra Asparagus", hasFlame: true },
        ],
    },
    {
        status: "yellow",
        tableInfo: "Tbl 18 | Svr: Amy",
        time: "14:30",
        items: [
            { type: "item", text: "3x HOUSE BURGER" },
            { type: "modifier", text: "1x Well Done, No Cheese" },
            { type: "modifier", text: "2x Med, Add Bacon" },
            { type: "item", text: "1x ATLANTIC SALMON" },
            { type: "allergy", text: "*** SHELLFISH ALLERGY ***" },
            { type: "modifier", text: "Sauce on side" },
        ],
    },
    {
        status: "red",
        tableInfo: "Tbl 05 | VIP",
        time: "24:15 LATE",
        isLate: true,
        items: [
            { type: "item", text: "1x TOMAHAWK RIBEYE" },
            { type: "modifier", text: "RARE" },
            { type: "rush", text: "RUSH ORDER" },
        ],
    },
    {
        status: "green",
        tableInfo: "Tbl 42 | Svr: Mark",
        time: "3:12",
        items: [
            { type: "item", text: "2x NY STRIP (14oz)" },
            { type: "modifier", text: "Med Rare" },
            { type: "modifier", text: "Extra Asparagus", hasFlame: true },
        ],
    },
    {
        status: "yellow",
        tableInfo: "Tbl 18 | Svr: Amy",
        time: "14:30",
        items: [
            { type: "item", text: "3x HOUSE BURGER" },
            { type: "modifier", text: "1x RARE" },
            { type: "modifier", text: "2x Med, Add Bacon" },
            { type: "allergy", text: "*** SHELLFISH ALLERGY ***" },
            { type: "modifier", text: "Sauce on side" },
        ],
    },
    {
        status: "red",
        tableInfo: "Tbl 05 | Svr: Amy",
        time: "14:30",
        items: [
            { type: "item", text: "1x TOMAHAWK RIBEYE" },
            { type: "modifier", text: "1x Well Done, No Cheese" },
            { type: "rush", text: "RUSH ORDER" },
            { type: "item", text: "1x ATLANTIC SALMON" },
            { type: "modifier", text: "Sauce on side" },
        ],
    },
];

const dayCounts: DayCount[] = [
    { count: "8x", label: "NY Strip" },
    { count: "6x", label: "Filet Mignon", highlight: true },
    { count: "15x", label: "Burgers" },
    { count: "12x", label: "Salmon", highlight: true },
];

const footerItems = ["[1] BUMP", "[2] PAGE FWD", "[3] RECALL"];
