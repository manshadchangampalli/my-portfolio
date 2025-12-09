export const AppType = {
  NONE: "",
  NOTES: "NOTES",
  PHONE: "PHONE",
  MESSAGES: "MESSAGES",
  FACETIME: "FACETIME",
  WALLET: "WALLET",
  ULTIMATE_MOTORS: "ULTIMATE_MOTORS",
  NMC: "NMC",
  MBS: "MBS",
  MAI_DUBAI: "MAI_DUBAI",
  ABER: "ABER",
} as const;

export type AppType = (typeof AppType)[keyof typeof AppType];

export interface App {
  id: AppType;
  name: string;
  icon: string;
}

export interface AppConfig extends App {
  splashScreen?: {
    image?: string;
    logo?: string;
    duration?: number; // in milliseconds
  };
  themeColor: string;
  content: React.ComponentType<{ app: AppConfig }>;
}
