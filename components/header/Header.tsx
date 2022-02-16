import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  emoji?: string;
}

const Header = ({ title, description, emoji }: Props) => {
  emoji = emoji || '👩🏻‍🏫';
  return (
    <Head>
      <title>{title} - La teacher Canaria</title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
      />
    </Head>
  );
};

export default Header;
