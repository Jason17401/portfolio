/** @type {import("lint-staged").Configuration} */
const config = {
  "*.{js,mjs,cjs,jsx,ts,tsx}": [
    "eslint --fix --max-warnings=0 --no-warn-ignored",
    "prettier --write",
  ],
  "*.{json,md,css,yml,yaml}": "prettier --write",
};

export default config;
