# Pizza Menu App

A small React application that showcases a pizza menu with item details, pricing, and a storefront-style layout.

![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.2.2-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Modern-1572B6?logo=css3&logoColor=white)

## Overview

This project demonstrates a simple but polished single-page menu where customers can browse pizza offerings, view ingredients, and see prices. It uses reusable React components and structured static data to render content efficiently.

## App Preview

```text
+----------------------------------------------------------+
| PIZZA PARADISE                                           |
|----------------------------------------------------------|
|                         OUR MENU                         |
| Check out our delicious pizzas!                          |
|                                                          |
| [Image] Pizza Margherita     Tomato and mozzarella   $10 |
| [Image] Pizza Spinaci        Tomato, mozzarella ...  $12 |
| [Image] Pizza Funghi         Tomato, mozzarella ...  $12 |
|                                                          |
|                     Order Now                            |
+----------------------------------------------------------+
```

## Features

- Responsive menu layout for pizza listings
- Reusable `Pizza` component
- Dynamic pricing and sold-out state handling
- Clean card-based UI using CSS styling
- Data-driven rendering using an array of menu objects

## Tech Stack

- React 19.2.8
- Vite 8.2.2
- TypeScript 6.0.2
- CSS Modules / standard CSS

## Getting Started

### Prerequisites

- Node.js v18 or newer
- npm or yarn

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## How to Use

1. Start the app with `npm run dev`.
2. View the menu in the browser.
3. Browse through the different pizza items.
4. Check their ingredients and prices.
5. The footer displays the order button only during business hours.

## React Concepts Covered

This repository touches several core React ideas:

- Components: `App`, `Header`, `Menu`, `Pizza`, and `Footer`
- Props: passing `name`, `ingredients`, `price`, `image`, and `soldOut` into the `Pizza` component
- JSX: rendering UI with declarative markup
- Lists and Keys: using `.map()` to render menu items and `key={pizza.name}`
- Conditional Rendering: showing the order button only when the store is open
- Reusability: a single `Pizza` component used across multiple menu items
- Data Modeling: storing menu content in a JavaScript array and rendering from it
- Styling with CSS: layout, spacing, typography, and hover states

## Project Structure

```text
pizza-menu-app/
├── src/
│   ├── App.tsx
│   ├── data.js
│   ├── index.css
│   └── components/
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── Menu.tsx
│       └── Pizza.tsx
├── public/
│   └── pizzas/
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## License

This project is licensed under the MIT License.

MIT License

Copyright (c) 2026
***
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***