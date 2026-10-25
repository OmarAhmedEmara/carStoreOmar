# AGENTS.md — Read this before starting any session

## Project
Car marketplace frontend (Create React App, React 19, react-router v7, Tailwind CSS v3, reactstrap, axios).
No backend in this repo; API calls go to external hosts (see "APIs").

## Commands
```bash
npm start          # dev server
npm run build      # production build (passes with warnings)
CI=true npm run build   # FAILS on purpose: warnings are treated as errors
npx eslint src --ext .js,.jsx   # lint (currently 0 errors, ~85 warnings)
npm test           # CRA jest (no meaningful tests exist yet)
```

## Structure
```
public/index.html      # entry HTML — has broken CSS/JS links (see Errors)
public/img/            # all images (filenames contain spaces/parens)
src/index.js           # router: createBrowserRouter, routes listed below
src/App.js             # home page composition
src/Data/AllData.js    # global context provider (currently a no-op, see Errors)
src/Components/        # Navbar, AllCompo, AllFooter, AboutUs
src/Home/              # HeroSection, Nesan, About, ExpertTeam
src/CarFinance/ src/HowItWorks/ src/SellOrTradeIn/   # page sections
src/FindYourCar/       # car listing page (listing JSX commented out)
src/SingleCar/         # car detail page
src/Cart/              # cart page
src/css/style.css      # global CSS (imports from ../../public — fragile)
```

## Routes (src/index.js)
`/` → App · `/Carsfinance` · `/HowItWorks` · `/SellOrTradeIn` · `/FindCars` · `singlecars/:id` · `cart`
Navbar links match these paths. Paths are case-sensitive — keep them exactly.

## Conventions
- Pages are composed of section components (`All*.js` wraps several `*.jsx` sections).
- State/data lives in `AllData` context (`apiValue`) via `src/Data/AllData.js`.
- **APIs are on ngrok**: any axios request to `ngrok-free.dev` must send header `ngrok-skip-browser-warning: true`, otherwise ngrok returns an HTML interstitial with no CORS headers → axios `Network Error` + empty data. The global default is set once in `src/index.js` (axios.defaults.headers.common) — do not remove it, and keep new API calls going through axios (not fetch).
- Styling: Tailwind utility classes + `src/css/style.css`. Tailwind content globs are in `tailwind.config.js`.
- Images: reference with a leading `/img/...`. Do NOT use relative `img/...` (breaks on nested routes).
- JSX: always `className`, never `class`.
- Do not add comments unless asked.

## Known errors (verified — fix before relying on these areas)
1. **`public/index.html`**: links to non-existent `CSS/*.css` and `JS/*.js`; `new WOW().init()` throws `ReferenceError: WOW is not defined` on every page load. `<title>Docment</title>` is a placeholder.
2. **`src/Data/AllData.js`**: context provides car list from ngrok API (`element.data.data`, guarded by `Array.isArray`). Has `.catch` now. (FindYourCar's list JSX was restored — it was commented out before.)
3. **`src/FindYourCar/AllFindYourCar.js`**: listing JSX is live and now fixed (React `key`s, `===`, `<button>` instead of `<bottom>`, `images[0]`). Note: the filtered branch card lacks the Details/Add-to-Cart buttons that the "All" branch has.
4. **`src/Cart/AllCart.js`**: prices/totals hardcoded (`$1100.00`, `$2920.00`); qty/remove buttons have no `onClick`; mapped `<li>` lacks `key`; `cartTotal`, `updateItemQuantity`, `removeItem`, `emptyCart` unused — cart does not reflect `react-use-cart` state yet.
5. **`src/SingleCar/AllSingleCar.js`**: "Add to Cart" has no handler (line ~117). API was moved from suspended `cloudinary-6mc2.onrender.com` (returned 503 → axios Network Error) to the working ngrok host; price, `images[0]`, `id` dep, and `.catch` are fixed.
6. **Missing images** (404): `/img/Aside.png`, `/img/Block (5).svg`, `/img/Frame (3).png`, `/img/span (6).png`, `/img/span (7).png`, `/img/span (11).png`, `/img/span (12).png`, `/img/span.svg`, `/img/Ready-for-delivery.jpg.png`, `/img/div.ProductCard_imageInner__2_cn9 (1).png`.
7. **Trailing-space srcs** (404 though file exists): `HowItWorks/NeedUs.jsx:9` (`Carma-16.png.png `), `Home/Nesan.jsx:49` (`... (2).png `).
8. **`class=` instead of `className`** (React warning, style dropped): `Navbar.jsx:22,53,54,55,56`, `HowItWorks/NeedUs.jsx:16`, `HowItWorks/Visa.jsx:25`.
9. **Broken Tailwind classes in `Navbar.jsx`**: `hover: text-violet-400` (space), `items-centerpy-3` (missing space, line 29), `font bold` (line 38), `translate-1/2` (line 61).
10. **`Navbar.jsx:17`**: logo `src='img/Logo.svg'` is relative → 404 on nested routes like `/singlecars/1`.
11. **`Home/Nesan.jsx:71`**: `<a>` with no `href` → "Browse cars" not clickable.
12. **`AllFooter.jsx:258-263`**: footer links are `href="#"` instead of `/HowItWorks`, `/Carsfinance`.
13. **`src/css/style.css:25,41,60,79`**: background images use `../../public/img/...` (CRA warns against this); global `main`/`section { height:600px }` affects every page.
14. **`App.js:11`**: `Navbar` imported but never rendered (renders `AllCompo` instead).
15. **~36 `<img>` missing `alt`** → a11y lint warnings; `eqeqeq` (`==`) warnings in `Nesan.jsx`.
16. **`SellOrTradeIn/HeroSell.jsx:8-33`**: form has no `onSubmit`/state — "Continue" does nothing.
17. **APIs**: both now use `https://lisp-reversion-undertone.ngrok-free.dev/api/cars` (ngrok — verify it's awake before debugging; may show interstitial). `cloudinary-6mc2.onrender.com` is **suspended** — do not use it.

## Definition of done
Run `npx eslint src --ext .js,.jsx` and `CI=true npm run build` — both must pass with 0 problems before considering work finished.
