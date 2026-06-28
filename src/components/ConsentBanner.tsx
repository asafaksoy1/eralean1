type ConsentBannerProps = {
  onAccept: () => void;
  onReject: () => void;
};

export function ConsentBanner({ onAccept, onReject }: ConsentBannerProps) {
  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[200] border-t border-white/10 bg-[#0a0a0a] px-6 py-5 md:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-white/70">
          We use cookies for analytics and ad measurement (Google, Meta) to
          understand how visitors use this site. You can accept or decline —
          the site works either way.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onReject}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={onAccept}
            className="rounded-full bg-volt px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#a8e600]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
