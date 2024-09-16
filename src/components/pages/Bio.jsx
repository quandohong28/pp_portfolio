import React from 'react'

function Bio() {
	const bio = {
		name: 'Do Hong Quan',
		age: 23,
		gender: 'Male',
		location: 'Minh Khai, Bac Tu Liem, Hanoi',
		tel: '0362303364',
		mail: 'quandohong28@gmail.com',
		description: 'As a student majoring in Web Development at FPT Polytechnic, I would like to an internship opportunity for a Backend Developer position to apply and improve the knowledge I have learned in a real-life environment. I am passionate about programming and have a strong background in languages such as HTML, CSS, Javascript, PHP. I look forward to working in a dynamic and creative environment where I can learn from industry experts, participate in real projects, and contribute to the company\'s growth.',
	}

	return (
		<>
			<div class="h-[540px] overflow-y-auto p-10 scrollbar-none">
				<ul className='flex flex-col gap-4'>
					<li className='flex flex-col'>
						<span>{bio.name}</span>
						<span className='text-sm text-gray-400'>Full name</span>
					</li>
					<li className='flex flex-col'>
						<span>{bio.age}</span>
						<span className='text-sm text-gray-400'>Age</span>
					</li>
					<li className='flex flex-col'>
						<span>{bio.location}</span>
						<span className='text-sm text-gray-400'>Location</span>
					</li>
					<li className='flex flex-col'>
						<span>{bio.tel}</span>
						<span className='text-sm text-gray-400'>Tel</span>
					</li>
					<li className='flex flex-col'>
						<span>{bio.mail}</span>
						<span className='text-sm text-gray-400'>Mail</span>
					</li>
					<li className='flex flex-col'>
						<span>{bio.description}</span>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Bio