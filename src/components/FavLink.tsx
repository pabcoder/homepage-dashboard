type FavLinkProps = {
  url: string;
  text: string;
};

const getFaviconUrl = (url: string) => {
  try {
    const { hostname } = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
  } catch {
    return undefined;
  }
};

const FavLink = ({ url, text }: FavLinkProps) => {
  const favicon = getFaviconUrl(url);

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex flex-col items-center justify-center gap-1 w-24 p-2 rounded-lg bg-black/40 hover:bg-black/60 transition-colors text-white text-sm'
    >
      {favicon && (
        <img src={favicon} alt='' className='w-10 h-10 rounded-md' />
      )}
      <span className='w-full truncate text-center'>{text}</span>
    </a>
  );
};

export default FavLink;
