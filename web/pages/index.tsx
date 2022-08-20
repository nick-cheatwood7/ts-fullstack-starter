import Image from 'next/image';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      {/* logo */}
      <Image
        src="/Google_Logo.png"
        alt="Google logo"
        width={272}
        height={92}
        priority
      />
      {/* search */}
      <Search />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout justify="items-center">
      {/* <SidebarLayout /> */}
      {page}
    </PrimaryLayout>
  );
};
