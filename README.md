# Moganavasudev P | Software Developer Portfolio

A premium, modern single-page portfolio built with **React**, **TypeScript**, and **Vite**. Features a sleek dark mode theme with amber/orange glowing accents, glassmorphic card layouts, custom brand icons, interactive micro-animations, and a direct serverless contact form.

---

## 🚀 Key Features

* **Refined Tech Stack Grid**:
  * Clean category cards (Programming, Frontend, Backend, Database, Cloud & DevOps).
  * Brand logos displayed inside glowing circular frames with custom fallback icons.
  * Arranged vertically in full-width rows with tech stack items lining up horizontally, wrapping dynamically on mobile displays.
* **Serverless Contact Form**:
  * Integrated directly with **EmailJS** for instant email dispatch.
  * Local sandbox preview support—automatically falls back to preview success mode if API credentials are not set in the environment.
* **Modern Aesthetic**:
  * Fluid typography withOutfit & Plus Jakarta Sans.
  * Ambient glow overlays and responsive navigation.
  * Rich micro-interactions powered by **Framer Motion**.

---

## 🛠️ Technology Stack

* **Core**: React 19, TypeScript, Vite
* **Styling & Animations**: Vanilla CSS, Framer Motion
* **Icons & Visuals**: Lucide React, Devicon SVG CDN, Simple Icons CDN
* **Libraries**: Canvas Confetti

---

## ⚙️ Local Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Setup environment variables**:
   Create a `.env` file at the root of the project (template matches `.env.example` and is ignored by Git to secure your keys):
   ```env
   VITE_EMAILJS_SERVICE_ID=service_jk8g58p
   VITE_EMAILJS_TEMPLATE_ID=template_cpn59f9
   VITE_EMAILJS_PUBLIC_KEY=YOUR_EMAILJS_PUBLIC_KEY
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build production bundle**:
   ```bash
   npm run build
   ```

---

## ☁️ Vercel Deployment

This project is fully ready for deployment on **Vercel** with zero custom configuration.

1. **Push your code** to GitHub/GitLab.
2. **Import the repository** into Vercel.
3. In the **Environment Variables** section, copy the variables from your `.env` file:
   * `VITE_EMAILJS_SERVICE_ID`
   * `VITE_EMAILJS_TEMPLATE_ID`
   * `VITE_EMAILJS_PUBLIC_KEY`
4. Click **Deploy**! Vercel will automatically run Vite's build settings and host the output `dist` folder.
