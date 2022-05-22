import { Box, Typography, Grid, CircularProgress, Backdrop } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState, Fragment } from 'react';
import { HiHome } from "react-icons/hi";
import Footer from '../components/footer';
import '../App.css';

const TitleDisplay = props => (
    <Grid className='press selection' sx={{boxShadow:1, bgcolor:'white'}} item>
        <a className='link' href={props.link} target='_blank'>
            <Box justifyContent='center' alignItems='center' sx={{boxShadow:1, height:250, width:250, p:2, display:'flex', cursor:'pointer'}}>
                <Typography sx={{textAlign:'center', color:'#339af0', fontWeight:'bold'}}>{props.title}</Typography>
                {/* <Typography>U.S. Soccer finally achieved equal pay for the men's and women's national teams, so how do their new CBAs work and what do they mean going forward?</Typography> */}
            </Box>
        </a>
   
</Grid>
)
const Gossip = () => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState(null);
    const [fetched, setFetched] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    

    useEffect(() => {
        setBackdrop(true);
        async function fetchArticles() {
            const response = await fetch('http://localhost:3000/gossip');
            const data = await response.json();
            if(response.status === 200) {
                setArticles(data);
                setBackdrop(false);
                setFetched(true);
            }
            else {
                setArticles(null);
                setBackdrop(false);
            }
        }

        if(fetched === false) {
            fetchArticles();
        }
        
        return;
    }, [fetched])
    
    return (
        <Box sx={{position:'relative', display:'flex', flexDirection:'column', pt:10, bgcolor:'#F0F3F8'}}>
            <Box onClick={() => navigate('/')} className='press' sx={{position:'absolute', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', left:10, top:10, cursor:'pointer'}}>
                <HiHome color='#011840' />
                <Typography sx={{fontSize:10, fontWeight:'bold', color:'#011840'}}>HOME</Typography>
            </Box>
           
           
            
            <Box sx={{flex:4}}>
                <Typography sx={{textAlign:'center', fontWeight:'bold', color:'#011840'}}>MAJOR GOSSIP NEWS</Typography>
                <Typography sx={{textAlign:'center', fontWeight:'bold', color:'#011840', fontSize:12}}>{new Date().toDateString()}</Typography>
            
                {
                    articles !== null &&
                    <Grid container  justifyContent='center' sx={{mt:5}}>     
                            <Fragment>
                                {
                                    articles.map(art => <TitleDisplay key={art.title} title={art.title} link={art.link} />)
                                }
                            </Fragment>
                    </Grid>
                }
                {
                    articles === null &&
                    <Typography sx={{textAlign:'center', fontSize:12, mt:5}}>No articles have been published yet today.</Typography>
                }
                
                
            </Box>
            <Backdrop open={backdrop} onClick={() => setBackdrop(false)} >
                <CircularProgress />
            </Backdrop>
            <Footer />
        </Box>
            
        
    )
}

export default Gossip;