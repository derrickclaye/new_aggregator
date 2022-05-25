import { Box, Typography, Grid, CircularProgress, Backdrop } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState, Fragment } from 'react';
import { HiHome } from "react-icons/hi";
import Footer from '../components/footer';
import '../App.css';

const TitleDisplay = props => (
    <Grid className='press selection' sx={{boxShadow:1, bgcolor:'white'}} item>
        <a className='link' href={props.link} target='_blank'>
            <Box justifyContent='center' alignItems='center' sx={{boxShadow:1, height:250, width:250, p:2, display:'flex', cursor:'pointer', flexDirection:'column'}}>
                <Typography sx={{textAlign:'center', color:'#339af0', fontWeight:'bold'}}>{props.title}</Typography>
                {/* <Typography>U.S. Soccer finally achieved equal pay for the men's and women's national teams, so how do their new CBAs work and what do they mean going forward?</Typography> */}
                <Typography sx={{textAlign:'center', color:'#339af0', fontSize:12, mt:2}}>{props.pubDate}</Typography>
            </Box>
        </a>
   
</Grid>
)
const Sports = () => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState(null);
    const [news, setNews] = useState('ALL');
    const [fetched, setFetched] = useState(false);
    const [backdrop, setBackdrop] = useState(true);

    const handleNewsChange = e => {
        setNews(e.target.innerText);
    }

    const getContent = () => {
       
        if(backdrop === true) {
            return (
                <Backdrop open={backdrop} onClick={() => setBackdrop(false)} >
                    <CircularProgress />
                </Backdrop>
            )
        }
        if(backdrop === false) {
            return (
                <Fragment>
                    {
                        articles !== null &&
                        <>
                            {
                                news === 'ALL' && articles !== null &&
                                <Grid container  justifyContent='center' sx={{mt:5}}>
                                
                                    {
                                        articles !== null &&
                                        <Fragment>
                                            {
                                                articles['all'].map((art,idx) => <TitleDisplay key={art.title} title={art.title} link={art.link} pubDate={art.pubDate} />)
                                            }
                                        </Fragment>
                                    
                                        
                                    }
                                </Grid>
                            }
                            {
                                news === 'NBA' && articles !== null &&
                                <Grid container  justifyContent='center' sx={{mt:5}}>
                                
                                    {
                                        articles !== null &&
                                        <Fragment>
                                            {
                                                articles['nba'].map(art => <TitleDisplay key={art.title} title={art.title} link={art.link} pubDate={art.pubDate} />)
                                            }
                                        </Fragment>
                                    
                                        
                                    }
                                </Grid>
                            }
                            {
                                news === 'NFL' && articles !== null &&
                                <Grid container  justifyContent='center' sx={{mt:5}}>
                                
                                    {
                                        articles !== null &&
                                        <Fragment>
                                            {
                                                articles['nfl'].map(art => <TitleDisplay key={art.title} title={art.title} link={art.link} pubDate={art.pubDate} />)
                                            }
                                        </Fragment>
                                    
                                        
                                    }
                                </Grid>
                            }
                            {
                                news === 'NHL' && articles !== null &&
                                <Grid container  justifyContent='center' sx={{mt:5}}>
                                
                                    {
                                        articles !== null &&
                                        <Fragment>
                                            {
                                                articles['nhl'].map(art => <TitleDisplay key={art.title} title={art.title} link={art.link} pubDate={art.pubDate} />)
                                            }
                                        </Fragment>
                                    
                                        
                                    }
                                </Grid>
                            }
                            {
                                news === 'MLB' && articles !== null &&
                                <Grid container  justifyContent='center' sx={{mt:5}}>
                                
                                    {
                                        articles !== null &&
                                        <Fragment>
                                            {
                                                articles['mlb'].map(art => <TitleDisplay key={art.title} title={art.title} link={art.link} pubDate={art.pubDate} />)
                                            }
                                        </Fragment>
                                    
                                        
                                    }
                                </Grid>
                            }
                        </>
                    }
                    {
                        articles === null &&
                        <Typography sx={{textAlign:'center', fontSize:12, mt:5}}>No articles have been published yet today.</Typography>
                    }
                </Fragment>
                
            )
        }
            
        
    }
    useEffect(() => {
        async function fetchArticles() {
            const response = await fetch('https://us-central1-newsaggregator-f48b9.cloudfunctions.net/app/rss/sports');
            const data = await response.json();
            console.log(data);
            if(response.status === 200) {
                setArticles(data);
                setBackdrop(false);
                setFetched(true);
            }
            else {
                setArticles(null);
                setFetched(true);
                setBackdrop(false);
            }
        }

        if(fetched === false) {
            fetchArticles();
        }

        return 
    }, [fetched])
    
    return (
        <Box sx={{position:'relative', display:'flex', flexDirection:'column', pt:10, bgcolor:'#F0F3F8'}}>
            <Box onClick={() => navigate('/')} className='press' sx={{position:'absolute', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', left:10, top:10, cursor:'pointer'}}>
                <HiHome color='#011840' />
                <Typography sx={{fontSize:10, fontWeight:'bold', color:'#011840'}}>HOME</Typography>
            </Box>
            <Box sx={{flex:4}}>
                <Typography sx={{textAlign:'center', fontWeight:'bold', color:'#011840'}}>MAJOR SPORTS NEWS</Typography>
                <Typography sx={{textAlign:'center', fontWeight:'bold', color:'#011840', fontSize:12}}>{new Date().toDateString()}</Typography>

                <Box justifyContent='center' sx={{display:'flex', flexDirection:'row', mt:3}}>
                    <Typography onClick={handleNewsChange} className='selection' sx={{boxShadow:1, p:1, color:'#339af0', bgcolor: news === 'ALL' ? '#e6f4ff' : 'white', cursor:'pointer', width:45, fontSize:12, fontWeight:'bold', textAlign:'center'}}>ALL</Typography>
                    <Typography onClick={handleNewsChange} className='selection' sx={{boxShadow:1, p:1, color:'#339af0', bgcolor: news === 'NBA' ? '#e6f4ff' : 'white', cursor:'pointer', width:45, fontSize:12, fontWeight:'bold', textAlign:'center'}}>NBA</Typography>
                    <Typography onClick={handleNewsChange} className='selection' sx={{boxShadow:1, p:1, color:'#339af0', bgcolor: news === 'NFL' ? '#e6f4ff' : 'white', cursor:'pointer', width:45, fontSize:12, fontWeight:'bold', textAlign:'center'}}>NFL</Typography>
                    <Typography onClick={handleNewsChange} className='selection' sx={{boxShadow:1, p:1, color:'#339af0', bgcolor: news === 'NHL' ? '#e6f4ff' : 'white', cursor:'pointer', width:45, fontSize:12, fontWeight:'bold', textAlign:'center'}}>NHL</Typography>
                    <Typography onClick={handleNewsChange} className='selection' sx={{boxShadow:1, p:1, color:'#339af0', bgcolor: news === 'MLB' ? '#e6f4ff' : 'white', cursor:'pointer', width:45, fontSize:12, fontWeight:'bold', textAlign:'center'}}>MLB</Typography>
                </Box>
               {getContent()}

            </Box>
            {/* <Backdrop open={backdrop} onClick={() => setBackdrop(false)} >
                <CircularProgress />
            </Backdrop> */}
            <Footer />
        </Box>
            
        
    )
}

export default Sports;