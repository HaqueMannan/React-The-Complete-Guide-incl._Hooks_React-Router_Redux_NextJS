import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {
   return(
      <Fragment>
         <h1>The News Page</h1>
         <ul>
            <li><Link href="news/nextjs-is-a-framework">NextJS is a Framework</Link></li>
            <li><Link href="news/reactjs-is-a-library">React JS is a Library</Link></li>
         </ul>
      </Fragment>
   );
};

export default NewsPage;