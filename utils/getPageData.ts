import GhostContentAPI from '@tryghost/content-api';
import { AppConfig } from './AppConfig';
const { CONTENT_API_KEY } = process.env;

export const getPageData = async (slug: string) => {
  const api = new GhostContentAPI({
    url: AppConfig.ghost_url,
    key: CONTENT_API_KEY,
    version: AppConfig.ghost_api_version
  });
  const page = await api.pages.read({slug: slug}, {fields: ['title', 'html']});
  return page;
}