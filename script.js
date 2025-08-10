const output = document.getElementById("output");
const typeSound = document.getElementById("typeSound");
const soundToggle = document.getElementById("soundToggle");

let soundOn = true;

soundToggle.addEventListener("click", () => {
  soundOn = !soundOn;
  soundToggle.textContent = soundOn ? "🔊" : "🔇";
});

const promptLine = 'prathvish@portfolio:~$';

const commands = {
  help: [
    "<span class='primary'>Available commands:</span>",
    "<span class='neutral'>  whoami</span>        <span class='muted'>→ About me</span>",
    "<span class='neutral'>  projects</span>      <span class='muted'>→ Projects overview</span>",
    "<span class='neutral'>  skills</span>        <span class='muted'>→ My tech stack</span>",
    "<span class='neutral'>  experience</span>    <span class='muted'>→ Work experience</span>",
    "<span class='neutral'>  education</span>     <span class='muted'>→ Academic background</span>",
    "<span class='neutral'>  achievements</span>  <span class='muted'>→ Highlights & milestones</span>",
    "<span class='neutral'>  contact</span>       <span class='muted'>→ Get in touch</span>",
    "<span class='neutral'>  clear</span>         <span class='muted'>→ Clear the terminal</span>",
    "<span class='neutral'>  help</span>          <span class='muted'>→ List available commands</span>"
  ],


  whoami: [
    "<span class='primary'>Prathvish Shetty</span>",
    "I am a <span class='neutral'>4th-year B.Tech.</span> student of <span class='neutral'>AISSMS Institute of Information Technology</span> specializing in <span class='neutral'>Information Technology</span>, with a strong interest in <span class='neutral'>problem-solving</span> through <span class='neutral'>web development</span> and <span class='neutral'>soving DSA problems</span>.",
  ],

  projects: [
    "<span class='primary'>1. LangMate</span> – <a href='https://github.com/YOUR_USERNAME/LangMate' target='_blank'>GitHub</a>",
    "◦ LangMate is a <span class='neutral'>language exchange platform</span> where users can learn new languages by chatting and video calling with people worldwide.",
    "◦ Features <span class='muted'>real-time messaging, typing indicators, reactions, group calls, screen sharing, and recording</span> powered by <a href='https://getstream.io' target='_blank'>Stream API</a>.",
    "◦ <span class='accent'>Tech Stack</span>: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, TanStack Query, Zustand, Stream API, Render",
    "",

    "<span class='primary'>2. Lifeline</span>  – <a href='https://github.com/Prathvish-Shetty/Lifeline' target='_blank'>GitHub</a>",
    "◦ Lifeline is a <span class='neutral'>blood ecosystem management platform</span> that connects blood banks, individual donors, and hospitals.",
    "◦ Features <span class='muted'>role-based dashboards</span> tailored to each user type.",
    "◦ <span class='accent'>Tech Stack</span>: React.js, Node.js, Express.js, MongoDB, Mongoose, Tailwind CSS, DaisyUI, Recoil, Render",
    "",

    "<span class='primary'>3. Chat-It</span>  – <a href='https://github.com/Prathvish-Shetty/chat-it' target='_blank'>GitHub</a>",
    "◦ A secure and responsive <span class='neutral'>real-time chat application</span> enabling private conversations between users.",
    "◦ Supports <span class='muted'>instant text and image messaging</span>.",
    "◦ <span class='accent'>Tech Stack</span>: React.js, Node.js, Express.js, MongoDB, Socket.IO, Zustand, Tailwind CSS, DaisyUI, Cloudinary, Render",
    "",

    "<span class='primary'>4. Blog Website</span>  – <a href='https://github.com/Prathvish-Shetty/Blog' target='_blank'>GitHub</a>",
    "◦ A full-featured <span class='neutral'>blog platform</span> where users can sign up, log in, and <span class='muted'>create, read, update, delete posts</span>.",
    "◦ Image upload support using Cloudinary.",
    "◦ <span class='accent'>Tech Stack</span>: React.js, Appwrite, Tailwind CSS, TinyMCE, Cloudinary, Redux Toolkit, Vercel",
    "",

    "<span class='primary'>5. Memo</span>  – <a href='https://github.com/Prathvish-Shetty/Memo' target='_blank'>GitHub</a>",
    "◦ Memo is a simple <span class='neutral'>memory-saving web app</span> allowing users to create, manage, and share memos online.",
    "◦ Lightweight and user-friendly experience.",
    "◦ <span class='accent'>Tech Stack</span>: React.js, Node.js, Express.js, MongoDB, Mongoose, Tailwind CSS, DaisyUI, Vercel",
    "",

    "<span class='primary'>6. Typing Speed Test</span>  – <a href='https://github.com/Prathvish-Shetty/typing-test' target='_blank'>GitHub</a>",
    "◦ A fast and interactive web app to test typing speed with real-time <span class='neutral'>WPM, accuracy, and error tracking</span>.",
    "◦ <span class='accent'>Tech Stack</span>: React, TypeScript, Tailwind CSS, Framer Motion, Custom Hooks",
    "",

    "<span class='primary'>7. ATM Machine</span>  – <a href='https://github.com/Prathvish-Shetty/oop-mp' target='_blank'>GitHub</a>",
    "◦ A Java-based console application simulating ATM operations using <span class='neutral'>Object-Oriented Programming principles</span>.",
    "◦ <span class='accent'>Tech Stack</span>: Java, OOP, File Handling"
  ]

  ,

  skills: [
    "<span class='accent'>Languages</span>: Java, JavaScript, TypeScript, Python, C++, C, HTML, CSS",
    "<span class='accent'>Frameworks & Libraries</span>: React.js, Node.js, Express.js, Tailwind CSS, Bootstrap, Flask, Pandas, Selenium, Tkinter, NumPy, Matplotlib",
    "<span class='accent'>Databases</span>: SQL, MongoDB",
    "<span class='accent'>Tools</span>: Git, GitHub, Bash, AWS, Vercel, Render, Docker",
    "<span class='accent'>Coursework</span>: Data Structures & Algorithms, Object Oriented Programming, Database Management System, Operating System, Software Engineering and Project Management, Cloud Computing, DevOps, Machine Learning",
    "<span class='accent'>Soft Skills</span>: Problem Solving, Collaboration and TeamWork, Communication Skills"
  ],

  experience: [
    "<span class='primary'>Data Analyst Intern</span> – <span class='accent'>NoQs Digital</span>",
    "<span class='muted'>Remote | Dec 2024 – Feb 2025</span>",
    "",
    "◦ <span class='neutral'>Gained hands-on experience in data analysis</span> by learning and applying <span class='neutral'>Python</span>, <span class='neutral'>Pandas</span>, and <span class='neutral'>Matplotlib</span> to explore and visualize data.",
    "◦ <span class='neutral'>Implemented email automation</span> in Google Sheets using <span class='neutral'>Apps Script</span>.",
    "◦ Created interactive dashboards in <span class='neutral'>Microsoft Excel</span> and <span class='neutral'>Power BI</span> for dynamic visualization and analysis."
  ],

  education: [
    "<span class='primary'>AISSMS Institute of Information Technology</span>",
    "  <span class='neutral'>B.Tech. Information Technology</span>",
    "  <span class='muted'>Nov 2022 – Apr 2026</span> | CGPA: <span class='accent'>8.44 / 10.0</span>",
    "",
    "<span class='primary'>MIT Junior College</span>",
    "  <span class='neutral'>XII (HSC)</span>",
    "  <span class='muted'>Nov 2020 – Mar 2022</span> | Percentage: <span class='accent'>86.83%</span>",
    "",
    "<span class='primary'>Bharati Vidyapeeth</span>",
    "  <span class='neutral'>X (SSC)</span>",
    "  <span class='muted'>Jun 2008 – Mar 2020</span> | Percentage: <span class='accent'>91.20%</span>"
  ],

  achievements: [
    "◦ Solved <span class='primary'>500+ problems</span> on <a href='https://leetcode.com/prathvishshetty108' target='_blank'>LeetCode</a>",
    "◦ <a href='https://www.credly.com/badges/396d5dda-e179-4501-add9-aa69903a7bd9/print' target='_blank'>AWS Academy Graduate – AWS Academy Cloud Foundations</a>",
    "◦ <a href='https://drive.google.com/file/d/1_VTNrUGB6jNdoYcaGLj-WsRF0NyoKDyc/view?usp=drive_link' target='_blank'>Accenture iAspire – Go for GOLD</a>",
    "◦ <a href='https://drive.google.com/file/d/1J85--76NgNdSjuK6K6Av_1Rc8KMufFSK/view?usp=drive_link' target='_blank'>PW Skills – DECODE JAVA + DSA</a>",
    "◦ <a href='https://www.udemy.com/certificate/UC-a8067706-461e-49db-883e-aad2840d34da/' target='_blank'>100 Days of Code – Python Pro Bootcamp</a>",
    "◦ HackerRank Certified – <a href='https://www.hackerrank.com/certificates/b1657d8527d4' target='_blank'>Problem Solving</a> and <a href='https://www.hackerrank.com/certificates/1cf51ec00f8a' target='_blank'>JavaScript</a>"
  ],

  contact: [
    "📧 <span class='accent'>Email</span>     : prathvishshetty108@gmail.com",
    "🔗 <span class='accent'>LinkedIn</span>  : <a href='https://linkedin.com/in/prathvish-shetty' target='_blank'>linkedin.com/in/prathvish-shetty</a>",
    "💻 <span class='accent'>GitHub</span>    : <a href='https://github.com/Prathvish-Shetty' target='_blank'>github.com/Prathvish-Shetty</a>",
    "🧠 <span class='accent'>LeetCode</span>  : <a href='https://leetcode.com/prathvishshetty108' target='_blank'>leetcode.com/prathvishshetty108</a>"
  ]
};



