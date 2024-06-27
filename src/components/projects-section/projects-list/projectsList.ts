import {Project} from "../../../types/Project.ts";

export const projects: Project[] = [
    {
        title: "PanApp",
        description: "Aplicativo educacional para conectar alunos e professores" +
            " de forma simples e eficiente. Similar ao Google Classroom",
        technologies: ["Kotlin", "Firebase", "Android"],
        githubLink: "https://github.com/Luccamvmrey/PanApp"
    },
    {
        title: "Minerva",
        description: "Aplicativo que consome a API do museu de arte de Chicago" +
            " para exibir obras de arte e informações sobre elas",
        technologies: ["Kotlin", "Firebase", "Android"],
        githubLink: "https://github.com/Luccamvmrey/Minerva"
    },
    {
        title: "Janos",
        description: "Aplicativo simples de perguntas e respostas, " +
            "utilizado para auxiliar no ensino introdutório de Kotlin " +
            "e Jetpack Compose.",
        technologies: ["Kotlin", "Android"],
        githubLink: "https://github.com/Luccamvmrey/Janos"
    },
    {
        title: "Nite-Log",
        description: "Website, focado em mobile, para registro de atividades," +
            " acompanhamento de metas e de presenças do Núcleo de Inovação e Tecnologia" +
            " da Unijorge.",
        technologies: ["TypeScript", "React", "Firebase", "Node.js"],
        githubLink: "https://github.com/Luccamvmrey/nite-log"
    },
    {
        title: "Nite-Mimir",
        description: "Website para inserção de dados sobre aulas e eventos a serem utilizados" +
            " pelo atendente robótico.",
        technologies: ["TypeScript", "React", "Firebase", "Node.js"],
        githubLink: "https://github.com/Luccamvmrey/NiteMimir"
    },
    {
        title: "Mimir-Api",
        description: "API para comunicação do atendente robótico com o banco de dados do Núcleo" +
            " de Inovação e Tecnologia da Unijorge.",
        technologies: ["JavaScript", "Node.js", "Firebase"],
        githubLink: "https://github.com/Luccamvmrey/mimir-api"
    },
]