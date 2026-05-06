
export interface Article {
    idx: number;
    date: string;
    title: string;
    slug: string;
    component: React.FunctionComponent;
}

const _ARTICLE_MODS = import.meta.glob("./*.mdx", { eager: true });
export const articles = Object.values(_ARTICLE_MODS)
    .map((a: any) => ({
        "title": a.meta.title,
        "date": a.meta.date,
        "slug": a.meta.slug,
        "component": a.default,
    }))
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((a, idx) => ({ idx, ...a }))
