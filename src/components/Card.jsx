import React from "react";
import { StyledCard } from "./styles/Card.styled";

const Card = ({ id, body, title, image }) => {
	return (
		<StyledCard id={id}>
			<div>
				<img src={image} alt="image" />
			</div>
			<div>
				<h1>{title}</h1>
				<p>{body}</p>
			</div>
		</StyledCard>
	);
};

export default Card;
