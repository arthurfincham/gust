import React from 'react';
import { compTypes } from '../pubComponents/compTypesExporter';
import Page from '../siteComponents/Page';

export default function Components() {
  return <Page items={compTypes} />;
}
