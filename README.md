# UTS-UI — MorphoSocial

Sistem Informasi Morphogenetic berbasis Next.js untuk memetakan, menganalisis, dan memahami dinamika struktur sosial dalam suatu komunitas.

## Deskripsi

Sistem ini menggunakan pendekatan **morphogenetic** yang mengintegrasikan teori struktur dan agensi untuk memahami perubahan sosial secara dinamis dari waktu ke waktu. Arsitektur sistem bersifat modular, terdiri dari 4 modul utama.

## Modul Sistem

| # | Modul | Deskripsi |
|---|-------|-----------|
| 01 | **Data Acquisition** | Pengumpulan data interaksi sosial dari media sosial, survei, dan forum |
| 02 | **Network Construction** | Pembangunan representasi jaringan sosial dalam bentuk graf (node & edge) |
| 03 | **Morphogenetic Engine** | Analisis perubahan struktur jaringan dengan temporal clustering & SNA |
| 04 | **Visualization & Insight** | Dashboard analitik interaktif dan peta sosial visual |

## Teknologi

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Recharts** (visualisasi data)
- **Lucide React** (ikon)

## Menjalankan Aplikasi

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur Proyek

```
app/                              # Halaman Next.js (App Router)
  page.tsx                        # Dashboard
  data-acquisition/page.tsx       # Modul 1
  network-construction/page.tsx   # Modul 2
  morphogenetic-engine/page.tsx   # Modul 3
  visualization/page.tsx          # Modul 4
components/
  layout/                         # Sidebar, Header, MainLayout
  dashboard/                      # MetricCard, ActivityFeed
  data-acquisition/               # DataSourceCard, AddSourceForm
  network-construction/           # NetworkGraph (SVG), NodeList, EdgeList
  morphogenetic-engine/           # TemporalChart, PhaseAnalysis, StructureMetrics
  visualization/                  # TimelineChart, CommunityPieChart, KeyActorsTable, InsightPanel
  ui/                             # Card, Badge, ProgressBar
lib/
  mockData.ts                     # Data mock untuk seluruh modul
```

