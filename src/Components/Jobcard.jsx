import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';


function Jobcard({ filters }) {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState([]);

    const Styles = {
        companyName: {
            fontSize: 13,
            fontWeight: 600,
            color: "#8b8b8b",
            marginBottom: '3px',
        },
        jobTitle: {
            fontSize: 14,
            fontFamily: "Lexend",
            fontWeight: 400,
            textTransform: "capitalize",
        },
        location: {
            fontSize: 11,
            fontWeight: 500,
            textTransform: "capitalize",
            marginTop: '5px',
        },
        salary: {
            fontSize: 14,
            fontWeight: 500,
            margin: "8px 0",
            color: "rgb(77, 89, 106)",
            fontFamily: "Lexend",

        },
        aboutCompany: {
            fontSize: 16,
            fontWeight: 400,
            fontFamily: "Lexend",
        },
        about: {
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "Lexend",
        },
        aboutUs: {
            fontSize: 14,
            fontWeight: 300,
            fontFamily: "Lexend",
            maxHeight: 250,
        },
        minExperience: {
            fontSize: 13,
            fontWeight: 500,
            color: "#8b8b8b",
            marginBottom: '3px',
            fontFamily: "Lexend",
        },
        experience: {
            fontSize: 14,
            fontWeight: 300,
            fontFamily: "Lexend",
            margin: "6px 0",
        },
        applyBtn: {
            width: "100%",
            backgroundColor: "rgb(85, 239, 196)",
            color: "rgb(0, 0, 0)",
            fontWeight: 300,
            padding: "8px 18px",
            margin: "6px 0",
            fontSize: 16,
            fontFamily: "Lexend",


        },
        refferalBtn: {
            width: "100%",
            color: "#ffffff",
            backgroundColor: " rgb(73, 67, 218)",
            fontWeight: 300,
            padding: "8px 18px",
            margin: "6px 0",
            fontSize: 13,
            fontFamily: "Lexend",

        },
        customChip: {
            fontSize: 9,
            fontWeight: 400,
            padding: "4px 6px",
            boxShadow: "rgba(6, 6, 6, 0.05) 0px 2px 6px 0px",
            borderRadius: "10px",
            border: "1px solid rgb(230, 230, 230)",
            lineHeight: 1.5,
            fontFamily: "Lexend",
        },
        viewjob: {
            fontSize: 14,
            fontWeight: 300,
            color: " #4943da",
            textAlign: "center",
            textDecoration: "none"

        },
    };

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 20
            ) {
                setPage(prevPage => prevPage + 1);
            }
        };
        const fetchData = async () => {
            try {
                setLoading(true);
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const body = JSON.stringify({
                    "limit": 10,
                    "offset": (page - 1) * 10,
                });

                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body
                };

                const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setJobs(result.jdList);
                console.log(result.jdList);

                setJobs(prevjobs => [...prevjobs, ...result.jdList]);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        fetchData();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page]);

    const filteredJobs = jobs.filter(job => {

        if (filters.minExp && job.minExp !== parseInt(filters.minExp)) {
            return false;
        }
        if (filters.companyName && job.companyName !== filters.companyName) {
            return false;
        } if (filters.location && job.location !== filters.location) {
            return false;
        }
        if (filters.location && job.location !== filters.remote) {
            return false;
        }
        if (filters.jobRole && job.jobRole !== filters.jobRole) {
            return false;
        }
        if (filters.minJdSalary && job.minJdSalary !== parseInt(filters.minJdSalary)) {
            return false;
        }

        return true;
    });
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '110px', justifyContent: 'center' }}>
                {filteredJobs.map(job => (
                    <Card key={job.jdUid} style={{ minWidth: 275, maxWidth: 300, borderRadius: '20px', padding: ' 8px 16px', boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px" }} className='jobCard' >
                        <div style={{ padding: '5px 0' }}>
                            <span style={Styles.customChip}>⏳ Posted 19 days ago</span>
                        </div>
                        <CardContent style={{ padding: 0 }}>
                            <div style={{ display: 'flex', gap: '20px', paddingTop: '12px' }}>
                                <div>
                                    <img src={job.logoUrl} alt={job.companyName} width="32" style={{ marginTop: '4px' }} />
                                </div>
                                <div>
                                    <Typography variant="h6" style={Styles.companyName} >
                                        {job.companyName}
                                    </Typography>
                                    <Typography variant="h6" style={Styles.jobTitle}>
                                        {job.jobRole}
                                    </Typography>
                                    <Typography variant="body2" style={Styles.location}>
                                        {job.location}
                                    </Typography>
                                </div>
                            </div>
                            <Typography style={Styles.salary}>
                                Estimated Salary:  {job.minJdSalary && job.maxJdSalary ? `$${job.minJdSalary} - $${job.maxJdSalary}` : 'Salary not specified'} ✅
                            </Typography>
                            <Typography variant="h6" style={Styles.aboutCompany}>
                                About Company :
                            </Typography>
                            <div>
                                <Typography style={Styles.about}>About us</Typography>
                                <Typography style={Styles.aboutUs}>
                                    {job.jobDetailsFromCompany}
                                </Typography>

                            </div>
                            <div style={{ position: "relative", }}>
                                <div style={{ textAlign: "center", height: 50 }} className='white-gredient'>
                                    <a href={job.jdLink} target="_blank" rel="noopener noreferrer" style={Styles.viewjob}>View Job</a>
                                </div>

                                <div style={{ backgroundColor: "#fff" }}>

                                    <div >
                                        <Typography variant="body2" color="textSecondary" style={Styles.minExperience}>
                                            Minimum Experience:
                                        </Typography>
                                        <Typography variant="body2" style={Styles.experience}>
                                            {job.minExp && job.maxExp ? `${job.minExp} - ${job.maxExp} years` : 'Experience not specified'}
                                        </Typography>

                                    </div>

                                    <div>
                                        <Button variant="contained" style={Styles.applyBtn}>
                                            ⚡ Easy Apply
                                        </Button>
                                        <div>

                                            <Button variant="contained" style={Styles.refferalBtn}>
                                                <img src="https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group.png" alt="img" width='23' />
                                                <img src="https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group.png" alt="img" width='23' />
                                                <span style={{ marginLeft: '6px' }}>Unlock referral asks</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        {loading && job.jdList === job.length - 1 && <h5>Loading...</h5>}
                    </Card>
                ))}
            </div>
        </>
    );
};

export default Jobcard;