import React from "react";
import "../../i18n";
import { useTranslation } from 'react-i18next';
import PropTypes from "prop-types";
import excerpts from 'excerpts';
import { Link } from '@reach/router';
import { Text } from "@civicactions/data-catalog-components";
import config from "../../assets/config";
import './featureddatasets.scss';

function Featured() {
  const { t, i18n } = useTranslation();
  return (
    <h2 className="dc-featured-title">{t('featured')}</h2>
  );
}

const FeaturedDatasets = ({ datasets }) => {
  return (
    <div className={`dc-featured-datasets ${config.container}`}>
      <Featured/>
      <ol>
        {datasets.map((item) => (
          <li>
            <Link to={`dataset/${item.identifier}`} key={item.identifier}>
              <h3>{item.title}</h3>
            </Link>
            <Text>
              {excerpts(item.description, {words: 35})}
            </Text>
          </li>
        ))}
      </ol>
    </div>
  );
};

FeaturedDatasets.propTypes = {
  datasets: PropTypes.arrayOf(PropTypes.object)
};

export default FeaturedDatasets;
