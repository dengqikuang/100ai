const projects = Array.from({ length: 100 }, (_, i) => {
  if (i === 0) {
    return {
      id: 1,
      name: "AI 信源阅读",
      description: "AI 驱动的 RSS 阅读器，自动过滤、摘要和分类信息源，高效追踪 AI 领域动态。",
      url: "https://ai-reader.lyucan.cn",
      completed: true,
      tags: ["Next.js", "SQLite", "DeepSeek"],
      icon: "article",
      color: "cyan",
      size: "normal",
      image: "",
    };
  }
  if (i === 1) {
    return {
      id: 2,
      name: "行业 100 关键词图谱",
      description: "输入一个行业，递归生成约 100 个核心关键词和概念关系星图，快速建立行业认知。",
      url: "https://100keywords.lyucan.cn",
      completed: true,
      tags: ["DeepSeek", "可视化"],
      icon: "hub",
      color: "purple",
      size: "normal",
      image: "",
    };
  }
  return {
    id: i + 1,
    name: "",
    description: "",
    url: "",
    completed: false,
    tags: [],
    icon: "",
    color: "cyan",
    size: "normal",
    image: "",
  };
});

export default projects;
