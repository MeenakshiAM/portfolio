import profileImg from "../assets/images/profile.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is my home page.</p>
      </div>
      <img src={profileImg} alt="profile" className="profile" />
    </div>
  );
}
