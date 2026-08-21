import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 font-heading text-xl font-semibold text-foreground">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die gewünschte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-xl font-semibold tracking-tight text-foreground">
          Diese Seite konnte nicht geladen werden
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Etwas ist auf unserer Seite schiefgelaufen. Sie können es erneut versuchen oder zur Startseite zurückkehren.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VDT Touristik GmbH Berlin" },
      { name: "description", content: "Ihr Reisebüro in Berlin – persönliche Beratung, Flugtickets und Reiseangebote. IATA akkreditierter Agent." },
      { name: "author", content: "VDT Touristik GmbH" },
      { property: "og:title", content: "VDT Touristik GmbH Berlin" },
      { property: "og:description", content: "Ihr Reisebüro in Berlin – persönliche Beratung, Flugtickets und Reiseangebote. IATA akkreditierter Agent." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "VDT Touristik GmbH Berlin" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Nunito+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-vdt flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold text-primary">VDT</span>
          <span className="hidden text-sm font-medium text-foreground sm:inline">Touristik GmbH</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-4">
          <NavLink to="/">Startseite</NavLink>
          <NavLink to="/angebote">Angebote</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      activeProps={{ className: "text-primary font-semibold" }}
      className="rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-3"
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-vdt-blue-dark text-primary-foreground">
      <div className="container-vdt py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-heading text-lg font-semibold">VDT Touristik GmbH</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Ihr Reisebüro in Berlin mit persönlicher Beratung, Flugtickets und Reiseangeboten.
            </p>
            <p className="mt-4 text-xs text-primary-foreground/60">IATA Accredited Agent</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold">Kontakt</h3>
            <address className="mt-2 not-italic text-sm text-primary-foreground/80">
              <p>Rhinstraße 185</p>
              <p>13053 Berlin</p>
              <p className="mt-2">Tel.: 030 54 39 88 70</p>
              <p>Mo–Fr: 9:00–17:00 Uhr</p>
            </address>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold">Rechtliches</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link to="/impressum" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} VDT Touristik GmbH Berlin. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
