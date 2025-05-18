export function Button({ children }) {
  return (
    <button className="mt-4 cursor-pointer rounded-full border-2 border-violet-900 transition-all ease-in-out px-4 py-1 text-lg text-violet-900 hover:border-white hover:bg-violet-900 hover:text-white">
      {children}
    </button>
  );
}
