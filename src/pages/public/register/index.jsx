import React, {useState} from "react";
import Head from "@/layout/head";
import Content from "@/layout/content";
import {
    Block,
    BlockBetween,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    Button, Icon,
    PreviewCard,
    ReactDataTable, RSelect
} from "@/components";

const PublicRegister = () => {
    const [sm, updateSm] = useState(false);
    const [students, setStudents] = useState([
        {institutionName: 'MA', name: 'Achmad Wikramawardhana', nisn: '008232323', address: 'Jl. Raya Jepara - Bugel KM 07 Menganti', programName: 'Sains', boardingName: 'Kitab'}
    ]);
    const [institutionOptions, setInstitutionOptions] = useState([
        {value: 1, label: 'RA Darul Hikmah Menganti'},
        {value: 2, label: 'MI Darul Hikmah Menganti'},
        {value: 3, label: 'MTS Darul Hikmah Menganti'},
        {value: 4, label: 'MA Darul Hikmah Menganti'},
    ]);
    const [institutionSelected, setInstitutionSelected] = useState({
        value: null,
        label: '',
    })
    const Columns = [
        {
            name: "Jenjang",
            selector: (row) => row.institutionName,
            sortable: false,
            width: '100px',
        },
        {
            name: "Nama Siswa",
            selector: (row) => row.name,
            sortable: false,
            width: '300px',
        },
        {
            name: "NISN",
            selector: (row) => row.nisn,
            sortable: false,
            width: '150px',

        },
        {
            name: "Alamat",
            selector: (row) => row.address,
            sortable: false,
            width: '300px'

        },
        {
            name: "Program",
            selector: (row) => row.programName,
            sortable: false,

        },
        {
            name: "Boarding",
            selector: (row) => row.boardingName,
            sortable: false,

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
                                <BlockTitle tag="h4">Data Pendaftar</BlockTitle>
                                <p>
                                    Just import <code>ReactDataTable</code> from <code>components</code>, it is built in
                                    for react dashlite.
                                </p>
                            </BlockHeadContent>
                            <BlockHeadContent>
                                <div className="toggle-wrap nk-block-tools-toggle">
                                    <Button
                                        className={`btn-icon btn-trigger toggle-expand me-n1 ${sm ? "active" : ""}`}
                                        onClick={() => updateSm(!sm)}
                                    >
                                        <Icon name="menu-alt-r"></Icon>
                                    </Button>
                                    <div className="toggle-expand-content" style={{display: sm ? "block" : "none"}}>
                                        <ul className="nk-block-tools g-3">
                                            <li>
                                                <RSelect
                                                    options={institutionOptions}
                                                    value={institutionOptions?.find((c) => parseInt(c.value) === institutionSelected.value)}
                                                    onChange={(e) => {
                                                        setInstitutionSelected(e)
                                                    }}
                                                    placeholder="Pilih Jenjang"
                                                    className="w-250px"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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
