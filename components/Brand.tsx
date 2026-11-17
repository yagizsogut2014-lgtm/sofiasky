export default function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? 'brand-compact' : ''}`}>
      <span className="brand-mark" aria-hidden="true">
        <svg width="38" height="42" viewBox="0 0 38 42" fill="none">
          <path d="M19 2 35 11.5v19L19 40 3 30.5v-19L19 2Z" fill="#8B5CF6" fillOpacity=".16" stroke="#B7A0FF" strokeWidth="1.8" />
          <path d="M3 11.5 19 21l16-9.5M19 21v19" stroke="#B7A0FF" strokeWidth="1.8" />
          <path d="m10 12 9-5.4 9 5.4-9 5.4-9-5.4Z" fill="#CDBBFF" />
          <path d="m10 18 6 3.6v8L10 26v-8Z" fill="#8B5CF6" />
          <path d="m22 21.6 6-3.6v8l-6 3.6v-8Z" fill="#67E8F9" />
        </svg>
      </span>
      <span className="brand-word">Sofia<span>MC</span><span className="brand-dot">.</span></span>
    </span>
  );
}
