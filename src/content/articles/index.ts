
export interface Article {
    idx: number;
    date: string;
    title: string;
    slug: string;
    component: React.FunctionComponent;
}

const _ARTICLE_MODS = import.meta.glob("./*.mdx", { eager: true });
export const articles = Object.values(_ARTICLE_MODS).map((a: any, idx) => {
    return {
        "idx": idx,
        "title": a.meta.title,
        "date": a.meta.date,
        "slug": a.meta.slug,
        "component": a.default,
    }
})
