import {
	useCallback,
	useEffect,
	useState,
	VoidFunctionComponent
} from "react";
import {
	Overlay,
	ModalContainer,
	CropperContainer,
	ButtonsContainer,
} from './styles';
import Cropper from "react-easy-crop";
import { Point, Area, MediaSize } from 'react-easy-crop/types';
import { Button } from '@molecules';

interface CropAvatarModalProps {
	image: string;
	onConfirm: (croppedPixelArea: Area) => void;
	onCancel: () => void;
}

const CropAvatarModal: VoidFunctionComponent<CropAvatarModalProps> = ({
	image,
	onConfirm,
	onCancel,
}) => {
	const [open, setOpen] = useState(true);

	const [crop, setCrop] = useState<Point>({
		x: 0,
		y: 0
	});
	const [croppedPixelArea, setCroppedPixelArea] = useState<Area>();
	const [zoom, setZoom] = useState(1);
	const [maxZoom, setMaxZoom] = useState(1);
	const [mediaSize, setMediaSize] = useState<MediaSize>();

	useEffect(() => {
		setOpen(!!image);
	}, [image]);

  return (
    <Overlay open={open}>
			<ModalContainer>
				<CropperContainer>
					<Cropper
						image={image}
						crop={crop}
						aspect={1}
						zoom={zoom}
						onCropChange={setCrop}
						onCropComplete={(_, pixelArea) => {
							setCroppedPixelArea(pixelArea)
						}}
						onZoomChange={setZoom}
						cropShape="round"
						zoomSpeed={0.1}
						maxZoom={maxZoom}
						onMediaLoaded={(mediaSize) => {
							setMediaSize(mediaSize);
							setMaxZoom(mediaSize.naturalHeight / 100);
						}}
					/>
				</CropperContainer>
				<ButtonsContainer>
					<Button 
						type={1}
						padding="15px 30px"
						onClick={() => onConfirm(croppedPixelArea)}
					>
						Підтвердити
					</Button>
					<Button
						type={2}
						padding="15px 30px"
						onClick={onCancel}
					>
						Скасувати
					</Button>
				</ButtonsContainer>
			</ModalContainer>
		</Overlay>
  );
};


export default CropAvatarModal;
