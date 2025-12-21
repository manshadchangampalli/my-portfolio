export type SecondMonitorType = "text" | "iframe" | "gif";

export interface SecondMonitorConfig {
    type: SecondMonitorType;
    text?: string;
    description?: string;
    url?: string;
    gifUrl?: string;
}

export const secondMonitorConfig: Record<number, SecondMonitorConfig> = {
    1: {
        type: "text",
        text: "Where Ideas Come Alive",
        description: "Drag the days below to see how your product takes shape, step by step.",
    },
    2: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    3: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    4: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    5: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    6: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    7: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    8: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    9: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    10: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    11: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    12: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    13: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    14: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    15: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    16: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    17: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    18: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    19: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    20: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    21: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    22: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    23: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    24: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    25: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    26: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    27: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    28: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    29: {
        type: "iframe",
        url: "https://www.thirtydays.ai/",
    },
    30: {
        type: "gif",
        gifUrl: "", // Will be set later when you have the gif
    },
};
