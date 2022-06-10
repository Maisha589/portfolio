import React from 'react';
import { useParams } from 'react-router-dom';
import Detail from './Detail';

const WebDetails = () => {
    const { id } = useParams();

    const projects = [
        {
            _id: 1,
            name: "Royal Perfume",
            technology: "React, Tailwind, Tailwind-Plugin,Express.js, MongoDB, Firebase, Heroku. ",
            liveSite: "https://royal-perfume.web.app/",
            clientSide: "https://github.com/Maisha589/perfume-warehouse-web-client",
            serverSite: "https://github.com/Maisha589/perfume-warehouse-server",
            websiteDetail: "It is a warehouse management website. Here users can store their product and also can withdraw their products. To use this website user have to login first. User can also see all inventory items.",
            img1: "https://i.ibb.co/xzDtwNB/royal-perfume-full.png",
            img2: "https://i.ibb.co/kQZXHx5/royal-perfume-inventory.png",
            img3: "https://i.ibb.co/PCNbMCv/royal-perfume-login.png",
            website: "Warehouse management website",
        },
        {
            _id: 2,
            name: "Electronic Tools manufacturer",
            technology: "React, Tailwind, DaisyUI,Express.js, MongoDB, Firebase, Heroku , JWT.",
            website: "Tools Manufacturer website",
            liveSite: "https://electronic-tool-zone.web.app/",
            clientSide: "https://github.com/Maisha589/electronic-tools-manufecture-web-client",
            serverSite: "https://github.com/Maisha589/Electronic-tool-manufacturer-web-server",
            websiteDetail: "It is a electric tool manufacturer website . Need to login first to preview the website. Here user and admin have different access. User can purchase any tool but in a minimum quantity, user can manage their booking, also can proceed to payment.Moreover, user also can leave a review about service which will show in the hme page. An admin can cancel any order except the paid one. Admin can see all users information , he has the power of give a user of admin access. Admin can add new Items or delete one. ",
            img1: "https://i.ibb.co/18f2JH3/electronic-tool-full-cover.png",
            img2: "https://i.ibb.co/K6H6rnN/electronic-tool-admin-dashboard.png",
            img3: "https://i.ibb.co/5vrFKrb/electronic-tool-all-booking.png"
        },
        {
            _id: 3,
            name: "Tourist Guide",
            technology: "React, Bootstrap, React-Bootstrap, Firebase.",
            liveSite: "https://tourist-guide-6c7c0.web.app/",
            clientSide: "https://github.com/Maisha589/tour-guide",
            websiteDetail: "It is a Tourist guide service means single service provider website. User need to login first for book any service. For booking user have to provide their detail information along with date of booking.",
            img1: " https://i.ibb.co/nzbrbfZ/tourist-guide-full.png",
            img2: "https://i.ibb.co/M1LjQ8d/tourist-guide-full-2.png",
            img3: "https://i.ibb.co/RCB8zBp/tourist-guide-login-page.png",
            website: "Single service Provider website",
        },
        {
            _id: 4,
            name: "Doctors Portal",
            technology: "React, Tailwind, DaisyUI,Express.js, MongoDB, Firebase, Heroku , JWT.",
            liveSite: "https://doctors-portal-ee0e4.web.app/",
            clientSide: "https://github.com/Maisha589/doctors-portal",
            serverSite: "https://github.com/Maisha589/doctors-portal-server",
            websiteDetail: "It is a clinic management website. User have to login first to book any appointment. User cannot book same service of a same date . user can pay for their selected appointment. On the other hand admin can check all appointment details along with the list of doctors.Admin can manage all doctors.",
            img1: "https://i.ibb.co/DYRc8gm/doctors-portal-full.png",
            img2: "https://i.ibb.co/SXrP3dh/doctors-portal-appointment.png",
            img3: "https://i.ibb.co/brpFrHF/doctors-portal-users.png",
            website: "Clinic management website",
        },
        {
            _id: 5,
            name: "Dream Wedding",
            technology: "HTML,Bootstrap",
            liveSite: "https://dream-event589.netlify.app/",
            clientSide: "https://github.com/Maisha589/convention-center",
            websiteDetail: "It is a simple wedding planner website. The main focus of this website is its beautiful UI.",
            img1: "https://i.ibb.co/2q5G1bh/dream-event-cover.png",
            img2: "https://i.ibb.co/KNJyqz9/dream-event-full.png",
            img3: "https://i.ibb.co/F5xhgws/dream-event-mobile.png",
            website: "Event planner website",
        },
        {
            _id: 6,
            name: "Panda commerce",
            technology: "HTML,Bootstrap",
            liveSite: "https://panda-commerce589.netlify.app/",
            clientSide: "https://github.com/Maisha589/panda-commerce",
            websiteDetail: "It is a e-commerce site . User can order their desired item from this website.",
            img1: "https://i.ibb.co/CPkyYZk/panda-commerce-full.png",
            img2: "https://i.ibb.co/2kn0DjR/panda-commerce-cover.png",
            img3: "https://i.ibb.co/RDXS45w/panda-commerce-mobile.png",
            website: "E-commerce website",
        },
    ]


    return (
        <div>
            {
                projects.filter(project => project._id == id).map(detail =>
                    <Detail key={detail._id} detail={detail}></Detail>
                )
            }
        </div>
    );
};

export default WebDetails;