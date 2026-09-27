export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background-card text-center">
      <p className="text-sm text-foreground-muted">
        © {new Date().getFullYear()} Jara. All rights reserved. Built with Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}
