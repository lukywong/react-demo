import React from 'react';
import CommentBox from './comment-box.react';
import ReactDOMServer from 'react-dom/server';

const commentBoxfactory = React.createFactory(CommentBox);

const html = ReactDOMServer.renderToString(commentBoxfactory({}));

console.log(html);
