import styled from 'styled-components';

export const Hidden = styled.h2`
	display: none;
`;

export const BannerSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	padding-top: 120px;
	text-align: center;

	@media screen and (min-width: 768px) {
		padding-bottom: 60px;
	}
`;

export const BannerContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	flex-direction: column;
	width: 80%;

	@media screen and (min-width: 768px) {
		width: 85%;
		margin-left: 16px;
	}

	@media screen and (min-width: 992px) {
		width: 75%;
	}

	@media screen and (min-width: 1200px) {
		width: 70%;
	}
`;

export const BannerHelloThere = styled.h3`
	margin: 0;

	color: var(--black-color);
	font-size: 14px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	text-transform: uppercase;

	@media screen and (min-width: 576px) {
		font-size: 16px;
	}
`;

export const BannerTitle = styled.h3`
	margin: 0;
	padding-bottom: 10px;

	color: var(--red-color);
	font-size: 30px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;

	@media screen and (min-width: 576px) {
		font-size: 60px;
	}
`;

export const BannerDescription = styled.p`
	margin: 0;

	color: var(--black-color);
	font-size: 18px;
	font-family: 'Raleway', sans-serif;
	font-weight: 500;
	letter-spacing: 0.5px;
	line-height: 24px;
	text-align: left;

	@media screen and (min-width: 576px) {
		font-size: 18px;
		line-height: 28px;
	}
`;
