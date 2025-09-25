export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <section className="max-w-5xl mx-auto px-4">{children}</section>;
}
