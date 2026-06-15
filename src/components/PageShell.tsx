type PageShellProps = {
  title: string;
  children: React.ReactNode;
};

export default function PageShell({ title, children }: PageShellProps) {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        <div className="mt-4 space-y-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {children}
        </div>
      </main>
    </div>
  );
}
