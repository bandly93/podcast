import Home from '../components/Home';
import Contact from '../components/Contact';
import About from '../components/About';
import Podcast from '../components/Podcast';

export const RoutesArray = [
	{	
		path : '/',
		component : Home,
	},
	{
		path : '/contact',
		component : Contact,
	},
	{
		path : '/about',
		component : About,
	},
	{
		path : '/podcasts',
		component : Podcast,
	},
];
