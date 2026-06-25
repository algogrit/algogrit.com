import { useEffect, useState } from "react";

const API_KEY = import.meta.env.PUBLIC_YOUTUBE_API_KEY as string | undefined;
const PLAYLIST_ID =
  (import.meta.env.PUBLIC_TALKS_PLAYLIST_ID as string) ||
  "PL7qtxrxCQ5DBhg0p9p8nDx58FvFR2GVe2";
const CHANNEL_HANDLE =
  (import.meta.env.PUBLIC_CODERMANA_HANDLE as string) || "codermana";

const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;
const CHANNEL_URL = `https://www.youtube.com/@${CHANNEL_HANDLE}`;
const MAX = 8;

// Titles YouTube returns for videos that can't be played/listed.
const UNAVAILABLE = new Set(["Private video", "Deleted video"]);

type Video = { videoId: string; title: string; thumbnail: string };
type Status = "loading" | "ready" | "error";

const watchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;

async function fetchPlaylist(playlistId: string, signal: AbortSignal): Promise<Video[]> {
  const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("maxResults", "12");
  url.searchParams.set("playlistId", playlistId);
  url.searchParams.set("key", API_KEY!);
  const res = await fetch(url.toString(), { signal });
  if (!res.ok) throw new Error(`playlistItems ${res.status}`);
  const data = await res.json();
  const out: Video[] = [];
  for (const item of data.items ?? []) {
    const s = item.snippet ?? {};
    const videoId = s.resourceId?.videoId;
    const title = s.title ?? "";
    const thumbnail = s.thumbnails?.medium?.url ?? s.thumbnails?.default?.url;
    if (!videoId || !thumbnail || UNAVAILABLE.has(title)) continue;
    out.push({ videoId, title, thumbnail });
  }
  return out;
}

async function fetchChannelUploads(handle: string, signal: AbortSignal): Promise<Video[]> {
  const ch = new URL("https://www.googleapis.com/youtube/v3/channels");
  ch.searchParams.set("part", "contentDetails");
  ch.searchParams.set("forHandle", handle);
  ch.searchParams.set("key", API_KEY!);
  const res = await fetch(ch.toString(), { signal });
  if (!res.ok) throw new Error(`channels ${res.status}`);
  const data = await res.json();
  const uploads =
    data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploads) return [];
  return fetchPlaylist(uploads, signal);
}

export default function Talks() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [status, setStatus] = useState<Status>(API_KEY ? "loading" : "error");

  useEffect(() => {
    if (!API_KEY) return;
    const controller = new AbortController();

    (async () => {
      try {
        const [talks, uploads] = await Promise.allSettled([
          fetchPlaylist(PLAYLIST_ID, controller.signal),
          fetchChannelUploads(CHANNEL_HANDLE, controller.signal),
        ]);
        const merged: Video[] = [];
        const seen = new Set<string>();
        // interleave playlist (talks) first, then channel uploads
        for (const r of [talks, uploads]) {
          if (r.status !== "fulfilled") continue;
          for (const v of r.value) {
            if (seen.has(v.videoId)) continue;
            seen.add(v.videoId);
            merged.push(v);
          }
        }
        setVideos(merged.slice(0, MAX));
        setStatus(merged.length ? "ready" : "error");
      } catch (err) {
        if ((err as Error).name !== "AbortError") setStatus("error");
      }
    })();

    return () => controller.abort();
  }, []);

  return (
    <section id="talks" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <h2 className="display text-5xl md:text-6xl font-bold reveal">
            Talks &amp;<br />
            <span className="grad">Videos.</span>
          </h2>
          <div className="flex gap-5 text-sm reveal">
            <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="grad font-semibold hover:underline">
              @codermana ↗
            </a>
            <a href={PLAYLIST_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white font-semibold transition-colors">
              Talks playlist ↗
            </a>
          </div>
        </div>

        {status === "loading" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden card">
                <div className="aspect-video animate-pulse bg-zinc-200 dark:bg-white/5" />
                <div className="p-4">
                  <div className="h-4 w-3/4 rounded animate-pulse bg-zinc-200 dark:bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        )}

        {status === "ready" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {videos.map((v) => (
              <a
                key={v.videoId}
                href={watchUrl(v.videoId)}
                target="_blank"
                rel="noopener noreferrer"
                className="group card rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden bg-zinc-200 dark:bg-white/5">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 grid place-items-center bg-black/0 group-hover:bg-black/30 transition-colors">
                    <span className="h-12 w-12 rounded-full grad-bg grid place-items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium line-clamp-2">{v.title}</h3>
                </div>
              </a>
            ))}
          </div>
        )}

        {status === "error" && (
          <div className="grid sm:grid-cols-2 gap-5">
            <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="gborder lift rounded-2xl glass p-8">
              <h3 className="display text-2xl font-bold mb-2">CoderMana on YouTube</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Talks, tutorials and deep-dives on Go, Rust, Kubernetes and more.</p>
              <span className="grad font-semibold mt-4 inline-block">Watch @codermana →</span>
            </a>
            <a href={PLAYLIST_URL} target="_blank" rel="noopener noreferrer" className="gborder lift rounded-2xl glass p-8">
              <h3 className="display text-2xl font-bold mb-2">Conference talks</h3>
              <p className="text-zinc-600 dark:text-zinc-400">GopherCon and meetup talks, collected as a playlist.</p>
              <span className="grad font-semibold mt-4 inline-block">Watch the playlist →</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
