export function Button({ content }) {
  return (
    <button className="rounded-xl border-2 bg-indigo-300 text-white hover:bg-indigo-400 px-2 py-1">
      {content}
    </button>
  );
}
