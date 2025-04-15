import Link from 'next/link';
import { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <div>
        <div>NotFound</div>
        <Link href='/search'></Link>
    </div>
  )
}

export default NotFound;