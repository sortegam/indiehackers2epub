import osmosis from 'osmosis';
import { log, error } from './logger';

const BASE_URL = 'https://www.indiehackers.com';

export default async (urlToScrap) => {
  let scrappedData = [];
  await osmosis
  .get(urlToScrap)
  .find('.interview-link')
  .set({
      title: '.interview-link__name',
      url: '.interview-link__link@href',
      description: '.interview-link__subtitle',
      amount: '.business-revenue',
  })
  .data(data => {
    scrappedData.push({
      title: `IH - ${data.title} - ${data.amount}`.replace('/', '_'),
      description: data && data.description && data.description.replace('/', '_'),
      url: `${BASE_URL}${data.url}`,
    })
  })
  .log(text => log(text));
  return scrappedData;
};
