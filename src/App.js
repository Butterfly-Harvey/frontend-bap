import * as React from 'react';
import * as GovUK from 'govuk-react';

function App() {
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
