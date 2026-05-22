import Header from "./components/Header";
import Grid from "./components/Grid";
import projects from "./data/projects";
import "./App.css";

function App() {
  const completedCount = projects.filter((p) => p.completed).length;

  return (
    <div className="text-on-surface font-[Sora] overflow-x-hidden">
      <Header completedCount={completedCount} />

      <main className="pt-32 pb-20 px-section-margin max-w-container-max mx-auto min-h-screen">
        {/* Hero */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h1 className="font-[Sora] text-5xl text-primary font-bold tracking-tight mb-4">
                神经档案馆
              </h1>
              <p className="text-on-surface-variant max-w-xl">
                100个自主智能实验的系统记录。每一个单元都代表了合成生态系统中的独特架构演变。
              </p>
            </div>
            <div className="flex gap-4">
              <div className="p-4 border border-outline-variant/20 bg-surface-container-low rounded-lg">
                <p className="font-[JetBrains_Mono] text-xs text-outline mb-1 font-bold">
                  运行时间
                </p>
                <p className="font-[JetBrains_Mono] text-2xl text-primary-container font-medium">
                  99.98%
                </p>
              </div>
              <div className="p-4 border border-outline-variant/20 bg-surface-container-low rounded-lg">
                <p className="font-[JetBrains_Mono] text-xs text-outline mb-1 font-bold">
                  延迟
                </p>
                <p className="font-[JetBrains_Mono] text-2xl text-secondary font-medium">
                  14MS
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <Grid projects={projects} />
      </main>

      {/* Footer */}
      <footer className="w-full py-section-margin border-t border-outline-variant/20 bg-background mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center px-section-margin gap-cell-gap max-w-container-max mx-auto">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant font-bold">
              100 AI 项目
            </span>
            <span className="font-[JetBrains_Mono] text-sm text-secondary-fixed-dim">
              © 2024 神经档案馆。保留所有权利。
            </span>
          </div>
          <div className="flex gap-8">
            <a
              className="font-[JetBrains_Mono] text-sm text-outline hover:text-secondary hover:tracking-widest transition-all duration-500"
              href="#"
            >
              终端
            </a>
            <a
              className="font-[JetBrains_Mono] text-sm text-outline hover:text-secondary hover:tracking-widest transition-all duration-500"
              href="#"
            >
              系统日志
            </a>
            <a
              className="font-[JetBrains_Mono] text-sm text-outline hover:text-secondary hover:tracking-widest transition-all duration-500"
              href="#"
            >
              数据流
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-primary-container animate-pulse" />
              <div className="w-2 h-2 bg-primary-container/40" />
              <div className="w-2 h-2 bg-primary-container/20" />
            </div>
            <span className="font-[JetBrains_Mono] text-[10px] text-outline">
              已建立安全连接
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
