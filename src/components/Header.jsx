function Header({ completedCount }) {
  const progress = completedCount;

  return (
    <header className="fixed top-0 w-full bg-surface/80 backdrop-blur-md border-b border-white/10 shadow-[0_0_15px_rgba(0,240,255,0.1)] z-50">
      <div className="flex justify-between items-center px-section-margin py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <span className="font-[Sora] text-2xl text-primary-container tracking-tighter font-bold">
            100 AI
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="font-[JetBrains_Mono] text-xs text-primary-container font-bold">
              {progress} / 100 已完成
            </span>
            <div className="w-32 h-1 bg-surface-container-highest mt-1">
              <div
                className="h-full bg-primary-container shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <span className="material-symbols-outlined text-primary-container hover:scale-110 transition-transform cursor-pointer">
            account_circle
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
