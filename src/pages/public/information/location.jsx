import React from "react";
import {ButtonGroup} from "reactstrap";
import Head from "@/layout/head";
import Content from "@/layout/content";
import {
    Block,
    BlockBetween,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    Button, Col,
    Icon, PreviewCard, ReactDataTable, Row
} from "@/components";

const Location = () => {
    const Columns = [
        {
            name: "Nama Lembaga",
            selector: (row) => row.name,
            sortable: false,
            width: "250px",
        },
        {
            name: "Alamat",
            selector: (row) => row.address,
            sortable: false,
            width: "500px",

        },
        {
            name: "",
            selector: () => (
                <ButtonGroup size="sm">
                    <Button outline color="success" onClick={() => {
                        alert('testing')
                    }}><Icon name="call"/> <span>Kontak</span></Button>
                </ButtonGroup>
            ),
            sortable: false
        },
    ];
    const locations = [
        {id: 1, name: 'RA Darul Hikmah', address: 'Jl. Raya Jepara - Bugel KM 07 Menganti Kedung Jepara', phone: '082229366506'},
        {id: 2, name: 'MI PTQ Darul Hikmah', address: 'Jl. Raya Jepara - Bugel KM 07 Menganti Kedung Jepara', phone: '082229366506'},
        {id: 3, name: 'MTs Darul Hikmah', address: 'Jl. Raya Jepara - Bugel KM 07 Menganti Kedung Jepara', phone: '082229366506'},
        {id: 4, name: 'MA Darul Hikmah', address: 'Jl. Raya Jepara - Bugel KM 07 Menganti Kedung Jepara', phone: '082229366506'},
    ]
    return (
        <React.Fragment>
            <Head title="Lokasi Pendaftaran" />
            <Content>
                <Block size="lg">
                    <BlockHead>
                        <BlockBetween>
                            <BlockHeadContent>
                                <BlockTitle tag="h4">Lokasi Pendaftaran</BlockTitle>
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

export default Location;
