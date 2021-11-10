import React, { useEffect, useState } from "react";
import "../../i18n";
import { useTranslation } from 'react-i18next';
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
// import Moment from 'moment';

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
  const orgImage = orgDetails.length > 0 && orgDetails[0].imageUrl ? orgDetails[0].imageUrl : "/frontend/src/theme/images/logo_ktim_sm.png";
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

  // // Charts for datasets
  // function Chart_1(props) {
  //   return <iframe height="480" width="100%" scrolling="no" title="" src="/harvest/chart.php?stat=1" frameborder="no" allowtransparency="true"></iframe>;
  // }
  // // function Chart_2(props) {
  // //   return <iframe height="480" width="100%" scrolling="no" title="" src="/harvest/chart.php?stat=2" frameborder="no" allowtransparency="true"></iframe>;
  // // }
  // function Chart_3(props) {
  //   return <iframe height="480" width="100%" scrolling="no" title="" src="/harvest/chart.php?stat=3" frameborder="no" allowtransparency="true"></iframe>;
  // }
  // function Chart_4(props) {
  //   return <iframe height="480" width="100%" scrolling="no" title="" src="/harvest/chart.php?stat=4" frameborder="no" allowtransparency="true"></iframe>;
  // }
  // function Chart_5(props) {
  //   return <iframe height="480" width="100%" scrolling="no" title="" src="/harvest/chart.php?stat=5" frameborder="no" allowtransparency="true"></iframe>;
  // }
  // function Chart_6(props) {
  //   return <iframe height="480" width="100%" scrolling="no" title="" src="/harvest/chart.php?stat=6" frameborder="no" allowtransparency="true"></iframe>;
  // }
  // function Chart_7(props) {
  //   return <iframe height="480" width="100%" scrolling="no" title="" src="/harvest/chart.php?stat=7" frameborder="no" allowtransparency="true"></iframe>;
  // }
  // function Chart_8(props) {
  //   return <iframe height="480" width="100%" scrolling="no" title="" src="/harvest/chart.php?stat=8" frameborder="no" allowtransparency="true"></iframe>;
  // }

  // function Chart(item) {
  //   const item_identifier = item.identifier;
  //   if (item_identifier == "12c53061-173d-4766-b795-2d3c30e69b05") {
  //     return <Chart_1 />;
  //   }
  //   // if (item_identifier == "c1c4d0b9-538a-428f-93a6-57b20c40f23d") {
  //   //   return <Chart_2 />;
  //   // }
  //   if (item_identifier == "daa0e877-11ac-4e33-bd92-978b359d20a0") {
  //     return <Chart_3 />;
  //   }
  //   if (item_identifier == "bc60bf19-7f2d-46d4-b3da-60d0f8023470") {
  //     return <Chart_4 />;
  //   }
  //   if (item_identifier == "168f9d8d-2a58-44f5-a114-981249ced51d") {
  //     return <Chart_5 />;
  //   }
  //   if (item_identifier == "abd2b706-d3b2-473c-a340-03fcea339517") {
  //     return <Chart_6 />;
  //   }
  //   if (item_identifier == "8f55363a-2942-4517-adc2-5f1090751ea3") {
  //     return <Chart_7 />;
  //   }
  //   if (item_identifier == "6e2a6c23-eba3-4361-9a1e-404dce775c49") {
  //     return <Chart_8 />;
  //   }
  //   return "";
  // }

  function OrgName(orgName) {
    const org_name = orgName;
    if (org_name == "Ελληνικό Κτηματολόγιο") {
      return (<span><OrgValue /></span>);
    }
    return "";
  }

  function P10Y() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p10y')}</span>
    );
  }
  function P4Y() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p4y')}</span>
    );
  }
  function P1Y() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p1y')}</span>
    );
  }
  function P2M() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p2m')}</span>
    );
  }
  function P3_5D() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p35d')}</span>
    );
  }
  function P1D() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p1d')}</span>
    );
  }
  function P2W() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p2w')}</span>
    );
  }
  function P6M() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p6m')}</span>
    );
  }
  function P2Y() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p2y')}</span>
    );
  }
  function P3Y() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p3y')}</span>
    );
  }
  function P0_33W() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p033w')}</span>
    );
  }
  function P0_33M() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p033m')}</span>
    );
  }
  function PT1S() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('pt1s')}</span>
    );
  }
  function P1M() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p1m')}</span>
    );
  }
  function P3M() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p3m')}</span>
    );
  }
  function P0_5M() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p05m')}</span>
    );
  }
  function P4M() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p4m')}</span>
    );
  }
  function P1W() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('p1w')}</span>
    );
  }
  function PT1H() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('pt1h')}</span>
    );
  }

  // // Process content for 'Columns in this Dataset' table.
  // // const labelsT2 = {};
  // // const valuesT2 = {};

  // // columns.forEach((value, index) => {
  // //   labelsT2[index] = { label: value };
  // //   valuesT2[index] = "String";
  // // });

  // // Process content for 'Additional Information' table.
  function Orgname() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('orgname')}</span>
    );
  }

  function OrgValue() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('org_value')}</span>
    );
  }

  function Identifier() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('identifier')}</span>
    );
  }

  function Issued() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('issued')}</span>
    );
  }

  function Modified() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('modified')}</span>
    );
  }

  function License() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('license')}</span>
    );
  }

  function Contactpoint() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('contact_point')}</span>
    );
  }

  function Accesslevel() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('access_level')}</span>
    );
  }

  function AccrualPeriodicity() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('accrual_periodicity')}</span>
    );
  }

  function Terms_of_use() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('terms_of_use')}</span>
    );
  }

  function Tagslabel() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('tags')}</span>
    );
  }

  function Org_description() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('org_description')}</span>
    );
  }

  function Available_info() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('available_info')}</span>
    );
  }

  function Tabletitle() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('table_title')}</span>
    );
  }
  function Th1title() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('table_th1')}</span>
    );
  }
  function Th2title() {
    const { t, i18n } = useTranslation();
    return (
      <span>{t('table_th2')}</span>
    );
  }

  const labelsT3 = {};
  const valuesT3 = {};

  if (orgName && orgName.length > 0) {
    labelsT3.publisher = { label: <Orgname/> };
    valuesT3.publisher = orgName;
  }
  if ("identifier" in item && item.identifier) {
    labelsT3.identifier = { label: <Identifier/> };
    valuesT3.identifier = item.identifier;
  }
  if ("issued" in item && item.issued) {
    labelsT3.issued = { label: <Issued/> };
    // valuesT3.issued = item.issued;
    var issued = item.issued;
    var newissued = issued.replace("00:00:00 Europe/Athens", "");
    valuesT3.issued = newissued;
  }
  if ("modified" in item && item.modified) {
    labelsT3.modified = { label: <Modified/> };
    // valuesT3.modified = Moment(item.modified).format('DD-MM-YYYY');
    var modified = item.modified;
    var newmodified = modified.replace("00:00:00 Europe/Athens", "");
    // valuesT3.modified = item.modified;
    valuesT3.modified = newmodified;
  }
  if ("license" in item && item.license) {
    labelsT3.license = { label: <License/> };
    valuesT3.license = `<a href="${item.license}">${item.license}</a>`;
  }
  if ("contactPoint" in item && item.contactPoint && item.contactPoint.fn) {
    labelsT3.contact = { label: <Contactpoint/> };
    valuesT3.contact = item.contactPoint.fn;
  }
  if (
    "contactPoint" in item &&
    item.contactPoint &&
    item.contactPoint.hasEmail
  ) {
    labelsT3.email = { label: "E-mail" };
    valuesT3.email = `<a href="mailto:${item.contactPoint.hasEmail}">${item.contactPoint.hasEmail}</a>`;
  }
  // if ("accessLevel" in item && item.accessLevel) {
  //    labelsT3.access = { label: <Accesslevel/> };
  //    valuesT3.access = item.accessLevel;
  // }
  if ("accrualPeriodicity" in item && item.accrualPeriodicity) {
    labelsT3.periodicity = { label: <AccrualPeriodicity/> };
    // valuesT3.periodicity = item.accrualPeriodicity;
    var item_accrual_periodicity = item.accrualPeriodicity;
    if (item_accrual_periodicity === "R/P10Y") {
      valuesT3.periodicity =  "Δεκαετής";
    }
    else if (item_accrual_periodicity === "R/P4Y") {
      valuesT3.periodicity = "Τετραετής";
    }
    else if (item_accrual_periodicity === "R/P1Y") {
      valuesT3.periodicity = "Ετήσια";
    }
    else if (item_accrual_periodicity === "R/P2M") {
      valuesT3.periodicity = "Διμηνιαία";
    }
    else if (item_accrual_periodicity === "R/P3.5D") {
      valuesT3.periodicity = "Δύο φορές την εβδομάδα";
    }
    else if (item_accrual_periodicity === "R/P1D") {
      valuesT3.periodicity = "Ημερήσια";
    }
    else if (item_accrual_periodicity === "R/P2W") {
      valuesT3.periodicity = "Ανά δύο εβδομάδες";
    }
    else if (item_accrual_periodicity === "R/P6M") {
      valuesT3.periodicity = "Εξαμηνιαία";
    }
    else if (item_accrual_periodicity === "R/P2Y") {
      valuesT3.periodicity = "Διετής";
    }
    else if (item_accrual_periodicity === "R/P3Y") {
      valuesT3.periodicity = "Τριετής";
    }
    else if (item_accrual_periodicity === "R/P0.33W") {
      valuesT3.periodicity = "Τρεις φορές την εβδομάδα";
    }
    else if (item_accrual_periodicity === "R/P0.33M") {
      valuesT3.periodicity = "Τρεις φορές το μήνα";
    }
    else if (item_accrual_periodicity === "R/PT1S") {
      valuesT3.periodicity = "Συνεχόμενη";
    }
    else if (item_accrual_periodicity === "R/P1M") {
      valuesT3.periodicity = "Μηνιαία";
    }
    else if (item_accrual_periodicity === "R/P3M") {
      valuesT3.periodicity = "Τριμηνιαία";
    }
    else if (item_accrual_periodicity === "R/P0.5M") {
      valuesT3.periodicity = "Δεκαπενθήμερη";
    }
    else if (item_accrual_periodicity === "R/P4M") {
      valuesT3.periodicity = "Τετραμηνιαία";
    }
    else if (item_accrual_periodicity === "R/P1W") {
      valuesT3.periodicity = "Ανά μία εβδομάδα";
    }
    else if (item_accrual_periodicity === "R/PT1H") {
      valuesT3.periodicity = "Ανά μία ώρα";
    }
    else {
      valuesT3.periodicity = "-";
    }
  }
  if ("landingPage" in item && item.landingPage) {
    labelsT3.homepage = { label: "URL" };
    valuesT3.homepage = `<a href="${item.landingPage}">${item.landingPage}</a>`;
  }
  labelsT3.homepage = { label: <Terms_of_use/> };
  valuesT3.homepage = `<a href="https://www.ktimanet.gr/geoportal/misc/Terms_of_use.htm" target="_blank">https://www.ktimanet.gr/geoportal/misc/Terms_of_use.htm</a>`;

  return (
    <Layout title={`Σύνολο δεδομένων - ${item.title}`}>
    <div className={`dc-dataset-page ${config.container}`}>
        <div className="row">
          {/* <div className="col-md-3 col-sm-12">
            <Organization name={orgName} imageUrl={orgImage} description={<Org_description/>}/>
            <div className="dc-block-wrapper">
              <Available_info/> {" "}
              <Link
                to={`/dataset/${item.identifier}/api`}
                state={{ dataset: {...item} }}
              >
                API
              </Link>.
            </div>
          </div> */}
          <div className="col-md-12 col-sm-12">
            <h1>{item.title}</h1>
            {theme.length > 0 && <div className="dc-item-theme">{themes(theme)}</div>}
            <Table
              title={<Tabletitle/>}
              th1={<Th1title/>}
              th2={<Th2title/>}
              configuration={labelsT3}
              data={valuesT3}
              tableclass="metadata"
            />
            <Text value={item.description} />
            {(hasWindow && item.distribution) &&
              item.distribution.map(dist => {
                return <ResourceTemplate key={dist.identifier} resource={dist} identifier={dist.identifier} />;
              })}
            <Tags tags={tag} path="/search?keyword=" label={<Tagslabel/>} />
            {/* <Table
              configuration={labelsT2}
              data={valuesT2}
              title="Columns in this Dataset"
              th1="Column Name"
              th2="Type"
              tableclass="data-dictionary"
            /> */}
            {/* <div>{Chart(item)}</div> */}
          </div>
        </div>
      </div>
      </Layout>
  );
};

export default Dataset;
