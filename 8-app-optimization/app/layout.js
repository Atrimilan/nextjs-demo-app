import Header from '@/components/header';
import './globals.css';

// See :
// - https://nextjs.org/docs/app/getting-started/metadata-and-og-images
// - https://nextjs.org/docs/app/api-reference/functions/generate-metadata

export const metadata = {
  title: 'NextPosts',
  description: 'Browse and share amazing posts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
