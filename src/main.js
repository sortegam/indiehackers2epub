import scrapper from './scrapper';
import mv from 'mv';
import { log } from './logger';
import ebookDownloader from './ebookDownloader';

log('Initializing indiehackers2epub...');
log('Fetching IndieHackers interviews...');

const IH_URL = 'https://www.indiehackers.com/businesses';

const init = async () => {
  const ebooks = await scrapper(IH_URL);
  for (let ebook of ebooks) {
    await ebookDownloader(ebook.title, ebook.description, ebook.url);
  }
  log('indiehackers2pub finished!');
}

init();
