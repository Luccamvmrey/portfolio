import React from "react";
import KotlinLogo from "../../../../assets/skills-svgs/KotlinLogo.tsx";
import AndroidLogo from "../../../../assets/skills-svgs/AndroidLogo.tsx";
import ReactLogo from "../../../../assets/skills-svgs/ReactLogo.tsx";
import JavascriptLogo from "../../../../assets/skills-svgs/JavascriptLogo.tsx";
import TypescriptLogo from "../../../../assets/skills-svgs/TypescriptLogo.tsx";
import NodejsLogo from "../../../../assets/skills-svgs/NodejsLogo.tsx";
import JavaLogo from "../../../../assets/skills-svgs/JavaLogo.tsx";
import FirebaseLogo from "../../../../assets/skills-svgs/FirebaseLogo.tsx";

export const skillComponents: Record<string, React.FC> = {
    "Kotlin": KotlinLogo,
    "Android": AndroidLogo,
    "Java": JavaLogo,
    "React": ReactLogo,
    "React Native": ReactLogo,
    "JavaScript": JavascriptLogo,
    "TypeScript": TypescriptLogo,
    "Node.js": NodejsLogo,
    "Firebase": FirebaseLogo
}