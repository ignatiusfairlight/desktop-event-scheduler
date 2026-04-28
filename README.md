# Generic Event Scheduler

<h3 align="center"><em>"A glorified spreadsheet for managing events."</em></h3>

<p align="center">
  <img src="https://img.shields.io/badge/Tauri-24C8D8?style=for-the-badge&logo=tauri&logoColor=white" />
  <img src="https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" />
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" />
</p>

## Project Overview

As the tagline suggests, what this app is capable of can all be done in a spreadsheet. The difference is
that you don't have to go through the hoops of "Data validation" or "Conditional Formatting" or even worse;
"Visual Basic Commands". This app was intended to help a local diocese in managing their events, which is a
small part of a bigger effort to digitize their records and day-to-day operations. What was once considered a
complicated project (by me) ended up as a simplified solution to the problem; a local event scheduler, no servers, no remote hosting, all data saved locally. Of course for the diocese, I intend to improve
this app further to customize their needs specifically, so in the meantime I'm letting this barebones version
in the public as case study for my own reference in the future. 

## Functionalities
- Create, edit, delete events
- View events on a calendar
- Filter events by title, date range, and approval status
- (Coming Soon) Approve or reject events
- Archive past approved events
- (Coming Soon) Render event form (export as PNG)

## Prerequisites

### For users
Windows — Download the .exe file and run the installer. The .exe file can be found in `Releases`.

### For local development
What you need:
- Node.js
- pnpm
- Rust toolchain (via rustup)

Then:
```bash
pnpm install
pnpm tauri dev
```

## How It Works
<!-- Add pictures here later -->
- Open the app → lands on Dashboard
- Dashboard shows the calendar, upcoming approved events, and events pending approval
- Sidebar navigates between Dashboard, Event Details, and Archives
- Event Details is where most operations happen — create, edit, delete, approve/reject events [please expand this further]
- Archives stores past approved events for reference

## Technical Overview
- SvelteKit runs in SPA mode via adapter-static, producing static HTML/CSS/JS files that Tauri loads directly — no web server required
- SvelteKit handles the UI, filtering, and pagination on the frontend
- Frontend communicates with the Rust backend via Tauri's invoke commands
- Rust handles all database operations directly against SQLite
- No server or remote hosting — all data is stored locally on the user's machine

## Lessons Learned
- Discovered Tauri as a method of turning web apps into desktop apps
- Figured out a serverless solution for a management software by using SQLite
- Learning Svelte 5 runes and reactivity patterns
- SPA mode with Superforms and handling form validation without a server
- Tanstack Table patterns like the createColumns closure
- Tauri's invoke/command pattern for frontend-backend communication
- GitHub Actions for CI/CD and automated builds

## Potential Improvement(s)
- Conflict detection
- Moving all the business logic (filtering, pagination, etc) to the Tauri side
- Using a different UI library
- Add additional page/section for more configuration options (creating presets, auto color coding by location)