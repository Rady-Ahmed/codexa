export default function RouteLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex items-center gap-3">
        <span className="mono-badge text-xs text-(--color-cyan)">&lt;/&gt;</span>
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-(--color-border) border-t-(--color-indigo)" />
      </div>
    </div>
  );
}
