import { useState } from 'react';
import { ImageOff } from 'lucide-react';

// Large preview + clickable thumbnails. If an image file is missing,
// a neat labelled tile is shown instead of a broken-image icon.
export default function ScreenshotGallery({ shots, title }) {
  const [current, setCurrent] = useState(0);
  const [failed, setFailed] = useState({});
  const shot = shots[current];

  const Tile = ({ s, big }) =>
    failed[s.src] ? (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-purple/20 via-navy-800 to-brand-blue/20 text-ink-muted ${
          big ? 'text-sm' : 'text-[10px]'
        }`}
      >
        <ImageOff size={big ? 28 : 14} />
        <span>{s.label}</span>
      </div>
    ) : (
      <img
        src={s.src}
        alt={`${title}: ${s.label}`}
        loading="lazy"
        onError={() => setFailed((f) => ({ ...f, [s.src]: true }))}
        className="h-full w-full object-cover object-top"
      />
    );

  return (
    <div>
      <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-inner">
        <Tile s={shot} big />
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label={`${title} screenshots`}>
        {shots.map((s, i) => (
          <button
            key={s.src}
            role="tab"
            aria-selected={i === current}
            onClick={() => setCurrent(i)}
            className={`group w-24 shrink-0 text-left sm:w-28 ${i === current ? '' : 'opacity-60 hover:opacity-100'}`}
          >
            <div
              className={`aspect-[16/10] overflow-hidden rounded-lg border transition ${
                i === current ? 'border-brand-purple shadow-glow' : 'border-white/10'
              }`}
            >
              <Tile s={s} />
            </div>
            <span className="mt-1 block truncate text-[11px] text-ink-muted">{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
