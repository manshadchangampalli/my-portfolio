import { useState, useMemo } from 'react';
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
import { useBreakpoints } from '@/hooks/useBreakpoints';
import './PlaneHtml.css';

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
        <header className="plane-header">
            <div className="plane-header-shine"></div>
            <div className="plane-header-content">
                <div className="plane-logo-text">{companyName}</div>
                <div className="plane-logo-sub">{tagline}</div>
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
        <nav className="plane-nav-bar">
            {items.map((item) => (
                <button
                    key={item}
                    className={activeTab === item.toLowerCase() ? 'plane-nav-button plane-nav-button-active' : 'plane-nav-button'}
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
        <li className="plane-tech-item">
            <div className="plane-icon-box">
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
        <div className="plane-inset-panel">
            <h3 className="plane-panel-header">Technologies Used</h3>
            <ul className="plane-tech-list">
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
        <div className="plane-project-highlight">
            <div className="plane-project-highlight-icon">
                <Icon size={16} />
            </div>
            <div>
                <strong className="plane-project-highlight-title">{title}</strong>
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
        <div className="plane-inset-panel">
            <h3 className="plane-panel-header">Project Highlights</h3>
            <div className="plane-duration-section">
                <strong className="plane-duration-text">Duration: {duration}</strong>
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
        <div className="plane-inset-panel">
            <h3 className="plane-panel-header">About {companyInfo.name}</h3>
            <div className="plane-about-info">
                <p className="mb-3">
                    {companyInfo.description}
                </p>
                <div className="plane-about-divider">
                    <div className="plane-about-detail">
                        <strong className="mr-2">Founded:</strong>
                        <span>{companyInfo.founded}</span>
                    </div>
                    <div className="plane-about-detail">
                        <strong className="mr-2">Location:</strong>
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
        <footer className="plane-footer">
            <div>
                &copy; {year} {companyName}. All Rights Reserved. <br />
                <span className="text-gray-500">Privacy Policy | Terms of Service</span>
            </div>
            <div>
                <div className="plane-social-icon" title="Facebook"><Facebook size={14} /></div>
                <div className="plane-social-icon" title="LinkedIn"><Linkedin size={14} /></div>
                <div className="plane-social-icon" title="Twitter"><Twitter size={14} /></div>
                <div className="plane-social-icon" title="Contact"><Mail size={14} /></div>
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
                    <div className="plane-main-card">
                        <h1 className="plane-page-title">About {companyInfo.name}</h1>
                        <AboutSection companyInfo={companyInfo} />
                    </div>
                );

            case 'experience':
                return (
                    <div className="plane-main-card">
                        <h1 className="plane-page-title">My Experience at {companyInfo.name}</h1>
                        <div className="plane-timeline-container">
                            <div className="plane-timeline-line"></div>
                            <div className="plane-timeline-orb">
                                <div className="plane-orb-gloss"></div>
                                <span className="text-lg" style={{ textShadow: '0 2px 2px rgba(0,0,0,0.1)' }}>
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
                    <div className="plane-main-card">
                        <h1 className="plane-page-title">Technologies & Skills</h1>
                        <TechnologiesSection technologies={technologies} />
                    </div>
                );

            default:
                return (
                    <div className="plane-main-card">
                        <h1 className="plane-page-title">Welcome to {companyInfo.name}</h1>
                        <div className="plane-welcome-content">
                            <p className="plane-welcome-paragraph">
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

    return <div className="plane-content-area">{renderContent()}</div>;
}

export function PlaneHtml() {
    const [activeTab, setActiveTab] = useState<string>('home');
    const duration = 'jun 2022 to sep 2022';
    const { isMd, isLg } = useBreakpoints();

    const getPosition = useMemo((): [number, number, number] => {
        if (isLg) {
            return [-27.65, 0, -0.13];
        } else if (isMd) {
            return [-6.2, 10.7, 0.389];
        } else {
            return [-0.1, 18.6, 0.725];
        }
    }, [isMd, isLg]);

    const handleEventPropagation = (e: React.SyntheticEvent) => {
        e.stopPropagation();
    };

    return (
        <Html
            transform
            occlude
            prepend
            position={getPosition}
            distanceFactor={2.1}
            pointerEvents="auto"
            style={{
                width: "1000px",
                height: "980px",
                pointerEvents: "auto",
            }}
        >
            <div
                onWheel={handleEventPropagation}
                onPointerDown={handleEventPropagation}
                onPointerMove={handleEventPropagation}
                onPointerUp={handleEventPropagation}
                className="overflow-auto no-scrollbar h-full w-full"
            >
                <div className="plane-body">
                    <div className="plane-main-container flex flex-col justify-between h-[980px]">
                        <div>
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
                        </div>

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

