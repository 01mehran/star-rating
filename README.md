# ⭐ Star Rating Component

> A customizable and reusable React component for displaying and selecting star ratings.
> Supports custom size, colors, maxRate stars, and default filled value.

![demo](/src/demo.png)

# ✨ Features

- Set total number of stars

- Custom color for filled stars

- Custom color for empty stars

- Adjustable star size

- Supports default value (initial number of filled stars)

- Zero dependencies — simple and lightweight

- You can add a messages array and see message like(bad, good, ...) instead of numbers

- You can get the rated number in athor components

- You can set defautl rated stars

## 🧩 Basic Usage

```tsx
export default function App() {
  return <StarRating maxRate={5} size={24} color="gold" defaultValue={3} />;
}
```
