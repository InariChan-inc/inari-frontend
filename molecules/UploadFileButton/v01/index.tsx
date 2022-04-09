import {
	VoidFunctionComponent,
	useState,
	useEffect,
	ChangeEventHandler,
	JSXElementConstructor,
	CSSProperties
} from "react";
import {
	Label,
} from './styles';

export interface UploadFileButtonProps {
	label?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	Icon?: JSXElementConstructor<{
		style?: CSSProperties;
	}>;
	padding?: string;
	style?: CSSProperties;
	accept?: string;
}

const UploadFileButton: VoidFunctionComponent<UploadFileButtonProps> = ({
	label,
	padding,
	onChange,
	Icon,
	style,
	accept,
}) => {
	
	return (
		<Label
			padding={padding}
			style={style}
		>
			{Icon ? <Icon style={{ marginRight: 8 }}/> : null}
			{label}
			<input
				type="file"
				accept={accept}
				onChange={(event) => {
					if (onChange) {
						onChange(event);
					}
				}}
				hidden
				/>
		</Label>
	);
}


export default UploadFileButton;