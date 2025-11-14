# 🌊 FloodSafe India — Advanced Flood Prediction & Early Warning System

**FloodSafe India** is a front-end prototype designed to demonstrate how a flood-prediction dashboard could work for Indian regions.  
It includes demo OTP login, geolocation + fallback mode, flood-arrival calculation UI, multi-language-ready markup, and a responsive dashboard — all built using **HTML + CSS + JavaScript**, and deployable as a static website.

## 🏷️ Badges  
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# 📂 Table of Contents
- [Features](#features)  
- [Repository Structure](#repository-structure)  
- [Quick Start (Local)](#quick-start-local)  
- [Deploying (Recommended)](#deploying-recommended)  
- [Usage Notes & Caveats](#usage-notes--caveats)  
- [How the Code Works](#how-the-code-works)  
- [Contributing](#contributing)  
- [License](#license)  
- [Author](#author)

# 🚀 Features

- ✔ **Static front-end app** (no backend needed)  
- ✔ **Demo OTP login system** (simulated)  
- ✔ **Geolocation support** with demo location fallback  
- ✔ **Flood arrival calculators** (travel time, Manning’s placeholders)  
- ✔ **Dashboard-style UI**, responsive layout  
- ✔ **Translation-ready** structure using `data-translate` attributes  
- ✔ Works fully on **GitHub Pages / Netlify / Vercel**

# 📁 Repository Structure

```
/
├── index.html     # Complete UI layout & structure
├── style.css      # Full styling, tokens, layout, responsiveness
└── app.js         # App logic: auth, geolocation, calculators, UI handlers
```

# 🧪 Quick Start (Local)

> The browser’s Geolocation API works only on **HTTPS** or **localhost**.  
> So run a local server instead of double-clicking `index.html`.

### 1. Clone the repository  
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Start a local server  
```bash
python -m http.server 8000
```

Now open:  
👉 **http://localhost:8000**

### 3. Use the Demo  
- Tap **Get Started**  
- Choose **Demo Mode** if geolocation is blocked  
- OTP is simulated (shown automatically in UI)

# 🌐 Deploying (Recommended)

Deploy to any static host for instant HTTPS:

### ✅ GitHub Pages  
1. Go to **Settings → Pages**  
2. Select branch: `main`  
3. Root folder: `/`  
4. Save — site goes live in seconds

### ✅ Netlify  
Drag the project folder → done. HTTPS auto-enabled.

### ✅ Vercel  
Click "New Project" → import repo → deploy.

### Optional: HTTPS on local  
Use:  
```bash
ngrok http 8000
```

# ⚠️ Usage Notes & Caveats

- **Geolocation requires HTTPS**  
  Demo mode exists for non-secure contexts.

- **OTP is simulated**  
  Only for demonstration, not for authentication in production.

- **No backend exists**  
  All data is stored in-memory; calculators use placeholder logic.

- **Flood models are UI prototypes**  
  Not validated scientific hydrological computations.

# 🛠️ How the Code Works

### `index.html`
- Contains all app sections (landing, login, dashboard, calculators)
- Includes translation attributes for multilingual extension

### `style.css`
- Responsive CSS  
- Buttons, cards, alerts, layout grids  
- Theme variables & UI components

### `app.js`
Handles:
- App state  
- OTP simulation  
- Geolocation detection + fallback  
- Calculator handler functions  
- Translation system  
- Interactive UI behavior  

# 🤝 Contributing

1. Fork the repository  
2. Create your branch:
```bash
git checkout -b feat/my-feature
```
3. Commit your changes:
```bash
git commit -m "Added new feature"
```
4. Push & open a Pull Request  

Please maintain consistent coding style and accessibility attributes.

# 📜 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Rahul Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

# 👤 Author  
**Rahul Kumar**  
📧 22je0762iitism@gmail.com  
