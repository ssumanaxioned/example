import Link from "next/link";

export default function Header() {
  return (
    <div className="w-4/5 max-w-4xl py-6 mx-auto space-y-4 text-center xl:w-3/6">
      <div className="space-x-4">
        <Link href="/About">
          <a>
            About
          </a>
        </Link>
        <Link href="/blog">
          <a>
            Blog
          </a>
        </Link>
      </div>
      <h2 className="font-semibold text-indigo-600 uppercase">Real-times updates demo</h2>
      <h1 className="font-extrabold text-3xl tracking-tighter md:text-5xl md:tracking-normal">Event Coverage LiveBlog</h1>
      <p className="text-gray-500 text-xl">A simple Next.js + Typescript + Tailwind project to demonstrate real-time capabilities of DatoCMS</p>
    </div>
  )
}