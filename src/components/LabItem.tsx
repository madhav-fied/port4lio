import { useLocation } from "react-router";
import { labItems } from "../content/lab";

export default function LabItem() {
    const { pathname } = useLocation();
    const article = labItems.find(a => a.slug === pathname);

    if (!article) return <div>Not found</div>;

    const Content = article.component;
    return (
        <article className="relative z-10">
            <Content />
        </article>
    )
}