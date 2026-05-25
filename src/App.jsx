import Header from "./components/Header";
import Grid from "./components/Grid";
import projects from "./data/projects";
import "./App.css";

function App() {
  const completedCount = projects.filter((p) => p.completed).length;
  const pendingCount = projects.length - completedCount;
  const completionRate = Math.round((completedCount / projects.length) * 100);
  const featuredProjects = projects.filter((p) => p.completed).slice(0, 2);

  return (
    <div className="min-h-screen text-on-surface font-[Sora] overflow-x-hidden">
      <Header completedCount={completedCount} />

      <main className="pt-28 pb-20 px-section-margin max-w-container-max mx-auto">
        <section className="hero-shell mb-14">
          <div className="hero-copy">
            <span className="eyebrow">Vibe Coding Archive</span>
            <h1 className="hero-title">
              <span>100 个 AI 产品</span>
              <span>把想法做成</span>
              <span>能打开的东西。</span>
            </h1>
            <p className="hero-lede">
              这里记录从问题、原型到上线的连续实验。每个格子都是一个产品位置，已上线的可以直接访问，未完成的保留为空位，提醒下一次动手。
            </p>
          </div>

          <div className="progress-panel" aria-label="项目进度">
            <div className="progress-head">
              <span>完成进度</span>
              <strong>{completionRate}%</strong>
            </div>
            <div className="progress-track">
              <span style={{ width: `${completionRate}%` }} />
            </div>
            <dl className="progress-stats">
              <div>
                <dt>已上线</dt>
                <dd>{String(completedCount).padStart(2, "0")}</dd>
              </div>
              <div>
                <dt>待实现</dt>
                <dd>{String(pendingCount).padStart(2, "0")}</dd>
              </div>
              <div>
                <dt>总目标</dt>
                <dd>100</dd>
              </div>
            </dl>
          </div>
        </section>

        {featuredProjects.length > 0 && (
          <section className="featured-strip" aria-label="已上线项目">
            <div>
              <span className="section-kicker">已上线</span>
              <h2>先看已经跑起来的产品</h2>
            </div>
            <div className="featured-list">
              {featuredProjects.map((project) => (
                <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer">
                  <span>{String(project.id).padStart(3, "0")}</span>
                  <strong>{project.name}</strong>
                  <em>访问</em>
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="archive-head">
          <div>
            <span className="section-kicker">Archive</span>
            <h2>产品格子</h2>
          </div>
        </section>

        <Grid projects={projects} />
      </main>

      <footer className="site-footer">
        <div>
          <span className="footer-mark">100 AI</span>
          <span>持续记录 AI 产品实验</span>
        </div>
        <div className="footer-signal" aria-label="连接状态">
          <span />
          <span />
          <span />
          <em>ONLINE</em>
        </div>
      </footer>
    </div>
  );
}

export default App;
