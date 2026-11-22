import FavLink from '../components/FavLink';

const MAX_PER_ROW = 6;

type FavLinkItem = {
  url: string;
  text: string;
};

type FavLinksProps = {
  links: FavLinkItem[];
  perRow?: number;
};

const FavLinks = ({ links, perRow = MAX_PER_ROW }: FavLinksProps) => {
  const columns = Math.min(Math.max(1, Math.floor(perRow)), MAX_PER_ROW);

  return (
    <section>
        <div
            className='grid gap-2 justify-items-center p-4 w-'
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
            >
            {links.map((link) => (
                <FavLink key={link.url} url={link.url} text={link.text} />
            ))}
        </div>
    </section>
  );
};

export default FavLinks;