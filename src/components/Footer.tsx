import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic,
  Layout,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/album.jpg" width={56} height={56} alt="Capa do album" />
        <div className="flex flex-col">
          <strong className="font-normal">Thunder</strong>
          <span className="text-xs text-zinc-400">Imagine Dragons</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="w-96 h-1 bg-zinc-600 rounded-full">
            <div className="w-1/3 h-full bg-zinc-200 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">2:41</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic size={20} className="text-zinc-200" />
        <Layout size={20} className="text-zinc-200" />
        <Laptop2 size={20} className="text-zinc-200" />

        <div className="flex items-center gap-2">
          <Volume size={20} className="text-zinc-200" />
          <div className="w-24 h-1 bg-zinc-600 rounded-full">
            <div className="w-1/3 h-full bg-zinc-200 rounded-full"></div>
          </div>
        </div>

        <Maximize2 size={20} className="text-zinc-200" />
      </div>
    </footer>
  );
}
