# Vanilla Extract – Core Concepts Overview

Vanilla Extract is a modern CSS-in-TypeScript library designed for writing type-safe, maintainable, and scalable styles with zero runtime overhead.

---

## 1. style()

This is the fundamental function to define styles scoped to components. It lets you write CSS properties in TypeScript and generates static CSS classes.

---

## 2. Theme Contracts and Themes

- **Theme Contract** defines the shape of design tokens (like colors, spacing, fonts) that your app will use.
- **Theme** provides actual values for these tokens, enabling easy theming and consistent styling across the application.

---

## 3. globalStyle()

Used to apply global CSS rules to elements such as `body`, `html`, or third-party components, ensuring consistent base styling.

---

## 4. globalFontFace() and globalKeyframes()

- **globalFontFace()** allows you to register custom web fonts globally.
- **globalKeyframes()** lets you define global CSS animations.

---

## 5. Sprinkles

Sprinkles is a utility-style system built on top of your design tokens. It enables writing responsive, type-safe, and reusable utility classes for styling.

---

## 6. Recipes

Recipes let you create reusable style variants with defined options, making it easy to handle buttons, cards, or other UI components with multiple appearance options.

---

## Summary

Vanilla Extract helps teams build design systems that are:

- **Type-safe**: full TypeScript support for styles.
- **Static**: generates CSS at build time, no runtime cost.
- **Themeable**: easy to manage multiple themes and tokens.
- **Maintainable**: clear, modular styling patterns.
- **Flexible**: supports global styles, utilities, and variants.

