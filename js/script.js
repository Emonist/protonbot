const commandsData = {
  category1: {
    icon: "🎉",
    title: "Giveaways",
    commands: [
      {
        name: "gstart",
        description: "Starts a giveaway",
        permission: "Manage Channel",
      },
      {
        name: "gdelete",
        description: "Deletes a giveaway",
        permission: "Manage Channel",
      },
      {
        name: "greroll",
        description: "Rerolls a giveaway",
        permission: "Manage Channel",
      },
      {
        name: "glist",
        description: "List a giveaway users of recent giveaway",
        permission: "Manage Channel",
      },
      {
        name: "gend",
        description: "Ends a giveaway",
        permission: "Manage Channel",
      },
    ],
  },
  category2: {
    icon: "🤖",
    title: "AI",
    commands: [
      { name: "ask", description: "Ask anything to the AI", permission: "No Permission Required" },
      { name: "translate", description: "Translate text", permission: "No Permission Required" },
      { name: "code", description: "Generate code using AI", permission: "No Permission Required" },
      { name: "define", description: "Define any term", permission: "No Permission Required" },
      { name: "idea", description: "Get creative ideas", permission: "No Permission Required" },
      { name: "story", description: "Generate a story", permission: "No Permission Required" },
      { name: "explaincode", description: "Explain code using AI", permission: "No Permission Required" },
      { name: "recipe", description: "Get a cooking recipe", permission: "No Permission Required" },
      { name: "compare", description: "Compare two topics", permission: "No Permission Required" },
      { name: "fact", description: "Get a fact", permission: "No Permission Required" },
      { name: "poem", description: "Generate a poem", permission: "No Permission Required" },
      { name: "solve", description: "Solve a problem", permission: "No Permission Required" },
      { name: "interview", description: "AI-based interview Q&A", permission: "No Permission Required" },
      { name: "character", description: "Generate a character", permission: "No Permission Required" },
    ],
  },
  category3: {
    icon: "🛡️",
    title: "Moderation",
    commands: [
      { name: "ping", description: "Check bot latency", permission: "No Permission Required" },
      { name: "prefix", description: "Change bot prefix", permission: "Manage Guild" },
      { name: "lock", description: "Lock a channel", permission: "Manage Channels" },
      { name: "unlock", description: "Unlock a channel", permission: "Manage Channels" },
      { name: "hide", description: "Hide a channel", permission: "Manage Channels" },
      { name: "unhide", description: "Unhide a channel", permission: "Manage Channels" },
      { name: "firstmessage", description: "Jump to first message", permission: "No Permission Required" },
      { name: "pin", description: "Pin a message", permission: "Manage Messages" },
      { name: "unpin", description: "Unpin a message", permission: "Manage Messages" },
      { name: "afk", description: "Set AFK status", permission: "No Permission Required" },
      { name: "nickname", description: "Change nickname", permission: "Manage Nicknames" },
      { name: "slowmode", description: "Set slowmode", permission: "Manage Channels" },
      { name: "ban", description: "Ban a member", permission: "Ban Members" },
      { name: "kick", description: "Kick a member", permission: "Kick Members" },
      { name: "unbanall", description: "Unban all users", permission: "Ban Members" },
      { name: "category", description: "Change channel category", permission: "Manage Channels" },
      { name: "pat", description: "Pat a user", permission: "No Permission Required" },
    ],
  },
  category4: {
    icon: "✨",
    title: "Misc",
    commands: [
      { name: "steal", description: "Steal emojis", permission: "Manage Emojis" },
      { name: "role", description: "Manage roles", permission: "Manage Roles" },
      { name: "invite", description: "Generate invite link", permission: "No Permission Required" },
      { name: "insight", description: "Get server insight", permission: "View Audit Log" },
      { name: "avatar", description: "View avatar", permission: "No Permission Required" },
      { name: "snipe", description: "Snipe deleted message", permission: "Manage Messages" },
      { name: "editsnipe", description: "Snipe edited message", permission: "Manage Messages" },
      { name: "spotify", description: "Display Spotify info", permission: "No Permission Required" },
      { name: "boost", description: "View boost info", permission: "No Permission Required" },
      { name: "status", description: "Check user status", permission: "All" },
      { name: "list", description: "List commands/users", permission: "All" },
      { name: "botinfo", description: "Show bot statistics", permission: "No Permission Required" },
    ],
  },
  category5: {
    icon: "🔧",
    title: "Utility",
    commands: [
      { name: "mute", description: "Mute a member", permission: "Mute Members" },
      { name: "unmute", description: "Unmute a member", permission: "Mute Members" },
      { name: "unmuteall", description: "Unmute everyone", permission: "Administrator" },
      { name: "roleicon", description: "Set role icon", permission: "Manage Roles" },
      { name: "uptime", description: "Check bot uptime", permission: "No Permission Required" },
      { name: "serverinfo", description: "View server info", permission: "No Permission Required" },
      { name: "unban", description: "Unban a user", permission: "Ban Members" },
      { name: "block", description: "Block a user", permission: "Manage Roles" },
      { name: "unblock", description: "Unblock a user", permission: "Manage Roles" },
      { name: "userinfo", description: "Get user info", permission: "All" },
      { name: "membercount", description: "Check member count", permission: "All" },
      { name: "activity", description: "Track activity", permission: "Manage Server" },
      { name: "purge", description: "Bulk delete messages", permission: "Manage Messages" },
    ],
  },
category6: {
  icon: "🎙️",
  title: "Voice",
  commands: [
    { name: "vckick", description: "Kick a user from VC", permission: "Move Members" },
    { name: "vckickall", description: "Kick all users from VC", permission: "Move Members" },
    { name: "vcmute", description: "Mute a user in VC", permission: "Mute Members" },
    { name: "vcunmute", description: "Unmute a user in VC", permission: "Mute Members" },
    { name: "vcmuteall", description: "Mute all users in VC", permission: "Mute Members" },
    { name: "vcunmuteall", description: "Unmute all users in VC", permission: "Mute Members" },
    { name: "vcdeaf", description: "Deafen a user in VC", permission: "Deafen Members" },
    { name: "vcundeaf", description: "Undeafen a user in VC", permission: "Deafen Members" },
    { name: "vcdeafenall", description: "Deafen all in VC", permission: "Deafen Members" },
    { name: "vcundeafall", description: "Undeafen all in VC", permission: "Deafen Members" },
    { name: "moveall", description: "Move all VC users", permission: "Move Members" },
    { name: "vchide", description: "Hide VC from everyone", permission: "Manage Channels" },
    { name: "vcunhide", description: "Unhide VC for everyone", permission: "Manage Channels" },
    { name: "vclock", description: "Lock VC", permission: "Manage Channels" },
    { name: "vcunlock", description: "Unlock VC", permission: "Manage Channels" },
    { name: "vcban", description: "Ban a user from VC", permission: "Ban Members" },
    { name: "vcunban", description: "Unban a user from VC", permission: "Ban Members" },
    { name: "vcbanall", description: "Ban all from VC", permission: "Ban Members" },
    { name: "vcunbanall", description: "Unban all from VC", permission: "Ban Members" },
    { name: "vcpull", description: "Pull a user into VC", permission: "Move Members" }
  ],
}


function createCategoryButton(key, category) {
  return `
        <div class="bg-white/5 rounded-2xl border border-white/10" id="${key}-container">
            <button class="w-full px-8 py-6 flex justify-between items-center text-2xl font-semibold" 
                    onclick="toggleCategory('${key}')">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                        ${category.icon}
                    </div>
                    <span>${category.title}</span>
                </div>
                <svg class="w-6 h-6 transform transition-transform" id="${key}-arrow"
                     xmlns="http:
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div class="hidden px-8 pb-6 space-y-4" id="${key}-commands">
                <!-- Commands will be loaded here when category is opened -->
            </div>
        </div>
    `;
}

function createCommandHTML(cmd) {
  return `
        <div class="command-card bg-white/5 p-6 rounded-xl border border-white/10">
            <div class="flex justify-between items-start">
                <div>
                    <h4 class="text-xl font-semibold mb-2">${cmd.name}</h4>
                    <p class="text-white/70">${cmd.description}</p>
                </div>
                <span class="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm">
                    ${cmd.permission}
                </span>
            </div>
        </div>
    `;
}

const loadedCategories = new Set();

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 500);
    }
  }, 1000);
});

