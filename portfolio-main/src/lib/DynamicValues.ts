import { ICombinedInformation, IDirectMessageItem, IInitialInformation, ITitledListItem } from "./Models";

class DynamicValues {
    static initialInformation: IInitialInformation = {
        name: "Harish R",
        occupation: "Software Engineer",
    }

    static directMessageItems: Array<IDirectMessageItem> = [
        {
            name: "WhatsApp",
            link: "https://api.whatsapp.com/send?phone=8610538642"
        },

    ]

    static about: Array<ITitledListItem> = [
        {
            text: "Information",
            shouldNotSort: true,
            arr: [
                {
                    title: "Name",
                    desc: "Harish R",
                    logo: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
                },
                {
                    title: "Student",
                    logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png"
                },
                {
                    title: "LeetCode",
                    link: "https://leetcode.com/u/Harish6275/",
                    logo: "https://raw.githubusercontent.com/Jaganr07/Images/refs/heads/main/LeetCode_logo_black.svg"
                },
                {
                    title: "Languages",
                    desc: "English,Tamil",
                    logo: "https://cdn-icons-png.flaticon.com/128/3898/3898150.png"
                },
                {
                    title: "Nationality",
                    desc: "Indian",
                    logo: "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/in.svg"
                },
                {
                    title: "Resume",
                    desc: "Click the link icon to view/download",
                    link: "https://drive.google.com/file/d/1Mhab7eB55loNlRQwrh_ccQhHECg-cXZy/view?usp=drivesdk",
                    logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png"
                }
            ]
        },
    ]

    static skills: Array<ITitledListItem> = [
        {
            text: "Programming / Markup Languages",
            arr: [
                {
                    title: 'Java',
                    logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
                },
                {
                    title: 'Python',
                    logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
                },
                {
                    title: 'HTML',
                    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
                },
                {
                    title: 'CSS',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                },
                {
                    title: 'JavaScript',
                    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
                },
            ]
        },
        {
            text: "Databases",
            arr: [
                {
                    title: 'MongoDB',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/mongodb-3521676-2945120.png'
                },
                {
                    title: 'SQL',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/ffeb437f-0d63-40e5-9bc3-041d5715d67e',
                },
            ]
        },
        {
            text: "Libraries / Frameworks / Techs",
            arr: [
                {
                    title: 'ReactJS',
                    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
                },

                {
                    title: 'Firebase',
                    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
                },
                {
                    title: 'Git',
                    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
                },
                {
                    title: 'GitHub',
                    logo: 'https://cdn-icons-png.flaticon.com/128/1051/1051275.png'
                },

            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'VS Code',
                    logo: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png'
                },
                {
                    title: 'Canva',
                    logo: 'https://raw.githubusercontent.com/Jaganr07/Images/refs/heads/main/canva.svg'
                },
                {
                    title: 'Postman',
                    logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
                },
                {
                    title: 'Visily AI',
                    logo: 'https://raw.githubusercontent.com/Jaganr07/Images/refs/heads/main/vi.svg'
                },
                {
                    title: 'Swagger',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg'
                },
            ]
        },
    ]

    static projects: Array<ITitledListItem> = [
        {
            text: "Web Applications",
            arr: [
                {
                    title: "FoodLink – Surplus Food Distribution Platform",
                    link: "https://github.com/Harish-R-01/FoodLink",
                    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
                    desc: "A platform connecting food providers with NGOs to redistribute surplus food efficiently.",
                },

                {
                    title: "Online Debate and Voting System",
                    link: "https://github.com/Harish-R-01/Online-Debate-and-Voting-System",
                    logo: "https://raw.githubusercontent.com/Jaganr07/Images/refs/heads/main/8393149.svg",
                    desc: "A web app that enables users to participate in debates, share opinions, and cast votes in a transparent and interactive way.",
                },

            ]
        },
        {
            text: "Extension",
            arr: [
                {
                    title: "Smart Email Writer",
                    link: "https://github.com/Harish-R-01/Email-Writer",
                    logo: "https://raw.githubusercontent.com/Jaganr07/Email_Writer/refs/heads/master/email-writer-ext/gamil.svg",
                    desc: "Smart Email Writer is an AI-powered application that generates professional email replies in a chosen tone, helping users save time while maintaining a polished and human-like communication style.",
                },
            ]
        },
    ]

    static contacts: Array<ITitledListItem> = [
        {
            text: "Contact me",
            arr: [
                {
                    title: 'WhatsApp',
                    logo: 'https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png',
                    link: 'https://api.whatsapp.com/send?phone=918610538642',
                    desc: '+91 8610538642'
                },
                {
                    title: 'Email',
                    logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png',
                    desc: 'harishbabu6275@gmail.com',
                    link: 'mailto:harishbabu6275@gmail.com'
                },
            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'GitHub',
                    logo: 'https://cdn-icons-png.flaticon.com/128/1051/1051275.png',
                    link: 'https://github.com/Harish-R-01'
                },
                {
                    title: 'LinkedIn',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png',
                    link: 'https://www.linkedin.com/in/harish-r01'
                },
            ]
        },

    ]
}

// 
// Dont change anything below this line
// 
export const combinedInformation: ICombinedInformation = {
    initialInformation: DynamicValues.initialInformation,
    directMessageItems: DynamicValues.directMessageItems,
    routes: [
        {
            name: "About",
            items: DynamicValues.about,
        },
        {
            name: "Skills",
            items: DynamicValues.skills,
        },
        {
            name: "Projects",
            items: DynamicValues.projects,
        },
        {
            name: "Contact",
            items: DynamicValues.contacts,
        },
    ]
}