function createInputLine() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("input-line");

  const prompt = document.createElement("span");
  prompt.classList.add("prompt");
  prompt.textContent = `${promptLine}`;

  const input = document.createElement("input");
  input.type = "text";
  input.spellcheck = false;

  wrapper.appendChild(prompt);
  wrapper.appendChild(input);
  output.appendChild(wrapper);

  setTimeout(() => input.focus(), 0);

  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim();
      wrapper.removeChild(input);

      // Preserve prompt color
      const staticPrompt = document.createElement("span");
      staticPrompt.classList.add("prompt");
      staticPrompt.textContent = `${promptLine}`;
      wrapper.innerHTML = '';
      wrapper.appendChild(staticPrompt);
      wrapper.append(` ${cmd}`);

      await processCommand(cmd);
    }
  });

  output.scrollTop = output.scrollHeight;
}

async function processCommand(cmd) {
  if (cmd === "clear") {
    output.innerHTML = '';
    createInputLine();
    return;
  }

  const lines = commands[cmd] || [
    `Command not found: ${cmd}`,
    `Type 'help' to see available commands.`
  ];

  await typeOutput(lines);
  createInputLine();
}

async function typeOutput(lines) {
  if (soundOn && typeSound.paused) {
    try {
      await typeSound.play();
    } catch (err) {
      console.warn("Typing sound blocked — user must interact first.");
    }
  }

  for (let line of lines) {
    const lineEl = document.createElement("div");
    lineEl.innerHTML = line;
    output.appendChild(lineEl);
    output.scrollTop = output.scrollHeight;
    await new Promise((r) => setTimeout(r, 100));
  }

  if (soundOn) typeSound.pause();
}

// Auto-run help on page load
window.onload = () => {
  const intro = document.createElement("div");
  const prompt = document.createElement("span");
  prompt.classList.add("prompt");
  prompt.textContent = `${promptLine}`;
  intro.appendChild(prompt);
  intro.append(" help");
  output.appendChild(intro);

  setTimeout(() => {
    processCommand("help");
  }, 300);
};
