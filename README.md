This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

# My ProDev Frontend Journey – React Genesis

I’m currently working on **React Genesis**, a project under **ProDev Frontend**, where I’m learning the essentials of setting up and building modern web applications using **React**, **TypeScript**, and **Next.js**.  

This project takes inspiration from **Airbnb’s UI** — property listings, ratings, images, and interactive components — while teaching me how to apply **best practices in frontend development**.  

---

## What I’m Learning

Through this project, I’m learning how to:

- Scaffold a **Next.js project with TypeScript**
- Understand the **Next.js folder structure**
- Work with **file-based routing**
- Create **reusable React components**
- Use **TypeScript interfaces** for props
- Manage assets and static files
- Apply **responsive design** with Tailwind CSS
- Set up **ESLint** for code quality
- Build clean, modular, and maintainable frontend apps  

---

## My Setup

- **Node.js** v16+  
- **Next.js v13+**  
- **TypeScript**  
- **Tailwind CSS**  
- **ESLint**  

---

## How I’m Structuring the Project

- All components live in `components/`  
- TypeScript interfaces are in `interfaces/`  
- Pages are inside `pages/` as per Next.js conventions  
- Tailwind is used for styling and responsiveness  
- ESLint is keeping my code clean and consistent  

---

## My Progress (Tasks)

### 0. Scaffolding
I used this command to start my project:  
```bash
npx create-next-app@latest alx-project-0x00 --typescript
```

I chose **Yes** for ESLint, Tailwind, and import alias.  
I chose **No** for `/src` and App Router (using Pages Router instead).  

Then I ran it with:  
```bash
npm run dev -- -p 3000
```

---

### 1. Setting Up Directories

* Created `components/` and `interfaces/` folders  
* Added `Card.tsx` and `Pill.tsx` in `components/`  
* Added `index.ts` in `interfaces/`  

---

### 2. Basic Routing

* Added `pages/landing.tsx` and `pages/about.tsx`  
* Both return simple components with headings  

---

### 3. Rendering Components

* Moved images to `public/assets/images`  
* Built a **Card** component and a **Pill** component  

---

### 4. Using Components

* Imported and rendered **Card** inside `landing.tsx`  

---

### 5. Typing Components

* Defined `PillProps` in `interfaces/index.ts`  
* Updated `Pill` to accept `title` as a prop  

---

### 6. Advanced Task (In Progress)

* Creating a **Button** component with props for title, sizes, and shapes  

---

## Repo Info

* **Repo:** `alx-project-0x00-setup`  
* **Main folder:** `alx-project-0x00`  
* **Key files so far:**  
  * `components/Card.tsx`  
  * `components/Pill.tsx`  
  * `interfaces/index.ts`  
  * `pages/landing.tsx`  
