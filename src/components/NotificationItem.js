export default function NotificationItem(props) {
    return (
        <div className="notify_item">
            <div className="notify_img">
                <img src={props.item.photo} alt="profile_pic" className="image_width"/>
            </div>
            <div className="notify_info">
                <p><span>{props.item.name}</span> liked your photo. <span className="notify_time">{props.item.time}</span></p>
            </div>
            <div className="notify_second_img">
                <img src={props.item.image} alt="app_pic" className="image_width"/>
            </div>
        </div>
    )
}