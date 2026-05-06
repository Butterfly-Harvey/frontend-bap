import * as React from 'react';
import './stylesheets/dwp.css';

function Header() {
  return (
    <header className="dwp-header">
      <div className="dwp-header__content">
        <div className="dwp-header__service-name">
          <a href="#" className="dwp-header__link">Butterfly Test</a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="dwp-footer">
      <div className="dwp-footer__meta">
        <div className="dwp-footer__meta-item">
          <ul className="dwp-footer__inline-list">
            <li className="dwp-footer__inline-list-item">
              <a className="dwp-footer__link" href="https://design-system.service.gov.uk/accessibility-statement/" target="_blank" rel="noopener noreferrer">
                Accessibility Statement
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 15px' }}>
        <main id="main-content" style={{ padding: '40px 0' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Welcome to the example application.</h1>
          <p>Click Sign In to continue.</p>
          <button style={{ background: '#00703c', color: '#fff', padding: '8px 16px', border: 'none', cursor: 'pointer', fontWeight: 700 }}>
            Sign In
          </button>
        </main>
      </div>
      <Footer />
    </>
  );
}

  return <>
    {/* <GovUK.H2>Welcome to the govuk-react example application.</GovUK.H2>
    <GovUK.Paragraph>Click Start to continue.</GovUK.Paragraph>
    <GovUK.Button>
      Start now
    </GovUK.Button> */}

<GovUK.TopNav
  company={<GovUK.TopNav.Anchor href="https://example.com" target="new">GOV.UK</GovUK.TopNav.Anchor>}
  serviceTitle={<GovUK.TopNav.NavLink href="https://example.com" target="new">Butterfly Test</GovUK.TopNav.NavLink>}
/>
<GovUK.Main>
  <GovUK.H1>Welcome to the  example application.</GovUK.H1>
  <GovUK.Paragraph>Click Sign In to continue.</GovUK.Paragraph>
  <GovUK.Button>
    Sign In
  </GovUK.Button>
</GovUK.Main>

<GovUK.Footer meta={<meta_links heading="Support links"><link__FooterLink  href="https://design-system.service.gov.uk/accessibility-statement/" target="new"> <a href='https://design-system.service.gov.uk/accessibility-statement/' target='_blank' rel='noopener noreferrer'>Accessibility Statement</a></link__FooterLink></meta_links>} />
  </>
}
export default App;