import React from 'react';
import PropTypes from 'prop-types';


export function Comment({ comment }) {
    const { text, user } = comment;

    return (
        <div>
            <p>{text}</p>
            <b>by {user}</b>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string,
        text: PropTypes.string.isRequired,
    }),
};
