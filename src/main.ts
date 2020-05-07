import { log } from './logger';
import getIndieHackersInterviews from './getIndieHackersInterviews';
import { IndieHackerInterviewDTO } from './IndieHackerInterviewDTO';
import slugify from './slugify';
import ebookDownloader from './ebookDownloader';
import config from './config';

log('Initializing indiehackers2epub...');
log('Fetching IndieHackers interviews...');

const init = async () => {
  let interviews: IndieHackerInterviewDTO[] = await getIndieHackersInterviews();
  for (let interview of interviews) {
    // @ts-ignore
    const interviewUrl = `${config.baseIhInterviewUrl}${slugify(interview.title)}-${interview.objectID.split('-')[0].toString()}`;
    await ebookDownloader(`${interview.title} - $${interview.productRevenue}`, interviewUrl);
    break;
  }
  log('indiehackers2pub finished!');
}

init();
