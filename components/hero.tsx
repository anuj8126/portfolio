'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Globe, MapPin, Sparkles } from 'lucide-react';
import { profile } from '@/data/resume';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 mask-fade-bottom bg-grid-pattern opacity-40 [background-size:48px_48px]"
        aria-hidden
      />

      <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-bg-subtle/80 px-3 py-1.5 text-xs text-fg-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for remote roles · EU / US / UK time zones
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {profile.name.split(' ')[0]}{' '}
          <span className="text-fg-muted">{profile.name.split(' ').slice(1).join(' ')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-balance text-lg text-fg-muted md:text-xl"
        >
          <span className="text-fg">{profile.title}</span> — {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
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
            8+ years · SaaS · Fintech
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-fg shadow-sm transition hover:opacity-90"
          >
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
    </section>
  );
}
