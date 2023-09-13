import DiscordLink from '@/components/Common/DiscordLink';
import Carousel from '@/components/About/Carousel';
import { Metadata } from 'next';

import createMetadata from '@/components/utils/createMetadata';
// import { aboutMetadata } from '@/components/utils/Metadatas-consts';
import { aboutMetadata } from '@/components/utils/Metadatas-with-base-obj';

// * regular
// export const metadata: Metadata = {
//   title: 'מי אנחנו',
//   description:
//     'אנו מאמינים בשיתוף המידע והידע כדרך לקידום הטכנולוגיה והחדשות. קוד פתוח זו גישה המאפשרת לנו לשתף פעולה בפיתוח תוכנה בצורה פתוחה ושקופה.',
//   openGraph: {
//     title: 'מי אנחנו | מעקף',
//     description:
//       'אנו מאמינים בשיתוף המידע והידע כדרך לקידום הטכנולוגיה והחדשות. קוד פתוח זו גישה המאפשרת לנו לשתף פעולה בפיתוח תוכנה בצורה פתוחה ושקופה.',
//     url: 'https://maakaf-website.vercel.app/about',
//     siteName: 'Maakaf',
//     type: 'website',
//     images: [
//       {
//         url: 'https://maakaf-website.vercel.app/favicon.ico',
//         width: 600,
//         height: 600,
//       },
//     ],
//   },
// };

// * With createMetadata function
// export const metadata: Metadata = createMetadata('AboutPage');

// * With metadata const
export const metadata: Metadata = aboutMetadata;

// * With metadata base object
// export const metadata: Metadata = aboutMetadata;

const AboutPage = () => {
  return (
    <div
      className="bg-no-repeat bg-[-20%_100px] bg-[length:60%] md:bg-left-top md:bg-auto"
      style={{ backgroundImage: 'url(/about/about_logo.png)' }}
    >
      <div className="w-[660px] px-4 max-w-full mx-auto text-center mb-20 relative">
        <h1 className="mb-3">ברוכים הבאים למעקף</h1>
        <div className="flex flex-col gap-5 text-xl mb-5">
          <p>
            אנו מאמינים בשיתוף המידע והידע כדרך לקידום הטכנולוגיה והחדשנות. קוד
            פתוח הוא גישה המאפשרת לנו לשתף ולשתף פעולה בפיתוח תוכנה בצורה פתוחה
            ושקופה.
          </p>
          <p>
            כשאנחנו מדברים על קוד פתוח, אנחנו מתייחסים לתוכנה שקוד המקור שלה
            זמין לציבור לצפייה, שינוי ושיפור. הקוד פתוח מעניק לנו הזדמנות להבין
            כיצד תוכנה פועלת, לשפר אותה ולהתאימה לצרכים שלנו. אנחנו מזמינים אתכם
            להצטרף אלינו, להתרשם, לשתף ולהשפיע. כאן בקהילת קוד פתוח ישראל יש
            מקום לכולם, מתחילים ועד מומחים.
          </p>
          <p>יאללה בואו.</p>
        </div>

        <DiscordLink className="mx-auto" />
      </div>

      <Carousel className="mb-28" />
    </div>
  );
};

export default AboutPage;
