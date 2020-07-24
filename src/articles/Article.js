import React from 'react';
import PropTypes from 'prop-types';

import { CommentsList } from './comments/CommentsList';


export function Article({ article, isOpened, toggle }) {
    const { title, text, comments } = article;

    return (
        <div>
            <h1 onClick={toggle}>{title}</h1>
            {isOpened ? <section>{text} <CommentsList comments={comments || []}/></section> : null}
        </div>
    );
}

Article.propTypes = {
    isOpened: PropTypes.bool,
    toggle: PropTypes.func.isRequired,
    article: PropTypes.shape({
        comments: PropTypes.array,
        text: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};
