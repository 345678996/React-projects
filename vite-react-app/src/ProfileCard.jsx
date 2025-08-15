import PropTypes from "prop-types";

function ProfileCard({ name, age, isMember, hobbies, onClickEvent }) {
  return (
    <div>
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Status: {isMember ? "Active member" : "Guest User"}</h4>
      <h4>Hobbies</h4>
      <ul>
        {hobbies.map((hobby, index) => {
          return (
            <div key={index} onClick={() => onClickEvent(hobby)}>
              {hobby}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

// NOTE: lowercase 'p' on propTypes — this is a property on the function
ProfileCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMember: PropTypes.bool.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string),
};

export default ProfileCard;
