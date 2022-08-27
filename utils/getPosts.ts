import GhostContentAPI from '@tryghost/content-api';
import { AppConfig } from './AppConfig';
const { CONTENT_API_KEY } = process.env;

export const getPosts = async (fields: string) => {
  const api = new GhostContentAPI({
    url: AppConfig.ghost_url,
    key: CONTENT_API_KEY,
    version: AppConfig.ghost_api_version
  });
  const posts = await api.posts.browse({ limit: 'all', include: 'tags', fields: fields });
  return posts;
}