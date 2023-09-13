const BASE_URL = 'https://maakaf-website.vercel.app'

const baseMetadata = {
  metadataBase: new URL(BASE_URL),
    alternates: {
    canonical: '',
    },
  title: '',
  description: '',
  openGraph: {
    title: '',
    description: '',
    url: '',
    siteName: 'Maakaf',
    type: 'website',
    images: 
      {
        url: 'https://maakaf-website.vercel.app/favicon.ico',
        width: 600,
        height: 600,
      },
  },
};

export const homeMetadata = {
  ...baseMetadata,
  title:  'דף הבית | מעקף',
  description: 'קהילת מעק"ף - מחפשי עבודה (תורמים) לקוד פתוח, היא קהילת קוד פתוח ישראלית, עבור כל מי שמתעניין בקוד פתוח - ממתחילים ועד מומחים. הצטרפו אלינו!',
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'דף הבית | מעקף',
    description: 'קהילת מעק"ף - מחפשי עבודה (תורמים) לקוד פתוח, היא קהילת קוד פתוח ישראלית, עבור כל מי שמתעניין בקוד פתוח - ממתחילים ועד מומחים. הצטרפו אלינו!',
    url: '${BASE_URL}/',
  },
  alternates: {
    ...baseMetadata.alternates, 
    canonical: '/',
  }, 
};

export const aboutMetadata = {
  ...baseMetadata,
  title:  'מי אנחנו baseObj',
  description: 'אנו מאמינים בשיתוף המידע והידע כדרך לקידום הטכנולוגיה והחדשות. קוד פתוח זו גישה המאפשרת לנו לשתף פעולה בפיתוח תוכנה בצורה פתוחה ושקופה.',
  openGraph: {
    ...baseMetadata.openGraph,
    title:  'מי אנחנו',
    description: 'אנו מאמינים בשיתוף המידע והידע כדרך לקידום הטכנולוגיה והחדשות. קוד פתוח זו גישה המאפשרת לנו לשתף פעולה בפיתוח תוכנה בצורה פתוחה ושקופה.',
    url: `${BASE_URL}/about`,
  },
  alternates: {
    ...baseMetadata.alternates, 
    canonical: '/about',
  }, 
};

export const maintainersMetadata = {
  ...baseMetadata,
  title: 'בעלי פרויקטים - Maintainers',
  description: 'יש לכם פרויקט קוד פתוח שאתם רוצים לשתף עם הקהילה? יש לכם רעיון לפרויקט? זה המקום לשתף את הפרויקט שלכם',
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'בעלי פרויקטים - Maintainers',
    description: 'יש לכם פרויקט קוד פתוח שאתם רוצים לשתף עם הקהילה? יש לכם רעיון לפרויקט? זה המקום לשתף את הפרויקט שלכם',
    url: `${BASE_URL}/maintainers`,
  },
  alternates: {
    ...baseMetadata.alternates, 
    canonical: '/maintainers',
  }, 
};

export const membersMetadata = {
  ...baseMetadata,
  title: 'חברי קהילה - Members',
  description: 'כבר התנסיתם בקוד פתוח ואתם מכירים את הקונספט? זה המקום שלכם להצטרף לפרויקטים ולהיות חברים בקהילה',
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'חברי קהילה - Members',
    description: 'כבר התנסיתם בקוד פתוח ואתם מכירים את הקונספט? זה המקום שלכם להצטרף לפרויקטים ולהיות חברים בקהילה',
    url: `${BASE_URL}/members`,
  },
  alternates: {
    ...baseMetadata.alternates, 
    canonical: '/members',
  }, 
};

export const newbiesMetadata = {
  ...baseMetadata,
  title: 'מצטרפים חדשים - Newbies',
  description: 'רוצים לתרום לקוד פתוח ולא יודעים איך? פה תמצאו את כל המידע והסיוע שתצטרכו כדי להתחיל להשתלב בפרויקטי קוד פתוח',
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'מצטרפים חדשים - Newbies',
    description: 'רוצים לתרום לקוד פתוח ולא יודעים איך? פה תמצאו את כל המידע והסיוע שתצטרכו כדי להתחיל להשתלב בפרויקטי קוד פתוח',
    url: `${BASE_URL}/newbies`,
  },
  alternates: {
    ...baseMetadata.alternates, 
    canonical: '/newbies',
  }, 
};

export const projectsMetadata = {
  ...baseMetadata,
  title: 'הפרויקטים',
  description: 'הכירו את פרויקטי הקוד הפתוח של חברי הקהילה, ובחרו לאילו פרויקטים תרצו להצטרף',
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'הפרויקטים',
    description: 'הכירו את פרויקטי הקוד הפתוח של חברי הקהילה, ובחרו לאילו פרויקטים תרצו להצטרף',
    url: `${BASE_URL}/projects`,
  },
  alternates: {
    ...baseMetadata.alternates, 
    canonical: '/projects',
  }, 
};
