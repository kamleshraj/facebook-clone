import HomeIcon from '@mui/icons-material/Home';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PortraitIcon from '@mui/icons-material/Portrait';

//feeds image
import feed1 from '../images/feeds/feed1.jpg';
import feed2 from '../images/feeds/feed2.jpg';
import feed3 from '../images/feeds/feed3.jpg';
import feed4 from '../images/feeds/feed4.jpg';
import feed5 from '../images/feeds/feed5.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

export const sidebarInfo =[
    {
        id:1,
        title:'Homepage',
        icon:<HomeIcon/>
    },
    {
        id:2,
        title:'Pages',
        icon:<TextSnippetIcon/>
    },
    {
        id:3,
        title:'Groups',
        icon:<GroupIcon/>
    },
    {
        id:4,
        title:'Marketplace',
        icon:<StorefrontIcon/>
    },{
        id:5,
        title:'Friends',
        icon:<PersonIcon/>
    },
    {
        id:6,
        title:'Setting',
        icon:<SettingsSuggestIcon/>
    },{
        id:7,
        title:'Profile',
        icon:<PortraitIcon/>
    }
]

export const feedsData = [
    {
        id:1,
        userName:'John Doe',
        date:'September 14, 2022',
        feedImg:feed1,
        desc: 'Please feel free to suggest additional text that could be added as custom examples. Especially the Buzzword base-text could use some more creative real-life examples.',
        icon:<FavoriteBorderIcon/>,
        share:<ShareIcon/>
    },
    {
        id:2,
        userName:'Suman Jeet Doe',
        date:'August 14, 2022',
        feedImg:feed2,
        desc: 'Please feel free to suggest additional text that could be added as custom examples. Especially the Buzzword base-text could use some more creative real-life examples.',
        icon:<FavoriteBorderIcon/>,
        share:<ShareIcon/>
    },
    {
        id:3,
        userName:'Ram Jeet Doe',
        date:'June 18, 2022',
        feedImg:feed3,
        desc: 'Please feel free to suggest additional text that could be added as custom examples. Especially the Buzzword base-text could use some more creative real-life examples.',
        icon:<FavoriteBorderIcon/>,
        share:<ShareIcon/>
    },
    {
        id:4,
        userName:'Shiva Pratap',
        date:'June 07, 2022',
        feedImg:feed4,
        desc: 'Please feel free to suggest additional text that could be added as custom examples. Especially the Buzzword base-text could use some more creative real-life examples.',
        icon:<FavoriteBorderIcon/>,
        share:<ShareIcon/>
    },
    {
        id:5,
        userName:'Arjun Singh',
        date:'April 07, 2021',
        feedImg:feed5,
        desc: 'Please feel free to suggest additional text that could be added as custom examples. Especially the Buzzword base-text could use some more creative real-life examples.',
        icon:<FavoriteBorderIcon/>,
        share:<ShareIcon/>
    }
]