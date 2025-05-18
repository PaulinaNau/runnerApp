export function FormWarpper({ children, bgColor = 'bg-white', textAlign = 'text-center'}) {
    return <section className={`relative ${textAlign} mt-4 max-w-xl w-full mx-auto ${bgColor} rounded-2xl p-4`}>{ children }</section>
}