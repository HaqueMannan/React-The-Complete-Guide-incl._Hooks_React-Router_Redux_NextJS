import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
   { id: 'm1', title: 'A First Meetup', image: 'https://media.cntraveler.com/photos/5fc6818f3cfe1de2cab79372/4:3/w_4000,h_3000,c_limit/Amsterdam-GettyImages-840603854.jpg', address: 'Boat Tour in Amsterdam', description: 'This is a first meetup'},
   { id: 'm2', title: 'A Second Meetup', image: 'https://i0.wp.com/i.pinimg.com/originals/e3/b5/4d/e3b54de6c65ae3b90ac640126d586ed0.jpg', address: 'Coffee Shop in Italy', description: 'This is a second meetup'}
];

function HomePage() {
   return(
      <MeetupList  meetups={DUMMY_MEETUPS} />
   );
};

export default HomePage;