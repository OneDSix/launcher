import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link
} from 'react-router-dom';

import FrontPage from '../home/frontPage/FrontPage';
import News from '../home/news/News';
import Instances from '../instances/my_instances/Instances';

type navLink = {
	text: string
	to: string
}

export default function App() {
  return (
    <Router>
		<nav>
			<div className='todo'>
				{/* Bottom of the App.css file. TODO */}
				<img className='logo' src='https://raw.githubusercontent.com/OneDSix/onedsix/main/src/main/resources/icon_large.png'></img>
				<h2>1D6 Launcher</h2>
			</div>
			<NavElement
			eleName="Home"
			linkTo="/"
			links={[
				{ text: "Front Page", to: "/" },
				{ text: "Updates", to: "/news/updates" },
				{ text: "Technical", to: "/news/technical" },
				{ text: "All News", to: "/news/all" },
			]} />
			<NavElement
			eleName="Instances"
			linkTo="/instances/running"
			links={[
				{ text: "Running Instance", to: "/instances/running" },
				{ text: "My Instances", to: "/instances/my_instances" },
				{ text: "Finder", to: "/instances/finder" },
			]} />
			<NavElement
			eleName="Settings"
			linkTo="/settings/general"
			links={[
				{ text: "General", to: "/settings/general" },
				{ text: "Account", to: "/settings/account" },
				{ text: "Info", to: "/settings/etc" },
			]} />
		</nav>
		<div className='content'>
			<Routes>
				<Route path="/" element={<FrontPage />} />
				<Route path="/instances/my_instances" element={<Instances />} />
				<Route path="/settings/general" element={<News />} />
			</Routes>
		</div>
	</Router>
  );
}

function NavElement({eleName, linkTo, links}: {eleName: string, linkTo:string, links: navLink[]}) {
	return (
		<div>
			<Link id={eleName + "Button"} className='navButton' to={linkTo}><h2>{eleName}</h2></Link>
			<ul>
				{NavLinks(links)}
			</ul>
		</div>
	);
}

function NavLinks(links: navLink[]) {
	let navs: React.JSX.Element[] = [];
	for (let index = 0; index < links.length; index++) {
		navs.push(
			<li><Link to={links[index].to}>{links[index].text}</Link></li>
		);
	}
	return navs;
}
