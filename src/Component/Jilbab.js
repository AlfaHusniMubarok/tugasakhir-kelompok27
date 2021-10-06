import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#66FF99',
    borderRadius: '25px',
    p: 4,
};

const DetailJilbab = createContext();

export default function Jilbab() {
    const [jilbab, setJilbab] = useState([]);
    const [judul, setJudul] = useState('');
    const [deskripsi, setDeskripsi] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3001/Jilbab",
            headers: {
                accept: "*/*",
            },
        })

            .then((data) => {
                setJilbab(data.data);
            })

            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div style={{ marginTop: 20 }}>

            <center>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Daftar Jilbab</h1>
            </center>

            <Grid container md={11} spacing={4} style={{ marginTop: "50px", marginLeft: "auto", marginRight: "auto" }}>
                {jilbab.map((results) => {
                    return (
                        <Grid item key={results.judul} md={3}>
                            <Card>
                                <CardActionArea onClick={() => { setOpen(true); setJudul(results.judul); setDeskripsi(results.deskripsi) }}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={results.img_src}
                                    />
                                    <CardContent style={{ backgroundColor: '#89C4F4' }}>
                                        <center>
                                        <Typography variant="h6" style={{ color: 'white',
                                    textShadowColor: 'rgba(0, 0, 0, 0)',
                                    textShadowOffset: '{width: -1, height: 1}',
                                    textShadowRadius: '10'
                                   }}>{results.judul}</Typography>
                                        <Typography variant="h6" style={{ color: 'white' }}>Harga: {results.harga}​​​​​​</Typography>
                                        </center>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
            <DetailJilbab.Provider value={{ judul: judul, deskripsi: deskripsi }}>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-jilbab"
                        aria-describedby="modal-modal-deskripsi"
                    >
                        <Detail />
                    </Modal>
                </div>
            </DetailJilbab.Provider>
        </div >
    );
}

function Detail() {
    const info = useContext(DetailJilbab);
    return (
        <Box sx={style}>
            <center>
            <Typography id="modal-modal-jilbab" variant="h6" component="h2">
                {info.judul}
            </Typography>
            <Typography id="modal-modal-deskripsi" sx={{ mt: 1 }}>
                Bahan: {info.deskripsi.bahan}
            </Typography>
            </center>
            <Typography id="modal-modal-deskripsi" sx={{ mt: 1 }}>
                Produk: {info.deskripsi.tentang}
            </Typography>
        </Box>
    );
}