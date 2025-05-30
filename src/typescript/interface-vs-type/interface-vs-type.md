## Interface vs. Type in TypeScript

> **What’s the difference between `interface` and `type` in TypeScript?**

This is a common and important question in TypeScript. As a senior front-end engineer, here’s a comprehensive, structured breakdown:

---

### Structured, In-Depth Answer

> That’s a great question. In TypeScript, both interface and type are used to define types, especially object shapes. They overlap quite a bit, but there are important differences in terms of capabilities, design philosophy, and extensibility.

### 🧠 Philosophical Difference

- **`interface`** is designed specifically for object modeling, especially when defining contracts or data structures with potential for extension or declaration merging. It fits naturally into OOP-style architecture, like class implementations.
- **`type`** is more general and flexible. It can describe any type, including primitives, unions, intersections, tuples, and function types. It’s more of a “type alias” mechanism rather than a structural blueprint.

---

### 🔧 Feature Comparison

| Feature                       | `interface`     | `type`                         |
|------------------------------|------------------|---------------------------------|
| Object type modeling         | ✅ Yes            | ✅ Yes                           |
| Extending others             | ✅ `extends`      | ✅ `extends` or intersections (`&`) |
| Declaration merging          | ✅ Yes            | ❌ No                            |
| Computed property names      | ❌ No             | ✅ Yes (template literal types) |
| Union/intersection types     | ❌ No             | ✅ Yes (`A | B`, `A & B`)        |
| Tuples, function signatures  | ❌ Not directly   | ✅ Yes                           |
| Utility types & generics     | ✅ Limited        | ✅ Full power (mapped, conditional, remapped) |

---

### 📦 Practical use cases

#### ✅ When to use `interface`:

- When you’re building public APIs or shared models that may be extended later by consumers.
- When working with class-based architecture: interface plays well with implements.
- When you want declaration merging, such as augmenting 3rd-party types.

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  adminLevel: number;
}

class UserImpl implements User {
  id = 1;
  name = "Alice";
}
```

#### ✅ When to use `type`:

- When you need union, intersection, tuple, or primitive types.
- When you need key remapping, template literal types, or advanced mapped types.
- When building utility types or transforming types dynamically.

```ts
type ResponseStatus = "success" | "error" | "loading";

type ApiResponse<T> = {
  data: T;
  status: ResponseStatus;
};

type UserWithMeta = User & { createdAt: Date };

type EventHandlers<T> = {
  [K in keyof T as `on${Capitalize<string & K>}Change`]: (value: T[K]) => void;
};
```

### 🔹 Extensibility & maintainability considerations

- **`interface`** is declaratively extendable: multiple interface declarations with the same name are merged.
- **`type`** is immutable once declared—no merging.

This makes interface more suitable for plugin-based systems, SDKs, or when extending 3rd-party types (like DOM globals or React types).

```ts
// Merge into Window interface
interface Window {
  analytics: any;
}
```

### 🔹 What I use in practice

As a senior front-end engineer:
- I prefer **`interface`** for defining consistent object models across modules—especially in API schemas and class contracts.
- I use **`type`** for utility-heavy work, such as transforming props, building dynamic or conditional types, or composing multiple types via & / |.

Both tools are powerful—understanding when and why to use each helps keep code more maintainable, more expressive, and more scalable in large TypeScript codebases.

### 🔹 Conclusion


> “That said, TypeScript is increasingly blurring the lines between the two. In a mature codebase, I tend to standardize on interface for object modeling, and reserve type for compositions, utilities, and unions. The key is to choose the one that communicates intent most clearly and fits the context.”
