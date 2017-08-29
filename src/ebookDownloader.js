import EpubPress from 'epub-press-js';
import { log, error, success } from './logger';
import mv from 'mv';
import path from 'path';

/**
 * Helper to move an ebook to ebooks folder
 * @param  {string} title
 */
function moveEbook(title) {
  const ebookFile = path.join(process.cwd(), `${title}.epub`);
  const outputFile = path.join(process.cwd(), 'ebooks', `${title}.epub`);
  mv(ebookFile, outputFile, function(err) {
    if (err) {
      error('Could not move epub files to [ebooks] folder');
    } else {
      success(`${title}.epub saved into ebooks folder.`);
    }
  });
}

/**
 * MAIN
 */
export default async (title, description, url) => {
  log(`Publishing [${title}]...`);
  const ebook = new EpubPress({
      title,
      description,
      sections: [
          {
            url,
          }
      ]
  });
  const ebookPublication = await ebook.publish();
  log('Publishing done!');
  log(`---> Downloading [${title}]...`);
  try {
    await ebook.download();
    await moveEbook(title);
  } catch(e) {
    error(`:( Error downloading [${title}]`);
    console.log(e);
  }
};
