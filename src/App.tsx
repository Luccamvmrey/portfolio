import './App.css'
import Header from "./components/header/Header.tsx";
import {ThemeProvider} from "./context/theme-provider.tsx";
import HeroSection from "./components/hero-section/HeroSection.tsx";
import SkillsSection from "./components/skills-section/SkillsSection.tsx";
import ProjectsSection from "./components/projects-section/ProjectsSection.tsx";
import {useState} from "react";

function App() {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    const handleSkillSelect = (skill: string) => {
        if (skill === selectedSkill) {
            setSelectedSkill(null);
        } else {
            setSelectedSkill(skill);
        }
    }

    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <Header />
            <HeroSection />
            <SkillsSection
                onSkillSelect={handleSkillSelect}
                selectedSkill={selectedSkill}
            />
            <ProjectsSection
                onSkillSelect={handleSkillSelect}
                selectedSkill={selectedSkill}
            />
        </ThemeProvider>
    )
}

export default App
