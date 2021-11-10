import React from 'react';
import "../../i18n";
import { useTranslation } from 'react-i18next';
import { PublisherList } from "@civicactions/data-catalog-components";
import config from "../../assets/config";
import Layout from '../../components/Layout';
import orgs from "../../assets/publishers";

function Publisherstitle() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('publishers_title')}</span>
  );
}

function Pubname() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('pub_name')}</span>
  );
}

function Publisherstext() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('publishers_text')}</span>
  );
}

const Publishers = () => {
  return (
    <Layout title="Εκδότες">
    <div className={`dc-page ${config.container}`}>
      <h1><Publisherstitle/></h1>
      <div>
        {/* <PublisherList items = {orgs} /> */}
        <h3><Pubname/></h3>
        <p>
          <Publisherstext/>
        </p>

      </div>
    </div>
    </Layout>
  );
}

export default Publishers;
