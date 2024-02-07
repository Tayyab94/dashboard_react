import React from 'react'
import './Card.css'
import { useState } from 'react'
import { AnimateSharedLayout, motion } from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts"
const Card = (props) => {

    const [expended, setExpended] = useState(false)
    return (
        <div className='Card'>
            <AnimateSharedLayout>
                {
                    expended ?
                        <ExpendedCard param={props} setExpended={() => setExpended(false)} />
                        :
                        <CompactCard param={props} setExpended={() => setExpended(true)} />
                }
            </AnimateSharedLayout>
        </div>
    )
}

function CompactCard({ param, setExpended }) {

    const Png = param.png
    return (
        <motion.div className="compactCard" style={{
            background: param.color.background,
            boxShadow: param.color.boxShadow,
        }}
            onClick={setExpended}
            layoutId='expandableCard'
        >
            <div className='radialBar'>
                <CircularProgressbar value={param.barValue}
                    text={`${param.barValue} %`} />
                <span>{param.title}</span>
            </div>

            <div className='detail'>
                <Png />
                <span>
                    ${param.value}
                </span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    )
}

function ExpendedCard({ param, setExpended }) {

    const data = {
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
        <motion.div className='ExpendedCard' style={{
            background: param.color.background,
            boxShadow: param.color.boxShadow
        }}
            layoutId='expandableCard'
        >
            <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }} >
                <UilTimes onClick={setExpended} />
            </div>
            <span>{param.title}</span>
            <div className="chartContainer" >
                <Chart type="area" series={param.series} options={data.options} />
            </div>
            <span>Last 24 Hours</span>
        </motion.div>
    )
}
export default Card
