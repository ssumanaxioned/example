import Card from "./Card"

export default function CardList() {
  const data = [
    {
      id: 0,
      name: 'john doe',
      imgUrl: "https://images.pexels.com/photos/11282403/pexels-photo-11282403.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      profile: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      time: 5,
    },
    {
      id: 1,
      name: 'joey',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum praesentium libero eaque a aperiam. Consequuntur exercitationem excepturi autem, doloribus modi repellendus? Nam numquam ab placeat.",
      profile: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      time: 8,
    },
    {
      id: 2,
      name: 'felicity smokes',
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, suscipit.",
      profile: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      time: 12,
    },
    {
      id: 3,
      name: 'steve rogers',
      imgUrl: "https://images.pexels.com/photos/11348767/pexels-photo-11348767.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      profile: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      time: 15,
    },
    {
      id: 4,
      name: 'suman sasmal',
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex et laboriosam dolorem natus ut dolorum aperiam sapiente repudiandae ad ab iusto quia assumenda corporis quibusdam ipsa, veniam doloribus, porro mollitia perspiciatis ratione? Minima, eligendi quasi assumenda veritatis impedit voluptatem omnis.",
      profile: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      time: 20,
    },
    {
      id: 5,
      name: 'joe doe',
      imgUrl: "https://images.pexels.com/photos/5775309/pexels-photo-5775309.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      profile: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      time: 25,
    }
  ]
  return (
    <div className="w-4/5 pb-4 mx-auto space-y-12">
      {
        data.map((item) => (<Card key={item.id} info={item} />))
      }
    </div>
  )
}