import React from 'react';
import {
	TrChelsea,
	TrEric,
	TrSamantha,
	TrTorsten,
	TrIggy,
	TrFranklin,
	TrImran,
	TrMaria,
	TrShamila,
	TrRachel,
} from 'tyger-avatar';
import './App.css';

const avatars = [
	{ component: <TrChelsea />, name: 'TrChelsea' },
	{ component: <TrEric />, name: 'TrEric' },
	{ component: <TrSamantha />, name: 'TrSamantha' },
	{ component: <TrRachel />, name: 'TrRachel' },
	{ component: <TrShamila />, name: 'TrShamila' },
	{ component: <TrIggy />, name: 'TrIggy' },
	{ component: <TrFranklin />, name: 'TrFranklin' },
	{ component: <TrImran />, name: 'TrImran' },
	{ component: <TrMaria />, name: 'TrMaria' },
	{ component: <TrTorsten />, name: 'TrTorsten' },
];

interface IAvatar {
	component: JSX.Element;
	name: string;
}

const App = () => {
	const handleClick = (name: string) => {
		console.log(`${name} was clicked`);
	};

	return (
		<div className="container">
			{avatars.map(({ name, component }: IAvatar) => {
				const avatar = React.cloneElement(component, {
					width: 140,
					title: name,
					id: `tyger${name}`,
					onClick: () => handleClick(name),
				});

				return (
					<div key={name}>
						<div className="avatar-item">{avatar}</div>
						<p>{name}</p>
					</div>
				);
			})}
		</div>
	);
};

export default App;
