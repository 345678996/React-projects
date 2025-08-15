import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  function onHobbyClink(hobby) {
    alert(`You cliked on ${hobby}`);
  }

  const kanavProfile = {
    name: "Kanav",
    age: 19,
    isMember: true,
    hobbies: ["Reading", "Writing"],
    onClickEvent: onHobbyClink,
  };

  const amitProfile = {
    name: "Amit",
    age: 25,
    isMember: false,
    hobbies: ["Swimming", "Dancing"],
    onClickEvent: onHobbyClink,
  };

  return (
    <div>
      <h1>Hello</h1>
      <ProfileCard {...kanavProfile} />
      <ProfileCard {...amitProfile} />
    </div>
  );
}

export default App;
