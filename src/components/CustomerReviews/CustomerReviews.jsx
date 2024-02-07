import React from 'react'
import "./CustomerReviews.css"
import Chart from "react-apexcharts"
const CustomerReviews = () => {

    const data = {
        series: [
            {
                name: "Review",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ],
        options: {
            chart: {
                type: "area",
                height: "auto"
            },
            dropShadow: {
                enabled: false,
                enabledOnSeriec: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: .35
            },
            fill: {
                colors: ["#fff"],
                type: "gradient"
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"]
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                },
            },
            grid: {
                show: true
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2019-09-19t00:00:00.000Z",
                    "2019-09-19t00:30:00.000Z",
                    "2019-09-19t00:20:00.000Z",
                    "2019-09-19t00:30:00.000Z",
                    "2019-09-19t00:30:00.000Z",
                    "2019-09-19t00:00:00.000Z",
                    "2019-09-19t00:00:00.000Z",
                ]
            }
        }
    }
    return (
        <div className='CustomerReview'>
            <Chart type='area' series={data.series} options={data.options} />
        </div>
    )
}

export default CustomerReviews
