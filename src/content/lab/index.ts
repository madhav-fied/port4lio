export interface LabItem {
    idx: number;
    date: string;
    title: string;
    slug: string;
    component: React.FunctionComponent;
}

const _LAB_MODS = import.meta.glob("./*.tsx", { eager: true });
export const labItems = Object.values(_LAB_MODS).map((a: any, idx) => {
    return {
        "idx": idx,
        "title": a.meta.title,
        "date": a.meta.date,
        "slug": a.meta.slug,
        "component": a.default,
    }
})
