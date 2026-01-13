import { landingContent } from "@/content/landingContent";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { VideoCard } from "@/components/ui/VideoCard";

export function VideosSection() {
  const c = landingContent.videos;

  return (
    <Section id="videos">
      <Reveal>
        <h2 className="font-serif text-2xl leading-tight text-[color:var(--color-foreground)] sm:text-3xl">
          {c.title}
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {c.videos.map((v, idx) => (
          <Reveal key={v.label} delay={idx * 0.05}>
            <div className="space-y-3">
              <div className="text-xs font-semibold tracking-wide text-[color:var(--color-muted)]">
                {v.label}
              </div>
              <VideoCard
                title={v.title}
                caption={v.caption}
                bullets={v.bullets}
                cta={v.cta}
                // Placeholders: wire real video sources later
                videoSrc={undefined}
                posterSrc={undefined}
                autoplayPreview={true}
                trackVideoTitle={v.title}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
