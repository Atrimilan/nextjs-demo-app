import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

// See :
// - https://nextjs.org/docs/app/getting-started/images
// - https://nextjs.org/docs/pages/api-reference/components/image

export default function Header() {
  return (
    <header id="main-header">
      <Link href="/">
        <Image
          // sizes="10vw" // "sizes" is preferred over "width" and "height"
          width={100}
          height={100}
          priority // Remove the useless lazy loading as we always want to show the image
          src={logo}
          alt="Mobile phone with posts feed on it"
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          <li>
            <Link className='cta-link' href="/new-post">New Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
