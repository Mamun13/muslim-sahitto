import React from 'react';
import Header from '../../components/Header/Header';
import Welcome from '../../components/Modules/Welcome';
import Marquee_textheader from '../../components/Modules/Marquee_textheader';
import Services from '../../components/Modules/Services';
// import Video from '../../components/Modules/Video'
import Members from '../../components/Modules/Members';
import News from '../../components/Modules/News';
import Faq from '../../components/Modules/Faq';
import Events from '../../components/Modules/Events';
import Feedback from '../../components/Modules/Feedback';
import Gallery from '../../components/Modules/Gallery';
import Publications from '../../components/Modules/Publications';
import Notice from '../../components/Modules/Notice';
import Facilities from '../../components/Modules/Facilities';
import BackToTop from '../../components/Modules/BackToTop';



const Home = () => {
	return (
		<>
			<Header/>
			<Welcome/>
			<Marquee_textheader/>
			<BackToTop/>
			<Services/>
			{/* <Video/> */}
			<Members/>
			<News/>
			<Faq/>
			<Events/>
			<Feedback/>
			<Gallery/>
			<Publications/>
			<Notice/>
			<Facilities/>

			
		</>
	);
};

export default Home;
