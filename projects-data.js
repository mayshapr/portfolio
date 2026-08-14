// ==================== PROJECT DATA ====================
// Ganti nilai "img" dan isi array "gallery" dengan link gambar asli kamu.
// Placeholder di bawah ini pakai foto stok sementara — cari & tandai dengan
// komentar "// GANTI:" supaya gampang di-scan pas nanti replace satu-satu.

const projectData = [
    {
        title: "BEBI Mobile Learning App",
        badge: "Instructional Design",
        img: "https://lh3.googleusercontent.com/d/1QhLtlWzheP6LViBqYWhz3BcWq8qz3Eb1", // GANTI: cover/hero BEBI
        desc: "Aplikasi mobile learning untuk Android yang lahir dari riset skripsi saya sendiri, dibangun lewat 5 tahap model ADDIE dari nol. BEBI membawa materi Review Text ke siswa SMA kelas 11 lewat game edukasi dan asesmen interaktif — dirancang supaya belajar Bahasa Indonesia terasa seperti bermain, bukan mengerjakan tugas.",
        impact: "96% siswa merasa lebih tertarik belajar Bahasa Indonesia",
        stack: "Figma, Canva, Adobe Photoshop",
        process: "Semua berawal dari keresahan saya melihat rendahnya minat siswa pada pelajaran Bahasa Indonesia — dianggap membosankan dan terlalu tekstual. Saya menjalani 5 tahap ADDIE secara mandiri: Analysis (riset kebutuhan & karakteristik siswa kelas 11), Design (menyusun alur belajar dan struktur game), Development (membangun konten interaktif dan 4 model game edukasi), Implementation (uji coba langsung ke siswa di sekolah), sampai Evaluation (mengolah dan menganalisis sendiri data hasilnya). Tantangan terbesarnya adalah menyeimbangkan unsur game supaya tetap fun tanpa kehilangan bobot edukasinya. Hasilnya, BEBI sudah diimplementasikan di sekolah dan terbukti 96% siswa merasa lebih tertarik belajar Bahasa Indonesia dengan pendekatan gamified berbasis smartphone ini dibanding metode tekstual biasa.",
        gallery: [
            "https://lh3.googleusercontent.com/d/11hszHufn9ykJr3NTq2wiKlWT4Fe96NYU", // GANTI: screenshot 1
            "https://lh3.googleusercontent.com/d/1mt0sDksVpNGMHQnXrtxkfwXth1Hzmxx2", // GANTI: screenshot 2
            "https://lh3.googleusercontent.com/d/1sG4gmPtfFWF1Fcs3IsnF8OKwLOsAr7Lz", // GANTI: screenshot 3
            "https://lh3.googleusercontent.com/d/1VWndp4ve2XutpDy6Vx7HzXVe9hM8988u", // GANTI: screenshot 4
            "https://lh3.googleusercontent.com/d/1WugBZNMMbZ_-7ujTj5qTASyacW6zDGFP", // GANTI: screenshot 5
            "https://lh3.googleusercontent.com/d/18FnNZ9FYK_ICEFC8OSx8DNWCoDZJ8-MK"  // GANTI: screenshot 6
        ]
    },
    {
        title: "Social Media @p2msatrasia",
        badge: "Content Design",
        img: "https://lh3.googleusercontent.com/d/1lNHwsO0K1WMRi3LxFEjV_vRgsH0cB120", // GANTI: cover feed Instagram
        desc: "Pengelolaan Instagram @p2msatrasia, akun resmi program pengabdian masyarakat mahasiswa Pendidikan Bahasa & Sastra Indonesia UPI. Saya pegang penuh sisi kreatifnya — dari strategi konten, desain visual, sampai penulisan caption — supaya kegiatan KKN yang biasanya 'kaku' jadi terasa hidup di linimasa followers.",
        impact: "Jangkauan audiens meningkat signifikan selama masa program",
        stack: "Canva, Instagram",
        process: "Saya masuk sebagai Social Media Strategist merangkap Desainer Konten. Tantangan utamanya: bagaimana caranya kegiatan akademis dan pengabdian masyarakat, yang biasanya dilaporkan secara formal, bisa dikemas jadi konten yang enak dilihat dan gampang dibagikan. Saya mulai dari membangun visual identity yang konsisten — palet warna, tipografi, sampai template feed yang bisa dipakai anggota tim lain untuk posting mandiri tanpa merusak identitas visual akun. Selain desain, saya juga menyusun kalender konten dan gaya caption yang lebih personal, bukan sekadar rilis kegiatan.",
        gallery: [
            "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=400", // GANTI: contoh feed 1
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400", // GANTI: contoh feed 2
            "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=400"  // GANTI: contoh feed 3
        ]
    },
    {
        title: "Mily Kucing Kesayangan",
        badge: "Creative Writing",
        img: "https://lh3.googleusercontent.com/d/1qcFiwdm2vuEq9eU39NTAJMlCm4du8MGo", // GANTI: cover buku
        desc: "Buku cerita digital untuk anak SD berisi 5 kisah dengan tema berbeda-beda, tempat saya jadi penulis sekaligus perancang visualnya. Project ini adalah eksperimen menggabungkan kemampuan menulis kreatif dengan desain ilustrasi untuk membangun dunia cerita yang dekat dengan keseharian anak-anak.",
        impact: "5 cerita rampung dalam satu buku digital, siap dibaca anak usia SD",
        stack: "Canva, Adobe Photoshop",
        process: "Saya menulis seluruh naskah sekaligus merancang ilustrasi pendukungnya sendirian. Sebelum menulis, saya riset dulu soal psikologi perkembangan anak usia 6–9 tahun supaya pilihan kata, panjang kalimat, dan temanya benar-benar sesuai usia pembaca. Setiap cerita saya beri karakter, palet warna, dan gaya ilustrasi yang berbeda-beda — supaya tiap kisah punya nuansa sendiri — tapi tetap saya jaga dalam satu identitas visual yang kohesif sebagai satu buku utuh.",
        ratio: 3/4,
        gallery: [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400", // GANTI: halaman cerita 1
            "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=400", // GANTI: halaman cerita 2
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400"  // GANTI: halaman cerita 3
        ]
    },
    {
        title: "Interactive Digital Book",
        badge: "E-Learning",
        img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000", // GANTI: cover buku digital
        desc: "Buku digital interaktif Bahasa Indonesia untuk siswa SMP kelas VIII, dikerjakan sebagai project kelompok akademis. Selaras dengan Kurikulum 2013, buku ini dilengkapi video, audio, gambar, dan grafik supaya siswa gak cuma membaca teks panjang, tapi juga mengalami materinya lewat berbagai indra.",
        impact: "Buku selaras Kurikulum 2013 dengan elemen multimedia terintegrasi",
        stack: "Canva, Flip HTML5",
        process: "Sebagai project kolaboratif, saya harus koordinasi ketat dengan tim untuk membagi tugas penulisan konten dan desain layout. Bagian saya adalah menjaga konsistensi visual antar halaman dan mengintegrasikan elemen multimedia ke dalam struktur buku teks. Tantangan utamanya: membuat buku yang terasa 'hidup' di layar tanpa kehilangan esensi buku teks yang terstruktur dan mudah diikuti alurnya oleh siswa SMP.",
        ratio: 3/4,
        gallery: [
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400", // GANTI: halaman interaktif 1
            "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=400", // GANTI: halaman interaktif 2
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400"  // GANTI: halaman interaktif 3
        ]
    },
    {
        title: "Video Lesson Teks Anekdot",
        badge: "Digital Learning Content",
        img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000", // GANTI: thumbnail video
        desc: "Video pembelajaran tentang teks anekdot yang saya produksi dari nol — mulai nulis skrip, tampil di depan kamera, sampai proses editing — supaya materi yang biasanya terasa kering di buku teks jadi lebih visual, ringkas, dan enak diikuti.",
        impact: "Materi lebih mudah dipahami lewat format video ringkas",
        stack: "Canva, Video Editing Software",
        process: "Ini pertama kalinya saya benar-benar belajar bikin konten video edukasi yang efektif — bukan sekadar merekam presentasi slide. Prosesnya dimulai dari riset konten teks anekdot, menulis skrip dengan gaya bahasa yang conversational (bukan seperti membacakan buku), storyboarding visual tiap adegan, sampai proses syuting dan editing sendiri. Saya sengaja menjaga durasi video di bawah 10 menit supaya siswa tidak kehilangan fokus di tengah jalan.",
        ratio: 16/9,
        gallery: [
            "https://images.unsplash.com/photo-1593697820827-9a5fa22eff1e?q=80&w=400", // GANTI: behind the scenes 1
            "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=400", // GANTI: behind the scenes 2
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400"  // GANTI: behind the scenes 3
        ]
    },
    {
        title: "Diurnalis Digital Tabloid",
        badge: "Editorial Design",
        img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000", // GANTI: cover tabloid
        desc: "Tabloid digital yang mengangkat isu ketersediaan media pembelajaran di sekolah, dirancang dengan konsep clean dan minimalis supaya konten jadi fokus utama — sekaligus jadi bukti bahwa modul digital bisa lebih efektif dibanding modul konvensional.",
        impact: "Edisi pertama berhasil terbit dari konsep sampai layout final",
        stack: "Adobe Illustrator, Canva",
        process: "Saya mengerjakan Diurnalis dari nol: menyusun konsep editorial, menulis artikelnya sendiri, hingga melakukan layout design. Inspirasi desainnya saya ambil dari majalah-majalah internasional yang mengutamakan whitespace dan tipografi yang kuat. Bagian paling menantang ada di proses layouting — harus terus menyeimbangkan antara estetika halaman dan keterbacaan teks, supaya tabloid ini tetap enak dibaca meski tampil modern.",
        ratio: 3/4,
        gallery: [
            "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=400", // GANTI: spread halaman 1
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400", // GANTI: spread halaman 2
            "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=400"  // GANTI: spread halaman 3
        ]
    },
    {
        title: "Feature Article Anthology",
        badge: "Creative Writing",
        img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000", // GANTI: cover antologi
        desc: "Antologi artikel feature yang dilengkapi foto dokumenter untuk memperkuat narasi tiap tulisan. Setiap artikel dirancang dengan layout yang harmonis antara teks dan visual, supaya pengalaman membacanya terasa mengalir dan immersive, bukan sekadar tumpukan paragraf.",
        impact: "Dipublikasikan di Kompasiana",
        stack: "Adobe Illustrator, Canva",
        process: "Project ini yang benar-benar mengajarkan saya arti 'visual storytelling'. Setiap foto yang saya pilih harus punya alasan kuat untuk ada di situ — bukan sekadar dekorasi halaman. Prosesnya dimulai dari reportase langsung ke lapangan, menulis artikelnya, memilih foto yang paling mewakili cerita, sampai layout final yang saya susun supaya mata pembaca mengalir natural dari satu elemen ke elemen berikutnya.",
        ratio: 4/3,
        gallery: [
            "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=400", // GANTI: dokumentasi 1
            "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=400", // GANTI: dokumentasi 2
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=400"  // GANTI: dokumentasi 3
        ]
    },
    {
        title: "Student Attendance System",
        badge: "UI/UX Design",
        img: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=1000", // GANTI: mockup UI utama
        desc: "Sistem absensi siswa berbasis web dan mobile, project tugas akhir kelulusan SMK. Saya bertanggung jawab penuh atas desain visual UI aplikasinya — dari wireframe sampai prototype — sementara pengembangan teknis dikerjakan bersama tim.",
        impact: "Tugas akhir kelulusan SMK, dikerjakan sebagai project tim",
        stack: "Figma, Adobe XD",
        process: "Ini project pertama saya yang terasa benar-benar 'nyata' — bukan sekadar tugas kelas biasa. Sebagai desainer UI dalam tim, saya harus belajar berkomunikasi dengan developer soal feasibility teknis dari desain yang saya buat, bukan cuma mikirin tampilan yang bagus di atas kertas. Mock-up yang ditampilkan di sini adalah versi yang sedang saya rekonstruksi ulang — lebih matang dari desain aslinya, berbekal skill UI/UX yang sudah berkembang jauh sejak lulus SMK.",
        ratio: 16/9,
        gallery: [
            "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=400", // GANTI: wireframe/screen 1
            "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=400", // GANTI: wireframe/screen 2
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400"  // GANTI: wireframe/screen 3
        ]
    },
    {
        title: "Sistem Pembukuan Toko Telur",
        badge: "App Development",
        img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000", // GANTI: screenshot app AppSheet
        desc: "Aplikasi pencatatan dan pembukuan penjualan untuk Toko Telur Maysha Jaya, bisnis distribusi telur milik keluarga. Dibangun dengan AppSheet untuk mendigitalisasi sistem pencatatan manual yang sebelumnya rentan salah hitung dan memakan banyak waktu.",
        impact: "Waktu rekap harian berkurang drastis, akurasi data meningkat",
        stack: "AppSheet, Google Sheets",
        process: "Tantangan nyatanya bukan di teknis, tapi di manusianya: keluarga saya sudah terbiasa mencatat penjualan di buku tulis selama bertahun-tahun, dan saya harus meyakinkan mereka untuk pindah ke sistem digital. Saya bangun aplikasinya sesederhana mungkin — bisa langsung dipakai tanpa pelatihan teknis panjang. Setelah live, waktu rekap harian berkurang drastis dan akurasi datanya jauh lebih terjaga dibanding pencatatan manual. Ini salah satu project yang paling dekat di hati saya karena dampaknya langsung terasa oleh keluarga sendiri.",
        ratio: 4/3,
        gallery: [
            "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=400", // GANTI: screenshot app 1
            "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=400", // GANTI: screenshot app 2
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400"  // GANTI: screenshot app 3
        ]
    },
    {
        title: "Studio Renang Hub — Employee Onboarding",
        badge: "Product Design & Development",
        img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000", // GANTI: cover portal onboarding
        desc: "Portal onboarding karyawan untuk StudioRenang.com, sekolah renang edukasi akuatik untuk anak-anak. Dibangun dari nol sebagai web app yang memandu karyawan baru melewati 4 fase onboarding terstruktur — dari pengenalan budaya perusahaan sampai sertifikasi resmi.",
        impact: "Menggantikan proses onboarding manual dengan portal terstruktur 4 fase, lengkap dengan sistem request aset dan tracking progress real-time",
        stack: "HTML, CSS, JavaScript (vanilla), Google Apps Script",
        process: "Saya merancang dan membangun seluruh alur onboarding sebagai satu portal mandiri: mulai dari login karyawan, dashboard utama dengan progress ring dan Employee of the Month, halaman 'Company Soul' yang memperkenalkan visi-misi dan lima nilai inti perusahaan (ACIDS — Alignment, Courage, Innovative, Devoted, Servitality), sampai timeline 'My Journey' yang memvisualisasikan 4 fase onboarding (Culture & Company Soul, Operational Mastery, Aquatic Expertise, Evaluation & Graduation) lengkap dengan status locked/in-progress/completed di setiap fase. Saya juga membangun sistem request aset (Uniform, Black Card, perangkat kerja) dengan modal form dan tracking status, serta Employee Corner berisi pengumuman dan link cepat ke SOP, kalender tim, dan Training Hub. Tantangan utamanya adalah membuat satu portal terasa personal dan memotivasi — bukan sekadar checklist administratif — sambil tetap terhubung dengan sistem Training Hub yang lebih besar untuk kurikulum SSI (Swim School International).",
        ratio: 16/9,
        gallery: [
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400", // GANTI: screenshot login page
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400", // GANTI: screenshot dashboard onboarding
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400"  // GANTI: screenshot my journey timeline
        ]
    },
    {
        title: "Training Hub — Sistem Manajemen Training Studio Renang",
        badge: "Web App Development",
        img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000", // GANTI: cover training hub
        desc: "Sistem manajemen training end-to-end untuk program pelatihan 21 hari karyawan baru StudioRenang.com, mencakup tiga kelas paralel dengan trainer masing-masing. Dashboard admin memantau seluruh pipeline trainee, sementara portal trainee menampilkan progress belajar mereka sendiri secara real-time.",
        impact: "Mengelola pelatihan multi-batch dengan 3 kelas paralel sekaligus, mengotomatisasi perhitungan kelulusan berbasis threshold berbeda di tiap fase (Phase 1 ≥90%, Phase 2 ≥95%, Phase 3 100%)",
        stack: "HTML, CSS, JavaScript, Google Apps Script, Chart.js, Remix Icons",
        process: "Ini adalah project paling kompleks yang pernah saya bangun sendirian: dua peran (admin/trainer dan trainee) dengan tampilan dan akses yang sepenuhnya berbeda dari satu basis kode yang sama. Sisi admin punya dashboard bento-style berisi training pipeline (donut chart), performa trainer, alert center yang dihitung otomatis dari kondisi data (bukan teks statis), workload distribution antar trainer, sampai panel review untuk trainee yang butuh pertimbangan khusus. Saya juga membangun sistem multi-batch supaya riwayat batch training lama tetap tersimpan dan bisa dibuka kembali, modul input nilai dengan preview lulus/belum otomatis, rekap absensi 21 hari yang bisa diklik langsung untuk diubah, generator studi kasus assessment per trainee per fase, sampai dashboard feedback & review trainer yang menghitung skor berbobot dari rating trainee (Kirkpatrick Level 1). Tantangan terbesarnya adalah menjaga satu basis kode tetap konsisten untuk dua role yang punya kebutuhan data dan alur kerja yang sangat berbeda, sambil terintegrasi dengan Google Apps Script sebagai backend.",
        ratio: 16/9,
        gallery: [
            "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=400", // GANTI: screenshot dashboard admin
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400", // GANTI: screenshot input nilai
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=400"  // GANTI: screenshot portal trainee
        ]
    },
    {
        title: "EverAfter — Wedding Planning SaaS",
        badge: "Product Design & Development",
        img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000", // GANTI: cover EverAfter dashboard
        desc: "SaaS perencanaan pernikahan untuk pasangan calon pengantin Indonesia, dibangun dan dikembangkan sepenuhnya sendiri — dari arsitektur backend, desain sistem visual, sampai strategi produk. EverAfter membantu pasangan mengelola seluruh aspek pernikahan mereka dalam satu dashboard: checklist, budget, tamu undangan, moodboard, sampai rundown hari-H.",
        impact: "Dijual sebagai produk two-tier (Lite & Ultimate) dengan skema beli putus, live di everafter-planner.my.id",
        stack: "Cloudflare Pages, Supabase, Vanilla JavaScript, Custom Design System (Bloom 2.0)",
        process: "EverAfter berawal dari arsitektur Google Apps Script + Google Sheets dengan proxy layer Cloudflare Workers, sebelum saya migrasikan penuh ke Supabase untuk mendukung skala yang lebih besar. Sebagai satu-satunya developer dan desainer, saya membangun ulang seluruh dashboard sebagai versi 2.0 bernama 'EverAfter Bloom' — sebuah redesign visual total dengan sistem desain custom (palet sage/celery/lima-bean, tipografi Instrument Serif + Inter, treatment glassmorphism) yang saya rancang dari halaman landing sampai ke seluruh menu dashboard: Budget Tracker dengan smart payment card system, Moodboard dengan mode presentasi sinematik lima tema, Tamu Undangan, Rundown Hari-H dengan drag-and-drop, sampai galeri inspirasi destinasi honeymoon lengkap dengan itinerary per hari. Saya juga membangun admin portal terpisah untuk mengelola klien, sistem kode akses untuk registrasi, dan feature gating berbasis paket (Lite vs Ultimate). Tantangan terbesarnya adalah menjaga arsitektur single-file HTML tetap terorganisir dan mudah dipelihara meskipun aplikasinya terus bertambah kompleks, sambil terus melakukan audit kesiapan sebelum setiap tahap deployment.",
        ratio: 16/9,
        gallery: [
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400", // GANTI: screenshot dashboard EverAfter
            "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=400", // GANTI: screenshot budget tracker
            "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=400"  // GANTI: screenshot moodboard
        ]
    }
];
