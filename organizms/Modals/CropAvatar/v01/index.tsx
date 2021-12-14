import {
	useState,
	VoidFunctionComponent
} from "react";
import Cropper from "react-easy-crop";
import { Point, Area, MediaSize } from 'react-easy-crop/types';
import GlobalModal, { GlobalModalProps } from "@organizms/Modals/Global";
import {
	CropperContainer,
} from './styles';


interface CropAvatarModalProps extends Pick<GlobalModalProps, 'open'> {
	image: string;
	onConfirm: (croppedPixelArea: Area) => void;
	onCancel: () => void;
}

const CropAvatarModal: VoidFunctionComponent<CropAvatarModalProps> = ({
	open,
	image,
	onConfirm,
	onCancel,
}) => {

	const [crop, setCrop] = useState<Point>({
		x: 0,
		y: 0
	});
	const [croppedPixelArea, setCroppedPixelArea] = useState<Area>();
	const [zoom, setZoom] = useState(1);
	const [maxZoom, setMaxZoom] = useState(1);
	const [mediaSize, setMediaSize] = useState<MediaSize>();

  return (
		<GlobalModal
			id="CropAvatarModal"
			open={open}
			onConfirm={() => {
				onConfirm(croppedPixelArea);
			}}
			onCancel={onCancel}
		>
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
		</GlobalModal>
  );
};


export default CropAvatarModal;
