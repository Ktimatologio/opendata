import React from 'react';
import "../i18n";
import { useTranslation } from 'react-i18next';

function Topics() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('facet_topics')}</span>
  );
}
function Tags() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('facet_tags')}</span>
  );
}
function Publishers() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('facet_publishers')}</span>
  );
}

function Order_abc() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('order_abc')}</span>
  );
}
function Order_date() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('order_date')}</span>
  );
}

export const defaultFacets = {
  "theme": {
    "label": <Topics/>,
    "field": "theme.0.title",
    "showAll": false,
    "limit": 10,
    "reset": {
      "active": false,
      "icon": <span></span>
    },
  },
  "keyword": {
    "label": <Tags/>,
    "field": "keyword.*.title",
    "showAll": false,
    "limit": 10,
    "reset": {
      "active": false,
      "icon": <span></span>
    },
  },
  "publisher__name": {
    "label": <Publishers/>,
    "field": "publisher__name",
    "showAll": false,
    "limit": 10,
    "reset": {
      "active": false,
      "icon": <span></span>
    },
  }
}

export function normalizeItems(resultItems) {
  let nItems = resultItems;
  if (!Array.isArray(nItems)) {
    nItems = Object.values(nItems);
  }
  return nItems.map((x) => {
    let item = {};
    item = {
      identifier: x.identifier,
      modified: x.modified,
      description: x.description,
      theme: x.theme,
      format: x.distribution,
      title: x.title,
      ref: `/dataset/${x.identifier}`
    };
    if (
      Object.prototype.hasOwnProperty.call(x, "publisher") &&
      Object.prototype.hasOwnProperty.call(x.publisher, "name")
    ) {
      item.publisher = x.publisher.name;
    } else {
      item.publisher = "";
    }
    return item;
  });
}

// const order_date = 'Ημερομηνία';
// const order_abc = 'Αλφαβητικά';

export const sortOptions = [
  {
    field: 'modified',
    order: 'desc',
    label: 'Ημερομηνία'
  },
  {
    field: 'title',
    order: 'asc',
    label: 'Αλφαβητικά'
  }
];