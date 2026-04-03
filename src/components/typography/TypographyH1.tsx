type TypographyH1Props = {
  children: React.ReactNode
}
type TypographyH2Props = {
  children: React.ReactNode
}

export function TypographyH1({ children }: TypographyH1Props) {
  return (
    <h1 className="scroll-m-20  text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  )
}

export function TypographyH2({ children }: TypographyH2Props) {
  return (
    <h2 className="scroll-m-20   sm:text-2xl lg:text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  )
}