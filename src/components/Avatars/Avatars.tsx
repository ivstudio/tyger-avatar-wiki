import React from 'react';
import Logo from '../Logo/Logo';
import './Avatars.styles.css';
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
	TrAlex,
	TrEnrique,
	TrFelix,
} from 'tyger-avatar';

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
	{ component: <TrAlex />, name: 'TrAlex' },
	{ component: <TrEnrique />, name: 'TrEnrique' },
	{ component: <TrFelix />, name: 'TrFelix' },
];

interface IAvatar {
	component: JSX.Element;
	name: string;
}

const Avatars = () => {
	const handleClick = (name: string) => {
		console.log(`${name} was clicked!`);
	};

	return (
		<div className="container">
			<Logo />
			<div className="avatar-list">
				{avatars.map(({ name, component }: IAvatar) => {
					const avatar = React.cloneElement(component, {
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
		</div>
	);
};

export default Avatars;
