import React from 'react';
import "../../i18n";
import { useTranslation } from 'react-i18next';
import { useLocation } from "@reach/router";
import { defaultFacets, normalizeItems, sortOptions } from '../../config/search';
import { Search, SearchSidebar, SearchContent } from "@civicactions/data-catalog-components";
import Layout from "../../components/Layout";
import config from "../../assets/config";


function Datasets() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('datasets')}</span>
  );
}

function Type_here() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('type_here')}</span>
  );
}

function Order_by() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('order_by')}</span>
  );
}

// function Order_abc() {
//   const { t, i18n } = useTranslation();
//   return (
//     <span>{t('order_abc')}</span>
//   );
// }
// function Order_date() {
//   const { t, i18n } = useTranslation();
//   return (
//     <span>{t('order_date')}</span>
//   );
// }

const type_here = <Type_here/>;
const order_by = <Order_by/>;


const SearchTemplate = ({path}) => {
  const location = useLocation();
  return (
    <Layout title="Αναζήτηση">
    <div className={`dc-page ${config.container}`}>
        <h1><Datasets/></h1>
        <Search
          searchEndpoint={`${process.env.REACT_APP_ROOT_URL}/search`}
          defaultFacets={defaultFacets}
          sortOptions={sortOptions}
          setSearchUrl={true}
          path={path}
          location={location}
          normalize={normalizeItems}
        >
          <div className="row">
            <SearchContent placeholder={type_here}/>
            <SearchSidebar order_by={order_by} />
          </div>
        </Search>
      </div>
      </Layout>
  );
}

export default SearchTemplate;
