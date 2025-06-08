# 🤖 AutoReviewer AI

AutoReviewer AI is an autonomous agent that scans the latest content in AI, ML, NLP, and GenAI — from arXiv, GitHub, and Medium — and delivers a clean, categorized newsletter every day via email and Slack.

## 📬 What It Does

- 🧠 Scans arXiv (cs.LG, cs.AI, cs.CL, stat.ML) for papers ≤ 2 days old
- 🚀 Scrapes GitHub Trending for AI/ML tools
- ✍️ Pulls recent Medium articles on GenAI / ML
- 🗂️ Classifies content into GenAI, ML, NLP, Tools
- 📝 Summarizes and formats into a Markdown + HTML newsletter

### WIP feature:
- 📧 WIP - Sends it via email and Slack

## 🧩 Runner H Agent

This project uses [Runner H](https://runnerh.com) to define an agent workflow. See [`runnerh.yaml`](./runnerh.yaml) for the full config.

## 🧪 Example Output

See [`ai_digest.md`](./examples/ai_digest.md) or [`ai_digest.html`](./examples/ai_digest.html) for sample newsletters.

## ⚙️ GitHub Action - Auto Run Daily

This project is automated to run daily using GitHub Actions (`.github/workflows/auto-run.yml`).

## 🛠 Requirements

- Node.js (for Markdown ➝ HTML conversion)
- Runner H login credentials to run this Manually.
- GitHub Secrets for:
  - `EMAIL_SMTP_USER`
  - `EMAIL_SMTP_PASS`
  - `SLACK_WEBHOOK_URL`
  - `RUNNERH_API_KEY`

## 📦 Install & Run

```bash
npm install
node scripts/md-to-html.js

## ⚙️ Running Locally with .env

- setup .env file as mentioned in the repo.
- Export environment variable before running it.

```bash
export $(grep -v '^#' .env | xargs)
runnerh run --config runnerh.yaml


