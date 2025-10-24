import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <article className="resume">
      <header className="resume__header">
      <div className="resume-header">
        <h1 className="resume__name">RUDOLPH SCOTT</h1>
        <p className="resume__contacts">
            <span>📞 (619) 920-6973</span>
            <span>📧 <a href="mailto:rudolph.scott@rocketmail.com">rudolph.scott@rocketmail.com</a></span>
            <span>🔗 <a href="https://linkedin.com/in/rudolphscott" target="_blank" rel="noreferrer">linkedin.com/in/rudolphscott</a></span>
        </p>
        <h2 className="resume__title">Sr. Manager, Software Quality Engineering</h2>
      </div>
        
      </header>

      <section>
        <h3>SUMMARY</h3>
        <p>
          Seasoned Quality Engineering Leader with 25+ years of experience delivering high-quality
          software across web, mobile, and AI-powered platforms. Adept at building and mentoring
          high-performing teams, fostering innovation, scaling automation, and partnering with Product
          and Engineering to deliver reliable software at speed. Recognized for transforming flaky pipelines,
          accelerating delivery, and cultivating a culture of engineering excellence.
        </p>
      </section>

      <section>
        <h3>ACHIEVEMENTS</h3>
        <ul>
          <li><strong>Leadership & Culture:</strong> Fostered a high-performance culture by improving test reliability, accelerating delivery, and elevating overall quality standards across the engineering organization.</li>
          <li><strong>KPIs & Metrics:</strong> Established and tracked key performance indicators (release readiness, automation coverage, defect trends) to drive data-driven decision-making.</li>
          <li><strong>Innovation & Tooling:</strong> Consolidated frameworks, built custom debugging reports, and improved developer velocity by leveraging the Windsurf AI IDE.</li>
          <li><strong>Automation & CI/CD:</strong> Embedded regression suites into CI to run before/after PR merges; transformed unreliable tests into high-signal pipelines, reducing cycle time and strengthening quality culture.</li>
          <li><strong>Parallel Execution:</strong> Migrated tests to parallel containerized environments and cloud grids (BrowserStack, Sauce Labs, AWS) — cutting cycle time and increasing throughput.</li>
          <li><strong>Smart Test Selection:</strong> Implemented test-impact analysis and tagging to execute only relevant tests per change.</li>
          <li><strong>Data Setup Automation:</strong> Automated test-data generation and environment resets to eliminate manual setup delays.</li>
          <li><strong>Defect Triage:</strong> Introduced weekly triage with defined ownership, shortening feedback loops and improving response time.</li>
        </ul>
      </section>

      <section>
        <h3>PROFESSIONAL EXPERIENCE</h3>

        <div className="role">
          <div className="role__meta">
            <h4>Sr. Manager, Software Quality Engineering — ServiceNow</h4>
            <span>San Diego, CA • Jul 2019 – Present</span>
          </div>
          <ul>
            <li>Lead five cross-functional QE teams (22 directs) across US, IDC, and TLV, aligning test strategy, automation, and release governance across web, mobile, and GenAI platforms.</li>
            <li>Defined org-wide quality roadmap; established release criteria, go/no-go checklists, and defect SLAs.</li>
            <li>Expanded automation coverage from 30 → 90% and reduced regression cycle time from 10 → 5 days via unified strategy and enablement.</li>
            <li>Introduced risk-based testing and shift-left practices, reducing customer-reported regressions by 20%.</li>
            <li>Partnered with Dev, Support, and Product to resolve escalations and deploy preventive measures.</li>
            <li>Enhanced JMeter-based performance coverage and reliability baselines.</li>
            <li>Led flaky-test remediation initiative (ownership, SLAs, quarantine policies) — cutting flakiness by 30% and restoring developer trust.</li>
            <li>Partnered with Accessibility to achieve 95% WCAG 2.1 AA compliance across core experiences.</li>
            <li>Analyzed telemetry to close performance gaps; designed load scenarios that boosted throughput by 25% and enabled early bottleneck detection.</li>
          </ul>
        </div>

        <div className="role">
          <div className="role__meta">
            <h4>Sr. Manager, Software Quality Engineering — GoFundMe</h4>
            <span>San Diego, CA • Nov 2015 – Jul 2019</span>
          </div>
          <ul>
            <li>Scaled QE team from 2 → 15; mentored engineers and established best practices.</li>
            <li>Designed TestNG + Selenium/Appium frameworks enabling parallel web/mobile execution on Sauce Labs.</li>
            <li>Built CI/CD pipeline executing automation on every PR for early defect detection.</li>
            <li>Integrated Swagger for API automation and created custom test-result dashboards.</li>
            <li>Aligned test strategy with PM/QE/Dev during feature expansion without impacting release cadence.</li>
            <li>Increased coverage via customer-usage alignment and stakeholder reporting.</li>
          </ul>
        </div>

        <div className="role">
          <div className="role__meta">
            <h4>Manager, Software Development Engineer in Test — Xifin</h4>
            <span>San Diego, CA • Jun 2014 – Nov 2015</span>
          </div>
          <ul>
            <li>Managed 6 engineers; implemented automation framework and training programs.</li>
            <li>Automated SaaS medical-billing platform using Selenium &amp; SOAP (Groovy).</li>
            <li>Built Jenkins CI/CD jobs and SQL validation queries.</li>
            <li>Developed Spring MVC dashboard with FusionCharts for QA metrics.</li>
          </ul>
        </div>

        <div className="role">
          <div className="role__meta">
            <h4>Lead Sr. Software Quality Engineer — Digital Deluxe Studio, ActiveNetwork, Leadfusion, ID Analytics</h4>
            <span>San Diego, CA • 2010 – 2013</span>
          </div>
          <ul>
            <li>Automated SaaS platforms using Selenium, Ruby/RSpec, and SOAPUI; improved coverage and reliability.</li>
            <li>Established QE departments, reporting standards, and quality metrics.</li>
            <li>Partnered with stakeholders to improve QA processes and reduce defect leakage.</li>
          </ul>
        </div>

        <div className="role">
          <div className="role__meta">
            <h4>Software Quality Engineer — DivX / Intuit / Tech4Learning</h4>
            <span>San Diego, CA • 2004 – 2010</span>
          </div>
          <ul>
            <li>Led QA for digital media and financial software across web and desktop.</li>
            <li>Automated regression testing via SilkTest, Perl, and Selenium.</li>
            <li>Mentored junior engineers and managed offshore QA resources.</li>
          </ul>
        </div>

        <div className="role">
          <div className="role__meta">
            <h4>Web Developer — San Diego S.A.Y Inc</h4>
            <span>San Diego, CA • Jan 2002 – May 2004</span>
          </div>
          <ul>
            <li>Led development and testing of after-school program web app through full SDLC.</li>
            <li>Created test plans, executed manual/UI testing, and resolved defects.</li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <h3>EDUCATION</h3>
          <ul>
          <p><li><strong>B.S. in Computer Science</strong> — San Diego State University (2004)</li></p>
          </ul>
       
          <h3>TECHNOLOGIES</h3>
          <ul>
          <p><li><strong>Languages:</strong> Java, Ruby, JavaScript</li></p>
          <p><li><strong>Frameworks:</strong> Selenium, Appium, Expresso, XCUITest, TestCafe, TestNG, JUnit, Cucumber</li></p>
          <p><li><strong>CI/CD:</strong> Jenkins, GitHub Actions, CircleCI, Docker, Kubernetes</li></p>
          <p><li><strong>Performance:</strong> JMeter, WebPageTest</li></p>
          <p><li><strong>Accessibility:</strong> Axe, Evinced</li></p>
          <p><li><strong>Platforms:</strong> BrowserStack, Sauce Labs, AWS</li></p>
          </ul>
        </div>
      </section>
    </article>
  );
}