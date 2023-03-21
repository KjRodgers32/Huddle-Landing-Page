import styled from "styled-components";

export const Flex = styled.div`
	 {
		display: flex;
		align-items: center;
	}

	& > div,
	& > ul {
		flex: 1;
	}

	p,
	h1 {
		margin-bottom: 1rem;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		text-align: center;
	}
`;
