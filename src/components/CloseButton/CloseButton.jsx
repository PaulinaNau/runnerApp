
export function CloseButton({ onClick }) {
    return <button onClick={onClick} className="w-6 h-6 cursor-pointer border-2 rounded-full hover:bg-white hover:border-white text-violet-900 transition-all flex justify-center items-center pb-0.5 absolute top-4 right-4 ease-in-out">x</button>
}