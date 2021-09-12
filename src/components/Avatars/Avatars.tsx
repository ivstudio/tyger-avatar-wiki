import React from 'react';
import Logo from '../Logo/Logo';
import './Avatars.styles.css';
import TygerAvatar from 'tyger-avatar';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
SyntaxHighlighter.registerLanguage('jsx', jsx);

const avatars = [
	'TrChelsea',
	'TrFelix',
	'TrImran',
	'TrAlex',
	'TrShamila',
	'TrCathy',
	'TrEric',
	'TrSamantha',
	'TrNancy',
	'TrHarry',
	'TrTorsten',
	'TrIggy',
	'TrFranklin',
	'TrMaria',
	'TrRachel',
	'TrEnrique',
	'TrSophia',
	'TrHelen',
	'TrStu',
	'TrChad',
];

const Avatars = () => {
	const codeString = (item: any) => `<TygerAvatar name={${item}}/>`;
	return (
		<div className="container">
			<Logo />
			<div className="avatar-list">
				{avatars.map((item: any) => (
					<div>
						<TygerAvatar name={item} size="xlg" />
						<SyntaxHighlighter language="jsx" style={dracula}>
							{codeString(item)}
						</SyntaxHighlighter>
					</div>
				))}
			</div>
		</div>
	);
};

export default Avatars;
