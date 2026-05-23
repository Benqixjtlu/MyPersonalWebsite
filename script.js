const translations = {
  zh: {
    "nav.education": "教育",
    "nav.about": "关于",
    "nav.experience": "经历",
    "nav.projects": "项目",
    "nav.skills": "技能",
    "nav.interests": "兴趣",
    "nav.contact": "联系",
    "nav.resume": "简历",
    "hero.eyebrow": "AI 软件工程 / 计算机科学",
    "hero.name": "张本祺 Zhang Benqi",
    "hero.lede": "构建服务于生产、安全与田间研究场景的智能体 AI 与数据系统。",
    "hero.summary": "西交利物浦大学计算机科学研究型硕士在读，美国爱达荷大学计算机科学本科毕业。我的工作覆盖 GenAI 智能体、工业数据平台、汽车功能安全与应用感知研究。",
    "hero.projects": "查看项目",
    "hero.contact": "联系我",
    "hero.resume": "下载简历",
    "hero.photo.caption1": "GenAI 系统",
    "hero.photo.caption2": "安全与感知",
    "education.kicker": "教育",
    "education.title": "计算机科学基础，叠加研究经历与国际化工程语境。",
    "edu.xjtlu.date": "09/2025-06/2027",
    "edu.xjtlu.title": "西交利物浦大学",
    "edu.xjtlu.desc": "计算机科学研究型硕士，智能工程学院与江苏省产业技术研究院。",
    "edu.uidaho.ra.date": "05/2024-01/2025",
    "edu.uidaho.ra.title": "爱达荷大学",
    "edu.uidaho.ra.desc": "机械工程全奖研究助理，方向涉及精准农业机器人与感知研究。",
    "edu.uidaho.bs.date": "08/2020-05/2024",
    "edu.uidaho.bs.title": "爱达荷大学",
    "edu.uidaho.bs.desc": "计算机科学理学学士，工程学院。GPA 3.6/4.0，Dean's List，雅思 7.0。",
    "about.kicker": "个人简介",
    "about.title": "从领域需求到生产软件的应用 AI 系统构建。",
    "about.copy1": "我将领域复杂的问题转化为可测试、可部署、可使用的软件系统：生产计划智能体、RAG 知识平台、功能安全工具，以及农业研究中的感知模型。",
    "about.copy2": "我的工作位于工程落地与应用研究之间，能够从需求分析、数据建模推进到后端服务、前端界面、CI/CD、云端部署与模型评估。",
    "experience.kicker": "经历",
    "experience.title": "在工业 AI、医疗、功能安全与科研场景中进行工程实践。",
    "exp.bosch.date": "02/2025-08/2025，05/2026-至今",
    "exp.bosch.title": "MOE 1.2，博世汽车系统",
    "exp.bosch.desc": "参与电池与电机产线 MES 工作流，覆盖 MAS 与 Databricks 数据操作，并分析 M/T-Loss、CpK 等生产指标。",
    "exp.bosch.desc2": "构建自动排产与 FMEA / 生产指导书生成 Agent 的后端逻辑，支持自然语言生产规划、质量成本分析、Azure DevOps CI/CD、Docker 服务与 Kubernetes 部署。",
    "exp.astrazeneca.date": "03/2026-05/2026",
    "exp.astrazeneca.title": "数字医疗部门，阿斯利康",
    "exp.astrazeneca.desc": "面向跨部门业务需求，使用 Python、.NET 与全栈工程实践开发并部署 Agent 项目，集成 AstraZeneca AI-Gateway 与医疗领域知识。",
    "exp.tsinghua.date": "12/2025-03/2026",
    "exp.tsinghua.title": "电子安全中心，清华大学苏州汽车研究院",
    "exp.tsinghua.desc": "开发 ISO 26262 功能安全 HARA 工具，覆盖 MATLAB / Simulink 仿真、ODD 场景生成、驱动与制动失效注入、SEC 推导、ASIL 评级与安全目标输出。",
    "exp.uidaho.date": "05/2024-01/2025",
    "exp.uidaho.title": "研究助理，爱达荷大学精准农业机器人实验室",
    "exp.uidaho.desc": "将 YOLO 与 SAM 用于作物病害检测和产量预测，设计标注规范，优化注意力结构，并支持 Jetson Nano、GPR Radar 与 DJI 无人机田间数据采集。",
    "projects.kicker": "项目",
    "projects.title": "在 AI 能力与领域约束交界处构建的代表性系统。",
    "project.hara.title": "大语言模型辅助汽车功能安全 HARA 自动分析工具",
    "project.hara.date": "12/2025-03/2026",
    "project.hara.desc": "结合汽车法规知识与 AI 推理能力提升 HARA 分析效率。将 MATLAB / Simulink 仿真逻辑迁移至 Python，生成 ODD 场景，自动化失效仿真，并将仿真结果作为上下文输入大模型。",
    "project.bosch.title": "博世 RBCWE2E GenAI Connectivity Platform",
    "project.bosch.date": "01/2025-08/2025",
    "project.bosch.desc": "开发并部署两个 Agent，初步产出 48V 电池产线两周生产计划，并生成接近 50% 的生产指导辅助内容。参与基于 MES、SAP、客户数据、Azure OpenAI、Databricks 与 RBS 语义库的 RAG 架构。",
    "project.gpr.title": "探地雷达 GPR 在田间块茎检测与预测中的应用",
    "project.gpr.date": "05/2024-01/2025",
    "project.gpr.desc": "基于 GPR 开发无损块茎检测协议以提升马铃薯产量估算精度。处理数千组育种样本，使用 MATLAB 与 Radan7 增强 B-Scan 信号，并构建结合注意力机制的 YOLOv8 模型，在复杂田间场景达到 83% 准确率。",
    "skills.kicker": "技能",
    "skills.title": "支撑 AI 产品、数据系统与研究原型的实用技术栈。",
    "skills.languages": "编程语言",
    "skills.ai": "AI / 机器学习",
    "skills.engineering": "工程开发",
    "skills.cloud": "云与工具",
    "skills.research": "安全 / 研究",
    "interests.kicker": "工作之外",
    "interests.title": "健身、游戏、历史与旅行，让我在代码之外保持纪律、系统感、历史视角与好奇心。",
    "interests.map.label": "个人地图",
    "interests.map.title": "塑造路径的地点",
    "interests.map.caption": "一张静态旅行速写，并非完整旅行记录：学习、研究，以及仍然开放的下一段路线。",
    "interests.pin.suzhou": "苏州",
    "interests.pin.wuxi": "无锡",
    "interests.pin.shanghai": "上海",
    "interests.pin.moscow": "莫斯科，爱达荷",
    "interests.pin.next": "下一站",
    "interests.readout.pnw": "美国西北",
    "interests.readout.delta": "长三角",
    "interests.readout.open": "开放路线",
    "interests.fitness.title": "健身",
    "interests.fitness.desc": "力量训练让我把进步保持为可衡量、可感知、也足够诚实的长期过程。",
    "interests.games.title": "游戏",
    "interests.games.desc": "我喜欢策略与交互系统，尤其是简单规则如何产生复杂行为。",
    "interests.history.title": "历史",
    "interests.history.desc": "历史让我用更大的尺度理解技术工作：制度、动机与长期后果。",
    "interests.travel.title": "旅行",
    "interests.travel.desc": "旅行会重置观察角度，让不同城市、工具与文化里的解决问题方式变得可见。",
    "contact.kicker": "联系",
    "contact.title": "欢迎交流 AI 工程、智能体系统与应用研究方向。",
    "contact.resume": "下载简历",
    "footer.copy": "为 AI 软件工程工作设计的静态个人主页。",
    "footer.top": "返回顶部"
  }
};

