import { type ReactNode } from 'react';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { Layout, usePageMeta } from '@/components/site';
import Home from '@/pages/home';
import Metals from '@/pages/metals';
import Chemicals from '@/pages/chemicals';
import Forestry from '@/pages/forestry';

function NotFound() {
  usePageMeta('/');
  return (
    <div className="wrap py-20 text-center">
      <p className="mono text-[13px]" style={{ color: 'var(--fg-muted)' }}>404</p>
      <h1 className="mt-2 text-[28px] font-semibold">This page is not part of the schema.</h1>
      <p className="mt-3" style={{ color: 'var(--fg-muted)' }}>The address you followed does not resolve to a page.</p>
      <Link href="/" className="btn mt-6" data-testid="link-404-home">Back to material identity</Link>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/metals" component={Metals} />
        <Route path="/metals/" component={Metals} />
        <Route path="/chemicals" component={Chemicals} />
        <Route path="/chemicals/" component={Chemicals} />
        <Route path="/forestry" component={Forestry} />
        <Route path="/forestry/" component={Forestry} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Layout>
        <Router />
      </Layout>
    </WouterRouter>
  );
}

export default App;
