// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="px-4 py-24 mt-20 max-w-4xl mx-auto text-center">
      <h1 className="text-8xl font-bold text-foreground mb-4">404</h1>

      <p className="text-lg text-foreground mb-10">
        Page not found
      </p>

      <Link
        to="/"
        className="
          inline-block
          bg-foreground text-background
          rounded-full px-6 py-4
          transition-all duration-300 ease-in-out
          hover:scale-[1.05]
        "
      >
        Go back home
      </Link>
    </div>
  );
}
