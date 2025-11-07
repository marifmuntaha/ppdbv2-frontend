import React, {useState} from "react";
import {Col, Icon, PreviewCard, Row} from "@/components";
import Head from "@/layout/head";
import Content from "@/layout/content";

const Timetable = () => {
    const [data, setData] = useState([
        {
            id: 1,
            date: "13 Nov 25",
            text: "PMB Gelombang I",
            subtitle: "Pembukaan PMB Gelombang I MI Darul Hikmah",
            time: "09:30am",
            fill: "bg-success",
            outline: true,
        },
        {
            id: 2,
            date: "31 Des 25",
            text: "Penutupan PMB Gelombang I",
            subtitle: "Penutupan PMB Gelombang I MI Darul Hikmah",
            time: "09:30am",
            fill: "bg-danger",
            outline: false,
        },
        {
            id: 3,
            date: "03 Jan 26",
            text: "Pembukaan PMB Gelombang II",
            subtitle: "Pembukaan PMB Gelombang II MI Darul Hikmah",
            time: "09:30am",
            fill: "bg-primary",
            outline: false,
        },
    ]);
    return (
        <React.Fragment>
            <Head title={"Jadwal Pelaksanaan"}/>
            <Content>
                <Row className="gy-0">
                    <Col lg={6} md={6} sm={12}>
                        <PreviewCard>
                            <div className="card-inner">
                                <div className="timeline">
                                    <h6 className="timeline-head">Timeline PMB Tahun Ajaran 2026/2027</h6>
                                    <ul className="timeline-list">
                                        {data.map((item) => {
                                            return (
                                                <li className="timeline-item" key={item.id}>
                                                    <div
                                                        className={`timeline-status ${item.fill} ${item.outline ? "is-outline" : ""}`}></div>
                                                    <div className="timeline-date">
                                                        {item.date} <Icon name="alarm-alt"></Icon>
                                                    </div>
                                                    <div className="timeline-data">
                                                        <h6 className="timeline-title">{item.text}</h6>
                                                        <div className="timeline-des">
                                                            <p>{item.subtitle}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </PreviewCard>
                    </Col>
                </Row>
            </Content>
        </React.Fragment>
    );
};
export default Timetable;
