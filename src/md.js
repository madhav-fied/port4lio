import DOMPurify from 'dompurify';
import { marked } from 'marked';

const purifyConfig = {
    ALLOWED_TAGS: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'br', 'hr',
        'strong', 'em', 'del', 's', 'strike',
        'code', 'pre',
        'ul', 'ol', 'li',
        'a',
        'img',
        'blockquote',
        'table', 'thead', 'tbody', 'tr', 'th', 'td',
        'input'
    ],
    ALLOWED_ATTR: [
        'href', 'title', 'target', 'rel',
        'src', 'alt', 'width', 'height',
        'type', 'checked', 'disabled'
    ],
    ALLOW_DATA_ATTR: false,
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
};

marked.setOptions({
    gfm: true,
    breaks: true,
    headerIds: true,
    mangle: false
});


const setMDContent = (rawHTML, element) => {
    const safeHTML = DOMPurify.sanitize(rawHTML, purifyConfig);
    element.innerHTML = safeHTML;
}

const parseMDContent = (filePath) => {
    return fetch(filePath)
        .then((res) => res.text())
        .then((fileContent) => marked.parse(fileContent) )
        .catch((e) => {
            console.error(e);
            return "# Error happend";
        });
}

const setData = (file, selector) => {
    let element = document.querySelector(selector);
    parseMDContent(file)
        .then((content) => {
            setMDContent(content, element)
            console.log(file)
            console.log(content)
        })
        .catch((e) => {
            console.error(e);
        });
}

setData("./src/works/shaw.md", '#office-work');
setData("./src/works/selfhost.md", '#selfhost-work');
setData("./src/works/blackjack.md", '#project-work');
