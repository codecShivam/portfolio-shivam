import React from 'react';
import {
	FaBehance,
	FaFacebook,
	FaLinkedin,
	FaTwitter,
	FaSketch,
	FaHome,
	FaUserFriends,
	FaFolderOpen,
	FaCalendarAlt,
} from 'react-icons/fa';

import { HiDocument } from 'react-icons/hi';
export const links = [
	{
		id: 1,
		url: '/home',
		text: 'home',
		icon: <FaHome className="w-5 h-5" />,
	},
	{
		id: 2,
		url: '/about',
		text: 'about',
		icon: <FaUserFriends className="w-5 h-5" />,
	},
	{
		id: 3,
		url: '/projects',
		text: 'projects',
		icon: <FaFolderOpen className="w-5 h-5" />,
	},
	{
		id: 4,
		url: '/journey',
		text: 'journey',
		icon: <FaCalendarAlt className="w-5 h-5" />,
	},
	{
		id: 5,
		url: '/blogs',
		text: 'blogs',
		icon: <HiDocument className="w-5 h-5" />,
	},
];

export const social = [
	{
		id: 1,
		url: 'https://www.twitter.com',
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: 'https://www.twitter.com',
		icon: <FaTwitter />,
	},
	{
		id: 3,
		url: 'https://www.twitter.com',
		icon: <FaLinkedin />,
	},
	{
		id: 4,
		url: 'https://www.twitter.com',
		icon: <FaBehance />,
	},
	{
		id: 5,
		url: 'https://www.twitter.com',
		icon: <FaSketch />,
	},
];