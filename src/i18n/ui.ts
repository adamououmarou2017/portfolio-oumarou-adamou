export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';

export const ui = {
  fr: {
    'site.title': 'Oumarou Adamou — Data Analyst',
    'site.description':
      "Data Analyst spécialisé en analyse d'enquêtes terrain et de données financières. Disponible immédiatement, en remote, partout dans le monde.",

    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.cv': 'CV',
    'nav.contact': 'Contact',
    'nav.cta': 'Me contacter',

    'hero.kicker': 'Data Analyst · Disponible immédiatement',
    'hero.title_1': 'Je transforme vos données',
    'hero.title_2': 'en décisions claires.',
    'hero.subtitle':
      "Ingénieur d'Application en Informatique de Gestion et Data Analyst, j'aide les organisations à structurer, analyser et visualiser leurs données terrain et financières pour éclairer leurs décisions.",
    'hero.cta_primary': 'Discutons de votre besoin',
    'hero.cta_secondary': 'Voir mes projets',
    'hero.location': 'Zinder, Niger — disponible 100% remote, partout dans le monde',
    'hero.photo_alt': 'Photo de Oumarou Adamou',

    'stats.years': "années d'expérience",
    'stats.reports': 'rapports financiers analysés / an',
    'stats.beneficiaries': 'bénéficiaires suivis via mes analyses',
    'stats.banks': 'banques partenaires coordonnées',

    'about.kicker': 'À propos',
    'about.title': 'Un profil rigoureux, à la croisée de la gestion et de la donnée',
    'about.p1':
      "Ingénieur d'Application en Informatique de Gestion (Université de Blida, Algérie), je cumule plus de 7 années d'expérience en gestion administrative, financière et logistique au sein d'organisations exigeantes — dont 7 ans comme responsable comptable et financier pour une organisation internationale au Niger, où j'ai préparé les rapports financiers de plus de 200 projets par an et coordonné la distribution de plus de 4 500 appuis à des familles vulnérables.",
    'about.p2':
      "En parallèle, je conduis des projets d'analyse de données : conception d'enquêtes de terrain, consolidation de données financières et comptables, et création de tableaux de bord pour éclairer la prise de décision. Formateur en informatique et comptabilité, je sais aussi vulgariser des données complexes auprès de publics non techniques.",
    'about.p3':
      "Je suis aujourd'hui à la recherche d'une opportunité en tant que Data Analyst, en remote, pour aider une organisation à prendre des décisions éclairées basées sur les données.",
    'about.download_cv': 'Télécharger mon CV',

    'skills.kicker': 'Compétences',
    'skills.title': 'Ce que je sais faire',
    'skills.subtitle':
      'Une double expertise : rigueur de la gestion financière et méthode de la data analyse.',
    'skills.cat1': "Analyse & Reporting",
    'skills.cat1_items': 'Excel avancé (TCD, formules)|Analyse de données d\'enquêtes|Tableaux de bord interactifs (HTML)|Présentation de résultats (PowerPoint)',
    'skills.cat2': 'Gestion financière',
    'skills.cat2_items': 'Comptabilité générale|Rapports financiers multi-projets|Contrôle des coûts|Gestion budgétaire',
    'skills.cat3': 'Collecte & Terrain',
    'skills.cat3_items': "Conception d'enquêtes terrain|Coordination de collecte de données|Gestion de stock & approvisionnements|Suivi logistique multi-sites",
    'skills.cat4': 'Langues',
    'skills.cat4_items': 'Français (bon niveau)|Anglais (notions)|Haoussa (courant)|Djerma (courant)',

    'projects.kicker': 'Projets',
    'projects.title': "Des données à la décision",
    'projects.subtitle':
      "Une sélection d'analyses menées sur le terrain et en contexte organisationnel. Les données brutes restent confidentielles ; chaque dossier complet est disponible sur demande.",
    'projects.cta': 'Voir le dossier complet',
    'projects.tools': 'Outils',

    'project1.title': "Enquête « Niveau d'appropriation et durabilité des ouvrages et appuis communautaires »",
    'project1.desc':
      "Conception et analyse d'une enquête de terrain visant à évaluer le niveau d'appropriation et la durabilité d'ouvrages et d'appuis communautaires. Traitement des données sous Excel et restitution des résultats via un tableau de bord interactif et une présentation synthétique.",

    'project2.title': 'Enquête « Santé de la Reproduction et Planification Familiale »',
    'project2.desc':
      "Analyse des données d'une enquête CAP (Connaissances, Attitudes, Pratiques) sur la santé de la reproduction et la planification familiale. Consolidation des réponses, calcul d'indicateurs clés et création d'un tableau de bord et d'une présentation des résultats.",

    'project3.title': 'Analyse du rapport financier 2012–2020 (ONG internationale)',
    'project3.desc':
      "Consolidation et analyse de huit années de données comptables et financières d'une organisation internationale. Nettoyage des données brutes, calcul d'indicateurs de suivi et création d'un tableau de bord de pilotage des opérations financières.",

    'contact.kicker': 'Contact',
    'contact.title': 'Parlons de votre prochain projet data',
    'contact.subtitle':
      "Disponible immédiatement pour un poste de Data Analyst en remote, partout dans le monde. Contactez-moi directement par téléphone ou par email — je réponds rapidement.",
    'contact.email_label': 'Email',
    'contact.phone_label': 'Téléphone',
    'contact.location_label': 'Localisation',
    'contact.location_value': 'Zinder, Niger — Remote, partout dans le monde',
    'contact.cta_email': "M'écrire un email",
    'contact.cta_call': 'Appeler / WhatsApp',

    'footer.rights': 'Tous droits réservés.',
    'footer.tagline': 'Data Analyst — Des données à la décision.',

    'cv.kicker': 'Curriculum Vitae',
    'cv.title': 'Mon parcours en détail',
    'cv.subtitle':
      'Consultez mon CV directement ci-dessous, ou téléchargez-le pour le conserver.',
    'cv.download': 'Télécharger le PDF',
  },
  en: {
    'site.title': 'Oumarou Adamou — Data Analyst',
    'site.description':
      'Data Analyst specialized in field survey and financial data analysis. Available immediately, remote, worldwide.',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.cv': 'Resume',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact me',

    'hero.kicker': 'Data Analyst · Available immediately',
    'hero.title_1': 'I turn your data',
    'hero.title_2': 'into clear decisions.',
    'hero.subtitle':
      "Application Engineer in Management Information Systems and Data Analyst, I help organizations structure, analyze and visualize their field and financial data to inform their decisions.",
    'hero.cta_primary': "Let's talk about your needs",
    'hero.cta_secondary': 'See my projects',
    'hero.location': 'Zinder, Niger — available 100% remote, worldwide',
    'hero.photo_alt': 'Photo of Oumarou Adamou',

    'stats.years': 'years of experience',
    'stats.reports': 'financial reports analyzed / year',
    'stats.beneficiaries': 'beneficiaries tracked through my analyses',
    'stats.banks': 'partner banks coordinated',

    'about.kicker': 'About',
    'about.title': 'A rigorous profile, at the crossroads of management and data',
    'about.p1':
      "Application Engineer in Management Information Systems (University of Blida, Algeria), I have over 7 years of experience in administrative, financial and logistics management within demanding organizations — including 7 years as financial and accounting officer for an international organization in Niger, where I prepared financial reports for over 200 projects per year and coordinated the distribution of support to over 4,500 vulnerable families.",
    'about.p2':
      "In parallel, I run data analysis projects: designing field surveys, consolidating financial and accounting data, and building dashboards to inform decision-making. As a trainer in IT and accounting, I'm also comfortable making complex data accessible to non-technical audiences.",
    'about.p3':
      'I am currently looking for an opportunity as a Data Analyst, remote, to help an organization make informed, data-driven decisions.',
    'about.download_cv': 'Download my resume',

    'skills.kicker': 'Skills',
    'skills.title': 'What I bring to the table',
    'skills.subtitle':
      'A dual expertise: the rigor of financial management and the method of data analysis.',
    'skills.cat1': 'Analysis & Reporting',
    'skills.cat1_items': 'Advanced Excel (pivot tables, formulas)|Survey data analysis|Interactive dashboards (HTML)|Results presentation (PowerPoint)',
    'skills.cat2': 'Financial Management',
    'skills.cat2_items': 'General accounting|Multi-project financial reporting|Cost control|Budget management',
    'skills.cat3': 'Data Collection & Field Work',
    'skills.cat3_items': 'Field survey design|Data collection coordination|Stock & supply management|Multi-site logistics tracking',
    'skills.cat4': 'Languages',
    'skills.cat4_items': 'French (good level)|English (working knowledge)|Hausa (fluent)|Zarma (fluent)',

    'projects.kicker': 'Projects',
    'projects.title': 'From data to decisions',
    'projects.subtitle':
      'A selection of analyses conducted in the field and in organizational settings. Raw data remains confidential; the full folder for each project is available on request.',
    'projects.cta': 'View full folder',
    'projects.tools': 'Tools',

    'project1.title': 'Survey "Level of ownership and sustainability of community infrastructure and support"',
    'project1.desc':
      'Design and analysis of a field survey assessing the level of ownership and sustainability of community infrastructure and support programs. Data processed in Excel, results delivered via an interactive dashboard and a summary presentation.',

    'project2.title': 'Survey "Reproductive Health and Family Planning"',
    'project2.desc':
      'Analysis of data from a KAP (Knowledge, Attitudes, Practices) survey on reproductive health and family planning. Response consolidation, key indicator calculation, and creation of a dashboard and results presentation.',

    'project3.title': 'Financial report analysis 2012–2020 (international NGO)',
    'project3.desc':
      'Consolidation and analysis of eight years of accounting and financial data for an international organization. Raw data cleaning, tracking indicator calculation, and creation of a financial operations dashboard.',

    'contact.kicker': 'Contact',
    'contact.title': "Let's talk about your next data project",
    'contact.subtitle':
      'Available immediately for a remote Data Analyst position, anywhere in the world. Reach out directly by phone or email — I respond quickly.',
    'contact.email_label': 'Email',
    'contact.phone_label': 'Phone',
    'contact.location_label': 'Location',
    'contact.location_value': 'Zinder, Niger — Remote, worldwide',
    'contact.cta_email': 'Email me',
    'contact.cta_call': 'Call / WhatsApp',

    'footer.rights': 'All rights reserved.',
    'footer.tagline': 'Data Analyst — From data to decisions.',

    'cv.kicker': 'Resume',
    'cv.title': 'My background in detail',
    'cv.subtitle': 'View my resume directly below, or download it to keep.',
    'cv.download': 'Download PDF',
  },
} as const;
