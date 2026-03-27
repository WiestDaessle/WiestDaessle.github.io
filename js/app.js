/**
 * Portfolio — i18n, navigation, scroll reveals
 */

const STRINGS = {
  fr: {
    "nav.logo": "Nicolas Wiest-Daesslé",
    "nav.skip": "Aller au contenu",
    "page.title": "Nicolas Wiest-Daesslé — Consultant ML, deep learning & IA",
    "nav.services": "Services",
    "nav.expertise": "Expertise",
    "nav.experience": "Expérience",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "hero.focus": "Machine learning · Deep learning · IA",
    "hero.name": "Nicolas Wiest-Daesslé",
    "hero.tagline": "Consultant ML, deep learning & IA — Rennes · France",
    "hero.lead":
      "Expertise centrale en machine learning, apprentissage profond et IA — couplée à la data science, l’imagerie quantitative et des environnements industriels & R&D exigeants.",
    "hero.sub":
      "Plus de 20 ans : cadrage et mise en œuvre de modèles ML / deep learning, pipelines et évaluation, recherche et imagerie, direction technique et grands programmes — du doctorat à l’encadrement d’équipes.",
    "hero.cta.primary": "Découvrir les services",
    "hero.cta.secondary": "Échanger sur un besoin",
    "hero.stat.years": "ans d’expérience",
    "hero.stat.phd": "Informatique & imagerie",
    "hero.stat.team": "ingénieurs encadrés en équipe pluridisciplinaire",
    "services.title": "Ce que je propose",
    "services.intro":
      "Un appui pour les projets où le machine learning, le deep learning et l’IA doivent être cadrés, entraînés, évalués et industrialisés avec rigueur — avec des ponts clairs entre recherche, ingénierie et métier.",
    "services.s1.title": "ML, deep learning & IA — conseil & mise en œuvre",
    "services.s1.text":
      "Choix de paradigmes (supervisé, non supervisé, réseaux profonds), pipelines d’entraînement et validation, jeux de données, métriques et risques — de l’expérimentation à une conception orientée production (performance, robustesse, coût).",
    "services.s2.title": "Imagerie quantitative & analyse",
    "services.s2.text":
      "Traitement d’images, pipelines quantitatifs et exigence scientifique — ancrés dans une expérience de doctorat en imagerie médicale et analyses type biomarqueurs.",
    "services.s3.title": "Stratégie R&D & leadership technique",
    "services.s3.text":
      "Structuration de la R&D, arbitrages d’investissements et alignement des choix techniques avec les contraintes — à partir d’expériences de directeur R&D et de scientifique senior.",
    "services.s4.title": "Formation & transfert de compétences",
    "services.s4.text":
      "Ateliers et accompagnement pour les équipes qui adoptent le ML, les pratiques data ou les chaînes d’imagerie — incluant une expérience d’enseignement (informatique & pratique professionnelle).",
    "services.s5.title": "Architecture données & graphes (Neo4j)",
    "services.s5.text":
      "Lorsque les relations comptent autant que les enregistrements : modélisation graphe et approches Neo4j — certification professionnelle (2025).",
    "expertise.title": "Expertise en un coup d’œil",
    "expertise.intro":
      "Au centre : machine learning, deep learning et IA appliqués ; autour : imagerie, data engineering, recherche et pilotage de programmes.",
    "experience.title": "Expérience professionnelle",
    "experience.intro":
      "Plusieurs fils en parallèle : prestations de conseil & expertise (data / ML / IA), rôles industriels, programmes de défense, et enseignement (Epitech à temps partiel au CHU puis à la DGA). Les blocs ci-dessous regroupent les expériences par fil métier — l’ordre n’est pas chronologique, et plusieurs activités ont coexisté dans le temps.",
    "exp.group.consulting": "Conseil & expertise data / ML / IA",
    "exp.group.industry": "Industrie & R&D (postes salariés)",
    "exp.group.defence": "Programmes de défense & expertise technique",
    "exp.group.academic": "Thèse, CHU & enseignement",
    "exp.e1.period": "2015 — aujourd’hui",
    "exp.e1.role": "Consultant & expert — Data science, ML & IA",
    "exp.e1.org": "Prestations clients & missions de recherche appliquée",
    "exp.e1.desc":
      "Accompagnement d’organisations et missions d’expertise en parallèle d’autres rôles — méthodes, analyses et projets en machine learning, deep learning et IA.",
    "exp.e1.context":
      "Ligne d’activité : conseil & missions pour clients, en parallèle des postes salariés (industrie, secteur public).",
    "exp.e2.period": "2020 — 2025",
    "exp.e2.role": "Scientifique senior — Imagerie & analyse quantitative",
    "exp.e2.desc":
      "Département recherche — imagerie avancée et analyse quantitative dans un contexte de R&D sciences du vivant.",
    "exp.e2.context": "Exercé en parallèle des prestations de conseil (ML & IA) depuis 2015.",
    "exp.e3.period": "2019 — 2020",
    "exp.e3.role": "Directeur recherche & développement",
    "exp.e3.desc": "Pilotage de la R&D pour une petite structure de services numériques grand public.",
    "exp.e3.context": "Exercé en parallèle des prestations de conseil (ML & IA) depuis 2015.",
    "exp.e4.period": "2011 — 2019",
    "exp.e4.role": "DGA — drones, expertise & programmes",
    "exp.e4.org": "Direction générale de l’armement · Rennes",
    "exp.e4.desc":
      "Plusieurs fonctions : programmes de drones tactiques et MALE, coordination de l’expertise et des moyens d’essais entre centres techniques, stratégie de qualification, pilotage de grandes équipes pluridisciplinaires (20+ personnes).",
    "exp.e4.context":
      "Chevauchement avec l’enseignement à temps partiel à Epitech (2010–2015), puis avec les prestations de conseil (dès 2015).",
    "exp.e5.period": "2010 — 2015",
    "exp.e5.role": "Enseignant en informatique (temps partiel)",
    "exp.e5.desc":
      "Informatique et pratique professionnelle — pédagogie et accompagnement des étudiants, sur une charge compatible avec la fonction au CHU puis avec la DGA.",
    "exp.e5.context":
      "En parallèle du CHU Rennes (2010–2011), puis des missions à la DGA (2011–2015) — activité annexe, pas un temps plein enseignant.",
    "exp.e6.period": "2005 — 2009",
    "exp.e6.role": "Doctorat — Imagerie médicale (IRM de diffusion)",
    "exp.e6.desc":
      "Thèse sur l’imagerie tensorielle de diffusion pour les pathologies cérébrales (contexte sclérose en plaques) — logiciels, pipelines de traitement et évaluation quantitative.",
    "exp.e6.context": "Socle recherche ; les missions ultérieures s’ajoutent sans l’effacer.",
    "exp.e7.period": "2009 — 2011",
    "exp.e7.role": "Ingénieur hospitalier — coordinateur d’études cliniques",
    "exp.e7.org": "CHU Rennes",
    "exp.e7.desc":
      "Études cliniques et ingénierie au sein du centre hospitalier — activité principale sur cette période, en parallèle d’un enseignement à temps partiel à Epitech (dès 2010).",
    "exp.e7.context":
      "Emploi principal ; l’enseignement à Epitech sur cette période était à temps partiel (volume horaire limité).",
    "cred.title": "Diplômes & langues",
    "cred.edu.title": "Formation",
    "cred.edu.phd": "Doctorat en informatique — imagerie médicale & IRM de diffusion (2009)",
    "cred.edu.ms":
      "Formation d’ingénieur / recherche avec stages en traitement d’images médicales (lésions SEP, détection de changements, analyse de texture)",
    "cred.cert.title": "Certifications",
    "cred.cert.neo4j": "Neo4j Certified Professional (2025)",
    "cred.lang.title": "Langues",
    "cred.lang.fr": "Français — langue maternelle",
    "cred.lang.en": "Anglais — niveau professionnel complet",
    "test.title": "Recommandations",
    "test.intro": "Extraits LinkedIn — période recherche (doctorat et équipes).",
    "test.q1":
      "Fortes compétences techniques et scientifiques pendant le doctorat ; suggestions pertinentes, logiciel fiable, et très bon niveau en traitement d’images médicales.",
    "test.q2":
      "Ouvert aux échanges sur les sujets de recherche avec de bons conseils ; compétences en programmation utiles pour le travail des collègues.",
    "test.context": "(collaboration recherche, période doctorale)",
    "test.context2": "(équipe de recherche)",
    "contact.title": "Discutons de votre projet",
    "contact.text":
      "Décrivez votre contexte, vos contraintes et votre calendrier. Réponse en général sous quelques jours ouvrés.",
    "contact.note":
      "Préférence : e-mail pour un premier échange ; LinkedIn pour le contexte public.",
    "contact.email": "Écrire un e-mail",
    "contact.linkedin": "Profil LinkedIn",
    "footer.line": "Nicolas Wiest-Daesslé · Rennes, France · consultant ML & IA",
  },
  en: {
    "nav.logo": "Nicolas Wiest-Daesslé",
    "nav.skip": "Skip to content",
    "page.title": "Nicolas Wiest-Daesslé — ML, Deep Learning & AI Consultant",
    "nav.services": "Services",
    "nav.expertise": "Expertise",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "hero.focus": "Machine learning · Deep learning · AI",
    "hero.name": "Nicolas Wiest-Daesslé",
    "hero.tagline": "ML, deep learning & AI consultant — Rennes · France",
    "hero.lead":
      "Core expertise in machine learning, deep learning, and AI — combined with applied data science, quantitative imaging, and demanding industrial & R&D settings.",
    "hero.sub":
      "20+ years: framing and delivering ML / deep learning models, pipelines and evaluation, research and imaging, technical leadership and large programmes — from PhD to leading teams.",
    "hero.cta.primary": "Explore services",
    "hero.cta.secondary": "Discuss your needs",
    "hero.stat.years": "years experience",
    "hero.stat.phd": "Computer science & imaging",
    "hero.stat.team": "engineers led in multidisciplinary team settings",
    "services.title": "What I offer",
    "services.intro":
      "Hands-on support when machine learning, deep learning, and AI must be scoped, trained, evaluated, and industrialised with rigour — with clear bridges between research, engineering, and the business.",
    "services.s1.title": "ML, deep learning & AI — consulting & delivery",
    "services.s1.text":
      "Paradigm choice (supervised, unsupervised, deep networks), training and validation pipelines, datasets, metrics and risk — from experimentation to production-minded design (performance, robustness, cost).",
    "services.s2.title": "Quantitative imaging & analysis",
    "services.s2.text":
      "Image processing, quantitative pipelines, and scientific rigour — grounded in PhD experience in medical imaging and biomarker-style analysis.",
    "services.s3.title": "R&D strategy & technical leadership",
    "services.s3.text":
      "Structuring R&D, prioritising investments, and aligning technical choices with constraints — drawing on R&D director and senior scientist roles.",
    "services.s4.title": "Training & knowledge transfer",
    "services.s4.text":
      "Workshops and mentoring for teams adopting ML, data practices, or imaging workflows — including teaching experience in CS and professional practice.",
    "services.s5.title": "Data & graph architecture (Neo4j)",
    "services.s5.text":
      "When relationships matter as much as records: graph modelling and Neo4j-oriented approaches — certified professional (2025).",
    "expertise.title": "Expertise at a glance",
    "expertise.intro":
      "At the core: applied machine learning, deep learning, and AI; around that: imaging, data engineering, research, and programme leadership.",
    "experience.title": "Professional experience",
    "experience.intro":
      "Several parallel threads: consulting & client expertise (data / ML / AI), applied research, industry roles, defence programmes, and part-time teaching (Epitech alongside CHU, then alongside DGA). The sections below group roles by professional thread — order is not chronological, and several paths overlapped in time.",
    "exp.group.consulting": "Consulting & data / ML / AI expertise",
    "exp.group.industry": "Industry & R&D (employed roles)",
    "exp.group.defence": "Defence programmes & technical expertise",
    "exp.group.academic": "PhD, CHU & teaching",
    "exp.e1.period": "2015 — present",
    "exp.e1.role": "Consultant & expert — Data Science, ML & AI",
    "exp.e1.org": "Client engagements & applied research missions",
    "exp.e1.desc":
      "Advisory and hands-on work for organisations, alongside other roles — methods, analysis, and applied machine learning, deep learning, and AI.",
    "exp.e1.context":
      "Ongoing client consulting & advisory work, in parallel with salaried roles (industry and public sector).",
    "exp.e2.period": "2020 — 2025",
    "exp.e2.role": "Senior Scientist — Imaging & Quantitative Analysis",
    "exp.e2.desc":
      "Research department — advanced imaging and quantitative analysis in a life-science R&D setting.",
    "exp.e2.context": "Held in parallel with ML & AI consulting work since 2015.",
    "exp.e3.period": "2019 — 2020",
    "exp.e3.role": "Director of Research & Development",
    "exp.e3.desc": "Led R&D for a small company in consumer-facing digital services.",
    "exp.e3.context": "Held in parallel with ML & AI consulting work since 2015.",
    "exp.e4.period": "2011 — 2019",
    "exp.e4.role": "DGA — drones, expertise & programmes",
    "exp.e4.org": "French Defence Procurement Agency · Rennes area",
    "exp.e4.desc":
      "Multiple roles: tactical and MALE drone programmes, coordination of expertise and test resources across technical centres, qualification strategy, and leadership of large multidisciplinary teams (20+ people).",
    "exp.e4.context":
      "Overlapped with part-time teaching at Epitech (2010–15), then with consulting engagements (from 2015).",
    "exp.e5.period": "2010 — 2015",
    "exp.e5.role": "Computer science teacher (part-time)",
    "exp.e5.desc":
      "Computer science and professional practice — teaching and mentoring, on a workload compatible with the CHU role, then with DGA duties.",
    "exp.e5.context":
      "Alongside CHU Rennes (2010–11), then DGA responsibilities (2011–15) — a side activity, not a full-time faculty role.",
    "exp.e6.period": "2005 — 2009",
    "exp.e6.role": "PhD — Medical imaging (diffusion MRI)",
    "exp.e6.desc":
      "Thesis on diffusion tensor imaging for brain pathologies (e.g. multiple sclerosis research) — software, processing pipelines, and quantitative evaluation.",
    "exp.e6.context": "Foundational research; later roles build on this without replacing it.",
    "exp.e7.period": "2009 — 2011",
    "exp.e7.role": "Hospital engineer — clinical study coordinator",
    "exp.e7.org": "CHU Rennes",
    "exp.e7.desc":
      "Clinical studies and engineering within the university hospital — main employment for this period, alongside part-time teaching at Epitech (from 2010).",
    "exp.e7.context":
      "Primary role; Epitech teaching in this period was part-time (limited hours).",
    "cred.title": "Credentials & languages",
    "cred.edu.title": "Education",
    "cred.edu.phd": "PhD in Computer Science — medical imaging & diffusion MRI (2009)",
    "cred.edu.ms":
      "Engineering / research training with internships in medical image processing (MS lesions, change detection, texture analysis)",
    "cred.cert.title": "Certifications",
    "cred.cert.neo4j": "Neo4j Certified Professional (2025)",
    "cred.lang.title": "Languages",
    "cred.lang.fr": "French — native",
    "cred.lang.en": "English — full professional proficiency",
    "test.title": "Recommendations",
    "test.intro": "LinkedIn excerpts — research period (PhD and teams).",
    "test.q1":
      "Strong technical and scientific skills during his PhD; relevant suggestions, reliable software, and a high level in medical image processing.",
    "test.q2":
      "Open to discussing research topics with helpful advice; programming skills that supported colleagues’ work.",
    "test.context": "(research collaboration, PhD period)",
    "test.context2": "(research team)",
    "contact.title": "Let’s talk",
    "contact.text":
      "Tell me about your context, constraints, and timeline. I usually reply within a few business days.",
    "contact.note":
      "Preference: email for a first exchange; LinkedIn for public context.",
    "contact.email": "Send email",
    "contact.linkedin": "LinkedIn profile",
    "footer.line": "Nicolas Wiest-Daesslé · Rennes, France · ML & AI consultant",
  },
};

