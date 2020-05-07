import config from './config';
import axios, { AxiosResponse } from 'axios';
import { IndieHackerInterviewDTO } from './IndieHackerInterviewDTO';

export default async (): Promise<IndieHackerInterviewDTO[]> => {
  let interviews: IndieHackerInterviewDTO[] = [];
  const postData: object = {
    requests: [{
      indexName: 'interviews_publishedAt_desc',
      params: 'query=&page=0&hitsPerPage=999999'
    }]
  };
  const response: AxiosResponse<any> = await axios.post(config.ihGetInterviewsURL, postData);
  if (response.status === 200) {
    interviews = response?.data?.results[0]?.hits as IndieHackerInterviewDTO[];
  }
  return interviews;
};
