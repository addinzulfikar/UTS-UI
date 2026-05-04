"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const sourceTypes = ["Social Media", "Survei", "Forum", "Dataset", "Email", "API", "Lainnya"];

export default function AddSourceForm() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", type: sourceTypes[0], url: "" });

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <Plus className="w-4 h-4" />
        Tambah Sumber Data
      </button>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-slate-700">Tambah Sumber Data Baru</h4>
        <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-slate-600">
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Nama Sumber</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="cth. Facebook Group API"
            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Tipe</label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
          >
            {sourceTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">URL / Endpoint</label>
          <input
            type="text"
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
            placeholder="https://api.example.com/..."
            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
          Simpan
        </button>
        <button
          onClick={() => setOpen(false)}
          className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors"
        >
          Batal
        </button>
      </div>
    </div>
  );
}
