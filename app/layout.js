import MainHeader from '@/components/main-header/main-header';
import './globals.css';

// Official metadata doc : https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
