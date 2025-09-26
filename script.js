// Data 50 Pertanyaan (q: pertanyaan, a: pilihan, c: jawaban benar, p: poin)
const questions = [
    { q: "Ibukota Provinsi Jawa Timur adalah...", a: ["Bandung", "Surabaya", "Semarang", "Yogyakarta"], c: "Surabaya", p: 10 },
    { q: "Gurun Pasir terluas di Indonesia berada di pulau...", a: ["Jawa", "Sumatra", "Flores", "Sulawesi"], c: "Flores", p: 10 },
    { q: "Puncak tertinggi di Indonesia adalah Puncak...", a: ["Rinjani", "Semeru", "Jaya", "Kerinci"], c: "Jaya", p: 10 },
    { q: "Danau vulkanik terbesar di Asia Tenggara adalah...", a: ["Danau Singkarak", "Danau Toba", "Danau Poso", "Danau Maninjau"], c: "Danau Toba", p: 10 },
    { q: "Provinsi yang berbatasan langsung dengan Malaysia (Kalimantan) adalah...", a: ["Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kalimantan Utara"], c: "Kalimantan Utara", p: 10 },
    { q: "Tarian daerah asal Bali yang dikenal karena gerakan mata yang lincah adalah...", a: ["Tari Saman", "Tari Pendet", "Tari Jaipong", "Tari Kecak"], c: "Tari Pendet", p: 10 },
    { q: "Pulau yang dijuluki 'Pulau Seribu Masjid' adalah...", a: ["Madura", "Sulawesi", "Lombok", "Bangka"], c: "Lombok", p: 10 },
    { q: "Makanan khas dari Yogyakarta yang terbuat dari nangka muda adalah...", a: ["Rendang", "Pempek", "Gudeg", "Sate Lilit"], c: "Gudeg", p: 10 },
    { q: "Alat musik tradisional yang dimainkan dengan cara dipukul dari Jawa Barat adalah...", a: ["Sasando", "Angklung", "Gamelan", "Kolintang"], c: "Gamelan", p: 10 },
    { q: "Suku asli yang mendiami wilayah Pegunungan Tengah Papua adalah Suku...", a: ["Dayak", "Asmat", "Batak", "Minangkabau"], c: "Asmat", p: 10 },
    { q: "Patung Garuda Wisnu Kencana (GWK) berada di...", a: ["Jakarta", "Yogyakarta", "Bali", "Surabaya"], c: "Bali", p: 10 },
    { q: "Tujuan wisata 'Raja Ampat' terletak di provinsi...", a: ["Maluku", "Papua Barat Daya", "Sulawesi Utara", "NTB"], c: "Papua Barat Daya", p: 10 },
    { q: "Mata uang resmi Negara Kesatuan Republik Indonesia adalah...", a: ["Dolar", "Ringgit", "Rupiah", "Yen"], c: "Rupiah", p: 10 },
    { q: "Taman Nasional Komodo berada di provinsi...", a: ["NTB", "NTT", "Sulawesi Selatan", "Bali"], c: "NTT", p: 10 },
    { q: "Istana Bogor terletak di provinsi...", a: ["DKI Jakarta", "Jawa Barat", "Banten", "Jawa Tengah"], c: "Jawa Barat", p: 10 },
    { q: "Kota yang dijuluki Kota Kembang adalah...", a: ["Semarang", "Bandung", "Malang", "Medan"], c: "Bandung", p: 10 },
    { q: "Sungai terpanjang di Indonesia adalah Sungai...", a: ["Kapuas", "Mahakam", "Musi", "Barito"], c: "Kapuas", p: 10 },
    { q: "Tempat penangkaran Orangutan terkenal berada di Taman Nasional...", a: ["Ujung Kulon", "Baluran", "Tanjung Puting", "Bromo Tengger Semeru"], c: "Tanjung Puting", p: 10 },
    { q: "Monumen Nasional (Monas) berada di...", a: ["Surabaya", "Semarang", "Jakarta", "Bandung"], c: "Jakarta", p: 10 },
    { q: "Provinsi yang dilewati garis Khatulistiwa adalah...", a: ["Jawa Tengah", "Sumatra Selatan", "Kalimantan Barat", "Sulawesi Utara"], c: "Kalimantan Barat", p: 10 },
    { q: "Lagu daerah 'Apuse' berasal dari...", a: ["Maluku", "Papua", "NTT", "Sulawesi"], c: "Papua", p: 10 },
    { q: "Sate Lilit adalah makanan khas dari...", a: ["Madura", "Padang", "Bali", "Lombok"], c: "Bali", p: 10 },
    { q: "Pulau yang memisahkan Jawa dan Sumatra adalah...", a: ["Madura", "Nusa Kambangan", "Karimunjawa", "Pulau Weh"], c: "Nusa Kambangan", p: 10 },
    { q: "Nama lain dari Pulau Sulawesi adalah...", a: ["Celebes", "Borneo", "Nusa Tenggara", "Sunda Kecil"], c: "Celebes", p: 10 },
    { q: "Candi Borobudur berada di provinsi...", a: ["Jawa Timur", "Yogyakarta", "Jawa Tengah", "Banten"], c: "Jawa Tengah", p: 10 },
    { q: "Suku Toraja berasal dari provinsi...", a: ["Sulawesi Utara", "Sulawesi Tengah", "Sulawesi Barat", "Sulawesi Selatan"], c: "Sulawesi Selatan", p: 10 },
    { q: "Ibukota Provinsi Sumatra Utara adalah...", a: ["Palembang", "Pekanbaru", "Medan", "Padang"], c: "Medan", p: 10 },
    { q: "Jembatan Suramadu menghubungkan pulau Jawa dan...", a: ["Bawean", "Madura", "Bali", "Nusa Kambangan"], c: "Madura", p: 10 },
    { q: "Rumah adat Honai berasal dari...", a: ["Maluku", "Papua", "NTT", "Kalimantan"], c: "Papua", p: 10 },
    { q: "Gunung berapi yang pernah meletus dahsyat pada tahun 1883 adalah...", a: ["Merapi", "Toba", "Tambora", "Krakatau"], c: "Krakatau", p: 10 },
    { q: "Bunga nasional Indonesia yang dijuluki Puspa Bangsa adalah...", a: ["Anggrek Bulan", "Melati Putih", "Rafflesia Arnoldi", "Edelweis"], c: "Melati Putih", p: 10 },
    { q: "Taman Laut Bunaken terkenal di provinsi...", a: ["Maluku Utara", "Sulawesi Utara", "NTB", "Papua"], c: "Sulawesi Utara", p: 10 },
    { q: "Presiden pertama Republik Indonesia adalah...", a: ["Mohammad Hatta", "Soekarno", "Soeharto", "BJ Habibie"], c: "Soekarno", p: 10 },
    { q: "Pulau Weh terletak di provinsi...", a: ["Sumatra Utara", "Aceh", "Riau", "Kep. Riau"], c: "Aceh", p: 10 },
    { q: "Tari Zapin berasal dari wilayah...", a: ["Jawa", "Sumatra", "Kalimantan", "Melayu"], c: "Melayu", p: 10 },
    { q: "Laut yang terletak di utara Pulau Jawa adalah Laut...", a: ["Sunda", "Flores", "Jawa", "Banda"], c: "Jawa", p: 10 },
    { q: "Kota yang dikenal sebagai 'Venice dari Timur' adalah...", a: ["Bandung", "Semarang", "Palembang", "Makassar"], c: "Palembang", p: 10 },
    { q: "Hewan endemik Indonesia yang dilindungi di Pulau Jawa adalah...", a: ["Gajah Sumatra", "Badak Jawa", "Harimau Sumatra", "Orangutan"], c: "Badak Jawa", p: 10 },
    { q: "Nama lain dari Pulau Papua adalah...", a: ["Jazirah Leher Burung", "Irian", "Halmahera", "Sulawesi"], c: "Irian", p: 10 },
    { q: "Batik ditetapkan UNESCO sebagai warisan budaya tak benda pada tahun...", a: ["2005", "2009", "2012", "2015"], c: "2009", p: 10 },
    { q: "Masakan Padang yang terbuat dari daging sapi dan santan adalah...", a: ["Gulai", "Soto", "Rendang", "Nasi Kapau"], c: "Rendang", p: 10 },
    { q: "Selat yang memisahkan Pulau Bali dan Lombok adalah Selat...", a: ["Sunda", "Lombok", "Makassar", "Bali"], c: "Lombok", p: 10 },
    { q: "Sistem irigasi tradisional subak berasal dari...", a: ["Jawa Barat", "Bali", "Lombok", "Sumatra"], c: "Bali", p: 10 },
    { q: "Kota yang menjadi pusat pemerintahan kolonial Belanda adalah...", a: ["Batavia", "Surabaya", "Yogyakarta", "Semarang"], c: "Batavia", p: 10 },
    { q: "Pulau terbesar di Indonesia (setelah Papua) adalah...", a: ["Jawa", "Sulawesi", "Kalimantan", "Sumatra"], c: "Sumatra", p: 10 },
    { q: "Tujuan wisata Tana Toraja berada di...", a: ["Sulawesi Utara", "Sulawesi Selatan", "Maluku", "Papua"], c: "Sulawesi Selatan", p: 10 },
    { q: "Provinsi paling timur di Indonesia (daratan) adalah...", a: ["Maluku", "Papua", "Papua Pegunungan", "Papua Selatan"], c: "Papua Selatan", p: 10 },
    { q: "Sumbawa dan Flores adalah bagian dari kepulauan...", a: ["Maluku", "Nusa Tenggara", "Sunda Besar", "Kepulauan Seribu"], c: "Nusa Tenggara", p: 10 },
    { q: "Ibukota Provinsi Maluku adalah...", a: ["Sofifi", "Ambon", "Ternate", "Kupang"], c: "Ambon", p: 10 },
    { q: "Pelabuhan terpadat di Indonesia, Tanjung Priok, berada di...", a: ["Surabaya", "Semarang", "Jakarta", "Makassar"], c: "Jakarta", p: 10 },
].sort(() => Math.random() - 0.5); // Acak urutan pertanyaan

