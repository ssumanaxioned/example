import Clock from 'react-live-clock';

export default function About({ users }) {
  ;
  // async function api() {
  //   const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = await resp.json();
  //   console.log(data);
  // }

  // useEffect(() => {
  //   // fetch('https://jsonplaceholder.typicode.com/users').then(
  //   //   resp => resp.json()
  //   // ).then(
  //   //   data => console.log(data)
  //   // )

  //   api();

  // }, [])


  return (
    <div className="font-bold text-center">
      <p>About page</p>
      <h1>List of users</h1>
      <Clock ticking={true} format={'HH:mm:ss'} />
      <ul>
        {
          users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();

  return {
    props: {
      users: data,
    },
  }
}