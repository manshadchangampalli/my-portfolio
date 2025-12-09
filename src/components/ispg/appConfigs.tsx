import { AppType, type AppConfig } from "./types";
import { UltimateMotorsContent } from "./components/apps/UltimateMotorsContent";
import { NMCContent } from "./components/apps/NMCContent";
import { MBSContent } from "./components/apps/MBSContent";
import { MaiDubaiContent } from "./components/apps/MaiDubaiContent";
import { AberContent } from "./components/apps/AberContent";
import { PhoneContent } from "./components/apps/PhoneContent";
import { MessagesContent } from "./components/apps/MessagesContent";
import { WalletContent } from "./components/apps/WalletContent";

export const appConfigs: AppConfig[] = [
    {
        id: AppType.ULTIMATE_MOTORS,
        name: "Ultimate Motors",
        icon: "/texture/ispg/apps/ultimate motors.png",
        splashScreen: {
            logo: "/texture/ispg/apps/ultimate motors.png",
            duration: 1000,
        },
        themeColor: "#000000",
        content: UltimateMotorsContent,
    },
    {
        id: AppType.NMC,
        name: "NMC",
        icon: "/texture/ispg/apps/nmc.png",
        splashScreen: {
            logo: "/texture/ispg/apps/nmc.png",
            duration: 1000,
        },
        themeColor: "#2C6D97",
        content: NMCContent,
    },
    {
        id: AppType.MBS,
        name: "MBS",
        icon: "/texture/ispg/apps/mbs.png",
        themeColor: "#07443F",
        splashScreen: {
            duration: 1000,
        },
        content: MBSContent,
    },
    {
        id: AppType.MAI_DUBAI,
        name: "Mai Dubai",
        icon: "/texture/ispg/apps/mai dubai.png",
        splashScreen: {
            duration: 1000,
        },
        themeColor: "#EC1A30",
        content: MaiDubaiContent,
    },
    {
        id: AppType.ABER,
        name: "Aber",
        icon: "/texture/ispg/apps/aber.png",
        splashScreen: {
            duration: 1000,
        },
        themeColor: "#007934",
        content: AberContent,
    },
    {
        id: AppType.PHONE,
        name: "Phone",
        icon: "/texture/ispg/apps/Phone.png",
        themeColor: "#000000",
        content: PhoneContent,
    },
    {
        id: AppType.MESSAGES,
        name: "Messages",
        icon: "/texture/ispg/apps/Messages.png",
        themeColor: "#000000",
        content: MessagesContent,
    },
    {
        id: AppType.WALLET,
        name: "Wallet",
        icon: "/texture/ispg/apps/Wallet.png",
        themeColor: "#000000",
        content: WalletContent,
    },
];

