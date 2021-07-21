import React from 'react';
import { PublisherList } from "@civicactions/data-catalog-components";
import config from "../../assets/config";
import Layout from '../../components/Layout';
import orgs from "../../assets/publishers";

const Publishers = () => {
  return (
    <Layout title="Εκδότες Δεδομένων">
    <div className={`dc-page ${config.container}`}>
      <h1>Εκδότες Δεδομένων</h1>
      <div>
        <p>
          Οι Εκδότες Δεδομένων...
        </p>

        <PublisherList items = {orgs} />

      </div>
    </div>
    </Layout>
  );
}

export default Publishers;
