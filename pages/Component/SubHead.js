export default function SubHead() {
  return (
    <div className="w-4/5 mx-auto max-w-4xl mt-20 mb-12  lg:w-3/6">
      <div className="flex flex-col justify-center items-center md:flex-row md:space-x-2">
        <span className="flex h-3 w-3">
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
          </span>
        </span>
        <p>Connected to DatoCMS, receiving live updates!</p>
      </div>
    </div>
  )
}