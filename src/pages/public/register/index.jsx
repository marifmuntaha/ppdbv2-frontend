import React, {useState} from "react";
import Head from "@/layout/head";
import Content from "@/layout/content";
import {Block, BlockBetween, BlockHead, BlockHeadContent, BlockTitle, PreviewCard, ReactDataTable} from "@/components";

const PublicRegister = () => {
    const [sm, updateSm] = useState(false);
    const [students, setStudents] = useState([
        {institutionName: 'MA', name: 'Achmad Wikramawardhana', nisn: '008232323', address: 'Jl. Raya Jepara - Bugel KM 07 Menganti', programName: 'Sains', boardingName: 'Kitab'}
    ]);
    const Columns = [
        {
            name: "Jenjang",
            selector: (row) => row.institutionName,
            sortable: false,
        },
        {
            name: "Nama Siswa",
            selector: (row) => row.name,
            sortable: false,
            // hide: 370,
            // width: "200px",
        },
        {
            name: "NISN",
            selector: (row) => row.nisn,
            sortable: false,
            // hide: 370,

        },
        {
            name: "Alamat",
            selector: (row) => row.address,
            sortable: false,
            // hide: 370,

        },
        {
            name: "Program",
            selector: (row) => row.programName,
            sortable: false,
            // hide: 370,

        },
        {
            name: "Boarding",
            selector: (row) => row.boardingName,
            sortable: false,
            // hide: 370,

        },
    ];
    return (
        <React.Fragment>
            <Head title="Data Pendaftar" />
            <Content>
                <Block size="lg">
                    <BlockHead>
                        <BlockBetween>
                            <BlockHeadContent>
                                <BlockTitle tag="h4">Data Jenjang</BlockTitle>
                                <p>
                                    Just import <code>ReactDataTable</code> from <code>components</code>, it is built in
                                    for react dashlite.
                                </p>
                            </BlockHeadContent>
                        </BlockBetween>
                    </BlockHead>
                    <PreviewCard>
                        <ReactDataTable data={students} columns={Columns} expandableRows pagination/>
                    </PreviewCard>
                </Block>
            </Content>
        </React.Fragment>
    )
}

export default PublicRegister;