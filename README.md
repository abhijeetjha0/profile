# Abhijit Kumar Jha - Portfolio Profile

[![Deploy to GitHub Pages](https://github.com/abhijeetjha0/profile/actions/workflows/deploy.yml/badge.svg)](https://github.com/abhijeetjha0/profile/actions/workflows/deploy.yml)
[![Code Coverage](https://abhijeetjha0.github.io/profile/coverage/badge.svg)](https://abhijeetjha0.github.io/profile/coverage/)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D24.12.0-blue)](https://nodejs.org/)

A responsive React portfolio application built with TypeScript, Vite, React-Bootstrap, and `react-i18next` for internationalization and localization.



## 🚀 Live Links

- 🌐 **Live Website**: [https://abhijeetjha0.github.io/profile/](https://abhijeetjha0.github.io/profile/)
- 📊 **Interactive Coverage Report**: [https://abhijeetjha0.github.io/profile/coverage/](https://abhijeetjha0.github.io/profile/coverage/)

---

## 🛠️ Development & Testing Scripts

### Prerequisites
- Node.js `^24.12.0` (managed via `.nvmrc`)

### Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run unit test suite (automatically collects & prints coverage)
npm test

# Run tests matching a specific pattern
npm run test-filter -- Experience

# Run tests in watch mode
npm run test-watch

# Build production bundle
npm run build
```

---

## 🔄 CI/CD & GitHub Pages Deployment

Automated via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)):

1. **Dependency Installation**: `npm ci`
2. **Mandatory Test Execution**: `npm test` runs the unit test suite and generates the HTML coverage output in `coverage/lcov-report`. Build fails immediately if any test fails.
3. **Application Build**: `npm run build` compiles Vite bundle to `dist`.
4. **Coverage Artifact Bundling**: Copies `coverage/lcov-report` into `dist/coverage`.
5. **Deployment**: Publishes `dist` to GitHub Pages, serving both the web application and interactive coverage report online.