const defaultText = new Map();
const translatableNodes = document.querySelectorAll("[data-i18n]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageLabel = document.querySelector("[data-lang-label]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const header = document.querySelector("[data-header]");
const sections = document.querySelectorAll("main section[id]");
const revealNodes = document.querySelectorAll("[data-reveal]");
const profilePhoto = document.querySelector("[data-profile-photo]");

translatableNodes.forEach((node) => {
  defaultText.set(node.dataset.i18n, node.textContent);
});

function setLanguage(language) {
  const useChinese = language === "zh";

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = useChinese && translations.zh[key] ? translations.zh[key] : defaultText.get(key);
  });

  document.documentElement.lang = useChinese ? "zh-CN" : "en";
  document.title = useChinese
    ? "张本祺 | AI 软件工程个人主页"
    : "Zhang Benqi | AI Software Engineering Portfolio";

  if (languageToggle && languageLabel) {
    languageToggle.setAttribute("aria-pressed", String(useChinese));
    languageLabel.textContent = useChinese ? "EN" : "中文";
  }

  localStorage.setItem("preferredLanguage", useChinese ? "zh" : "en");
}

function closeMenu() {
  if (!menu || !menuToggle) return;
  menu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  document.body.classList.remove("menu-open");
}

if (profilePhoto) {
  profilePhoto.addEventListener("error", () => {
    profilePhoto.closest(".portrait-frame")?.classList.add("is-missing");
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const currentLanguage = localStorage.getItem("preferredLanguage") === "zh" ? "zh" : "en";
    setLanguage(currentLanguage === "zh" ? "en" : "zh");
  });
}

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    document.body.classList.toggle("menu-open", isOpen);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("scroll", () => {
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
});

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
);

sections.forEach((section) => activeObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealNodes.forEach((node) => revealObserver.observe(node));

setLanguage(localStorage.getItem("preferredLanguage") === "zh" ? "zh" : "en");
