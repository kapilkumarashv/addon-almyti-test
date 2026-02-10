import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950 selection:bg-indigo-500/30">
      {/* Background Glow decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 blur-[120px] rounded-full" />

      <main className="relative flex flex-col items-center justify-center p-8 sm:p-20 z-10">
        <div className="flex flex-col items-center gap-8 text-center">
          
          {/* Logo Section */}
          

          {/* Attractive Hello World */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 dark:from-indigo-400 dark:to-cyan-400">
              Hello World
            </h1>
            <p className="max-w-[42ch] text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              Testing the add-on feature in gmeet 
            </p>
          </div>

          {/* Action Buttons */}

        </div>
      </main>
    </div>
  );
}