const TAGS = {
  fr: [
    "Machine learning",
    "Deep learning",
    "IA appliquée",
    "Data science",
    "Imagerie médicale",
    "Traitement d’images",
    "Analyse quantitative",
    "R & outils stats",
    "Neo4j / graphes",
    "Recherche & méthodes",
    "Pilotage de programmes",
    "Gestion d’équipes techniques",
    "Formation professionnelle",
  ],
  en: [
    "Machine learning",
    "Deep learning",
    "Applied AI",
    "Data science",
    "Medical imaging",
    "Image processing",
    "Quantitative analysis",
    "R & statistical tooling",
    "Neo4j / graphs",
    "Research methods",
    "Programme leadership",
    "Technical team management",
    "Professional training",
  ],
};

function getPreferredLang() {
  const stored = localStorage.getItem("lang");
  if (stored === "fr" || stored === "en") return stored;
  const nav = navigator.language || "en";
  return nav.toLowerCase().startsWith("fr") ? "fr" : "en";
}

function applyTranslations(lang) {
  const dict = STRINGS[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  if (dict["page.title"]) {
    document.title = dict["page.title"];
  }

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) {
    ogLocale.setAttribute("content", lang === "fr" ? "fr_FR" : "en_GB");
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (key && dict[key] !== undefined) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  const tagsList = document.getElementById("tags-list");
  if (tagsList) {
    tagsList.innerHTML = "";
    TAGS[lang].forEach((label) => {
      const li = document.createElement("li");
      li.textContent = label;
      tagsList.appendChild(li);
    });
  }

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
  });

  const mailto = document.getElementById("mailto-link");
  if (mailto && mailto.getAttribute("href")?.startsWith("mailto:")) {
    const addr = mailto.getAttribute("data-email") || "contact@wiest-daessle.fr";
    const subj =
      lang === "fr"
        ? "Projet / demande de contact"
        : "Project inquiry / contact request";
    mailto.setAttribute("href", `mailto:${addr}?subject=${encodeURIComponent(subj)}`);
  }
}

function initLang() {
  const lang = getPreferredLang();
  applyTranslations(lang);

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-lang");
      if (next === "fr" || next === "en") {
        localStorage.setItem("lang", next);
        applyTranslations(next);
      }
    });
  });
}

function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  const links = nav ? nav.querySelectorAll('a[href^="#"]') : [];

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    links.forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll('.site-nav a[href^="#"]');

  const setActive = () => {
    let current = "";
    const y = window.scrollY + varHeaderOffset();
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      if (y >= top - 120) current = sec.getAttribute("id") || "";
    });
    navAnchors.forEach((a) => {
      const href = a.getAttribute("href");
      const id = href && href.startsWith("#") ? href.slice(1) : "";
      a.classList.toggle("is-active", id === current);
    });
  };

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setActive();
        ticking = false;
      });
      ticking = true;
    }
  });
  setActive();
}

function varHeaderOffset() {
  const h = document.querySelector(".site-header");
  return h ? h.offsetHeight : 64;
}

function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (!els.length || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  els.forEach((el) => io.observe(el));
}

function init() {
  initLang();
  initNav();
  initReveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
