import {
    frontend,
    backend,
    ux,
    creativity_resourcefulness,
    figma,
    html,
    css,
    javascript,
    python,
    react,
    canva,
    git,
    tailwind,
    bootstrap,
    django,
    mongodb,
    flask,
    adobe,
    blackwoodmystery,
    twinsichristmas,
    portfolio,
    unperfectdate,
    vgames,
    womxn,
    xelor,
    alexa,
    infinity,
    codeinstitute,
    zerotomastery,
    logo,
  } from '../assets';
  
  export const navLinks = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];
  
  const services = [
    {
      title: 'Creative Technologist & Front‑End Developer',
      icon: frontend,
    },
    {
      title: 'Backend Developer',
      icon: backend,
    },
    {
      title: 'UI/UX Design',
      icon: ux,
    },
    {
      title: 'Creativity and Resourcefulness',
      icon: creativity_resourcefulness,
    },
  ];
  
  const technologies = [
    {
      name: 'html',
      icon: html,
    },
    {
      name: 'css',
      icon: css,
    },
    {
      name: 'javascript',
      icon: javascript,
    },
    {
      name: 'python',
      icon: python,
    },
    {
      name: 'react',
      icon: react,
    },
    {
      name: 'git',
      icon: git,
    },
    {
      name: 'tailwind',
      icon: tailwind,
    },
    {
      name: 'bootstrap',
      icon: bootstrap,
    },
    {
      name: 'django',
      icon: django,
    },
    {
      name: 'canva',
      icon: canva,
    },
    {
      name: 'flask',
      icon: flask,
    },
    {
      name: 'mongodb',
      icon: mongodb,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'adobe',
      icon: adobe,
    },
  ];
  
  const experiences = [
    {
      title: 'Creative Technologist & Front‑End Developer',
      company_name: 'V Projects',
      icon: logo,
      iconBg: '#333333',
      date: 'Feb 2021 - Present',
    },
    {
      title: 'Software Development',
      company_name: 'Code Institute',
      icon: codeinstitute,
      iconBg: '#333333',
      date: 'Feb 2021 - Mar 2022',
    },
    {
      title: 'Courses: The Complete Web Developer, Complete Web & Mobile Designer, and others',
      company_name: 'Zero to Mastery',
      icon: zerotomastery,
      iconBg: '#333333',
      date: 'Mar 2020 - Present',
    },
    {
      title: 'Customer Consultant, Events, Project & Brand Manager, Marketing, Hospitality, BA, MSc',
      company_name: 'Diverse Organisations',
      icon: infinity,
      iconBg: '#333333',
      date: '2010 - Jan 2021',
    },
  ];
  
  const projects = [
    {
      id: 'project-1',
      name: 'Twinsi Christmas',
      description: 'An advent calendar calendar with gifts',
      tags: [
        {
          name: 'html',
          color: 'blue-text-gradient',
        },
        {
          name: 'css',
          color: 'green-text-gradient',
        },
        {
          name: 'javascript',
          color: 'pink-text-gradient',
        },
      ],
      image: twinsichristmas,
      repo: 'https://github.com/vanjatorp/twinsi-christmas-2025',
      demo: 'https://vanjatorp.github.io/twinsi-christmas-2025/',
    },
    {
      id: 'project-2',
      name: 'Black Wood',
      description:
        'A visual novel game demo where your decisions have an impact',
      tags: [
        {
          name: 'react/typescript',
          color: 'blue-text-gradient',
        },
        {
          name: 'game development',
          color: 'green-text-gradient',
        },
        {
          name: 'tailwind',
          color: 'pink-text-gradient',
        },
      ],
      image: blackwoodmystery,
      repo: 'https://theinnerworldstudio.itch.io/the-blackwood-mystery-demo',
      demo: 'https://theinnerworldstudio.itch.io/the-blackwood-mystery-demo',
    },
    {
      id: 'project-3',
      name: 'VGames',
      description: 'A platform for indie games to be showcased',
      tags: [
        {
          name: 'html',
          color: 'blue-text-gradient',
        },
        {
          name: 'css/boostrap',
          color: 'green-text-gradient',
        },
        {
          name: 'javascript',
          color: 'pink-text-gradient',
        },
        {
          name: 'python',
          color: 'pink-text-gradient',
        },
      ],
      image: vgames,
      repo: 'https://github.com/vanjatorp/VGAMES',
      demo: 'https://vgames-0i9m.onrender.com/',
    },
    {
      id: 'project-4',
      name: 'Xelor',
      description: `A ecommerce store for luxery watches`,
      tags: [
        {
          name: 'html',
          color: 'blue-text-gradient',
        },
        {
          name: 'css/boostrap',
          color: 'green-text-gradient',
        },
        {
          name: 'javascript',
          color: 'pink-text-gradient',
        },
        {
          name: 'python',
          color: 'pink-text-gradient',
        },
      ],
      image: xelor,
      repo: 'https://github.com/vanjatorp/xelor',
      demo: 'https://xelor-watches.onrender.com/',
    },
    {
      id: 'project-5',
      name: 'Womxn',
      description: 'A website for femmetech mentorships. women-in-tech Hackathon.',
      tags: [
        {
          name: 'html',
          color: 'blue-text-gradient',
        },
        {
          name: 'css/boostrap',
          color: 'green-text-gradient',
        },
        {
          name: 'javascript',
          color: 'pink-text-gradient',
        },
      ],
      image: womxn,
      repo: 'https://github.com/CarolinaCobo/womxn-femmetech-mentorship',
      demo: 'https://carolinacobo.github.io/womxn-femmetech-mentorship/index.html',
    },
    {
      id: 'project-6',
      name: 'Alexa',
      description: 'A business website for an author',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'tailwind',
          color: 'green-text-gradient',
        },
        {
          name: 'others',
          color: 'pink-text-gradient',
        },
      ],
      image: alexa,
      repo: 'https://github.com/vanjatorp/alexa',
      demo: 'https://alexa-author.onrender.com/',
    },
  ];
  
  export { services, technologies, experiences, projects };
  
