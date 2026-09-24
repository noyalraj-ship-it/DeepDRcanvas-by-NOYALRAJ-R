import * as XLSX from 'xlsx';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Activity, ShieldCheck, Pill, Utensils, HeartPulse, FileText, Upload, Users, ChevronRight } from 'lucide-react';
export default function App() {
  const [report, setReport] = useState(null);


api/client/src/main.jsx
JavaScript
·
0
 (0)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>


api/client/vite.config.js
JavaScript
·
0
 (0)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})


api/client/eslint.config.js
JavaScript
·
0
 (0)
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
export default defineConfig([


api/client/postcss.config.js
JavaScript
·
0
 (0)
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


api/client/tailwind.config.js
JavaScript
·
0
 (0)
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
