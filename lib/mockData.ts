// Mock data for Morphogenetic Social Information System

export const systemStats = {
  totalNodes: 248,
  totalEdges: 1_043,
  activeCommunities: 12,
  dataSourcesConnected: 7,
  analysisRuns: 34,
  lastUpdated: "2026-05-04T06:00:00Z",
};

export const dataSources = [
  {
    id: "ds-1",
    name: "Twitter / X API",
    type: "Social Media",
    status: "active",
    recordsCollected: 18_432,
    lastSync: "5 menit lalu",
    icon: "🐦",
  },
  {
    id: "ds-2",
    name: "Survei Komunitas 2026",
    type: "Survei",
    status: "active",
    recordsCollected: 1_250,
    lastSync: "2 jam lalu",
    icon: "📋",
  },
  {
    id: "ds-3",
    name: "Catatan Aktivitas Forum",
    type: "Forum",
    status: "active",
    recordsCollected: 5_670,
    lastSync: "30 menit lalu",
    icon: "💬",
  },
  {
    id: "ds-4",
    name: "Instagram Graph API",
    type: "Social Media",
    status: "paused",
    recordsCollected: 9_100,
    lastSync: "1 hari lalu",
    icon: "📸",
  },
  {
    id: "ds-5",
    name: "Data Sensus Lokal",
    type: "Dataset",
    status: "active",
    recordsCollected: 3_800,
    lastSync: "3 jam lalu",
    icon: "📊",
  },
  {
    id: "ds-6",
    name: "Email Newsletter Archive",
    type: "Email",
    status: "error",
    recordsCollected: 420,
    lastSync: "Gagal",
    icon: "📧",
  },
];

export const networkNodes = [
  { id: "n1", label: "Ahmad F.", community: 1, centrality: 0.92, x: 300, y: 200 },
  { id: "n2", label: "Budi S.", community: 1, centrality: 0.75, x: 380, y: 160 },
  { id: "n3", label: "Citra R.", community: 1, centrality: 0.68, x: 250, y: 140 },
  { id: "n4", label: "Dewi A.", community: 2, centrality: 0.81, x: 500, y: 280 },
  { id: "n5", label: "Eko P.", community: 2, centrality: 0.55, x: 560, y: 200 },
  { id: "n6", label: "Fani L.", community: 2, centrality: 0.63, x: 460, y: 180 },
  { id: "n7", label: "Gilang M.", community: 3, centrality: 0.45, x: 200, y: 320 },
  { id: "n8", label: "Hana K.", community: 3, centrality: 0.52, x: 160, y: 260 },
  { id: "n9", label: "Irfan D.", community: 3, centrality: 0.38, x: 240, y: 380 },
  { id: "n10", label: "Joko W.", community: 1, centrality: 0.70, x: 340, y: 280 },
  { id: "n11", label: "Kartini S.", community: 4, centrality: 0.88, x: 440, y: 380 },
  { id: "n12", label: "Lutfi H.", community: 4, centrality: 0.42, x: 500, y: 420 },
];

export const networkEdges = [
  { source: "n1", target: "n2", weight: 0.9 },
  { source: "n1", target: "n3", weight: 0.7 },
  { source: "n1", target: "n10", weight: 0.8 },
  { source: "n2", target: "n3", weight: 0.6 },
  { source: "n2", target: "n6", weight: 0.5 },
  { source: "n4", target: "n5", weight: 0.85 },
  { source: "n4", target: "n6", weight: 0.75 },
  { source: "n4", target: "n11", weight: 0.6 },
  { source: "n5", target: "n6", weight: 0.7 },
  { source: "n7", target: "n8", weight: 0.9 },
  { source: "n7", target: "n9", weight: 0.65 },
  { source: "n8", target: "n9", weight: 0.55 },
  { source: "n10", target: "n4", weight: 0.4 },
  { source: "n11", target: "n12", weight: 0.8 },
  { source: "n1", target: "n4", weight: 0.3 },
  { source: "n7", target: "n10", weight: 0.35 },
];

export const temporalData = [
  { period: "Jan '25", stability: 78, transition: 15, disruption: 7, nodes: 180, edges: 720 },
  { period: "Feb '25", stability: 72, transition: 20, disruption: 8, nodes: 195, edges: 790 },
  { period: "Mar '25", stability: 65, transition: 28, disruption: 12, nodes: 210, edges: 860 },
  { period: "Apr '25", stability: 58, transition: 30, disruption: 22, nodes: 225, edges: 920 },
  { period: "Mei '25", stability: 50, transition: 25, disruption: 35, nodes: 230, edges: 940 },
  { period: "Jun '25", stability: 55, transition: 30, disruption: 25, nodes: 235, edges: 980 },
  { period: "Jul '25", stability: 62, transition: 28, disruption: 20, nodes: 238, edges: 1000 },
  { period: "Agu '25", stability: 70, transition: 22, disruption: 18, nodes: 242, edges: 1015 },
  { period: "Sep '25", stability: 74, transition: 18, disruption: 8, nodes: 244, edges: 1025 },
  { period: "Okt '25", stability: 76, transition: 16, disruption: 8, nodes: 246, edges: 1035 },
  { period: "Nov '25", stability: 75, transition: 17, disruption: 8, nodes: 247, edges: 1040 },
  { period: "Des '25", stability: 77, transition: 15, disruption: 8, nodes: 248, edges: 1043 },
];

