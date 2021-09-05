import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

// const DUMMY_MEETUPS = [
//    { id: 'm1', title: 'A First Meetup', image: 'https://media.cntraveler.com/photos/5fc6818f3cfe1de2cab79372/4:3/w_4000,h_3000,c_limit/Amsterdam-GettyImages-840603854.jpg', address: 'Boat Tour in Amsterdam', description: 'This is a first meetup'},
//    { id: 'm2', title: 'A Second Meetup', image: 'https://i0.wp.com/i.pinimg.com/originals/e3/b5/4d/e3b54de6c65ae3b90ac640126d586ed0.jpg', address: 'Coffee Shop in Italy', description: 'This is a second meetup'}
// ];

function HomePage(props) {
   return(
      <MeetupList meetups={props.meetups} />
   );
};

// Static Site Generation (SSG):
export async function getStaticProps(){
   // fetch data from an API
   const client = await MongoClient.connect('mongodb+srv://Tester:OXIsMht4XrKqbcpz@cluster0.evwfu.mongodb.net/meetupsDB?retryWrites=true&w=majority');
   const db = client.db();
   const meetupsCollection = db.collection('meetups');
   const meetups = await meetupsCollection.find().toArray();
   client.close();

   return {
      props: {
         // meetups: DUMMY_MEETUPS
         meetups: meetups.map(meetup => ({
            id: meetup._id.toString(),
            title: meetup.title,
            address: meetup.address,
            image: meetup.image,
         }))
      },
      revalidate: 10    // Re-validate the SSG every 10 seconds
   };
};

// Server Side Rendering (SSR):
// export async function getServerSideProps(context) {
//    const req = context.req;
//    const res = context.res;

//    // fetch data from an API
//    return {
//       props: {
//          meetups: DUMMY_MEETUPS
//       }
//    };
// };

export default HomePage;