let currentQuestionIndex = 0;
let score = 0;
let timer;
let playerName = '';
let totalTimeElapsed = 0;
let currentQuestionStartTime;

const TIME_LIMIT = 45; 

// --- Elemen DOM ---
const screens = {
    login: document.getElementById('login-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen')
};
const elements = {
    playerNameInput: document.getElementById('playerNameInput'),
    playerDisplay: document.getElementById('playerDisplay'),
    questionCounter: document.getElementById('questionCounter'),
    scoreDisplay: document.getElementById('scoreDisplay'),
    timerDisplay: document.getElementById('timerDisplay'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    feedback: document.getElementById('feedback'),
    finalPlayerName: document.getElementById('finalPlayerName'),
    finalScoreDisplay: document.getElementById('finalScoreDisplay'),
    finalTimeDisplay: document.getElementById('finalTimeDisplay'),
    leaderboardList: document.getElementById('leaderboardList'),
    audioCorrect: document.getElementById('audioCorrect'),
    audioWrong: document.getElementById('audioWrong')
};

// --- FUNGSI UTAMA ---

function switchScreen(activeScreen) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[activeScreen].classList.add('active');
}

/** 1. Login Tanpa Password: Pemain cukup memasukkan nama untuk memulai. */
function startGame() {
    playerName = elements.playerNameInput.value.trim();
    if (!playerName) {
        alert('Mohon masukkan nama Anda untuk memulai permainan.');
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    totalTimeElapsed = 0;
    
    elements.playerDisplay.innerText = playerName;
    switchScreen('game');
    loadQuestion();
}

/** 2. Timer 45 detik per pertanyaan. */
function startTimer() {
    clearInterval(timer);
    let timeLeft = TIME_LIMIT;
    currentQuestionStartTime = Date.now();
    elements.timerDisplay.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        elements.timerDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            // Pindah langsung ke pertanyaan berikutnya setelah waktu habis
            handleAnswer(null, false); // Jawaban null, salah.
        }
    }, 1000);
}

