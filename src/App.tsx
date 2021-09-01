import React from 'react';
import { TrChelsea, TrEric, TrSamantha, TrTorsten } from 'tyger-avatar';
import './App.css';

const avatars = [
	{ component: <TrChelsea />, name: 'TrChelsea' },
	{ component: <TrEric />, name: 'TrEric' },
	{ component: <TrSamantha />, name: 'TrSamantha' },
	{ component: <TrTorsten />, name: 'TrTorsten' },
];

const App = () => {
	return (
		<div className="container">
			{avatars.map((item: any) => {
				const avatar = React.cloneElement(item.component, {
					width: 140,
				});

				return (
					<div key={item.name}>
						<div className="avatar-item">{avatar}</div>
						<p>{item.name}</p>
					</div>
				);
			})}
		</div>
	);
};

export default App;
