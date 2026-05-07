import { useLocation } from "react-router";
import { articles } from "../content/articles";
import "../styles/ArticleContent.css";


export default function ArticleContent() {
    const { pathname } = useLocation();
    const article = articles.find(a => a.slug === pathname);

    if (!article) return <div>Not found</div>;

    const Content = article.component;
    return (
        <article className="relative z-10">
            <Content />
        </article>
    )
}