import React from "react";
import Head from "@/layout/head";
import Content from "@/layout/content";
import {
    Block,
    BlockBetween,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    Col,
    PreviewCard, ReactDataTable, Row,
} from "@/components";

const Capacity = () => {
    const Columns = [
        {
            name: "Nama Lembaga",
            selector: (row) => row.name,
            sortable: false,
            width: "600px",
        },
        {
            name: "Daya Tampung",
            selector: (row) => row.capacity + ' Siswa',
            sortable: false,

        },
    ];
    const locations = [
        {id: 1, name: 'RA Darul Hikmah', capacity: 100},
        {id: 2, name: 'MI PTQ Darul Hikmah', capacity: 175},
        {id: 3, name: 'MTs Darul Hikmah', capacity: 350},
        {id: 4, name: 'MA Darul Hikmah', capacity: 250},
    ]
    return (
        <React.Fragment>
            <Head title="Daya Tampung" />
            <Content>
                <Block size="lg">
                    <BlockHead>
                        <BlockBetween>
                            <BlockHeadContent>
                                <BlockTitle tag="h4">Daya Tampung</BlockTitle>
                                <p>
                                    Just import <code>ReactDataTable</code> from <code>components</code>, it is built in
                                    for react dashlite.
                                </p>
                            </BlockHeadContent>
                        </BlockBetween>
                    </BlockHead>
                    <Row className="gy-0">
                        <Col lg={8} md={8} sm={12}>
                            <PreviewCard>
                                <ReactDataTable data={locations} columns={Columns} expandableRows pagination/>
                            </PreviewCard>
                        </Col>
                    </Row>
                </Block>
            </Content>
        </React.Fragment>
    )
}

export default Capacity;
