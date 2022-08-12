import logo from "./logo.svg";
import "./App.css";
import Title from "./components/title/Title";
import Greeting from "./components/Greeting/Greeting";
import PersonCard from "./components/Card/PersonCard";
import Hotel from "./components/Hotel/Hotel";

const persons = [
  {
    id: "1",
    name: "Dzenan Kosuta",
    occupation: "Student",
    imageSrc:
      "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "2",
    name: "Husko",
    occupation: "Varioc",
    imageSrc:
      "https://images.pexels.com/photos/394781/pexels-photo-394781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    name: "Emily",
    occupation: "New",
    imageSrc:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const hotels = [
  {
    id: "1",
    image:
      "https://images.trvl-media.com/hotels/1000000/30000/25100/25033/47a9e846.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    naziv: "Row NYC",
    lokacija: "700 8th Avenue, New York, NY, 10036",
    ocena: "9.2",
    ocenaLokacije: "8.8",
    deskripcija:
      "Located 2.5 mi (4.1 km) from the airport, Row NYC offers a great location, putting you within just a 10-minute walk of Times Square and Broadway. After visiting the fitness center for a workout, you can grab a bite to eat at one of the 2 restaurants or unwind with a drink at one of the 2 bars/lounges.",
  },
  {
    id: "2",
    image:
      "https://images.trvl-media.com/hotels/34000000/33780000/33770400/33770341/8be4b8c5.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    naziv: "Arlo Midtown",
    lokacija: "351 West 38th Street, New York, NY, 10018",
    ocena: "8.9",
    ocenaLokacije: "9.2",
    deskripcija:
      "When you stay at Universal's Endless Summer Resort - Dockside Inn and Suites, you'll be just a 5-minute drive from The Wizarding World of Harry Potter™ and Orlando International Premium Outlets.",
  },
  {
    id: "3",
    image:
      "https://images.trvl-media.com/hotels/49000000/48670000/48669400/48669360/1fa60f05.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    naziv: "Universal's Endless Summer Resort - Dockside Inn and Suites",
    lokacija: "7125 Universal Boulevard, Orlando, FL, 32819",
    ocena: "6",
    ocenaLokacije: "8.2",
    deskripcija:
      "Just 2.2 mi (3.6 km) from the airport, Arlo Midtown features a rooftop terrace and puts you within a 10-minute drive of Broadway and Times Square.",
  },
];

function App() {
  const wellratedHotels = hotels.filter((hotel) => hotel.ocena > 7.5);
  return (
    <div>
      <div className="card-container">
        {/* {persons.map((person) => (
          <PersonCard
            imageSrc={person.imageSrc}
            name={person.name}
            occupation={person.occupation}
          />
        ))} */}
        <PersonCard
          imageSrc={
            "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          name="Dzenan Kosuta"
          occupation="Okupacija"
          verification
        />
        <PersonCard
          imageSrc={
            "https://images.pexels.com/photos/394781/pexels-photo-394781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          name="Husko"
          occupation="Varioc"
        />
        <PersonCard
          imageSrc={
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          name="Emily"
          occupation="New"
          verification
        />
      </div>
      <div>
        {/* {hotels.map((hotel) => (
          <Hotel
            image={hotel.image}
            naziv={hotel.naziv}
            lokacija={hotel.lokacija}
            ocena={hotel.ocena}
            ocenaLokacije={hotel.ocenaLokacije}
            deskripcija={hotel.deskripcija}
          />
        ))} */}
        {wellratedHotels.map((hotel) => (
          <Hotel
            image={hotel.image}
            naziv={hotel.naziv}
            lokacija={hotel.lokacija}
            ocena={hotel.ocena}
            ocenaLokacije={hotel.ocenaLokacije}
            deskripcija={hotel.deskripcija}
          />
        ))}
        {/* <Hotel
        image={
          "https://images.trvl-media.com/hotels/1000000/30000/25100/25033/47a9e846.jpg?impolicy=resizecrop&rw=1200&ra=fit"
        }
        naziv={"Row NYC"}
        lokacija={"700 8th Avenue, New York, NY, 10036"}
        ocena={9.2}
        ocenaLokacije={8.8}
        deskripcija={
          "Located 2.5 mi (4.1 km) from the airport, Row NYC offers a great location, putting you within just a 10-minute walk of Times Square and Broadway. After visiting the fitness center for a workout, you can grab a bite to eat at one of the 2 restaurants or unwind with a drink at one of the 2 bars/lounges."
        }
      />
      <Hotel
        image={
          "https://images.trvl-media.com/hotels/34000000/33780000/33770400/33770341/8be4b8c5.jpg?impolicy=resizecrop&rw=1200&ra=fit"
        }
        naziv={"Universal's Endless Summer Resort - Dockside Inn and Suites"}
        lokacija={"7125 Universal Boulevard, Orlando, FL, 32819"}
        ocena={9}
        ocenaLokacije={8.2}
        deskripcija={
          "When you stay at Universal's Endless Summer Resort - Dockside Inn and Suites, you'll be just a 5-minute drive from The Wizarding World of Harry Potter™ and Orlando International Premium Outlets."
        }
      />
      <Hotel
        image={
          "https://images.trvl-media.com/hotels/49000000/48670000/48669400/48669360/1fa60f05.jpg?impolicy=resizecrop&rw=1200&ra=fit"
        }
        naziv={"Arlo Midtown"}
        lokacija={"351 West 38th Street, New York, NY, 10018"}
        ocena={8.9}
        ocenaLokacije={9.2}
        deskripcija={
          "Just 2.2 mi (3.6 km) from the airport, Arlo Midtown features a rooftop terrace and puts you within a 10-minute drive of Broadway and Times Square."
        }
      /> */}
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <img src={logo} className="App-logo" alt="logo" />
//       <Title name="Dzenane" age={26} nekiProp={true} />
//       <Greeting name="Dzenane" fontSize="40px" fontColor="green">
//         <p>Ovaj paragraf je children</p>
//       </Greeting>
//       <p>Poceli smo sa Reactom</p>
//     </div>
//   );
// }
