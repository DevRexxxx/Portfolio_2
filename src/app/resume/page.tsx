import { Metadata } from 'next';
import styles from './page.module.css';
import resumeData from '@/lib/resume.json';
import PrintButton from './PrintButton';

export const metadata: Metadata = {
  title: 'Resume | Eshaan Singh Deo',
  description: 'Live dynamic resume based on GitHub data.',
};

async function getGitHubData() {
  try {
    const userRes = await fetch('https://api.github.com/users/DevRexxxx', { next: { revalidate: 3600 } });
    const user = await userRes.json();

    const reposRes = await fetch('https://api.github.com/users/DevRexxxx/repos?sort=updated', { next: { revalidate: 3600 } });
    const repos = await reposRes.json();

    return { user, repos };
  } catch (error) {
    console.error('Failed to fetch GitHub data:', error);
    return { user: null, repos: [] };
  }
}

export default async function ResumePage() {
  const { user, repos } = await getGitHubData();

  // Extract unique languages from repos for skills
  const languages = new Set<string>();
  if (Array.isArray(repos)) {
    repos.forEach((repo: any) => {
      if (repo.language) languages.add(repo.language);
    });
  }
  const skills = Array.from(languages);

  // Filter out forks and non-project repos (like the profile readme repo)
  const mainProjects = Array.isArray(repos) 
    ? repos
        .filter((repo: any) => !repo.fork && repo.name !== 'DevRexxxx' && repo.name !== 'Portfolio' && repo.description)
        .slice(0, 4) // Top 4 recent projects
    : [];

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.printControls}>
        <PrintButton />
      </div>

      <header className={styles.header}>
        <div>
          <h1 className={styles.name}>{user?.name || resumeData.basics.name}</h1>
          <h2 className={styles.title}>{resumeData.basics.label}</h2>
        </div>
        <div className={styles.contactInfo}>
          <p>{resumeData.basics.location.city}, {resumeData.basics.location.countryCode}</p>
          <p><a href={`mailto:${resumeData.basics.email}`}>{resumeData.basics.email}</a></p>
          {resumeData.basics.profiles.map(profile => (
            <p key={profile.network}>
              <a href={profile.url}>{profile.url.replace('https://', '')}</a>
            </p>
          ))}
        </div>
      </header>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Summary</h3>
        <p className={styles.itemDescription}>
          {user?.bio || 'B.Tech CSE student specializing in backend development with Python, Django, and DRF. Passionate about building secure, scalable solutions and integrating AI functionality into modern applications.'}
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Skills & Technologies</h3>
        <ul className={styles.skillsList}>
          {skills.length > 0 ? skills.map((skill) => (
            <li key={skill} className={styles.skillBadge}>{skill}</li>
          )) : (
            <>
              <li className={styles.skillBadge}>Python</li>
              <li className={styles.skillBadge}>TypeScript</li>
              <li className={styles.skillBadge}>JavaScript</li>
              <li className={styles.skillBadge}>Django</li>
              <li className={styles.skillBadge}>React / Next.js</li>
              <li className={styles.skillBadge}>MySQL</li>
            </>
          )}
        </ul>
      </section>

      {resumeData.work && resumeData.work.length > 0 && (
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Experience</h3>
          {resumeData.work.map((job: any, index: number) => (
            <div key={index} className={styles.item}>
              <div className={styles.itemHeader}>
                <h4 className={styles.itemTitle}>{job.position} @ {job.company}</h4>
                <span className={styles.itemMeta}>{job.startDate} - {job.endDate || 'Present'}</span>
              </div>
              <p className={styles.itemDescription}>{job.summary}</p>
            </div>
          ))}
        </section>
      )}

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Selected Open Source Projects</h3>
        {mainProjects.map((repo: any) => (
          <div key={repo.id} className={styles.item}>
            <div className={styles.itemHeader}>
              <h4 className={styles.itemTitle}>{repo.name.replace(/[-_]/g, ' ')}</h4>
              <span className={styles.itemMeta}>
                {new Date(repo.created_at).getFullYear()} | {repo.language} {repo.stargazers_count > 0 ? `| ⭐ ${repo.stargazers_count}` : ''}
              </span>
            </div>
            <p className={styles.itemDescription}>{repo.description}</p>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Education</h3>
        {resumeData.education.map((edu: any, index: number) => (
          <div key={index} className={styles.item}>
            <div className={styles.itemHeader}>
              <h4 className={styles.itemTitle}>{edu.institution}</h4>
              <span className={styles.itemMeta}>Expected {new Date(edu.endDate).getFullYear()}</span>
            </div>
            <p className={styles.itemDescription}>{edu.studyType} in {edu.area}.</p>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Achievements & Highlights</h3>
        <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--color-text-muted)' }}>
          {resumeData.awards.map((award: any, index: number) => (
            <li key={index} style={{ marginBottom: '4px' }}>
              <strong>{award.title}</strong> - {award.summary}
            </li>
          ))}
          <li>Maintains {user?.public_repos || 8}+ public repositories on GitHub.</li>
        </ul>
      </section>
    </div>
  );
}
