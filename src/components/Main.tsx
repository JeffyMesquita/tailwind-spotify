import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a
          href="#"
          className="group bg-white/5 flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>Thunder</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="group bg-white/10 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors"
        >
          <Image
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>Thunder</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="group bg-white/10 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors"
        >
          <Image
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>Thunder</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="group bg-white/10 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors"
        >
          <Image
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>Thunder</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="group bg-white/10 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors"
        >
          <Image
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>Thunder</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/10 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors"
        >
          <Image
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>Thunder</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
      </div>

      <h2 className="font-semibold text-2xl mt-10">
        Made for Jeferson Mesquita
      </h2>

      <div className="grid grid-cols-10 gap-4 mt-4">
        <a
          href="#"
          className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Bla bla bla, etc etc e tal, write anything
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Bla bla bla, etc etc e tal, write anything
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Bla bla bla, etc etc e tal, write anything
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Bla bla bla, etc etc e tal, write anything
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Bla bla bla, etc etc e tal, write anything
          </span>
        </a>
      </div>
    </main>
  );
}