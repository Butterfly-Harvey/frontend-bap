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

<GovUK.Footer
  company={<GovUK.Footer.Anchor href="https://example.com" target="new">GOV.UK</GovUK.Footer.Anchor>}
  />
  </>
}
export default App;
