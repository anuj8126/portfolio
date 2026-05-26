'use client';

import * as React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { profile } from '@/data/resume';
import { ThemeToggle } from './theme-toggle';
import { useActiveSection } from '@/lib/use-active-section';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors ${
        scrolled
          ? 'border-border/80 bg-bg/75 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-medium tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-fg text-[0.7rem] font-semibold text-bg transition group-hover:bg-accent group-hover:text-accent-fg">
            AS
          </span>
          <span className="hidden sm:inline">{profile.name.split(' ')[0]}.dev</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-md px-3 py-2 text-sm transition ${
                  isActive ? 'text-fg' : 'text-fg-muted hover:bg-bg-subtle hover:text-fg'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-subtle text-fg-muted transition hover:border-border-strong hover:text-fg sm:inline-flex"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-subtle text-fg-muted transition hover:border-border-strong hover:text-fg sm:inline-flex"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-subtle text-fg-muted md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg md:hidden">
          <nav className="container flex flex-col py-2">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm transition ${
                    isActive ? 'bg-bg-subtle text-fg' : 'text-fg-muted hover:bg-bg-subtle hover:text-fg'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
