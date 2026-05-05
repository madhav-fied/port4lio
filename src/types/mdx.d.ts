declare module '*.mdx' {
    import type { ComponentType } from 'react'
    export const meta: { title: string; date: string; description?: string; slug: string }
    const MDXComponent: ComponentType
    export default MDXComponent
}