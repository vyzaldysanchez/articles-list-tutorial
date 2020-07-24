import React from 'react';

import { articles } from './fixtures';
import { ArticlesList } from './articles/ArticlesList';


export function App() {
  return (
    <ArticlesList articles={articles} />
  );
}
