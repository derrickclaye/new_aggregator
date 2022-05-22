import { Box, Typography, Grid, Container } from '@mui/material';
import { isMobileOnly, isTablet } from 'react-device-detect';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/footer';
import '../App.css';

const Landing = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{display:'flex', flexDirection:'column', pt:10, bgcolor:'#F0F3F8'}}>
            <Box sx={{flex:4}}>
                <Typography sx={{textAlign:'center', fontWeight:'bold', color:'#011840'}}>MAJOR NEWS HEADLINES IN ONE PLACE</Typography>
                <Typography sx={{textAlign:'center', fontWeight:'bold', color:'#011840', fontSize:12}}>{new Date().toDateString()}</Typography>
                {
                    isMobileOnly === true &&
                    <Grid container justifyContent='center' sx={{mt:5}}>
                        <Grid onClick={() => navigate('/sports')} className='press selection' xs={10} item sx={{display:'flex', alignItems:'center', justifyContent:'center', boxShadow:1, p:5, borderRadius:2, cursor:'pointer', bgcolor:'white', color:'#339af0', mb:2}}><Typography sx={{fontWeight:'bold'}}>SPORTS</Typography></Grid>
                        <Grid onClick={() => navigate('/crypto')} className='press selection' xs={10} item sx={{display:'flex', alignItems:'center', justifyContent:'center', boxShadow:1, p:5, borderRadius:2, cursor:'pointer', bgcolor:'white', color:'#339af0', mb:2}}><Typography sx={{fontWeight:'bold'}}>CRYPTO</Typography></Grid>
                        <Grid onClick={() => navigate('/world')} className='press selection' xs={10} item sx={{display:'flex', alignItems:'center', justifyContent:'center', boxShadow:1, p:5, borderRadius:2, cursor:'pointer', bgcolor:'white', color:'#339af0', mb:2}}><Typography sx={{fontWeight:'bold'}}>WORLD NEWS</Typography></Grid>
                        <Grid onClick={() => navigate('/gossip')} className='press selection' xs={10} item sx={{display:'flex', alignItems:'center', justifyContent:'center', boxShadow:1, p:5, borderRadius:2, cursor:'pointer', bgcolor:'white', color:'#339af0', mb:2}}><Typography sx={{fontWeight:'bold'}}>GOSSIP</Typography></Grid>
                    </Grid>
                }
                {
                    isMobileOnly === false &&
                    <Grid container  justifyContent='center' sx={{mt:5}}>
                        <Grid onClick={() => navigate('/sports')} className='press selection' xs={5} item sx={{display:'flex', alignItems:'center', justifyContent:'center', boxShadow:1, p:5, cursor:'pointer', bgcolor:'white', color:'#339af0',mt:.1}}><Typography sx={{fontWeight:'bold'}}>SPORTS</Typography></Grid>
                        <Grid onClick={() => navigate('/crypto')} className='press selection' xs={5} item sx={{display:'flex', alignItems:'center', justifyContent:'center', boxShadow:1, p:5, cursor:'pointer', bgcolor:'white', color:'#339af0',mt:.1}}><Typography sx={{fontWeight:'bold'}}>CRYPTO</Typography></Grid>
                        <Grid onClick={() => navigate('/world')} className='press selection' xs={5} item sx={{display:'flex', alignItems:'center', justifyContent:'center', boxShadow:1, p:5, cursor:'pointer', bgcolor:'white', color:'#339af0',mt:.1}}><Typography sx={{fontWeight:'bold'}}>WORLD NEWS</Typography></Grid>
                        <Grid onClick={() => navigate('/gossip')} className='press selection' xs={5} item sx={{display:'flex', alignItems:'center', justifyContent:'center', boxShadow:1, p:5, cursor:'pointer', bgcolor:'white', color:'#339af0',mt:.1}}><Typography sx={{fontWeight:'bold'}}>GOSSIP</Typography></Grid>
                    </Grid>
                }
            </Box>
            <Footer />
        </Box>
            
        
    )
}

export default Landing;