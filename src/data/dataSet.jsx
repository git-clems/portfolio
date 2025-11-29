
export const domains = [
    {
        id: 1,
        title: "Supply Chain Management",
        description: "Planifier et manager les processus d’approvisionnement, de production et de livraisons au cœur des métiers de l’entreprise."
    },
    {
        id: 2,
        title: "Recherche opérationnelle",
        description: "Toujours en quête d'optimisation, la recherche (particulièrement dans le domaine de la logistique) offre un cadre de réflexion pour l'utilisation adéquate des nouvelles méthodes et outils dans les processus métiers."
    },
    {
        id: 3,
        title: "Business analysis",
        description: "L'esprit d'analyse au sein des processus métiers de votre entreprise permet une prise de décision optimale et suivre les activités principales de votre structure."
    },
]



export const skills = [
    {
        id: 1,
        title: "Supply Chain Management"
    },
    {
        id: 2,
        title: "Business analysis"
    },
    {
        id: 3,
        title: "Recherche opérationelle"
    },
    {
        id: 4,
        title: "Web and Mobile App dev"
    },
    {
        id: 5,
        title: "Design thinking"
    },
    {
        id: 6,
        title: "Amélioration continue"
    },
]


export const educations = [
    {
        id: 1,
        period: "2021-2024",
        location: "Ecole Nationale d'Informatique et d'Analyse des Systèmes, Rabat (ENSIAS)",
        description: "Avec une orientation en Smart Supply Chain and Logistics, j'ai eu des connaissances sur la gestion logistique et de l’impact de l'informatique décisionnelle et du Business Intelligence dans ce métier. Je souligne aussi la recherche opérationnelle à travers laquelle un accent est mis sur la résolution des problèmes liés à l'optimisation logistique: utilisation des méthodes mathématiques et approchées, les technologies de l'IA.",
        tools: [
            {
                id: 1,
                keyword: "ERP/CRM/MRP"
            },
            {
                id: 2,
                keyword: "IA/Deep Learning"
            },
            {
                id: 3,
                keyword: "Gestion d'entrepôt"
            },
            {
                id: 4,
                keyword: "Algorithme génétique"
            },
            {
                id: 5,
                keyword: "Power BI"
            },
            {
                id: 6,
                keyword: "BPMN"
            },
            {
                id: 7,
                keyword: "salesforce lightning"
            },
        ]
    },
    {
        id: 2,
        period: "2019-2021",
        location: "Faculté des Sciences et Techniques, Mohammedia(FSTM)",
        description: "J'ai su développer des connaissances en analyse numérique et statistiques. Ceci combiné à l'algorithmique m'a donné des solides acquis sur la transformation d'un problème réel en problème mathématique et ensuite sa résolution grâce à des méthodes définies ou algorithmes.",
        tools: [
            {
                id: 1,
                keyword: "Algorithm",
            },
            {
                id: 2,
                keyword: "Programmation C/C++"
            },
            {
                id: 3,
                keyword: "Base de données"
            },
            {
                id: 4,
                keyword: "Structure de données"
            },
            {
                id: 5,
                keyword: "Algèbre"
            },
            {
                id: 4,
                keyword: "Analyse numérique"
            },
        ],
    },
]