gsap.registerPlugin(ScrollTrigger);
gsap.from("#hero-heading", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

gsap.from("#hero-subheading", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  delay: 0.7,
  ease: "power4.out",
});

gsap.from("#hero-button1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  ease: "power4.out",
});

gsap.from("#hero-button2", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.2,
  ease: "power4.out",
});

gsap.from("#hero-logo", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

function initHeroAnimations() {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .from("#hero h1", {
      opacity: 0,
      y: 100,
      duration: 1,
    })
    .from(
      "#hero p",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      "-=0.5",
    )
    .from(
      "#hero button",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.5",
    )
    .from(
      "#hero img",
      {
        opacity: 0,
        x: 100,
        duration: 1,
      },
      "-=0.5",
    );
}

function initFeaturesAnimations() {
  const cards = gsap.utils.toArray(".feature-card");

  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function toggleCategory(category) {
  const container = document.getElementById(`${category}-commands`);
  const arrow = document.getElementById(`${category}-arrow`);
  const cards = container.querySelectorAll(".command-card");

  if (container.classList.contains("hidden")) {
    container.classList.remove("hidden");

    arrow.classList.add("rotate");

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 100);
    });
  } else {
    cards.forEach((card) => {
      card.classList.remove("show");
    });

    arrow.classList.remove("rotate");

    setTimeout(() => {
      container.classList.add("hidden");
    }, 300);
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const navHeight = document.querySelector("nav").offsetHeight;

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        if (this.getAttribute("href") === "#commands") {
          gsap.to("#commands", {
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            duration: 0.3,
            yoyo: true,
            repeat: 1,
          });
        }
      }
    });
  });
}

