import { Link } from "react-router";

// Minimal on-brand 404. Replaces the old "* -> HomePage" catch-all.
export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100svh",
        background: "#0B0B0C",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.25rem",
        fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <p
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#8C8C93",
        }}
      >
        Error 404
      </p>
      <h1
        style={{
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 0.95,
          margin: 0,
        }}
      >
        Page not found
        <span style={{ color: "#BDFF00" }}>.</span>
      </h1>
      <p style={{ color: "#8C8C93", maxWidth: "40ch", lineHeight: 1.6 }}>
        The page you're after doesn't exist or has moved.
      </p>
      <Link
        to="/"
        style={{
          background: "#BDFF00",
          color: "#0B0B0C",
          fontWeight: 600,
          fontSize: "0.85rem",
          padding: "11px 20px",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Back to home
      </Link>
    </main>
  );
}
