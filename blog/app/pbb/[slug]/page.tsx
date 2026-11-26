import Link from "next/link"
import { notFound } from "next/navigation"
import { entries } from "@/lib/blog-content"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export function generateStaticParams() { return entries.map(({ id }) => ({ slug: id })) }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = entries.find(({ id }) => id === slug)
  if (!entry) notFound()
  const index = entries.findIndex(({ id }) => id === slug)
  const previous = entries[index - 1]
  const next = entries[index + 1]
  return <div className="flex min-h-screen flex-col"><Header /><main id="main-content" className="flex-1 animate-page-enter"><article className="mx-auto max-w-3xl px-5 py-12 md:py-20">
    <Link href="/" className="text-sm font-medium text-primary underline underline-offset-4">← All themes</Link>
    <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-primary">{entry.id === "synthesis" ? "Final synthesis" : `Project building block ${index + 1} of 9`}</p>
    <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{entry.title}</h1><p className="mt-5 text-xl leading-relaxed text-muted-foreground">{entry.deck}</p>
    {entry.id === "pbb-3" && <section aria-labelledby="timeline-heading" className="mt-10"><h2 id="timeline-heading" className="text-2xl font-bold">Digital accessibility: a timeline</h2><p className="mt-3 text-base leading-7 text-muted-foreground">Explore milestones in the history of accessibility and technology. The interactive timeline is embedded below; you can also <a className="text-primary underline underline-offset-2" href="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vQPepkbykvvRlwILwjCcqYsB4YGU7IzVo0vTo13iqOi1LxPpSS5pksVIrKvYN1p0ze6LFlGFJrXBKfK&font=Default&lang=en&initial_zoom=2&width=100%25&height=650" target="_blank" rel="noopener noreferrer">open the timeline in a new tab</a>.</p><div className="mt-5 overflow-hidden rounded-xl border bg-background"><iframe title="Interactive timeline of digital accessibility milestones" src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vQPepkbykvvRlwILwjCcqYsB4YGU7IzVo0vTo13iqOi1LxPpSS5pksVIrKvYN1p0ze6LFlGFJrXBKfK&font=Default&lang=en&initial_zoom=2&width=100%25&height=650" className="block w-full" height="650" loading="lazy" allowFullScreen /></div></section>}
    {entry.sections.map((section) => <section key={section.heading} className="mt-10"><h2 className="text-2xl font-bold">{section.heading}</h2>{section.paragraphs.map((p) => <p key={p} className="mt-4 text-base leading-8">{p}</p>)}</section>)}
    <section aria-labelledby="references-heading" className="mt-12 border-t pt-8"><h2 id="references-heading" className="text-2xl font-bold">References</h2><ol className="mt-5 space-y-4 text-sm leading-7">{entry.references.map((ref) => <li key={ref.text} className="pl-8 [text-indent:-2rem]">{ref.url ? <>{ref.text.replace(ref.url, "")}<a className="break-words text-primary underline underline-offset-2" href={ref.url}>{ref.url}</a></> : ref.text}</li>)}</ol></section>
    <nav aria-label="Article navigation" className="mt-12 flex justify-between gap-4 border-t pt-6">{previous ? <Link href={`/pbb/${previous.id}`} className="max-w-[48%] text-primary underline underline-offset-4">← {previous.title}</Link> : <span />}{next && <Link href={`/pbb/${next.id}`} className="max-w-[48%] text-right text-primary underline underline-offset-4">{next.title} →</Link>}</nav>
  </article></main><Footer /></div>
}
