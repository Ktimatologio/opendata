import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from '@reach/router';
import Layout from '../../components/Layout';
import config from "../../assets/config";
import ResourceTemplate from "../../components/Resource";

import {
  Text,
  Organization,
  Table,
  Tags,
  TopicIcon,
  TopicWrapper
} from "@civicactions/data-catalog-components";
import orgs from "../../assets/publishers";

const Dataset = ({id, location}) => {
  const { state } = location;
  const [item, setItem] = useState(state && state.dataset ? state.dataset : {})
  const [hasWindow, checkForWindow] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      checkForWindow(true);
    }
    async function getItem() {
      const { data } = await axios.get(`${process.env.REACT_APP_ROOT_URL}/metastore/schemas/dataset/items/${id}?show-reference-ids`);
      setItem(data);
      console.log("item: ", item);
    }
    if (!state || !state.dataset) {
      getItem();
    }
  }, [id, state]);

  const orgName =
    "publisher" in item && item.publisher ? item.publisher.data.name : "";
  const orgDetails = orgs.filter(org => orgName === org.name);
  const orgImage = orgDetails.length > 0 && orgDetails[0].imageUrl ? orgDetails[0].imageUrl : null;
  const orgDesc = orgDetails.length > 0 && orgDetails[0].description ? orgDetails[0].description : "";
  let renderOrg;
  if(orgDetails.length > 0 && orgDetails[0].imageUrl) {
    renderOrg = <Organization name={orgName} imageUrl={orgImage} description={orgDesc}/>;
  } else {
    renderOrg = <Organization name={orgName} description={orgDesc}/>;
  }


  const tag = "keyword" in item ? item.keyword : [];
  const theme = "theme" in item ? item.theme : [];

  function themes(theme) {
    if (!theme) {
      return null;
    } else {
      return theme.map(topic => {
        return (
          <TopicWrapper component={TopicIcon} topic={topic.data} key={topic.identifier}/>
        );
      });
    }
  }

  // // Process content for 'Columns in this Dataset' table.
  // // const labelsT2 = {};
  // // const valuesT2 = {};

  // // columns.forEach((value, index) => {
  // //   labelsT2[index] = { label: value };
  // //   valuesT2[index] = "String";
  // // });

  // // Process content for 'Additional Information' table.
  const labelsT3 = {};
  const valuesT3 = {};

  if (orgName && orgName.length > 0) {
    labelsT3.publisher = { label: "Εκδότης" };
    valuesT3.publisher = orgName;
  }
  if ("identifier" in item && item.identifier) {
    labelsT3.identifier = { label: "Αναγνωριστικό" };
    valuesT3.identifier = item.identifier;
  }
  if ("issued" in item && item.issued) {
    labelsT3.issued = { label: "Δημιουργήθηκε" };
    valuesT3.issued = item.issued;
  }
  if ("modified" in item && item.modified) {
    labelsT3.modified = { label: "Τελ. Ενημέρωση" };
    valuesT3.modified = item.modified;
  }
  if ("license" in item && item.license) {
    labelsT3.license = { label: "Άδεια" };
    valuesT3.license = `<a href="${item.license}">${item.license}</a>`;
  }
  if ("contactPoint" in item && item.contactPoint && item.contactPoint.fn) {
    labelsT3.contact = { label: "Επικοινωνία" };
    valuesT3.contact = item.contactPoint.fn;
  }
  if (
    "contactPoint" in item &&
    item.contactPoint &&
    item.contactPoint.hasEmail
  ) {
    labelsT3.email = { label: "E-mail Επικοινωνίας" };
    valuesT3.email = `<a href="${item.contactPoint.hasEmail}">${item.contactPoint.hasEmail}</a>`;
  }
  if ("accessLevel" in item && item.accessLevel) {
    labelsT3.access = { label: "Πρόσβαση" };
    valuesT3.access = item.accessLevel;
  }
  if ("landingPage" in item && item.landingPage) {
    labelsT3.homepage = { label: "URL Αρχικής σελίδας" };
    valuesT3.homepage = `<a href="${item.landingPage}">${item.landingPage}</a>`;
  }

  return (
    <Layout title={`Dataset - ${item.title}`}>
    <div className={`dc-dataset-page ${config.container}`}>
        <div className="row">
          <div className="col-md-3 col-sm-12">
            {renderOrg}
            <div className="dc-block-wrapper">
              Η πληροφορία είναι διαθέσιμη και στο {" "}
              <Link
                to={`/dataset/${item.identifier}/api`}
                state={{ dataset: {...item} }}
              >
                API
              </Link>.
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <h1>{item.title}</h1>
            {theme.length > 0 && <div className="dc-item-theme">{themes(theme)}</div>}
            <Text value={item.description} />
            {(hasWindow && item.distribution) &&
              item.distribution.map(dist => {
                return <ResourceTemplate key={dist.identifier} resource={dist} identifier={dist.identifier} />;
              })}
            <Tags tags={tag} path="/search?keyword=" label="Ετικέτες" />
            {/* <Table
              configuration={labelsT2}
              data={valuesT2}
              title="Columns in this Dataset"
              th1="Column Name"
              th2="Type"
              tableclass="data-dictionary"
            /> */}
            <Table
              configuration={labelsT3}
              data={valuesT3}
              tableclass="metadata"
            />
          </div>
        </div>
      </div>
      </Layout>
  );
};

export default Dataset;