function loadQuestion() {
    if (currentQuestionIndex >= 50) {
        endGame();
        return;
    }

    const qData = questions[currentQuestionIndex];
    
    // Update tampilan
    elements.questionCounter.innerText = `${currentQuestionIndex + 1}/50`;
    elements.scoreDisplay.innerText = score;
    elements.questionText.innerText = qData.q;
    elements.optionsContainer.innerHTML = '';
    elements.feedback.innerText = '';
    
    // Buat tombol pilihan ganda
    qData.a.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.innerText = option;
        button.onclick = () => handleAnswer(option, true);
        elements.optionsContainer.appendChild(button);
    });
    
    startTimer();
}

/** 6. Setelah memilih jawaban langsung pindah ke pertanyaan berikutnya. */
function handleAnswer(selectedAnswer, fromClick) {
    // Hentikan timer dan catat waktu yang digunakan
    clearInterval(timer);
    const timeSpent = Math.floor((Date.now() - currentQuestionStartTime) / 1000);
    // Jika waktu habis (bukan dari klik), asumsikan waktu penuh 45 detik
    totalTimeElapsed += fromClick ? timeSpent : TIME_LIMIT; 
    
    const qData = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === qData.c;
    
    // Nonaktifkan semua tombol setelah menjawab
    Array.from(elements.optionsContainer.children).forEach(btn => {
        btn.disabled = true;
        // Tandai jawaban benar/salah di UI
        if (btn.innerText === qData.c) {
            btn.style.backgroundColor = '#2ecc71'; // Hijau: Benar
            btn.style.color = 'white';
        } else if (btn.innerText === selectedAnswer) {
            btn.style.backgroundColor = '#e74c3c'; // Merah: Salah
            btn.style.color = 'white';
        }
    });

    if (isCorrect) {
        score += qData.p;
        elements.feedback.innerText = '✅ Jawaban Benar!';
    } else if (fromClick) {
        elements.feedback.innerText = `❌ Jawaban Salah. Yang benar: ${qData.c}`;
    } else {
        elements.feedback.innerText = `⏳ Waktu Habis! Yang benar: ${qData.c}`;
    }

    // 4. Ada suara benar dan salah pada tiap pilihan jawabannya.
    if (isCorrect) {
        elements.audioCorrect.play();
    } else {
        elements.audioWrong.play();
    }
    
    // Pindah ke pertanyaan berikutnya setelah jeda feedback
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1500); // Jeda 1.5 detik
}

