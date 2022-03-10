export default function SubHead() {
  return (
    <div className="w-4/5 mx-auto mt-20 mb-12">
      <div className="flex flex-col justify-center items-center">
        <span className="w-3 h-3 mb-2 block relative">
          <span className="block w-full h-full rounded-full aboslute top-0 bg-pink-400 animate-ping"></span>
          <span className="block w-full h-full rounded-full absolute top-0 bg-pink-500"></span>
        </span>
        <p>Connected to DatoCMS, receiving live updates!</p>
      </div>
    </div>
  )
}