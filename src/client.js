import { algoliasearch } from 'algoliasearch';

export const client = (app_id, api_key) => {
    return algoliasearch(app_id, api_key);
};