function endGame() {
    switchScreen('result');
    
    // Tampilkan hasil
    elements.finalPlayerName.innerText = playerName;
    elements.finalScoreDisplay.innerText = score;
    elements.finalTimeDisplay.innerText = totalTimeElapsed;
    
    // Simpan ke Leaderboard Lokal
    updateLocalLeaderboard(playerName, score, totalTimeElapsed);
    displayLocalLeaderboard();
}

// --- Leaderboard (Lokal Saja) ---

/** 3. Leaderboard online (diimplementasikan sebagai lokal/browser storage) */
function getLocalLeaderboard() {
    const leaderboardJson = localStorage.getItem('indonesiaQuizLeaderboard');
    return leaderboardJson ? JSON.parse(leaderboardJson) : [];
}

function updateLocalLeaderboard(name, finalScore, finalTime) {
    const leaderboard = getLocalLeaderboard();
    
    leaderboard.push({ name, score: finalScore, time: finalTime, timestamp: Date.now() });
    
    // Urutkan: Skor tertinggi dulu, jika skor sama, waktu tercepat dulu.
    leaderboard.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score; // Skor tertinggi
        }
        return a.time - b.time; // Waktu tercepat (jika skor sama)
    });

    // Ambil 5 pemain teratas
    const top5 = leaderboard.slice(0, 5);
    
    localStorage.setItem('indonesiaQuizLeaderboard', JSON.stringify(top5));
}

function displayLocalLeaderboard() {
    const top5 = getLocalLeaderboard();
    elements.leaderboardList.innerHTML = '';

    if (top5.length === 0) {
        elements.leaderboardList.innerHTML = '<li>Belum ada skor yang tersimpan.</li>';
        return;
    }

    top5.forEach((entry, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>#${index + 1} ${entry.name}</strong> 
            <span>${entry.score} Poin (${entry.time}s)</span>
        `;
        elements.leaderboardList.appendChild(li);
    });
}