export default function Button({ label, variant = "primary", disabled = false }) {
  const base = "px-4 py-2 rounded font-semibold transition-all"
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-gray-900 hover:bg-gray-400",
  }

  return (
    <button
      disabled={disabled}
      className={`${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {label}
    </button>
  )
}