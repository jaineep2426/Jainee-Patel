import React from 'react';
import { portfolio, type AccentName, type ThemeName } from '@/data/portfolio';

const accentOptions: Array<{ id: AccentName; label: string; hex: string }> = [
  { id: 'sand', label: 'Sand', hex: '#d4a373' },
  { id: 'sage', label: 'Sage', hex: '#84a98c' },
  { id: 'sky', label: 'Sky', hex: '#7aa2f7' },
  { id: 'amber', label: 'Amber', hex: '#f4b942' },
  { id: 'rose', label: 'Rose', hex: '#d97777' },
];

function SectionHead({ number, label }: { number: number; label: string }) {
  return (
    <header className="sec-h">
      <span className="sec-n">{String(number).padStart(2, '0')}</span>
      <span className="sec-l">{label}</span>
    </header>
  );
}

function IconLabel({ children }: { children: React.ReactNode }) {
  return <span className="meta-icon" aria-hidden="true">{children}</span>;
}

function Avatar() {
  return (
    <img
      className="profile-pic"
      src="/assets/JAINEE%20H%20PATEL.jpg"
      alt={portfolio.name}
    />
  );
}

function Aside({ theme, onThemeChange, accent, onAccentChange }: {
  theme: ThemeName;
  onThemeChange: (value: ThemeName) => void;
  accent: AccentName;
  onAccentChange: (value: AccentName) => void;
}) {
  return (
    <aside className="aside">
      <div className="aside-inner">
        <Avatar />
        <h1 className="name">{portfolio.name}</h1>
        <p className="role">{portfolio.role}</p>
        <p className="blurb">{portfolio.summary}</p>

        <dl className="stats">
          {portfolio.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt className="stat-n">{stat.value}</dt>
              <dd className="stat-k">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="meta-list">
          <li className="meta-item">
            <IconLabel>⌂</IconLabel>
            <span className="meta-val">{portfolio.location}</span>
          </li>
          <li className="meta-item">
            <IconLabel>✉</IconLabel>
            <a className="meta-link" href={`mailto:${portfolio.email}`}>
              <span className="meta-val">{portfolio.email}</span>
            </a>
          </li>
          <li className="meta-item">
            <IconLabel>☎</IconLabel>
            <a className="meta-link" href={`tel:${portfolio.phone.replace(/\s+/g, '')}`}>
              <span className="meta-val">{portfolio.phone}</span>
            </a>
          </li>
        </ul>

        <div className="theme-dock" aria-label="Theme and accent controls">
          <div className="theme-row">
            {(['light', 'device', 'dark'] as ThemeName[]).map((option) => (
              <button
                key={option}
                type="button"
                className={theme === option ? 'toggle-btn active' : 'toggle-btn'}
                onClick={() => onThemeChange(option)}
              >
                {option === 'light' ? '☀' : option === 'device' ? '◑' : '☾'}
              </button>
            ))}
          </div>

          <div className="accent-row">
            {accentOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                className={accent === option.id ? 'accent-dot active' : 'accent-dot'}
                onClick={() => onAccentChange(option.id)}
                title={option.label}
                style={{ backgroundColor: option.hex }}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function BulletList({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="plain-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ProjectCard({ project }: { project: (typeof portfolio.projects)[number] }) {
  return (
    <li className="proj">
      <div className="proj-meta">
        <span className="proj-year">{project.when}</span>
        {project.badge ? <span className="proj-badge">{project.badge}</span> : null}
      </div>
      <div className="proj-body">
        <h3 className="proj-title">{project.title}</h3>
        {project.subtitle ? <div className="proj-org">{project.subtitle}</div> : null}
        <BulletList items={project.bullets} />
        {project.stack && project.stack.length > 0 ? (
          <div className="proj-stack">
            {project.stack.map((tech) => (
              <span className="chip" key={tech}>{tech}</span>
            ))}
          </div>
        ) : null}
        {project.link ? (
          <div className="proj-actions">
            <a className="ghost-btn" href={project.link} target="_blank" rel="noreferrer">
              <span>Visit</span>
              <span className="ghost-btn-arrow">↗</span>
            </a>
          </div>
        ) : null}
      </div>
    </li>
  );
}

function Main() {
  const [expandedProjects, setExpandedProjects] = React.useState(false);
  const visibleProjects = expandedProjects ? portfolio.projects : portfolio.projects.slice(0, 4);
  const hiddenProjectCount = Math.max(portfolio.projects.length - 4, 0);

  return (
    <main className="main">
      <section className="block" data-screen-label="01 Experience">
        <SectionHead number={1} label="Experience" />
        <ul className="xp-list">
          {portfolio.experience.map((item) => (
            <li className="xp" key={`${item.company}-${item.when}`}>
              <div className="xp-when">{item.when}</div>
              <div className="xp-body">
                <div className="xp-role">{item.role}</div>
                <div className="xp-org">{item.company}</div>
                <BulletList items={item.bullets} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" data-screen-label="02 Projects">
        <SectionHead number={2} label="Projects" />
        <ul className="proj-list">
          {visibleProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </ul>
        {hiddenProjectCount > 0 ? (
          <button
            type="button"
            className="more-btn"
            onClick={() => setExpandedProjects((value) => !value)}
            aria-expanded={expandedProjects}
          >
            <span>{expandedProjects ? 'Show fewer' : `Show ${hiddenProjectCount} more projects`}</span>
            <span className="more-arrow" data-open={expandedProjects ? 'on' : 'off'}>↓</span>
          </button>
        ) : null}
      </section>

      <section className="block" data-screen-label="03 Research & Publications">
        <SectionHead number={3} label="Research & Publications" />
        <ul className="xp-list">
          {portfolio.research.map((item) => (
            <li className="xp" key={item.title}>
              <div className="xp-when">
                {item.badge ? <span className="xp-tag">{item.badge}</span> : null}
              </div>
              <div className="xp-body">
                <div className="xp-role">{item.title}</div>
                <div className="xp-org dim">{item.type}</div>
                <BulletList items={item.bullets} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" data-screen-label="04 Education">
        <SectionHead number={4} label="Education" />
        <ul className="edu-list">
          {portfolio.education.map((item) => (
            <li className="edu" key={`${item.institution}-${item.when}`}>
              <div className="edu-when">{item.when}</div>
              <div>
                <div className="edu-deg">{item.degree}</div>
                <div className="edu-school dim">
                  <span>{item.institution}</span>
                  <span> - {item.location}</span>
                </div>
                <BulletList items={item.details} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" data-screen-label="05 Global Exposure">
        <SectionHead number={5} label="Global Exposure & International Programs" />
        <ul className="xp-list">
          {portfolio.globalExposure.map((item) => (
            <li className="xp" key={item.title}>
              <div className="xp-when">{item.when}</div>
              <div className="xp-body">
                <div className="xp-role">{item.title}</div>
                <div className="xp-org">{item.subtitle}</div>
                <BulletList items={item.bullets} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" data-screen-label="06 Research Activities">
        <SectionHead number={6} label="Research Activities" />
        <ul className="ach-list">
          {portfolio.researchActivities.map((item) => (
            <li key={item.text} className={item.isBold ? 'bold-item' : undefined}>
              {item.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="block" data-screen-label="07 Volunteer Positions">
        <SectionHead number={7} label="Volunteer Position of Responsibility" />
        <ul className="xp-list">
          {portfolio.volunteerPositions.map((item) => (
            <li className="xp" key={`${item.organization}-${item.when}`}>
              <div className="xp-when">{item.when}</div>
              <div className="xp-body">
                <div className="xp-role">{item.organization}</div>
                <div className="xp-org">{item.role}</div>
                <BulletList items={item.bullets ?? []} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" data-screen-label="08 Skills">
        <SectionHead number={8} label="Technical Skills" />
        <dl className="skills">
          {portfolio.skills.map((group) => (
            <div className="skill-row" key={group.label}>
              <dt className="skill-k">{group.label}</dt>
              <dd className="skill-v">
                <div className="skill-icons">
                  <div className="skill-pills">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="block" data-screen-label="09 Certifications">
        <SectionHead number={9} label="Certifications & Training" />
        <div className="cert-grid">
          {portfolio.certifications.map((item) => {
            const slug = (s: string) =>
              s
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            const fileName = item.image ? item.image : `${slug(item.title)}.svg`;
            const primaryPath = `/certificates/${fileName}`;
            const fallbackPath = `/assets/certificates/${fileName}`;
            const imgPath = primaryPath;
            return (
              <div className="cert-card" key={`${item.title}-${item.issuer}`}>
                <div className="cert-thumb">
                  <img
                    src={imgPath}
                    alt={`${item.title} certificate`}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      const el = document.activeElement as HTMLElement | null;
                      // open lightbox by dispatching a custom event handled in App
                      window.dispatchEvent(new CustomEvent('open-cert-lightbox', { detail: imgPath }));
                      if (el) el.focus();
                    }}
                    onKeyDown={(e) => { if ((e as React.KeyboardEvent).key === 'Enter') window.dispatchEvent(new CustomEvent('open-cert-lightbox', { detail: imgPath })); }}
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.onerror = null;
                      // if primary path failed, try fallback once
                      if (!el.dataset.fallbackTried) {
                        el.dataset.fallbackTried = '1';
                        el.src = fallbackPath;
                        return;
                      }
                      const placeholder = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23f1ebe1'/><text x='50%' y='50%' font-size='24' fill='%23373737' text-anchor='middle' dominant-baseline='middle'>Certificate</text></svg>";
                      el.src = placeholder;
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className="cert-meta">
                  <div className="cert-title">{item.title}</div>
                  <div className="cert-issuer">{item.issuer}{item.year ? `, ${item.year}` : ''}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="block" data-screen-label="10 Achievements">
        <SectionHead number={10} label="Achievements" />
        <div className="achievement-groups">
          {portfolio.achievementGroups.map((group) => (
            <div className="ach-year" key={group.year}>
              <div className="ach-y">{group.year}</div>
              <ul className="ach-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [theme, setTheme] = React.useState<ThemeName>('dark');
  const [accent, setAccent] = React.useState<AccentName>('sand');
  const [systemTheme, setSystemTheme] = React.useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const resolvedTheme = theme === 'device' ? systemTheme : theme;

  const [lightboxSrc, setLightboxSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightboxSrc(null);
    }
    function onOpen(e: Event) {
      const ev = e as CustomEvent<string>;
      setLightboxSrc(ev.detail);
    }
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-cert-lightbox', onOpen as EventListener);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-cert-lightbox', onOpen as EventListener);
    };
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = resolvedTheme;
    root.dataset.accent = accent;
  }, [resolvedTheme, accent]);

  return (
    <div className="portfolio-wrap" data-theme={resolvedTheme} data-accent={accent}>
      <div className="page">
        <Aside
          theme={theme}
          onThemeChange={setTheme}
          accent={accent}
          onAccentChange={setAccent}
        />
        <Main />
        {lightboxSrc ? (
          <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightboxSrc(null)}>
            <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" aria-label="Close" onClick={() => setLightboxSrc(null)}>✕</button>
              <img src={lightboxSrc} alt="Certificate preview" className="lightbox-img" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
