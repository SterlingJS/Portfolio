import { ImageButtonContainer, ImageButtonImage } from './image-button.styles'

const ImageButton = ({ onClick, image, id, ...props}) => (
	<ImageButtonContainer id={id} onClick={onClick} {...props}>
			<ImageButtonImage  alt="Image not available"  src={image} />
			{ props.label ? <label>props.label</label> : null }
	</ImageButtonContainer>
)

export default ImageButton