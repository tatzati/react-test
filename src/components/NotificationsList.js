import { useState } from 'react';
import NotificationItem from "./NotificationItem";
import image from "../assets/image.jpeg";
import not_1 from "../assets/not_1.png";
import not_2 from "../assets/not_2.png";
import not_3 from "../assets/not_3.png";
import not_4 from "../assets/not_4.png";

export default function NotificationsList() {
    const [items, setItem] = useState([
        {
            "id": 1,
            "name": "estermagalhaes67",
            "time": "19s",
            "photo": not_1,
            "image": image
        },
        {
            "id": 2,
            "name": "estermagalhaes67",
            "time": "1m",
            "photo": not_2,
            "image": image
        },
        {
            "id": 3,
            "name": "estermagalhaes67",
            "time": "2m",
            "photo": not_3,
            "image": image
        },
        {
            "id": 4,
            "name": "estermagalhaes67",
            "time": "6m",
            "photo": not_4,
            "image": image
        },
    ])

    return (
        <div className="dropdown">
            { items?.map(item => <NotificationItem key={item.id} item={item} />) }
        </div>
    )
}