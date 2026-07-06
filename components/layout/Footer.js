const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="container-layout">
        <div className="flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <span className="font-serif text-lg text-surface">LE FOND</span>
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-surface/30">
            Systems that build businesses.
          </p>
          <p className="font-sans text-xs text-surface/30">
            © {year} Le Fond. South Africa.
          </p>
        </div>
      </div>
    </footer>
  )
}
