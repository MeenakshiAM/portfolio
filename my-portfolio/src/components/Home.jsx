import profileImg from "../assets/images/profile.jpg";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>This is my home page.</p>
      <img src={profileImg} alt="profile" />
    </div>
  );
}