export const communityData = [
  { name: "Komunitas Inti", value: 42, color: "#6366f1" },
  { name: "Kelompok Transisi", value: 28, color: "#f59e0b" },
  { name: "Kluster Perifer", value: 18, color: "#10b981" },
  { name: "Jaringan Lemah", value: 12, color: "#ef4444" },
];

export const keyActors = [
  { rank: 1, name: "Ahmad F.", betweenness: 0.92, closeness: 0.88, degree: 14, community: "Komunitas Inti", role: "Broker" },
  { rank: 2, name: "Kartini S.", betweenness: 0.88, closeness: 0.82, degree: 12, community: "Kelompok Transisi", role: "Hub" },
  { rank: 3, name: "Dewi A.", betweenness: 0.81, closeness: 0.79, degree: 11, community: "Komunitas Inti", role: "Hub" },
  { rank: 4, name: "Budi S.", betweenness: 0.75, closeness: 0.71, degree: 10, community: "Komunitas Inti", role: "Influencer" },
  { rank: 5, name: "Citra R.", betweenness: 0.68, closeness: 0.65, degree: 8, community: "Kluster Perifer", role: "Bridge" },
];

export const morphogeneticPhases = [
  {
    id: "phase-1",
    name: "Fase Stabilitas",
    period: "Jan – Mar 2025",
    description: "Struktur jaringan relatif stabil dengan pola interaksi yang konsisten.",
    indicators: ["Modularity tinggi (0.78)", "Density rendah-sedang", "Aktor kunci dominan"],
    color: "green",
    score: 78,
  },
  {
    id: "phase-2",
    name: "Fase Transisi",
    period: "Apr – Jun 2025",
    description: "Terjadi pergeseran struktur: munculnya aktor baru dan perubahan koalisi.",
    indicators: ["Modularity menurun (0.55)", "Betweenness meningkat", "Pembentukan jembatan baru"],
    color: "yellow",
    score: 55,
  },
  {
    id: "phase-3",
    name: "Fase Disrupsi",
    period: "Mei 2025",
    description: "Gangguan signifikan pada jaringan akibat konflik atau event eksternal.",
    indicators: ["Fragmentasi tinggi", "Kehilangan aktor kunci", "Penurunan edge density"],
    color: "red",
    score: 35,
  },
  {
    id: "phase-4",
    name: "Fase Rekonstruksi",
    period: "Jul – Des 2025",
    description: "Pemulihan jaringan dengan struktur baru yang lebih adaptif.",
    indicators: ["Modularity meningkat kembali", "Aktor baru muncul", "Edge baru terbentuk"],
    color: "blue",
    score: 75,
  },
];

export const insightCards = [
  {
    id: "i1",
    title: "Aktor Kunci Teridentifikasi",
    description: "5 aktor dengan centrality tinggi mendominasi 68% aliran informasi dalam jaringan.",
    category: "Network",
    priority: "high",
    date: "04 Mei 2026",
  },
  {
    id: "i2",
    title: "Fase Transisi Terdeteksi",
    description: "Sistem mendeteksi fase transisi aktif pada periode April–Juni 2025 dengan indeks disrupsi 35%.",
    category: "Morphogenetic",
    priority: "high",
    date: "03 Mei 2026",
  },
  {
    id: "i3",
    title: "Komunitas Baru Terbentuk",
    description: "2 kluster komunitas baru teridentifikasi di area perifer jaringan dalam 30 hari terakhir.",
    category: "Community",
    priority: "medium",
    date: "01 Mei 2026",
  },
  {
    id: "i4",
    title: "Anomali Data Terdeteksi",
    description: "Sumber data Email Newsletter Archive mengalami error koneksi selama 24 jam terakhir.",
    category: "Data",
    priority: "low",
    date: "03 Mei 2026",
  },
];

export const recentActivities = [
  { id: 1, action: "Data acquisition selesai", detail: "Twitter API: 1.2k record baru", time: "5 mnt lalu", type: "success" },
  { id: 2, action: "Analisis morphogenetic berjalan", detail: "Deteksi fase pada data Des 2025", time: "12 mnt lalu", type: "info" },
  { id: 3, action: "Node baru ditambahkan", detail: "3 entitas baru: Siti N., Reza M., Toni A.", time: "1 jam lalu", type: "success" },
  { id: 4, action: "Error sumber data", detail: "Email Newsletter Archive: timeout", time: "2 jam lalu", type: "error" },
  { id: 5, action: "Laporan dihasilkan", detail: "Laporan Q4 2025 tersedia untuk diunduh", time: "3 jam lalu", type: "info" },
];
