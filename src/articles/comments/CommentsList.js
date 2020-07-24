import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from './Comment';
import { useToggle } from '../../hooks/toggle';


export function CommentsList({ comments }) {
    const [isOpen, toggleOpen] = useToggle(false);

    if (!comments.length) {
        return <h3>No comments yet</h3>;
    }

    const commentsAsItems = comments.map(
        comment => <li key={comment.id}><Comment comment={comment}/></li>,
    );

    const linkText = isOpen ? 'hide comments' : 'show comments';

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{linkText}</a>
            {isOpen ? <ul>{commentsAsItems}</ul> : null}
        </div>
    );
}

CommentsList.propTypes = {
    comments: PropTypes.array.isRequired,
};
