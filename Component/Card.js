export default function Card(props) {
  const { name, imgUrl, profile, time, text } = props.info

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-xl">
        {imgUrl && <img className="rounded-md" src={imgUrl} alt="img" />}
        {text && <p className="p-6 text-base text-black lg:text-lg">{text}</p>}
      </div>
      <div className="flex justify-between items-center text-gray-400 text-xs md:text-sm">
        <div className="flex justify-start items-center space-x-2 capitalize">
          <img className="h-7 w-7 rounded-full object-cover" src={profile} alt="profile" />
          <p>{name}</p>
        </div>
        <p>{time} seconds ago</p>
      </div>
    </div>
  )
}