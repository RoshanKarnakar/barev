# BAR Electric Vehicles website (Version 1)

React + Vite + TypeScript + Tailwind CSS + React Router + Lucide + Framer Motion. No backend, API keys or paid services.

## Install and run
```
npm install
npm run dev
```
Production build: `npm run build` (optional type check: `npm run typecheck`), preview it with `npm run preview`.

## Routes
/ , /bikes , /bikes/:id , /finance , /test-ride , /services , /service-booking , /dealership , /about , /contact , /faq , /my-bike , /book/:bikeId , /legal/:slug (privacy-policy, terms, warranty, refund-policy) , * (404)

## Where to edit
- Logo: put `bar-logo.svg` (or change the path) in `public/assets/brand/`; path set by `logoSrc` in `src/config/site.ts`. Without a file, a built-in BAR mark is shown.
- Bike images: save as `public/assets/bikes/<id>.png` (scotty.png, volt-x.png, stark.png). Until a file exists an SVG scooter is shown.
- Bike specifications, prices, colours, availability: `src/data/bikes.ts`. Add an entry and its `/bikes/:id` page appears automatically. Leave a field out to show "To Be Announced".
- Contact details, social links, finance provider, demo-mode note: `src/config/site.ts`.
- FAQ, services, dealer copy: `src/data/content.ts`.
- Form submission: every form calls `submitForm()` in `src/lib/submit.ts`. Version 1 only logs to the browser console.
- Hero / dealer / service photos: folders under `public/assets/`.
