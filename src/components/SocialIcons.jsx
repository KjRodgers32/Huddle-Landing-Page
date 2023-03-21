import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledIcons } from "./styles/SocialIcons.styled";

const SocialIcons = () => {
	return (
		<StyledIcons>
			<li>
				<a href="https://twitter.com">
					<FaTwitter />
				</a>
				<a href="https://facebook.com">
					<FaFacebook />
				</a>
				<a href="https://linkedin.com">
					<FaLinkedin />
				</a>
			</li>
		</StyledIcons>
	);
};

export default SocialIcons;
