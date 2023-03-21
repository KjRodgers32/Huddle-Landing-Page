import React from "react";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import content from "./Content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
	const theme = {
		colors: {
			header: "#ebfbff",
			body: "#fff",
			footer: "#003333",
		},
		mobile: "768px",
	};
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container>
					{content.map((card) => (
						<Card
							key={card.id}
							id={card.id}
							title={card.title}
							body={card.body}
							image={card.image}
						/>
					))}
				</Container>
				<Footer />
			</>
		</ThemeProvider>
	);
};

export default App;
