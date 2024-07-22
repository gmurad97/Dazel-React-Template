import "./Profile.css";

const Profile = ({ full_name, position, img }) => {
    return (
        <div className="topbar__profile">
            <div className="topbar__profile-img-container">
                <img src={img} className="topbar__profile-img" alt="Profile Img" />
            </div>
            <div className="topbar__profile-content">
                <h1 className="topbar__profile-name">{full_name}</h1>
                <p className="topbar__profile-position">{position}</p>
            </div>
            <div className="topbar__profile-icon">
                <i class="fi fi-sr-caret-down"></i>
            </div>
        </div>
    );
}

export default Profile;