function initScrollAnimations() {
  gsap.to("nav", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=100",
      toggleClass: { targets: "nav", className: "nav-blur" },
      scrub: true,
    },
  });

  gsap.from("#commands .bg-white\\/5", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#commands",
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });
}

document.addEventListener("DOMContentLoaded", initializeWebsite);

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 500);
    }
  }, 1000);
});

gsap.registerPlugin(ScrollTrigger);
gsap.from("#hero-heading", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

gsap.from("#hero-subheading", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  delay: 0.7,
  ease: "power4.out",
});

gsap.from("#hero-button1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  ease: "power4.out",
});

gsap.from("#hero-button2", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.2,
  ease: "power4.out",
});

gsap.from("#hero-logo", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

function initHeroAnimations() {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .from("#hero h1", {
      opacity: 0,
      y: 100,
      duration: 1,
    })
    .from(
      "#hero p",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      "-=0.5",
    )
    .from(
      "#hero button",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.5",
    )
    .from(
      "#hero img",
      {
        opacity: 0,
        x: 100,
        duration: 1,
      },
      "-=0.5",
    );
}

function initFeaturesAnimations() {
  const cards = gsap.utils.toArray(".feature-card");

  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function toggleCategory(category) {
  const commandsDiv = document.getElementById(`${category}-commands`);
  const arrow = document.getElementById(`${category}-arrow`);

  if (!loadedCategories.has(category)) {
    const commandsHTML = commandsData[category].commands
      .map((cmd) => createCommandHTML(cmd))
      .join("");
    commandsDiv.innerHTML = commandsHTML;
    loadedCategories.add(category);
  }

  commandsDiv.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const navHeight = document.querySelector("nav").offsetHeight;

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        if (this.getAttribute("href") === "#commands") {
          gsap.to("#commands", {
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            duration: 0.3,
            yoyo: true,
            repeat: 1,
          });
        }
      }
    });
  });
}

function initScrollAnimations() {
  gsap.to("nav", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=100",
      toggleClass: { targets: "nav", className: "nav-blur" },
      scrub: true,
    },
  });

  gsap.from("#commands .bg-white\\/5", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#commands",
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });
}

function initializeWebsite() {
  initHeroAnimations();
  initFeaturesAnimations();
  initScrollAnimations();
  initSmoothScroll();

  const ctaButtons = document.querySelectorAll(".gradient-bg");
  ctaButtons.forEach((button) => button.classList.add("pulse-on-hover"));

  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => card.classList.add("shine-effect"));
}
async function updateGitHubStats() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/redolenthalo/discord-bot-website-template",
    );
    const data = await response.json();

    document.getElementById("stars-count").textContent =
      `${data.stargazers_count} Stars`;
    document.getElementById("forks-count").textContent =
      `${data.forks_count} Forks`;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
  }
}

updateGitHubStats();
setInterval(updateGitHubStats, 300000);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onscroll = function () {
  const button = document.querySelector('[onclick="scrollToTop()"]');
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    button.style.opacity = "1";
    button.style.pointerEvents = "auto";
  } else {
    button.style.opacity = "0";
    button.style.pointerEvents = "none";
  }
};

document.addEventListener("DOMContentLoaded", initializeWebsite);
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("commands-container");

  const categoriesHTML = Object.entries(commandsData)
    .map(([key, category]) => createCategoryButton(key, category))
    .join("");

  container.innerHTML = categoriesHTML;
});

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.querySelector(".menu-icon");
  const menuButton = document.querySelector(".md\\:hidden button");

  if (mobileMenu.classList.contains("hidden")) {
    // Show menu
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("animate-fade-in");
    menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12");
  } else {
    // Hide menu
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fade-in");
    menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  }

  // Stop event propagation
  event.stopPropagation();
}

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuButton = document.querySelector(".md\\:hidden button");

  // Only close if menu is open and click is outside menu and button
  if (
    !mobileMenu.classList.contains("hidden") &&
    !mobileMenu.contains(e.target) &&
    !menuButton.contains(e.target)
  ) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fade-in");
    document
      .querySelector(".menu-icon")
      .setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  }
});

// Prevent menu from closing when clicking inside
document.getElementById("mobileMenu")?.addEventListener("click", (e) => {
  e.stopPropagation();
});
