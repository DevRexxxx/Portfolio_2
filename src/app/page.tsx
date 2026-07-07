import { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import { workItems, skillsGroups } from '@/lib/data';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Eshaan Singh Deo | Software Development Engineer',
  description: 'Software Development Engineer specializing in backend development and scalable system architecture.',
};

export default function Home() {
  return (
    <div className={styles.page}>
      
      {/* CINEMATIC HERO SECTION */}
      <section className={styles.cinematicHero}>
        
        {/* Top Left */}
        <div className={styles.heroTopLeft}>
          <FadeIn delay={0.1} direction="down">
            <a href="mailto:contact@eshaansinghdeo.com" className={styles.outlineBtn}>Book a call</a>
          </FadeIn>
        </div>
        
        {/* Top Right */}
        <div className={styles.heroTopRight}>
          <FadeIn delay={0.2} direction="down">
            <a href="/resume" className={styles.navLink}>Zenith Studio</a>
            <a href="https://www.linkedin.com/in/eshaan-singh-deo-ba669433a" target="_blank" rel="noopener noreferrer" className={styles.navLink} style={{marginLeft: '24px'}}>LinkedIn</a>
          </FadeIn>
        </div>

        {/* Centerpiece */}
        <div className={styles.heroCenterpiece}>
          <FadeIn delay={0.3} direction="up">
            <h1 className={styles.heroMassiveText}>
              Eshaan<br />
              Singh Deo
            </h1>
          </FadeIn>
          <FadeIn delay={0.5} direction="up">
            <div className={styles.heroAvatarOverlay}>
              <Image 
                src="/images/avatar-violet-hoodie.png" 
                alt="Eshaan Singh Deo" 
                width={220}
                height={220}
                className={styles.heroAvatar}
              />
            </div>
          </FadeIn>
        </div>

        {/* Bottom Left */}
        <div className={styles.heroBottomLeft}>
          <FadeIn delay={0.6} direction="up">
            <p className={styles.cornerText}>
              I currently work as a Software Development Engineer, currently available for work.
            </p>
          </FadeIn>
        </div>

        {/* Bottom Right */}
        <div className={styles.heroBottomRight}>
          <FadeIn delay={0.7} direction="up">
            <p className={styles.cornerText}>
              Focused on scalable architectures and robust backend systems, based in Lucknow, India.
            </p>
          </FadeIn>
        </div>

      </section>

      <div className="container" style={{ marginTop: 'var(--space-9)' }}>
        {/* ABOUT & SKILLS (Split Section) */}
        <section className={styles.splitSection}>
          <div>
            <FadeIn>
              <span className={styles.eyebrow}>About</span>
              <div className={styles.aboutText}>
                <p>
                  I am a Software Development Engineer currently pursuing my B.Tech in CSE at SRMCEM (Class of '28). 
                  I specialize in backend development, focusing on building secure, scalable, and highly efficient architectures.
                </p>
                <p>
                  My approach to software engineering goes beyond just writing code—I believe in understanding the business logic, 
                  optimizing database queries, and ensuring high availability for critical systems.
                </p>
                <p>
                  When I'm not architecting APIs or optimizing SQL, you can usually find me participating in hackathons 
                  or exploring the latest in generative AI and system design. Let's build something robust.
                </p>
              </div>
            </FadeIn>
          </div>
          
          <div>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>Skills</span>
              <div className={styles.skillsCardList}>
                {skillsGroups.map((group, idx) => (
                  <div key={idx} className={styles.skillsCard}>
                    <h4 className={styles.skillsGroupTitle}>{group.category}</h4>
                    <div className={styles.tagsContainer}>
                      {group.items.map((skill) => (
                        <span key={skill} className={styles.tag}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </div>

      {/* SIGNATURE STATUS BAR TICKER */}
      <div style={{ marginTop: 'var(--space-9)' }}>
        <FadeIn direction="none" fullWidth>
          <div className={styles.tickerWrapper}>
            <div className={`${styles.tickerRow} ${styles.tickerRow1}`}>
              <span className={styles.tickerItem}>Currently listening to: Synthwave</span>
              <span className={styles.tickerItem}>//</span>
              <span className={styles.tickerItem}>Learning: Go & Microservices</span>
              <span className={styles.tickerItem}>//</span>
              <span className={styles.tickerItem}>Editor: VS Code</span>
              <span className={styles.tickerItem}>//</span>
              <span className={`${styles.tickerItem} ${styles.tickerActive}`}>Status: Compiling</span>
              <span className={styles.tickerItem}>//</span>
              <span className={styles.tickerItem}>Currently listening to: Synthwave</span>
              <span className={styles.tickerItem}>//</span>
              <span className={styles.tickerItem}>Learning: Go & Microservices</span>
              <span className={styles.tickerItem}>//</span>
              <span className={styles.tickerItem}>Editor: VS Code</span>
              <span className={styles.tickerItem}>//</span>
              <span className={`${styles.tickerItem} ${styles.tickerActive}`}>Status: Compiling</span>
            </div>
            <div className={`${styles.tickerRow} ${styles.tickerRow2}`}>
              <span className={styles.tickerItem}>Recent win: 2x Hackathon Finalist</span>
              <span className={styles.tickerItem}>//</span>
              <span className={styles.tickerItem}>Coffee: Black</span>
              <span className={styles.tickerItem}>//</span>
              <span className={styles.tickerItem}>OS: Linux</span>
              <span className={styles.tickerItem}>//</span>
              <span className={styles.tickerItem}>Vim exit strategy: :wq</span>
              <span className={styles.tickerItem}>//</span>
              <span className={styles.tickerItem}>Recent win: 2x Hackathon Finalist</span>
              <span className={styles.tickerItem}>//</span>
              <span className={styles.tickerItem}>Coffee: Black</span>
              <span className={styles.tickerItem}>//</span>
              <span className={styles.tickerItem}>OS: Linux</span>
              <span className={styles.tickerItem}>//</span>
              <span className={styles.tickerItem}>Vim exit strategy: :wq</span>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="container" style={{ marginTop: 'var(--space-9)' }}>
        
        {/* PREMIUM PROJECT CARDS SECTION */}
        <section>
          <FadeIn>
            <span className={styles.eyebrow}>Projects</span>
          </FadeIn>
          
          <div style={{ marginTop: 'var(--space-5)' }}>
            {workItems.map((project, idx) => (
              <FadeIn key={project.id} delay={0.1}>
                <div className={styles.premiumProjectCard}>
                  
                  {/* Left Side: Content */}
                  <div className={styles.projectContentLeft}>
                    <div className={styles.projectCircleBtns}>
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.circleBtn}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        </a>
                      )}
                      {project.deploymentLink && (
                        <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer" className={styles.circleBtn}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                        </a>
                      )}
                    </div>
                    
                    <h3 className={styles.projectTitleHuge}>{project.title}</h3>
                    <p className={styles.projectDescLarge}>{project.description}</p>
                    
                    <div className={styles.projectTechUppercase}>
                      {project.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Laptop Mockup */}
                  <div className={styles.laptopMockup}>
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className={styles.mockupImage}
                      />
                    ) : (
                      <div className={styles.mockupImage} style={{ backgroundColor: '#111' }}></div>
                    )}
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* STUDIO / OFFER BANNER */}
        <section style={{ marginTop: 'var(--space-9)' }}>
          <FadeIn>
            <div className={styles.studioBanner}>
              <span className={styles.studioOffer}>Available for freelance</span>
              <h2>Need a robust backend architecture?</h2>
              <p>I help startups and founders build scalable systems from the ground up.</p>
              <a href="mailto:contact@eshaansinghdeo.com" className={styles.btnPrimary} style={{ marginTop: 'var(--space-2)' }}>Let's talk architecture</a>
            </div>
          </FadeIn>
        </section>

        {/* CONTACT */}
        <section style={{ marginTop: 'var(--space-9)' }}>
          <FadeIn>
            <span className={styles.eyebrow}>Contact</span>
            <div className={styles.contactSection}>
              <h2>Let's build something.</h2>
              <p>Currently open for new opportunities and freelance backend architecture projects.</p>
              <div className={styles.contactActions}>
                <a href="mailto:contact@eshaansinghdeo.com" className={styles.btnPrimary}>Send an email</a>
                <a href="https://github.com/DevRexxxx" target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>GitHub</a>
                <a href="https://www.linkedin.com/in/eshaan-singh-deo-ba669433a" target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>LinkedIn</a>
              </div>
            </div>
          </FadeIn>
        </section>

      </div>
    </div>
  );
}
