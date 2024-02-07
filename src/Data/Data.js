import {
    UilEstate, UilClipboardAlt, UilUsersAlt,
    UilPackage, UilChart, UilUsdSquare, UilMoneyWithdrawal
} from "@iconscout/react-unicons"

import img1 from "../imgs/img1.png"

import img2 from "../imgs/img2.png"
import img3 from "../imgs/img3.png"

export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders"
    },

    {
        icon: UilUsersAlt,
        heading: "Customers"
    },
    {
        icon: UilPackage,
        heading: "Products"
    },

    {
        icon: UilChart,
        heading: "Analysis"
    }

]

export const CardsData = [
    {
        title: "Sales",
        color: {
            background: "linear-gradient(to right top,#e9d397, #e9c679, #eab95b, #ecaa3c, #ee9a17)",
            boxShadow: "0px 10px 20px 0px #EE9A17"
        },
        barValue: 70,
        value: "25,970",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ]
    },

    {
        title: "Expenditure",
        color: {
            background: "linear-gradient(to right top,#ae9347, #c0a744, #d1bc41, #dfd33c, #ebea37)",
            boxShadow: "0px 10px 20px 0px #D9EE49"
        },
        barValue: 88,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ]
    },
    {
        title: "Expenses",
        color: {
            background: "linear-gradient(to right top,  #ae9347, #cd682d, #e4024c, #d50090, #5b11e7)",
            boxShadow: "0px 10px 20px 0px #E359B9"
        },
        barValue: 50,
        value: "23.530",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ]
    },
]

export const UpdatesData = [
    {
        img: img1,
        name: "Andrew Michalsone",
        not1: "Has Ordered Apple smart watch with airbuds",
        time: "24 hour ago"
    },
    {
        img: img2,
        name: "Irtugrual Ghazi",
        not1: "Decided to buy new SAMSUNG S24 Ultra",
        time: "12 hour ago"
    },
    {
        img: img3,
        name: "Usman tahir",
        not1: "just visit the website and check the project page",
        time: "1 day ago"
    }
]