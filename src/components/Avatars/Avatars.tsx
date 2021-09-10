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
	TrSophia,
	TrHarry,
	TrHelen,
	TrStu,
	TrCathy,
	TrChad,
	TrNancy,
} from 'tyger-avatar';

const avatars = [
	{ component: <TrChelsea />, name: 'TrChelsea' },
	{ component: <TrFelix />, name: 'TrFelix' },
	{ component: <TrShamila />, name: 'TrShamila' },
	{ component: <TrHelen />, name: 'TrHelen' },
	{ component: <TrRachel />, name: 'TrRachel' },
	{ component: <TrImran />, name: 'TrImran' },
	{ component: <TrIggy />, name: 'TrIggy' },
	{ component: <TrFranklin />, name: 'TrFranklin' },
	{ component: <TrEric />, name: 'TrEric' },
	{ component: <TrCathy />, name: 'TrCathy' },
	{ component: <TrSamantha />, name: 'TrSamantha' },
	{ component: <TrAlex />, name: 'TrAlex' },
	{ component: <TrEnrique />, name: 'TrEnrique' },
	{ component: <TrSophia />, name: 'TrSophia' },
	{ component: <TrChad />, name: 'TrChad' },
	{ component: <TrHarry />, name: 'TrHarry' },
	{ component: <TrMaria />, name: 'TrMaria' },
	{ component: <TrNancy />, name: 'TrNancy' },
	{ component: <TrTorsten />, name: 'TrTorsten' },
	{ component: <TrStu />, name: 'TrStu' },
];

interface IAvatar {
	component: JSX.Element;
	name: string;
}

const Avatars = () => {
	const handleClick = (name: string) => {
		console.log(`${name} was clicked`);
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
