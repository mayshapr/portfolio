// ==================== PROJECT DATA ====================
// Swap the "img" values and gallery arrays with your real image links.
// Placeholders below use temporary stock photos — flagged with "// REPLACE:"
// comments so they're easy to scan and swap out one by one.

const projectData = [
    {
        title: "BEBI Mobile Learning App",
        badge: "Instructional Design",
        img: "https://lh3.googleusercontent.com/d/1QhLtlWzheP6LViBqYWhz3BcWq8qz3Eb1", // REPLACE: BEBI cover/hero
        desc: "An Android mobile learning app born from my own undergraduate thesis research, built from scratch through all five stages of the ADDIE model. Before any design work began, I went straight to the source — conducting needs analysis directly with students and observing the real gap in learning materials and media. Bahasa Indonesia lessons kept feeling boring for one consistent reason: they stayed too textual, with no format engaging enough to hold a teenager's attention. BEBI was built to close that gap — bringing Review Text material to 11th-grade students through educational games and interactive assessments, designed specifically to lift their interest and motivation to learn.",
        impact: "96% improvement in Bahasa Indonesia learning outcomes following classroom implementation",
        stack: "Figma, Canva, Adobe Photoshop",
        skills: [
            { name: "Needs Analysis", note: "interviewed students directly to find the real gap", icon: "fa-magnifying-glass" },
            { name: "Curriculum Design", note: "structured Review Text into a teachable sequence", icon: "fa-layer-group" },
            { name: "Storyboarding & Prototyping", note: "mapped the experience before any UI work", icon: "fa-diagram-project" },
            { name: "UI/UX Design", note: "designed the interface once the prototype was validated", icon: "fa-pen-ruler" },
            { name: "Gamification", note: "four mechanics, each tied to a learning objective", icon: "fa-gamepad" },
            { name: "Program Evaluation", note: "ran the classroom pilot and revised from the findings", icon: "fa-chart-line" }
        ],
        storyTitle: "Behind The Scenes",
        story: [
            {
                type: "timeline",
                heading: "Five Stages, Built From Real Research",
                intro: "I ran the complete ADDIE model on my own, start to finish — every stage grounded in what I actually found in the classroom, not assumptions made from a desk.",
                steps: [
                    { label: "Analysis", text: "Went directly to students for needs analysis, and observed the real gap in learning materials and media — the exact reason Bahasa Indonesia felt tedious and overly textual to them." },
                    { label: "Design", text: "Compiled the full Review Text (teks resensi) curriculum, built the app's storyboard, moved into prototyping, and finalized the UI/UX design before writing a single line of code." },
                    { label: "Development", text: "Built the complete application once every design decision from the previous stage was locked in." },
                    { label: "Implementation", text: "Piloted the finished app directly with students in the classroom." },
                    { label: "Evaluation", text: "Gathered feedback from the pilot and carried out the revisions it called for." }
                ]
            },
            {
                type: "split",
                side: "left",
                heading: "From Storyboard to Interface",
                text: "The Design stage alone covered more ground than people usually assume 'making an app' involves. I first organized the entire Review Text material into a teachable structure, then storyboarded how a student would move through the app screen by screen, built that into a working prototype, and only then moved into full UI/UX design — so every visual decision was already validated by a structure I knew worked, not guessed at.",
                img: "https://lh3.googleusercontent.com/d/1sG4gmPtfFWF1Fcs3IsnF8OKwLOsAr7Lz" // REPLACE: storyboard/prototype screenshot
            },
            {
                type: "split",
                side: "right",
                heading: "Keeping It Fun Without Losing the Lesson",
                text: "Once development started, the hardest balance was making four educational game formats genuinely fun without diluting the material behind them. Every mechanic had to serve a specific learning objective from the Review Text curriculum — never just novelty for its own sake.",
                img: "https://lh3.googleusercontent.com/d/1mt0sDksVpNGMHQnXrtxkfwXth1Hzmxx2" // REPLACE: game mechanic screenshot
            },
            {
                type: "stat",
                value: "96%",
                label: "Improvement in learning outcomes",
                caption: "Measured directly through classroom implementation — evidence that a needs-based, gamified approach could move actual learning outcomes, not just how engaged students felt in the moment."
            }
        ],
        gallery: [
            "https://lh3.googleusercontent.com/d/11hszHufn9ykJr3NTq2wiKlWT4Fe96NYU", // REPLACE: screenshot 1
            "https://lh3.googleusercontent.com/d/1mt0sDksVpNGMHQnXrtxkfwXth1Hzmxx2", // REPLACE: screenshot 2
            "https://lh3.googleusercontent.com/d/1sG4gmPtfFWF1Fcs3IsnF8OKwLOsAr7Lz", // REPLACE: screenshot 3
            "https://lh3.googleusercontent.com/d/1VWndp4ve2XutpDy6Vx7HzXVe9hM8988u", // REPLACE: screenshot 4
            "https://lh3.googleusercontent.com/d/1WugBZNMMbZ_-7ujTj5qTASyacW6zDGFP", // REPLACE: screenshot 5
            "https://lh3.googleusercontent.com/d/18FnNZ9FYK_ICEFC8OSx8DNWCoDZJ8-MK"  // REPLACE: screenshot 6
        ]
    },
    {
        title: "Social Media @p2msatrasia",
        badge: "Content Design",
        img: "https://lh3.googleusercontent.com/d/1lNHwsO0K1WMRi3LxFEjV_vRgsH0cB120", // REPLACE: Instagram feed cover
        desc: "Running the Instagram account for @p2msatrasia, the official community outreach program by Indonesian Language & Literature Education students at UPI. I owned the entire creative side — content strategy, visual design, and caption writing — turning what's usually a stiff academic report into something people actually wanted to see on their feed.",
        impact: "Audience reach grew significantly throughout the program",
        stack: "Canva, Instagram",
        storyTitle: "Behind The Scenes",
        story: [
            {
                type: "quote",
                quote: "\u201cThe real challenge wasn't the design — it was translating something as formal as academic community service into content people would actually stop scrolling for.\u201d"
            },
            {
                type: "split",
                side: "left",
                heading: "Building a Visual Identity From Zero",
                text: "I started with a consistent visual system — color palette, typography, and a feed template other team members could use to post independently without breaking the account's look.",
                img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800" // REPLACE: visual identity screenshot
            },
            {
                type: "duo",
                heading: "Content That Felt Like a Person Wrote It",
                text: "Beyond design, I built out a content calendar and shifted the caption voice toward something more personal — less like an activity report, more like a conversation.",
                imgs: [
                    "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800", // REPLACE: feed sample 1
                    "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800"  // REPLACE: feed sample 2
                ]
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=400", // REPLACE: feed sample 1
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400", // REPLACE: feed sample 2
            "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=400"  // REPLACE: feed sample 3
        ]
    },
    {
        title: "Mily, The Beloved Cat",
        badge: "Creative Writing",
        img: "https://lh3.googleusercontent.com/d/1qcFiwdm2vuEq9eU39NTAJMlCm4du8MGo", // REPLACE: book cover
        desc: "A digital storybook for elementary school readers, containing five stories with five different themes — where I worked as both writer and illustrator. This project was an experiment in merging creative writing with illustration design to build story worlds that feel close to a child's everyday life.",
        impact: "Five complete stories in one digital book, ready for elementary-age readers",
        stack: "Canva, Adobe Photoshop",
        storyTitle: "Behind The Scenes",
        story: [
            {
                type: "full",
                heading: "Writing With a Six-Year-Old in Mind",
                text: "Before writing a single line, I researched child development psychology for ages 6–9 — so word choice, sentence length, and themes would genuinely match how a reader that age thinks and feels.",
                img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200" // REPLACE: story page spread
            },
            {
                type: "duo",
                heading: "Five Stories, Five Worlds",
                text: "Each story got its own cast of characters, color palette, and illustration style — so every tale carries its own mood — while I kept them tied together under one cohesive visual identity as a single book.",
                imgs: [
                    "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=800", // REPLACE: story page 2
                    "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800"  // REPLACE: story page 3
                ]
            },
            {
                type: "quote",
                quote: "\u201cThe goal was never just to entertain — it was to build a story world a child could recognize as their own.\u201d"
            }
        ],
        ratio: 3/4,
        gallery: [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400", // REPLACE: story page 1
            "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=400", // REPLACE: story page 2
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400"  // REPLACE: story page 3
        ]
    },
    {
        title: "Interactive Digital Book",
        badge: "E-Learning",
        img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000", // REPLACE: digital book cover
        desc: "An interactive Bahasa Indonesia digital textbook for 8th-grade students, built as an academic group project. Aligned with the 2013 Curriculum, the book weaves in video, audio, images, and graphics — so students don't just read long blocks of text, they experience the material through multiple senses.",
        impact: "A Curriculum 2013-aligned textbook with fully integrated multimedia elements",
        stack: "Canva, Flip HTML5",
        storyTitle: "Behind The Scenes",
        story: [
            {
                type: "split",
                side: "left",
                heading: "One Voice Across Many Hands",
                text: "As a collaborative project, close coordination with the team was essential to split content writing and layout design without the book feeling stitched together. My part was keeping visual consistency across pages and weaving multimedia into the textbook's structure.",
                img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800" // REPLACE: interactive page 1
            },
            {
                type: "timeline",
                heading: "Making a Textbook Feel Alive",
                intro: "The real challenge was making a screen-based book feel dynamic without losing the structure students rely on to follow along.",
                steps: [
                    { label: "Structure", text: "Preserved a clear, textbook-like flow so 8th-graders could still navigate it easily." },
                    { label: "Multimedia", text: "Layered in video, audio, and graphics at points where they'd genuinely aid comprehension, not just decorate the page." },
                    { label: "Consistency", text: "Standardized visual treatment across every page so the book read as one cohesive product, not a patchwork of contributions." }
                ]
            }
        ],
        ratio: 3/4,
        gallery: [
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400", // REPLACE: interactive page 1
            "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=400", // REPLACE: interactive page 2
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400"  // REPLACE: interactive page 3
        ]
    },
    {
        title: "Anecdotal Text Video Lesson",
        badge: "Digital Learning Content",
        img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000", // REPLACE: video thumbnail
        desc: "A learning video on anecdotal texts that I produced entirely from scratch — writing the script, appearing on camera, and editing the final cut — turning material that usually feels dry on a textbook page into something visual, concise, and easy to follow.",
        impact: "Made the material easier to understand through a concise video format",
        stack: "Canva, Video Editing Software",
        storyTitle: "Behind The Scenes",
        story: [
            {
                type: "full",
                heading: "Learning to Direct Myself",
                text: "This was the first time I really learned how to build an effective educational video — not just record a slide presentation. The process started with researching anecdotal text content, writing a conversational script instead of reading straight from a textbook, storyboarding each scene, then shooting and editing it myself.",
                img: "https://images.unsplash.com/photo-1593697820827-9a5fa22eff1e?q=80&w=1200" // REPLACE: behind the scenes
            },
            {
                type: "stat",
                value: "<10 min",
                label: "Kept intentionally short",
                caption: "I deliberately kept the video under ten minutes so students wouldn't lose focus halfway through."
            }
        ],
        ratio: 16/9,
        gallery: [
            "https://images.unsplash.com/photo-1593697820827-9a5fa22eff1e?q=80&w=400", // REPLACE: behind the scenes 1
            "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=400", // REPLACE: behind the scenes 2
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400"  // REPLACE: behind the scenes 3
        ]
    },
    {
        title: "Diurnalis — Digital Tabloid",
        badge: "Editorial Design",
        img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000", // REPLACE: tabloid cover
        desc: "A digital tabloid tackling the lack of accessible learning media in schools, designed with a clean, minimalist concept so the content itself stays the focus — proof that a digital module can outperform a conventional printed one.",
        impact: "First edition published, from concept through final layout",
        stack: "Adobe Illustrator, Canva",
        storyTitle: "Behind The Scenes",
        story: [
            {
                type: "duo",
                heading: "Building an Editorial From Zero",
                text: "I built Diurnalis from the ground up — developing the editorial concept, writing the articles myself, and handling the full layout design. My design references came from international magazines that lean into whitespace and strong typography.",
                imgs: [
                    "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=800", // REPLACE: page spread 1
                    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800"  // REPLACE: page spread 2
                ]
            },
            {
                type: "quote",
                quote: "\u201cThe hardest part of layout is never the aesthetics — it's making a modern-looking page still easy to actually read.\u201d"
            }
        ],
        ratio: 3/4,
        gallery: [
            "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=400", // REPLACE: page spread 1
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400", // REPLACE: page spread 2
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=400"  // REPLACE: page spread 3
        ]
    },
    {
        title: "Feature Article Anthology",
        badge: "Creative Writing",
        img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000", // REPLACE: anthology cover
        desc: "A feature article anthology paired with documentary photography to strengthen each story's narrative. Every article was laid out to create harmony between text and image, so reading it feels immersive and flowing — not just a stack of paragraphs.",
        impact: "Published on Kompasiana",
        stack: "Adobe Illustrator, Canva",
        storyTitle: "Behind The Scenes",
        story: [
            {
                type: "full",
                heading: "Learning What Visual Storytelling Actually Means",
                text: "This project taught me what \u201cvisual storytelling\u201d really means in practice. Every photo I chose had to earn its place — never just decoration on the page.",
                img: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1200" // REPLACE: documentary shot
            },
            {
                type: "duo",
                heading: "From the Field to the Final Layout",
                text: "The process began with on-the-ground reporting, then writing, then selecting the photos that best represented each story, then a final layout designed so the reader's eye flows naturally from one element to the next.",
                imgs: [
                    "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=800", // REPLACE: field shot
                    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800"  // REPLACE: layout spread
                ]
            }
        ],
        ratio: 4/3,
        gallery: [
            "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=400", // REPLACE: documentary 1
            "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=400", // REPLACE: documentary 2
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=400"  // REPLACE: documentary 3
        ]
    },
    {
        title: "Student Attendance System",
        badge: "UI/UX Design",
        img: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=1000", // REPLACE: main UI mockup
        desc: "A web and mobile-based student attendance system, built as a vocational high school graduation capstone. I owned the full UI design — from wireframes to prototype — while technical development was handled together with the team.",
        impact: "A vocational high school capstone project, built as a team effort",
        stack: "Figma, Adobe XD",
        storyTitle: "Behind The Scenes",
        story: [
            {
                type: "split",
                side: "left",
                heading: "My First Project That Felt Real",
                text: "This was the first project that felt genuinely real — not just another classroom assignment. As the team's UI designer, I had to learn to talk with developers about technical feasibility, not just chase a good-looking screen on paper.",
                img: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=800" // REPLACE: wireframe/screen
            },
            {
                type: "stat",
                value: "v2",
                label: "Reconstructed with newer skills",
                caption: "The mockups shown here are a version I'm currently rebuilding — more refined than the original, built with UI/UX skills that have grown considerably since graduation."
            }
        ],
        ratio: 16/9,
        gallery: [
            "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=400", // REPLACE: wireframe/screen 1
            "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=400", // REPLACE: wireframe/screen 2
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400"  // REPLACE: wireframe/screen 3
        ]
    },
    {
        title: "Studio Renang Hub — Employee Onboarding",
        badge: "Product Design & Development",
        img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000", // REPLACE: onboarding portal cover
        desc: "An employee onboarding portal for StudioRenang.com, an aquatic education swim school for children — built out of a cross-team collaboration between the Training team and HR. The two teams shared the same headache: asset handovers (uniforms, ID cards, work devices) and a new hire's graduation status were scattered across chat threads and spreadsheets, with no single place either team could check without pinging the other. Studio Renang Hub became that single place — a standalone web app guiding every new hire through four structured onboarding phases, from company culture to official certification, while giving both teams a shared, real-time view of where each person actually stands.",
        impact: "Replaced a manual, cross-team asset and graduation-status tracking process with one structured 4-phase portal, giving Training and HR a shared real-time view instead of two disconnected records",
        stack: "HTML, CSS, JavaScript (vanilla), Google Apps Script",
        storyTitle: "Behind The Scenes",
        story: [
            {
                type: "quote",
                quote: "\u201cThe brief didn't start as \u2018build an onboarding app.\u2019 It started as two teams asking the same question in different words: \u2018where did this actually land?\u2019\u201d"
            },
            {
                type: "split",
                side: "left",
                heading: "Where Training and HR Actually Overlap",
                text: "Training owned the curriculum and progress; HR owned the paperwork and physical handovers — uniform, ID card, work device. In practice, both needed to answer the same question from two different angles: is this person actually ready, and has everything been handed over properly? Before this project, that meant HR messaging Training to check graduation status, and Training messaging HR to check whether an asset had actually been picked up. I sat with both teams to map that overlap, then designed a single data model both sides could read from without stepping on each other's workflow.",
                img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800" // REPLACE: team workflow / whiteboard planning
            },
            {
                type: "timeline",
                heading: "Four Phases, One Journey",
                intro: "On the employee-facing side, I designed and built the entire onboarding flow as a self-contained portal — from login and a main dashboard with a progress ring and Employee of the Month, to a 'Company Soul' page introducing the company's vision, mission, and five core values (ACIDS — Alignment, Courage, Innovative, Devoted, Servitality).",
                steps: [
                    { label: "Culture & Company Soul", text: "New hires start by absorbing the company's culture, vision, and values before touching any operational task." },
                    { label: "Operational Mastery", text: "Covers the day-to-day systems and workflows every employee needs to run the front line." },
                    { label: "Aquatic Expertise", text: "Full SSI (Swim School International) curriculum training, phase by phase." },
                    { label: "Evaluation & Graduation", text: "A final review confirming readiness before someone graduates into a full employee — the exact status HR needed visibility into." }
                ]
            },
            {
                type: "split",
                side: "right",
                heading: "Turning Asset Handover Into a Trackable Status",
                text: "For HR's side of the problem, I built an asset request system covering uniforms, ID cards, and work devices — each with its own modal form and a status badge (Pending / Processing / Received) that updates in real time instead of living in a spreadsheet cell someone has to remember to edit. Paired with an Employee Corner for announcements and quick links to SOPs, the team calendar, and Training Hub, the goal was to make one glance at a profile answer both teams' questions at once: how far along is this person, and what have they actually received.",
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800" // REPLACE: asset tracking dashboard
            },
            {
                type: "stat",
                value: "2 teams",
                label: "One shared source of truth",
                caption: "The hardest part was never the code — it was designing something that felt equally native to both a training curriculum and an HR checklist, without either team feeling like they'd inherited someone else's tool."
            }
        ],
        ratio: 16/9,
        gallery: [
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400", // REPLACE: login page
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400", // REPLACE: onboarding dashboard
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400"  // REPLACE: my journey timeline
        ]
    },
    {
        title: "Training Hub — Studio Renang Training Management System",
        badge: "Web App Development",
        img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000", // REPLACE: training hub cover
        desc: "Picture running a 21-day training program for dozens of new hires, three classes running in parallel, each trainer working their own way — and the whole thing still tracked manually on a spreadsheet that's one typo away from chaos. I built Training Hub to remove that chaos entirely: one system running two worlds at once — a command dashboard for admins, and a personal portal for every trainee.",
        impact: "Manages multi-batch training across 3 parallel classes at once, automating pass/fail calculations against different thresholds per phase (Phase 1 ≥90%, Phase 2 ≥95%, Phase 3 100%)",
        stack: "HTML, CSS, JavaScript, Google Apps Script, Chart.js, Remix Icons",
        skills: [
            { name: "Full-Stack Development", note: "built the frontend and Google Apps Script backend solo", icon: "fa-code" },
            { name: "Role-Based UX", note: "one codebase, two completely different user experiences", icon: "fa-users-gear" },
            { name: "Dashboard & Data Visualization", note: "Chart.js pipeline, live alert center, trainer rankings", icon: "fa-chart-pie" },
            { name: "Systems Thinking", note: "designed the multi-batch data model to preserve training history", icon: "fa-sitemap" },
            { name: "Assessment Design", note: "built the weighted Kirkpatrick scoring for trainer feedback", icon: "fa-clipboard-check" }
        ],
        storyTitle: "Behind The Scenes",
        story: [
            {
                type: "split",
                side: "left",
                heading: "Two Roles, One Codebase",
                text: "The first challenge showed up before a single design decision was made: admins and trainees needed entirely different worlds from the same app. Admins needed full control — manage trainees, enter scores, review pass/fail decisions. Trainees just needed a clear, personal view of their own progress, with none of the noise from anyone else's data. I designed one codebase that could completely change face depending on who logged in, with zero duplicated logic behind the scenes.",
                img: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=800" // REPLACE: login/role selector
            },
            {
                type: "stat",
                value: "3",
                label: "Parallel classes, one dashboard",
                caption: "Every batch runs three classes at once, each with its own trainer, tracked side by side in real time."
            },
            {
                type: "duo",
                heading: "A Dashboard That Tells You Where to Look",
                text: "I designed the admin dashboard bento-style — a training pipeline donut chart, trainer performance rankings, and an alert center that isn't static text but is calculated live from real data conditions: which trainees haven't started, whose roleplay score dropped below standard, which class needs extra attention.",
                imgs: [
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", // REPLACE: bento dashboard
                    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800"  // REPLACE: alert center
                ]
            },
            {
                type: "timeline",
                heading: "Closing the Evaluation Loop",
                intro: "The part I'm proudest of is the feedback and review dashboard, which turns trainee star ratings into a weighted score using the Kirkpatrick Level 1 framework — not just a plain average.",
                steps: [
                    { label: "History that never disappears", text: "A multi-batch system keeps every past training wave archived as its own record, reopenable anytime without touching the active batch." },
                    { label: "Instant scoring feedback", text: "Score entry comes with an instant pass/fail preview based on each phase's threshold." },
                    { label: "One-click attendance fixes", text: "The 21-day attendance recap can be edited directly from the table — no separate form just to fix one day." },
                    { label: "A closed evaluation loop", text: "An assessment case-study generator per trainee per phase means the entire training cycle, from day one to final evaluation, is fully recorded and accountable." }
                ]
            }
        ],
        ratio: 16/9,
        gallery: [
            "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=400", // REPLACE: admin dashboard
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400", // REPLACE: score entry
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=400"  // REPLACE: trainee portal
        ]
    },
    {
        title: "EverAfter — Wedding Planning SaaS",
        badge: "Product Design & Development",
        img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000", // REPLACE: EverAfter dashboard cover
        desc: "A wedding planning SaaS for engaged couples in Indonesia, built and developed entirely solo — from backend architecture to the visual design system to product strategy. EverAfter helps couples manage every part of their wedding in one dashboard: checklist, budget, guest list, moodboard, and day-of run-of-show.",
        impact: "Sold as a two-tier product (Lite & Ultimate) on a one-time purchase model, live at everafter-planner.my.id",
        stack: "Cloudflare Pages, Supabase, Vanilla JavaScript, Custom Design System (Bloom 2.0)",
        storyTitle: "Behind The Scenes",
        story: [
            {
                type: "full",
                heading: "From Spreadsheets to a Real Platform",
                text: "EverAfter started as a Google Apps Script and Google Sheets architecture with a Cloudflare Workers proxy layer, before I fully migrated it to Supabase to support real scale. As the sole developer and designer, I rebuilt the entire dashboard as version 2.0 — 'EverAfter Bloom' — a complete visual redesign with a custom design system: a sage, celery, and lima-bean palette, Instrument Serif and Inter typography, and glassmorphism treatments carried from the landing page through every dashboard menu.",
                img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200" // REPLACE: EverAfter dashboard
            },
            {
                type: "duo",
                heading: "A Dashboard Built for the Whole Wedding",
                text: "Budget Tracker with a smart payment card system, Moodboard with a five-theme cinematic presentation mode, guest list management, a drag-and-drop day-of run-of-show, and a honeymoon destination inspiration gallery complete with day-by-day itineraries.",
                imgs: [
                    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800", // REPLACE: budget tracker
                    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800"  // REPLACE: moodboard
                ]
            },
            {
                type: "stat",
                value: "2",
                label: "Product tiers, one platform",
                caption: "Sold as Lite and Ultimate tiers on a one-time purchase model, backed by a separate admin portal for client management, access codes, and tier-based feature gating."
            },
            {
                type: "quote",
                quote: "\u201cThe hardest part was never adding features — it was keeping a single-file HTML architecture organized as the product kept growing, and never shipping without a readiness audit first.\u201d"
            }
        ],
        ratio: 16/9,
        gallery: [
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400", // REPLACE: EverAfter dashboard
            "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=400", // REPLACE: budget tracker
            "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=400"  // REPLACE: moodboard
        ]
    }
];
