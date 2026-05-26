import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/resume';

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle/50">
      <div className="container flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="font-mono text-sm text-fg">{profile.name}</p>
          <p className="mt-1 text-xs text-fg-subtle">
            © {new Date().getFullYear()} · {profile.title} · {profile.availability}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg text-fg-muted transition hover:border-border-strong hover:text-fg"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg text-fg-muted transition hover:border-border-strong hover:text-fg"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg text-fg-muted transition hover:border-border-strong hover:text-fg"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
