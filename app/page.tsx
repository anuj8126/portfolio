import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { ExperienceSection } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { profile, experience } from '@/data/resume';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  description: profile.summary,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressCountry: 'IN',
  },
  url: 'https://anujsrivastav.vercel.app',
  sameAs: [profile.links.linkedin, profile.links.github],
  knowsAbout: [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Full Stack Development',
    'Frontend Architecture',
    'Performance Optimization',
    'WebSockets',
    'WebRTC',
    'SaaS',
    'Fintech',
    'Healthcare',
    'PropTech',
    'E-commerce',
  ],
  worksFor: {
    '@type': 'Organization',
    name: experience[0]?.company ?? '',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
