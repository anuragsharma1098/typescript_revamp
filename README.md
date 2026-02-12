
# Node.js + TypeScript + VS Code Setup (Beginner Friendly) — Windows

## What you’re setting up

You will install:

* **Node.js** (runs JavaScript, provides npm)
* **TypeScript** (lets you write `.ts`)
* **VS Code** (your editor)
* Optional: **tsx** (run TypeScript without generating `.js`)

---

# 1) Install Node.js

## Step 1 — Download Node.js

1. Go to the official Node.js website.
2. Download the **LTS version** (recommended).
3. Install it normally (Next → Next → Install).

## Step 2 — Confirm Node.js is installed

Open **Command Prompt (cmd)** and run:

<pre class="overflow-visible! px-0!" data-start="701" data-end="727"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>node -v
npm -v
</span></span></code></div></div></pre>

You should see version numbers like:

* `v20.x.x`
* `10.x.x`

---

# 2) Install VS Code

1. Download and install **Visual Studio Code**
2. Open VS Code

### Recommended Extensions

Usually TypeScript support is built in, but these help:

* ESLint (optional)
* Prettier (optional)

---

# 3) Install TypeScript Compiler

Open **Command Prompt (cmd)** and run:

<pre class="overflow-visible! px-0!" data-start="1088" data-end="1125"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install -g typescript
</span></span></code></div></div></pre>

Verify it works:

<pre class="overflow-visible! px-0!" data-start="1145" data-end="1163"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>tsc -v
</span></span></code></div></div></pre>

---

# 4) Compile TypeScript (Generates JavaScript)

## Compile a `.ts` file into `.js`

<pre class="overflow-visible! px-0!" data-start="1254" data-end="1286"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>tsc path\filename.ts
</span></span></code></div></div></pre>

Example:

<pre class="overflow-visible! px-0!" data-start="1298" data-end="1324"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>tsc src\app.ts
</span></span></code></div></div></pre>

This will generate:

* `src\app.js`

## Run the JavaScript file

<pre class="overflow-visible! px-0!" data-start="1391" data-end="1424"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>node path\filename.js
</span></span></code></div></div></pre>

Example:

<pre class="overflow-visible! px-0!" data-start="1436" data-end="1463"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>node src\app.js
</span></span></code></div></div></pre>

---

# 5) Run TypeScript Without Creating `.js` (Using tsx)

## Install tsx

<pre class="overflow-visible! px-0!" data-start="1542" data-end="1572"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install -g tsx
</span></span></code></div></div></pre>

## Run TypeScript directly

<pre class="overflow-visible! px-0!" data-start="1602" data-end="1634"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>tsx path\filename.ts
</span></span></code></div></div></pre>

Example:

<pre class="overflow-visible! px-0!" data-start="1646" data-end="1672"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>tsx src\app.ts
</span></span></code></div></div></pre>

---

# Fix: PowerShell Security Error (Execution Policy)

If you get a security error like:

> running scripts is disabled on this system

Run this in  **PowerShell** :

<pre class="overflow-visible! px-0!" data-start="1842" data-end="1928"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-powershell"><span><span>Set-ExecutionPolicy</span><span></span><span>-Scope</span><span> CurrentUser </span><span>-ExecutionPolicy</span><span> RemoteSigned
</span></span></code></div></div></pre>

Then try again.

---

# Troubleshooting (Common Errors + Fixes)

## 1) `'node' is not recognized as an internal or external command`

### Cause

Node.js is not installed properly OR not added to PATH.

### Fix

1. Restart your PC (seriously — this fixes PATH not refreshing)
2. If still broken:
   * Open **Environment Variables**
   * Under **System variables → Path**
   * Add:

<pre class="overflow-visible! px-0!" data-start="2308" data-end="2340"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>C:\Program Files\nodejs\</span><span>
</span></span></code></div></div></pre>

---

## 2) `'npm' is not recognized`

### Cause

npm isn’t in PATH.

### Fix

Add this to Path:

<pre class="overflow-visible! px-0!" data-start="2436" data-end="2483"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>C:\Users\<YourUser>\AppData\Roaming\npm</span><span>
</span></span></code></div></div></pre>

---

## 3) `tsc is not recognized`

### Cause

TypeScript isn’t installed globally OR PATH not refreshed.

### Fix

Run:

<pre class="overflow-visible! px-0!" data-start="2604" data-end="2641"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install -g typescript
</span></span></code></div></div></pre>

Then restart terminal and check:

<pre class="overflow-visible! px-0!" data-start="2677" data-end="2695"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>tsc -v
</span></span></code></div></div></pre>

---

## 4) `tsx is not recognized`

### Fix

Install it globally:

<pre class="overflow-visible! px-0!" data-start="2762" data-end="2792"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install -g tsx
</span></span></code></div></div></pre>

Then:

<pre class="overflow-visible! px-0!" data-start="2801" data-end="2819"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>tsx -v
</span></span></code></div></div></pre>

---

## 5) PowerShell Script Security Error

### Error Example

> File cannot be loaded because running scripts is disabled...

### Fix (safe for current user)

Run:

<pre class="overflow-visible! px-0!" data-start="2985" data-end="3071"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-powershell"><span><span>Set-ExecutionPolicy</span><span></span><span>-Scope</span><span> CurrentUser </span><span>-ExecutionPolicy</span><span> RemoteSigned
</span></span></code></div></div></pre>

---

## 6) TypeScript compiles but nothing happens

### Cause

You compiled `.ts` into `.js`, but you didn’t run the `.js`.

### Fix

Run:

<pre class="overflow-visible! px-0!" data-start="3210" data-end="3238"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>node filename.js
</span></span></code></div></div></pre>

---

## 7) Your `.js` file is not being created

### Cause

You may be compiling the wrong path or TypeScript found an error.

### Fix

Run:

<pre class="overflow-visible! px-0!" data-start="3379" data-end="3406"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>tsc filename.ts
</span></span></code></div></div></pre>

If errors appear, fix them first.
