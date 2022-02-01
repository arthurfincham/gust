import React from 'react';
import { docSections } from '../documentation/docSectionsExporter';
import Page from '../siteComponents/Page';
export default function Documentation() {
  return <Page items={docSections} />;
}
