import React from 'react'
import SectionsTitle from '../../components/sections-title/sections-title.component'
import TowColumneSection from '../../components/tow-column-section/tow-column.component'
import HeroSection from '../../components/hero/hero.component'

import TT from '../../assets/our-story.svg'
import CC from '../../assets/contact-us.svg'
import ProjectsCard from '../../components/project-card/project-card.component'

import { Row, Col, Container, Carousel } from 'react-bootstrap'
import CustomButton from '../../components/Custom-button/custom-button.component'
import CarouselComponent from '../../components/carousel/carousel.component'
import CommentsCard from '../../components/comments-card/comments-card.component'
import BlogCard from '../../components/blog-card/blog-card.components'

function HomePage() {
	return (
		<div>
			<HeroSection />
			<SectionsTitle title='Our Story' />

			<TowColumneSection img={TT}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore
				</p>
			</TowColumneSection>
			<SectionsTitle title='Projects' />
			<Container>
				<Row>
					<Col lg={4}>
						<ProjectsCard />
					</Col>
					<Col lg={4}>
						<ProjectsCard />
					</Col>
					<Col lg={4}>
						<ProjectsCard />
					</Col>
				</Row>
				<CustomButton>View More</CustomButton>
			</Container>
			<div style={{ background: '#e9ecef' }}>
				<SectionsTitle title='Blog' />

				<Container>
					<CarouselComponent>
						<Carousel.Item>
							<BlogCard />
						</Carousel.Item>
						<Carousel.Item>
							<BlogCard />
						</Carousel.Item>
						<Carousel.Item>
							<BlogCard />
						</Carousel.Item>
					</CarouselComponent>
				</Container>
			</div>
			<SectionsTitle title='Contact Us' />
			<Container>
				<TowColumneSection img={CC}>
					<h2>We can help you ?</h2>
					<CustomButton>Contact Us</CustomButton>
				</TowColumneSection>
			</Container>
			<div style={{ background: '#e9ecef' }}>
				<SectionsTitle title='Comments' />
				<Container>
					<CarouselComponent>
						<Carousel.Item>
							<CommentsCard />
						</Carousel.Item>
						<Carousel.Item>
							<CommentsCard />
						</Carousel.Item>
						<Carousel.Item>
							<CommentsCard />
						</Carousel.Item>
					</CarouselComponent>
				</Container>
			</div>
		</div>
	)
}

export default HomePage
