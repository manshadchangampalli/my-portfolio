import { useState } from 'react';
import { Html } from "@react-three/drei";
import {
    Monitor,
    PenTool,
    Camera,
    Brain,
    Code,
    Facebook,
    Linkedin,
    Twitter,
    Mail
} from 'lucide-react';
import { styles } from './PlaneHtml.styles';

// ============================================================================
// CONSTANTS
// ============================================================================

const COMPANY_INFO = {
    name: 'Carscan',
    tagline: 'Junior Software Engineer',
    description: 'Carscan is a South African automotive technology startup that leverages augmented reality (AR) and artificial intelligence (AI) to create accurate, reliable, and traceable digital records of vehicles. The platform assists buyers, sellers, insurers, and repairers by streamlining vehicle inspections, insurance claims, and repair estimates.',
    founded: '2019',
    location: 'South Africa'
};

const NAV_ITEMS = ['Home', 'About', 'Experience', 'Technologies', 'Contact'] as const;

const TECHNOLOGIES = [
    { name: 'React JS', icon: Code },
    { name: 'TensorFlow', icon: Brain },
    { name: 'SCSS', icon: PenTool },
    { name: 'Bootstrap', icon: Monitor },
    { name: 'CSS3', icon: PenTool },
    { name: 'HTML5', icon: Monitor },
    { name: 'JavaScript', icon: Code },
    { name: 'TypeScript', icon: Code },
    { name: 'git', icon: Code },
    { name: 'unit Testing', icon: Code },
    { name: 'JS', icon: Code },
    { name: 'HTML', icon: Monitor },
    { name: 'CSS', icon: PenTool },
];

const PROJECT_HIGHLIGHTS = [
    {
        title: '360° 3D Car Visualization',
        description: 'Managed 360-degree 3D representations of cars by processing multiple images, providing comprehensive visualizations of vehicle conditions',
        icon: Camera
    },
    {
        title: 'Camera & Image Processing',
        description: 'Developed and optimized camera functionalities and image processing algorithms to accurately capture and analyze vehicle images',
        icon: Camera
    },
    {
        title: 'AI-Powered 3D Generation',
        description: 'Integrated TensorFlow-based AI models to generate 3D models of cars, enabling automated damage detection and assessment',
        icon: Brain
    },
    {
        title: 'Frontend Development',
        description: 'Built dynamic and responsive user interfaces using React.js, ensuring seamless user experience across devices',
        icon: Code
    }
];

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

interface HeaderProps {
    companyName: string;
    tagline: string;
}

function Header({ companyName, tagline }: HeaderProps) {
    return (
        <header style={styles.header}>
            <div style={styles.headerShine}></div>
            <div style={{ display: 'grid', gap: '10px' }}>
                <div style={styles.logoText}>{companyName}</div>
                <div style={styles.logoSub}>{tagline}</div>
            </div>
        </header>
    );
}

interface NavigationProps {
    items: readonly string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

function Navigation({ items, activeTab, onTabChange }: NavigationProps) {
    return (
        <nav style={styles.navBar}>
            {items.map((item) => (
                <button
                    key={item}
                    style={styles.navButton(activeTab === item.toLowerCase())}
                    onClick={() => onTabChange(item.toLowerCase())}
                >
                    {item}
                </button>
            ))}
        </nav>
    );
}

interface TechItemProps {
    name: string;
    icon: React.ComponentType<{ size?: number }>;
}

function TechItem({ name, icon: Icon }: TechItemProps) {
    return (
        <li style={styles.techItem}>
            <div style={styles.iconBox}>
                <Icon size={14} />
            </div>
            {name}
        </li>
    );
}

interface TechnologiesSectionProps {
    technologies: Array<{ name: string; icon: React.ComponentType<{ size?: number }> }>;
}

function TechnologiesSection({ technologies }: TechnologiesSectionProps) {
    return (
        <div style={styles.insetPanel}>
            <h3 style={styles.panelHeader}>Technologies Used</h3>
            <ul style={styles.techList}>
                {technologies.map((tech) => (
                    <TechItem key={tech.name} name={tech.name} icon={tech.icon} />
                ))}
            </ul>
        </div>
    );
}

interface ProjectHighlightProps {
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
}

function ProjectHighlight({ title, description, icon: Icon }: ProjectHighlightProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', color: '#555', fontSize: '13px', marginBottom: '12px' }}>
            <Icon size={16} style={{ marginRight: '8px', marginTop: '2px', color: '#360621', flexShrink: 0 }} />
            <div>
                <strong style={{ color: '#333', display: 'block', marginBottom: '4px' }}>{title}</strong>
                <span>{description}</span>
            </div>
        </div>
    );
}

interface ExperienceSectionProps {
    highlights: Array<{ title: string; description: string; icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }> }>;
    duration: string;
}

