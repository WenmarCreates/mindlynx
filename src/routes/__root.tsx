import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MindLynx Billing Solutions — Behavioral Health Billing Specialists" },
      { name: "description", content: "Get paid faster, reduce denials, and increase monthly revenue. Specialist behavioral health billing for mental health, therapy, and substance abuse practices." },
      { name: "author", content: "MindLynx Billing Solutions" },
      { property: "og:title", content: "MindLynx Billing Solutions — Behavioral Health Billing Specialists" },
      { property: "og:description", content: "Get paid faster, reduce denials, and increase monthly revenue. Specialist behavioral health billing for mental health, therapy, and substance abuse practices." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MindLynx Billing Solutions — Behavioral Health Billing Specialists" },
      { name: "twitter:description", content: "Get paid faster, reduce denials, and increase monthly revenue. Specialist behavioral health billing for mental health, therapy, and substance abuse practices." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/454f1c73-1d37-44e2-bc90-f859580f62cc/id-preview-1863f495--102eb27c-0071-41a0-bd85-f3cfa4755669.lovable.app-1776689193547.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/454f1c73-1d37-44e2-bc90-f859580f62cc/id-preview-1863f495--102eb27c-0071-41a0-bd85-f3cfa4755669.lovable.app-1776689193547.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  return <Outlet />;
}
