import React from "react";
import "../../i18n";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import {
  Blocks,
  Hero,
  IconList,
  IconListItem,
  StatBlock
} from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import FeaturedDatasets from '../../components/FeaturedDatasets';
import copy from "../../assets/copy.json";

function Herotitle() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('hero_title')}</span>
  );
}

function Herointro() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('hero_intro')}</span>
  );
}

function SubmitContent() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('submit_content')}</span>
  );
}

function Topics() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('topics')}</span>
  );
}


const Home = () => {
  const [datasets, setDatasets] = React.useState(null);
  const [themes, setThemes] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [fDatasets, setFDatasets] = React.useState([])


  React.useEffect(() => {
    async function getDatasets() {
      const {data} = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/dataset/items?show-reference-ids`)
      setDatasets(data);
    }
    async function getThemes() {
      const {data} = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/theme/items`)
      setThemes(data);
    }
    if (datasets === null) {
      getDatasets()
      getThemes();
    }
    if (datasets) {
      const orderedDatasets = datasets.sort(function(a,b) {
        return a.title - b.title;
      });

      setFDatasets(orderedDatasets.length > 3 ? orderedDatasets.slice(orderedDatasets.length -3, orderedDatasets.length) : orderedDatasets);
    }
  }, [datasets])

  React.useEffect(() => {
    setItems(themes.map(x => {
      let item = {
        identifier: x.identifier,
        ref: `search?theme=${x.data}`,
        title: x.data,
        size: "100"
      };
      return item;
    }))
  }, [themes])

  return (
    <Layout title="Home">
        <div className="home-page">
        {/* <Hero title={<Herotitle/>} intro={<Herointro/>} submitContent={<SubmitContent/>} gradient={'rgb(8, 72, 49), rgb(34, 121, 90)'} /> */}
        <div className="container">
            <IconList
                items={items}
                component={IconListItem}
                paneTitle={<Topics/>}
                className="opendata-icon-list"
            />
        </div>
        <Hero title={<Herotitle/>} intro={<Herointro/>} submitContent={<SubmitContent/>} gradient={'rgb(8, 72, 49), rgb(34, 121, 90)'} />
        <FeaturedDatasets datasets={fDatasets} />
        <Blocks
            items={copy.stats}
            component={StatBlock}
            containerClass=""
            blockClass="StatBlock"
        />
        {/* <FeaturedDatasets datasets={fDatasets} /> */}
        </div>
    </Layout>
  );
}

export default Home;
