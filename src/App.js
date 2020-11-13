import Customer from "./Components/Customer";

const customer = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "jeewon",
    birthday: "19970102",
    school: "숭실",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "ss",
    birthday: "19970dsadsa102",
    school: "dsa",
  },
];
const App = () => {
  return (
    <div className="App">
      <h1>고객정보</h1>
      {customer.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            school={c.school}
          />
        );
      })}
    </div>
  );
};

export default App;
