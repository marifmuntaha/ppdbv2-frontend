import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import {Button, Row, Spinner} from "reactstrap";
import {
    Block,
    BlockBetween,
    BlockHead,
    BlockHeadContent,
    BlockTitle, Icon,
    PreviewCard,
    RSelect, RToast
} from "@/components";
import {useForm} from "react-hook-form";
import Head from "@/layout/head/index.jsx";
import Content from "@/layout/content/index.jsx";

const Personal = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: null,
        name: "",
        nisn: "",
        nik: "",
        gender: null,
        birthplace: "",
        birthdate: moment().toDate(),
        email: "",
        phone: "",
    })
    const [birthdateSelected, setBirthdateSelected] = useState(new Date());
    const genderOptions = [
        {value: "L", label: "Laki-laki"},
        {value: "P", label: "Perempuan"},
    ]
    const onInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const {register, handleSubmit, setValue, formState: {errors}} = useForm();
    const submitForm = () => {
        setLoading(true);
        setTimeout(() => {
            RToast('Data Peribadi berhasil disimpan.', 'success');
            setLoading(false);
        }, 2000);
    };

    return (
        <React.Fragment>
            <Head title="Data Pribadi"/>
            <Content>
                <Block size="lg">
                    <BlockHead>
                        <BlockBetween>
                            <BlockHeadContent>
                                <BlockTitle tag="h4">Data Pribadi</BlockTitle>
                                <p>
                                    Silahkan melengkapi data pribadi anda dibawah ini.
                                </p>
                            </BlockHeadContent>
                        </BlockBetween>
                    </BlockHead>
                    <PreviewCard className="col-md-8">
                        <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
                            <Row className="gy-0">
                                <div className="form-group col-md-12">
                                    <label className="form-label" htmlFor="name">
                                        Nama Lengkap
                                    </label>
                                    <div className="form-control-wrap">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Ex. Achmad Wikramawardhana"
                                            {...register('name', {
                                                required: true,
                                                onChange: (e) => onInputChange(e)
                                            })}
                                        />
                                        {errors.name &&
                                            <span className="invalid">Kolom tidak boleh kosong</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="form-label" htmlFor="nisn">NISN</label>
                                    <div className="form-control-wrap">
                                        <input
                                            type="number"
                                            name="nisn"
                                            className="form-control"
                                            placeholder="Ex. 1234567890"
                                            {...register('nisn', {
                                                required: true,
                                                onChange: (e) => onInputChange(e)
                                            })}
                                        />
                                        {errors.nisn &&
                                            <span className="invalid">Kolom tidak boleh kosong</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="form-label" htmlFor="nism">NISM</label>
                                    <div className="form-control-wrap">
                                        <input
                                            type="number"
                                            name="nism"
                                            className="form-control"
                                            placeholder="Ex. 1234567890"
                                            {...register('nism', {
                                                required: true,
                                                onChange: (e) => onInputChange(e)
                                            })}
                                        />
                                        {errors.nism &&
                                            <span className="invalid">Kolom tidak boleh kosong</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="form-label" htmlFor="nik">NIK</label>
                                    <div className="form-control-wrap">
                                        <input
                                            type="number"
                                            name="nik"
                                            className="form-control"
                                            placeholder="Ex. 1234567890"
                                            {...register('nik', {
                                                required: true,
                                                onChange: (e) => onInputChange(e)
                                            })}
                                        />
                                        {errors.nik &&
                                            <span className="invalid">Kolom tidak boleh kosong</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="form-label" htmlFor="gender">Jenis Kelamin</label>
                                    <div className="form-control-wrap">
                                        <RSelect
                                            id="gender"
                                            options={genderOptions}
                                            value={genderOptions?.find((e) => e.value === formData.gender)}
                                            onChange={(val) => {
                                                setFormData({...formData, gender: val.value});
                                                setValue('gender', val.value);
                                            }}
                                            placeholder="Pilih Jenis Kelamin"
                                        />
                                        <input type="hidden"
                                               className="form-control" {...register('gender', {required: true})} />
                                        {errors.gender &&
                                            <span className="invalid">Kolom tidak boleh kosong.</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="form-label" htmlFor="birthplace">Tempat Lahir</label>
                                    <div className="form-control-wrap">
                                        <input
                                            type="text"
                                            name="birthplace"
                                            className="form-control"
                                            placeholder="Ex. Jepara"
                                            {...register('birthplace', {
                                                required: true,
                                                onChange: (e) => onInputChange(e)
                                            })}
                                        />
                                        {errors.birthplace &&
                                            <span className="invalid">Kolom tidak boleh kosong.</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="form-label" htmlFor="birthdate">Tanggal Lahir</label>
                                    <div className="form-control-wrap">
                                        <DatePicker
                                            locale="id"
                                            selected={birthdateSelected}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    birthdate: moment(e).format('YYYY-MM-DD')
                                                });
                                            }}
                                            dateFormat={"dd/MM/yyyy"}
                                            className="form-control date-picker"
                                            showMonthYearDropdown/>{" "}
                                        {errors.birthdate &&
                                            <span className="invalid">Kolom tidak boleh kosong</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <div className="form-control-wrap">
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            placeholder="Ex. wikramawardhana@gmail.com"
                                            {...register('email', {
                                                required: true,
                                                onChange: (e) => onInputChange(e)
                                            })}
                                        />
                                        {errors.email &&
                                            <span className="invalid">Kolom tidak boleh kosong.</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="phone">Nomor HP</label>
                                    <div className="form-control-wrap">
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Ex. 6282229366509"
                                            {...register('phone', {
                                                required: true,
                                                onChange: (e) => onInputChange(e)
                                            })}
                                        />
                                        {errors.phone &&
                                            <span className="invalid">Kolom tidak boleh kosong.</span>}
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="form-control-wrap">
                                        <Button color="success" type="submit" className="col-md-12">
                                            {loading ? (<Spinner size="sm"/>) : (
                                                <React.Fragment><Icon name="save"/> <span>SIMPAN</span></React.Fragment>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </Row>
                        </form>
                    </PreviewCard>
                </Block>
            </Content>
        </React.Fragment>
    );
};

export default Personal;