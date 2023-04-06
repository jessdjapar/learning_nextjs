import Image from 'next/image';

const EventPage = ({data}) => {
    return (
        <div>
            <h1>Events Page</h1>
            <div>
              {data.map(ev => (
                <a key={ev.id} href={`events/${ev.id}`}>
                <Image width={300} height={300} alt={ev.title} src={ev.image}></Image>
                <h2>{ev.title}</h2>
              </a>
              ))}
            </div>
        </div>
        
    )
}

export default EventPage;

export async function getStaticProps() {
  const { events_categories } = await  import ('data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}

