import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
${"" /* background color */}
--color-slate-0:#f8fafc;
--color-slate-100:#f1f5f9;
--color-slate-200:#e2e8f0;
--color-slate-300:#cbd5e1;
--color-slate-400:#94a3b8;
--color-slate-500:#64748b;
--color-slate-600:#475569;

${"" /* text color */}
--color-stone-400:#a8a29e;
--color-stone-500:#78716c;
--color-stone-600:#57534e;
--color-stone-700:#44403c;
--color-stone-800:#292524;
--color-stone-900:#1c1917;
--color-stone-950:#0c0a09;

${"" /* theme colors */}
--color-rose-300:#fda4af;
--color-rose-400:#fb7185;
--color-rose-500:#f43f5e;
--color-rose-600:#e11d48;

${"" /* border radius */}
--border-radius-tiny: 5px;
--border-radius-sm: 5px;
--border-radius-md: 12px;
--border-radius-lg: 15px;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    /* For dark mode */
    --image-grayscale: 0;
  --image-opacity: 100%;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--backdrop-color: rgba(0, 0, 0, 0.3);
}


body{
    background-color: var(--color-slate-100);
    color: var(--color-stone-800);
    min-height: 100vh;
    line-height: 1.5;
    font-size: calc(1.275rem + .3vw);
}

*,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
}
button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

.h1, h1{
    font-size: calc(1.425rem + 2.1vw);
}

.h2, h2{
    font-size: calc(1.325rem + .9vw);
}

img {
  max-width: 100%;
}

`;

export default GlobalStyles;
