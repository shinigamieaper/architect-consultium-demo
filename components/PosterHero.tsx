import Image from "next/image";
import Link from "next/link";
import Stage from "./Stage";

/**
 * The home stage, built to the poster reference.
 *
 * The two halves of his name run on offset lines with a gap left between them,
 * and he stands in that gap: his head reaches the tail of "Olabanji" and the
 * front of "Afolabi" without taking a letter off either. He sits flush with the
 * bottom edge of the card, so the flat crop of the photograph finishes on the
 * edge itself and can never read as a cut line across the page.
 */
export default function PosterHero() {
  return (
    <Stage minH="min-h-[calc(100svh-var(--frame)*2)]">
      <div className="relative isolate flex flex-1 flex-col">
        {/* warm light behind his head, so he lifts off the stage */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[56%] top-[40%] -z-10 h-[min(100%,940px)] w-[min(100%,940px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,181,113,.28) 0%, rgba(193,156,77,.09) 46%, transparent 70%)",
          }}
        />


        {/* the card darkens toward its own bottom edge, so the corner blocks keep
            their contrast where his jacket runs behind them. it spans the card
            rather than the image, which is why it reads as light and not a cut */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[25] hidden h-[44%] md:block"
          style={{
            background:
              "linear-gradient(to top, var(--bg-primary) 14%, rgba(18,23,42,.74) 50%, transparent 100%)",
          }}
        />

        {/* his name, the largest thing on the page */}
        <h1 className="relative z-10 pt-[clamp(5.5rem,13vh,9rem)] md:absolute md:inset-x-0 md:top-[10.5%] md:pt-0">
          <span className="poster pl-[5%] text-ivory">Olabanji</span>
          <span className="poster pr-[2.8%] text-right text-ivory">Afolabi</span>
        </h1>

        {/* a phone has no room for the overlap, so he sits framed between his
            name and the copy. the frame is the crop, so there is no loose edge */}
        <div className="panel relative z-10 mx-[5%] mt-7 aspect-[5/4] overflow-hidden md:hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 90% at 50% 8%, rgba(212,181,113,.22) 0%, rgba(27,34,55,.9) 58%, var(--bg-secondary) 100%)",
            }}
          />
          <Image
            src="/img/pba-cutout.png"
            alt="Pastor Olabanji Afolabi"
            width={520}
            height={527}
            priority
            className="absolute inset-x-0 bottom-0 mx-auto h-[112%] w-auto max-w-none select-none object-contain object-bottom"
          />
        </div>

        {/* corners */}
        <div className="relative z-30 flex flex-wrap items-end justify-between gap-x-10 gap-y-8 px-[5%] pb-28 pt-[clamp(2rem,6vh,4rem)] md:mt-auto md:pb-[clamp(4.5rem,8vh,5.5rem)]">
          <div className="max-w-[38ch]">
            <p className="font-display text-[clamp(1.3rem,1.05rem+1vw,1.95rem)] leading-[1.15] text-ivory">
              Build altars. Raise leaders.
              <br />
              <em className="italic text-gold-2">Architect revival.</em>
            </p>
            <p className="mt-3.5 max-w-[42ch] text-[0.8125rem] leading-relaxed text-ivory/65">
              Mentorship, cohorts and a self paced academy, with the writing and
              the books underneath them. One login opens all of it.
            </p>
            <Link
              href="/#join"
              className="pill mt-5 bg-gold font-medium text-navy hover:bg-gold-2"
            >
              Join the Consultium
            </Link>
          </div>

          <div className="flex flex-col items-start gap-3.5 sm:items-end">
            <div className="sm:text-right">
              <p className="eyebrow text-gold-2">Pastor and revival architect</p>
              <p className="eyebrow mt-2 text-ivory/55">
                Leadership coach and strategist
              </p>
            </div>
            <Link
              href="/programmes/purpose-academy"
              className="pill border border-white/25 text-ivory hover:border-white/50 hover:bg-white/5"
            >
              Explore the programmes
            </Link>
          </div>
        </div>


        {/* from the tablet up he steps in front of the type and finishes on the
            card's own bottom edge, so the flat crop of the photograph never shows */}
        <Image
          src="/img/pba-cutout.png"
          alt="Pastor Olabanji Afolabi"
          width={520}
          height={527}
          priority
          className="pointer-events-none absolute bottom-0 left-[54%] z-20 hidden h-[98%] w-auto max-w-none -translate-x-1/2 select-none object-contain md:block"
        />
      </div>
    </Stage>
  );
}