export const projects = [
    {
        id: "tableau de bord pour le suivi d'activités de livraisons en consigne",
        title: "Conception de tableau de bord pour le suivi d'activités de livraisons en consigne",
        description: "Pour un bon suivi des performances d'une activité, les tableaux de bords dynamiques paraissent très adéquats dans le sens où ils offrent une vue aussi bien macroscopique que détaillée.",
        period: "Juil. 2023 - Août 2023",
        location: "CEOS Technology - Casablanca, Maroc",
        image: require("../assets/works/ExpGlobale.png"),
        steps: [
            {
                id: 1,
                step: "Définition du problème et définition du cahier de charge",
                description: "Comprendre les processus logistiques qui sont en jeu et définir les frontières du projet."
            },
            {
                id: 2,
                step: "Définition des indicateurs de performance (KPIs)",
                description: "Définir les métriques à mesurer et à suivre par des processus de Benchmarking et d'analyse."
            },
            {
                id: 3,
                step: "Préparation des données et modélisation des processus du dashboard",
                description: "Par le processus d'ETL, extraire les données, les transformer et les charger dans le datawarehouse suivi d'une modélisation multidimensionnelle pour la relation entre les mesures(les Faits) et les dimensions."
            },
            {
                id: 4,
                step: "Implémentation d’interfaces interactives",
                description: "Après la feuille de route et la mise en place de l’architecture, place a été donné à l’implémentation des graphes et des paramètres régulateurs qui permettent de visualiser les graphes de manière dynamique."
            },
        ],
        tools: [
            {
                id: 1,
                keyword: "ETL"
            },
            {
                id: 2,
                keyword: "Business analysis"
            },
            {
                id: 3,
                keyword: "Data Warehouse"
            },
            {
                id: 4,
                keyword: "Chart JS"
            },
            {
                id: 5,
                keyword: "Laravel"
            },
        ]
    },
    {
        id: "système d'information centralisé: cas des centres vétérinaires",
        title: "Conception de système d'information centralisé: cas des centres vétérinaires",
        location: "ENSIAS - Rabat, Maroc",
        period: "Oct. 2022 - Nov. 2022",
        image: require("../assets/works/VueAdmin.PNG"),
        description: "Les systèmes d'information font aujourd'hui parti des supports importants pour la communication, le partage de fichiers, la planification ou le reporting dans les entreprises. Un bon système d'information permet de mieux communiquer et suivre les activités. Ce projet a été l'occasion pour moi et mon équipe lors d'un projet académique de développer un SI centralisé en prenant comme contexte la communication au sein d’un réseaux de cliniques vétérinaires.",
        steps: [
            {
                id: 1,
                step: "Définition du problème",
                description: "Définir sur base du cahier de charge mise à notre disposition les frontières du problème et analyser la faisabilité d'une telle solution. Dans le même moment, faire une critique sur les solutions déjà existantes."
            },
            {
                id: 2,
                step: "Définition des processus fonctionnels",
                description: "Dresser des représentations graphiques (UML) pour expliciter les processus qui interviennent dans les cliniques vétérinaires. Exemple : prendre un rendez-vous, examiner un animal, prescrire des médicaments, facturer un client, faire un rapport etc."
            },
            {
                id: 3,
                step: "Modélisation des processus et base de données",
                description: "Définir l’architecture de développement de l’application (le SI), définir la modélisation de la base de données et attribution de rôles des acteurs."
            },
            {
                id: 4,
                step: "Implémentation de l’application",
                description: "Après la mise en place de l’architecture et de la feuille de route, place a été donné à l’implémentation des interfaces utilisateurs et exposition du résultat final."
            },

        ],
        tools: [
            {
                id: 1,
                keyword: "Data modeling"
            },
            {
                id: 2,
                keyword: "SLQ and PL/SQL"
            },
            {
                id: 3,
                keyword: "Oracle Database"
            },
            {
                id: 4,
                keyword: "Oracle Apex"
            },
        ]
    },
    {
        id: "application mobile pour des publications de service",
        title: "Développement d'application mobile pour des publications de service",
        period: "Août 2022",
        location: "OBAAS Consulting - Ouagadougou, Burkina Faso",
        image: require("../assets/works/App1.jpg"),
        description: "Au cours de mon premier stage, j'ai réalisé cette application mobile pour une entreprise qui œuvre dans le consulting. Elle permettrait à l'entreprise de proposer ses services à des clients via l'application tout en ayant un suivi de la progression de réalisation.",
        steps: [
            {
                id: 1,
                step: "Définition du problème",
                description: "Définir le cahier de charge et les frontières du projet."
            },
            {
                id: 2,
                step: "Proposition de maquettes",
                description: "Proposer des maquettes d’applications mobiles et analyser avec le Product Owner les éventuelles modifications à faire."
            },
            {
                id: 3,
                step: "Modélisation des processus fonctionnels",
                description: "Définition de l’architecture à suivre à travers des diagrammes de décision et UML."
            },
            {
                id: 4,
                step: "Implémentation d’interfaces",
                description: "Après la mise en place de l’architecture et de la feuille de routes, place a été donné à l’implémentation des interfaces utilisateurs."
            },
        ],
        tools: [
            {
                id: 1,
                keyword: "Data modeling"
            },
            {
                id: 2,
                keyword: "No Sql database"
            },
            {
                id: 3,
                keyword: "Firebase Database/Authentication"
            },
            {
                id: 4,
                keyword: "Flutter"
            },
        ]
    },
]



export const person = {
    year: "2024",
    fName: "BAMOGO",
    lName: "Clément",
    // logo : require("../assets/profiles/profile-1.png"),
    description: "Élève ingénieur chercheur en Supply Chain Management basé à Rabat, Maroc",
    about: "Je me nomme BAMOGO Clément, actuellement élève ingénieur en Smart Supply Chain and Logistics à l'Ecole Nationale d'Informatique et d'Analyse des Systèmes(ENSIAS Rabat). Durant tout mon parcours universitaire et ingénieur, j'ai su développer un bon nombre de connaissances aussi bien dans les sciences fondamentales que dans le domaine de la technologie et l’analytique. Après deux ans à la Faculté des Sciences et Techniques de Mohammedia j’ai eu l’occasion d’accéder à l’ENSIAS en 2021 à travers le concours DEUST. Avec cette passion pour la logistique et les nouvelles technologies ce parcours m’a ouvert un espace très enrichissant me donnant une double casquette ce qui m’a permis d’avoir une vue bien plus large sur la Supply Chain et ses enjeux en entreprise en considérant le rôle des systèmes d’informations, des ERP, et le management dans les processus.",
    profile: [require("../assets/profiles/profile-1.png"), require("../assets/profiles/profile-3-mini.jpg")],
    tel: "+212 6 82 41 90 21",
    email: "clement2bamogo@gmail.com",
    adress: "Rabat, Maroc",
    linkedIn: "https://www.linkedin.com/in/cl%C3%A9ment-bamogo-11ab71228/",
    gitHub: "https://github.com/gitClems",
}




export const imgUrl = [
    require("../assets/works/VueAdmin.PNG"),
    require("../assets/works/App1.jpg"),
    require("../assets/works/ExpGlobale.png"),
    require("../assets/profiles/profile-1.png"),
    require("../assets/profiles/profile-2.jpg"),
    require("../assets/profiles/profile-3.jpg"),
    require("../assets/profiles/profile-3-mini.jpg"),
    require("../assets/icons/not-found.png")
]