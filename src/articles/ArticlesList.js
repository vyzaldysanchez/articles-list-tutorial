import React from 'react';
import PropTypes from 'prop-types';

import { Article } from './Article';
import { useOnlyOneOpened } from '../hooks/only-one-opened';


export function ArticlesList({ articles }) {
    const { isItemOpened, toggleOpenItem } = useOnlyOneOpened();

    const articlesAsItems = articles.map(
        article => (
            <li key={article.id}>
                <Article article={article} isOpened={isItemOpened(article.id)} toggle={toggleOpenItem(article.id)}/>
            </li>
        ),
    );

    return (
        <div>
            <h1>Articles List</h1>
            <ul>{articlesAsItems}</ul>
        </div>
    );
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
};
