import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kelompok27: [],
            visible: false,

        };
    }

    handleButton = (teks) => {
        alert(teks);
    };

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:3000/anggota",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    kelompok27: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (

            <div style={{ marginTop: 20 }}>
                <center>
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Tugas Akhir Praktikum RPLBK Kelompok 27</h1>
                <h2 className="text-xl font-extrabold tracking-tight text-gray-900">Sistem Informasi Distro Kelompok 27</h2>
                <h3 className="text-lg font-extrabold tracking-tight text-gray-900">Sistem ini disusun Oleh :</h3>
                </center>

                <Grid container direction={'column'} md={8} spacing={5} style={{ marginTop: "50px", marginLeft: "490px", marginRight: "auto", textAlign: "center" }}>

                    {this.state.kelompok27.map((results, index) => {
                        return (
                            <Grid item key={results.nama} md={6}>
                                <Card>
                                    <CardActionArea onClick={() => this.handleButton(results.teks)}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={results.img}
                                    />
                                        <CardContent style={{ backgroundColor: 'rgb(97, 251, 148)' }}>
                                            <Typography variant="h6" style={{ color: 'white'}}> Nama : {results.nama}</Typography>
                                            <Typography variant="h6" style={{ color: 'white' }}>NIM : {results.nim}</Typography>
                                            <Typography variant="h6" style={{ color: 'white' }}>Email : {results.email}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}