import { Box, Typography } from '@mui/material';

const Footer = () => (
    <Box sx={{flex:1,bgcolor:'#f5f8fc', color:'grey', mt:7, borderTopStyle:'solid', borderTopColor:'#d0d5db', borderTopWidth:.5, p:2}}>
        <Typography sx={{mb:10, fontSize:12, fontWeight:'bold', color:'#011840'}}>Made by Derrick Claye</Typography>
        <a href='https://www.linkedin.com/in/derrick-l-claye-ii-608270105/' target='_blank'><Typography sx={{fontSize:12}}>LinkedIn</Typography></a>
        <a href='https://github.com/derrickclaye' target='_blank'><Typography sx={{fontSize:12}}>Github</Typography></a>
        <a href='https://github.com/derrickclaye/new_aggregator' target='_blank'><Typography sx={{fontSize:12}}>Source code</Typography></a>
    </Box>
);

export default Footer;