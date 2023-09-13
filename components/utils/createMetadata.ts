interface PageMetadata {
  page: string;
  title: string;
  description: string;
  path: string;
}

const pagesMetadata: PageMetadata[] = [
  {
    page: 'Home',
    title: `דף הבית | מעקף`,
    description: `קהילת מעק"ף - מחפשי עבודה (תורמים) לקוד פתוח, היא קהילת קוד פתוח ישראלית, עבור כל מי שמתעניין בקוד פתוח - ממתחילים ועד מומחים. הצטרפו אלינו!`,
    path: `/`,
  },
  {
    page: 'AboutPage',
    title: `מי אנחנו`,
    description: `אנו מאמינים בשיתוף המידע והידע כדרך לקידום הטכנולוגיה והחדשות. קוד פתוח זו גישה המאפשרת לנו לשתף פעולה בפיתוח תוכנה בצורה פתוחה ושקופה.`,
    path: `/about`,
  },
  {
    page: 'MaintainersPage',
    title: `בעלי פרויקטים - Maintainers`,
    description: `יש לכם פרויקט קוד פתוח שאתם רוצים לשתף עם הקהילה? יש לכם רעיון לפרויקט? זה המקום לשתף את הפרויקט שלכם`,
    path: `/maintainers`,
  },
  {
    page: 'MembersPage',
    title: `חברי קהילה - Members`,
    description: `כבר התנסיתם בקוד פתוח ואתם מכירים את הקונספט? זה המקום שלכם להצטרף לפרויקטים ולהיות חברים בקהילה`,
    path: `/members`,
  },
  {
    page: 'NewbiesPage',
    title: `מצטרפים חדשים - Newbies`,
    description: `רוצים לתרום לקוד פתוח ולא יודעים איך? פה תמצאו את כל המידע והסיוע שתצטרכו כדי להתחיל להשתלב בפרויקטי קוד פתוח`,
    path: `/newbies`,
  },
  {
    page: 'ProjectsPage',
    title: `הפרויקטים`,
    description: `הכירו את פרויקטי הקוד הפתוח של חברי הקהילה, ובחרו לאילו פרויקטים תרצו להצטרף`,
    path: `/projects`,
  },
];

const objectMap = new Map(pagesMetadata.map(obj => [obj.page, obj]));

export default function createMetadata(page: string) {
  let currentPage:PageMetadata| undefined = objectMap.get(page);

  if (currentPage === undefined) {
    return {
      metadataBase: new URL('https://maakaf-website.vercel.app/'),
        alternates: {
        canonical: '/',
        },
      title: `מעקף`,
      description: `קהילת מעק"ף - מחפשי עבודה (תורמים) לקוד פתוח, היא קהילת קוד פתוח ישראלית, עבור כל מי שמתעניין בקוד פתוח - ממתחילים ועד מומחים. הצטרפו אלינו!`,
      openGraph: {
        title: `מעקף`,
        description: `קהילת מעק"ף - מחפשי עבודה (תורמים) לקוד פתוח, היא קהילת קוד פתוח ישראלית, עבור כל מי שמתעניין בקוד פתוח - ממתחילים ועד מומחים. הצטרפו אלינו!`,
        url: `https://maakaf-website.vercel.app/`,
        siteName: `Maakaf`,
        type: `website`,
        images: [
          {
            url: `https://maakaf-website.vercel.app/favicon.ico`,
            width: 600,
            height: 600,
          },
        ],
      },
    };
  } 

  return {
    metadataBase: new URL('https://maakaf-website.vercel.app'),
    alternates: {
    canonical: `${currentPage.path}`,
    },

    title: `${currentPage.title} createMetadata`,
    description: `${currentPage.description}`,
      openGraph: {
        title: `${currentPage.title} createMetadata`,
        description: `${currentPage.description}`,
        url: `https://maakaf-website.vercel.app${currentPage.path}`,
        siteName: `Maakaf`,
        type: `website`,
        images: [
          {
            url: `https://maakaf-website.vercel.app/favicon.ico`,
            width: 600,
            height: 600,
          },
        ],
      },
    };
}
