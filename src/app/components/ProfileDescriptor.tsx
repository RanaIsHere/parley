export default function ProfileDescriptor(props: { centered: boolean }) {
    return (
        <div className={props.centered ? "profile-descriptor-centered" : "profile-descriptor"}>
            <div className="profile-picture"></div>
            <p>Rana Rosihan</p>
        </div>
    );
}