/**
 * The frame: a gold ground with a dark stage inset inside it.
 * Every page opens with one, which is what makes the site feel like
 * one object rather than a stack of unrelated sections.
 */
export default function Stage({
  children,
  className = "",
  minH = "",
}: {
  children: React.ReactNode;
  className?: string;
  minH?: string;
}) {
  return (
    <section className={`ground flex ${className}`}>
      <div className={`stage flex flex-1 flex-col text-ivory ${minH}`}>
        {children}
      </div>
    </section>
  );
}
