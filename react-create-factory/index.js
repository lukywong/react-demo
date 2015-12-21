var CommentBox = require('./comment-box.react');
import ReactDOMServer from 'react-dom/server';

var html = ReactDOMServer.renderToString(CommentBox);

console.log(html);
