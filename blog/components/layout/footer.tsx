import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            Access by design · EECS accessibility and equity
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex gap-4">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 touch-target inline-flex items-center rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pbb/synthesis" className="text-sm text-muted-foreground hover:text-foreground">Final synthesis</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
