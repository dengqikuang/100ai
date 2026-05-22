const projects = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: "",
  description: "",
  url: "",
  completed: false,
  tags: [],
  icon: "",
  color: "cyan", // cyan, purple, gold
  size: "normal", // normal, large
  image: "",
}));

export default projects;
