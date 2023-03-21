import styled from "styled-components";

export const StyledCard = styled.div`
	display: flex;
	align-items: center;
	border-radius: 15px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	margin: 30px 0;
	padding: 60px;
	width: 100%;
	font-family: "Poppins", sans-serif;
	flex-direction: ${({ id }) => (id % 2 === 0 ? "row-reverse" : "")};

	& > div {
		flex: 1;
	}

	h1 {
		margin-bottom: 15px;
	}

	img {
		width: 80%;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;

		img {
			margin-bottom: 15px;
		}
	} ;
`;
