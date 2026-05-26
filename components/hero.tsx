'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Globe, MapPin, Sparkles } from 'lucide-react';
import { profile } from '@/data/resume';
import { MouseSpotlight } from './mouse-spotlight';
import { RoleRotator } from './role-rotator';

const ROLES = [
  'Frontend-Heavy Full Stack Engineer',
  'Senior Product Engineer',
  'Frontend Tech Lead',
  'React · Node · TypeScript · Next.js',
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <MouseSpotlight size={520} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mask-fade-bottom bg-grid-pattern opacity-[0.35] [background-size:48px_48px]"
      />
      {!reduced && (
        <>
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="pointer-events-none absolute right-[-10%] top-1/3 -z-10 h-[360px] w-[360px] rounded-full bg-fuchsia-500/15 blur-[110px]"
          />
        </>
      )}

      <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20 md:py-28">
        <motion.div
          {...fade(0)}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-bg-subtle/80 px-3 py-1.5 text-xs text-fg-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for remote roles · EU / US / UK time zones
        </motion.div>

        <motion.h1
          {...fade(0.05)}
          className="mt-8 max-w-5xl text-balance text-[3rem] font-semibold leading-[0.95] tracking-[-0.04em] text-fg sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          <span className="block bg-gradient-to-br from-fg via-fg to-fg/60 bg-clip-text text-transparent">
            {profile.name.split(' ')[0]} {profile.name.split(' ').slice(1, 2).join(' ')}
          </span>
          <span className="block bg-gradient-to-br from-fg-muted to-fg-subtle bg-clip-text text-transparent">
            {profile.name.split(' ').slice(2).join(' ')}.
          </span>
        </motion.h1>

        <motion.div
          {...fade(0.12)}
          className="mt-6 flex flex-wrap items-baseline gap-x-2 text-lg text-fg-muted md:text-xl"
        >
          <span className="text-fg-subtle">I&apos;m a</span>
          <RoleRotator roles={[...ROLES]} className="font-medium text-fg" />
        </motion.div>

        <motion.p
          {...fade(0.18)}
          className="mt-4 max-w-2xl text-balance text-base text-fg-muted md:text-lg"
        >
          8+ years shipping frontend-heavy full stack products across{' '}
          <span className="text-fg">{profile.industries.join(', ')}</span> — React,
          TypeScript, Next.js, Node, and the boring engineering work that makes products fast.
        </motion.p>

        <motion.div
          {...fade(0.24)}
          className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-fg-subtle"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {profile.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5" />
            Remote · India / US / UK
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            8+ years · {profile.industries.join(' · ')}
          </span>
        </motion.div>

        <motion.div {...fade(0.3)} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-fg px-5 py-3 text-sm font-medium text-bg shadow-sm transition hover:bg-fg/90"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.links.resume}
            download="Anuj_Srivastav_Senior_Product_Engineer.pdf"
            className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-bg-subtle px-5 py-3 text-sm font-medium text-fg transition hover:border-fg-subtle"
          >
            <Download className="h-4 w-4" />
            Download résumé
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-fg-muted transition hover:text-fg"
          >
            View experience
          </a>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"
      />
    </section>
  );
}
