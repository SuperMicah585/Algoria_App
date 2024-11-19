import './App.css';
import { client, processRecords } from './client';
import 'instantsearch.css/themes/satellite.css';

import {
  InstantSearch,
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Pagination,
} from 'react-instantsearch';

const algoliaAppID = process.env.REACT_APP_ALGOLIA_APPLICATION_ID;
const algoliaReadKey = process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY;

const readClient = client(algoliaAppID, algoliaReadKey);
const indexName = 'product_index';

function App() {


  //https://www.algolia.com/doc/api-reference/widgets/search-box/react



  return (
    <InstantSearch searchClient={readClient} indexName={indexName}>
      <div>
        <div className="overflow-y-scroll h-screen w-screen bg-white mb-5">
          <div className=" flex items-center gap-20 p-5 w-full bg-violet-500">
            {' '}
            <div className="text-black text-4xl font-bold text-white">
              {' '}
              Algolia Take Home Assignment{' '}
            </div>{' '}
            <div className="w-96 ">
              <SearchBox
                placeholder={'Search to Filter'}
                searchAsYouType={false}
              />{' '}
            </div>{' '}
          </div>

          <div className="flex justify-start items-start w-full h-full flex-col gap-5 p-10 pt-20">
            <div className="flex gap-5  h-full">
              {' '}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="font-bold"> Filter By Price</div>{' '}
                  <RefinementList attribute="price_range" limit={10} />
                  <div className="flex flex-col gap-2">
                    {' '}
                    <div className="font-bold"> Filter By Rating</div>{' '}
                    <RefinementList attribute="rating" limit={10} />{' '}
                  </div>
                  <div className="flex flex-col gap-2">
                    {' '}
                    <div className="font-bold"> Brand </div>{' '}
                    <RefinementList attribute="brand" limit={10} />{' '}
                  </div>
                  <div className="flex flex-col gap-2">
                    {' '}
                    <div className="font-bold"> Free Shipping?</div>{' '}
                    <RefinementList attribute="free_shipping" limit={10} />{' '}
                  </div>
                </div>
              </div>
              <div className="p-1">
                <Hits
                  hitComponent={({ hit }) => (
                    <div
                      onClick={() => window.open(hit.url, '_blank')}
                      className=" cursor-pointer hover:opacity-75 flex flex-col gap-2"
                    >
                      <div className="flex ont-semibold text-lg gap-5">
                        <div className="">{hit.name}</div>
                        <div> | </div>
                        <div className="text-thin text-violet-500">
                          {hit.price}
                        </div>
                      </div>
                      <div className="font-thin text-xs">{hit.description}</div>
                      <div>
                        <img src={hit.image} alt="Description of the image" />
                      </div>
                    </div>
                  )}
                />
                <div>
                  <Pagination />
                </div>
                <Configure hitsPerPage={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </InstantSearch>
  );
}

export default App;