function ExperienceSection({ highlights, duration }: ExperienceSectionProps) {
    return (
        <div style={styles.insetPanel}>
            <h3 style={styles.panelHeader}>Project Highlights</h3>
            <div style={{ marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #e0e0e0' }}>
                <strong style={{ color: '#360621', fontSize: '12px' }}>Duration: {duration}</strong>
            </div>
            {highlights.map((highlight, index) => (
                <ProjectHighlight key={index} {...highlight} />
            ))}
        </div>
    );
}

interface AboutSectionProps {
    companyInfo: typeof COMPANY_INFO;
}

function AboutSection({ companyInfo }: AboutSectionProps) {
    return (
        <div style={styles.insetPanel}>
            <h3 style={styles.panelHeader}>About {companyInfo.name}</h3>
            <div style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '12px' }}>
                    {companyInfo.description}
                </p>
                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #e0e0e0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#333' }}>
                        <strong style={{ marginRight: '8px' }}>Founded:</strong>
                        <span>{companyInfo.founded}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', color: '#333' }}>
                        <strong style={{ marginRight: '8px' }}>Location:</strong>
                        <span>{companyInfo.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface FooterProps {
    companyName: string;
    year: number;
}

function Footer({ companyName, year }: FooterProps) {
    return (
        <footer style={styles.footer}>
            <div>
                &copy; {year} {companyName}. All Rights Reserved. <br />
                <span style={{ color: '#666' }}>Privacy Policy | Terms of Service</span>
            </div>
            <div>
                <div style={styles.socialIcon} title="Facebook"><Facebook size={14} /></div>
                <div style={styles.socialIcon} title="LinkedIn"><Linkedin size={14} /></div>
                <div style={styles.socialIcon} title="Twitter"><Twitter size={14} /></div>
                <div style={styles.socialIcon} title="Contact"><Mail size={14} /></div>
            </div>
        </footer>
    );
}

interface ContentRendererProps {
    activeTab: string;
    companyInfo: typeof COMPANY_INFO;
    technologies: typeof TECHNOLOGIES;
    highlights: typeof PROJECT_HIGHLIGHTS;
    duration: string;
}

function ContentRenderer({ activeTab, companyInfo, technologies, highlights, duration }: ContentRendererProps) {
    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <div style={styles.mainCard}>
                        <h1 style={styles.pageTitle}>About {companyInfo.name}</h1>
                        <AboutSection companyInfo={companyInfo} />
                    </div>
                );

            case 'experience':
                return (
                    <div style={styles.mainCard}>
                        <h1 style={styles.pageTitle}>My Experience at {companyInfo.name}</h1>
                        <div style={styles.timelineContainer}>
                            <div style={styles.timelineLine}></div>
                            <div style={styles.timelineOrb(true)}>
                                <div style={styles.orbGloss}></div>
                                <span style={{ fontSize: '18px', textShadow: '0 2px 2px rgba(0,0,0,0.1)' }}>
                                    {duration}
                                </span>
                            </div>
                        </div>
                        <div className="responsive-grid">
                            <TechnologiesSection technologies={technologies} />
                            <ExperienceSection highlights={highlights} duration={duration} />
                        </div>
                    </div>
                );

            case 'technologies':
                return (
                    <div style={styles.mainCard}>
                        <h1 style={styles.pageTitle}>Technologies & Skills</h1>
                        <TechnologiesSection technologies={technologies} />
                    </div>
                );

            default:
                return (
                    <div style={styles.mainCard}>
                        <h1 style={styles.pageTitle}>Welcome to {companyInfo.name}</h1>
                        <div style={{ color: '#555', fontSize: '16px', lineHeight: '1.8', textAlign: 'center', padding: '40px 20px' }}>
                            <p style={{ marginBottom: '20px' }}>
                                Experience in AI-powered vehicle inspection technology
                            </p>
                            <p>
                                Navigate through the sections to learn more about my work at {companyInfo.name}
                            </p>
                        </div>
                    </div>
                );
        }
    };

    return <div style={styles.contentArea}>{renderContent()}</div>;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function PlaneHtml() {
    const [activeTab, setActiveTab] = useState<string>('home');
    const duration = 'jun 2022 to sep 2022';

    const handleEventPropagation = (e: React.SyntheticEvent) => {
        e.stopPropagation();
    };

    return (
        <Html
            transform
            occlude
            fullscreen
            position={[0, 0, 0.01]}
            distanceFactor={2}
            pointerEvents="auto"
            style={{
                width: "1000px",
                height: "1000px",
                pointerEvents: "auto",
            }}
        >
            <div
                onWheel={handleEventPropagation}
                onPointerDown={handleEventPropagation}
                onPointerMove={handleEventPropagation}
                onPointerUp={handleEventPropagation}
                style={{ overflow: "auto", height: "100%", width: "100%", padding: "20px" }}
            >
                <style>{`
                    .responsive-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    @media (min-width: 768px) {
                        .responsive-grid {
                            grid-template-columns: 1fr 1fr;
                        }
                    }
                `}</style>

                <div style={styles.body}>
                    <div style={styles.mainContainer}>
                        <Header
                            companyName={COMPANY_INFO.name}
                            tagline={COMPANY_INFO.tagline}
                        />

                        <Navigation
                            items={NAV_ITEMS}
                            activeTab={activeTab}
                            onTabChange={setActiveTab}
                        />

                        <ContentRenderer
                            activeTab={activeTab}
                            companyInfo={COMPANY_INFO}
                            technologies={TECHNOLOGIES}
                            highlights={PROJECT_HIGHLIGHTS}
                            duration={duration}
                        />

                        <Footer
                            companyName={COMPANY_INFO.name}
                            year={new Date().getFullYear()}
                        />
                    </div>
                </div>
            </div>
        </Html>
    );
}

