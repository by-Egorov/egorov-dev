import React from 'react'

const Footer = () => {
	return (
		<div className='footer'>
			<div class="footer__author">Egorov.dev</div>
			<div class="footer__contacts">
				<i class="fa fa-phone-square" aria-hidden="true"></i>
				<span>
					<a href="tel:+79787339398">
						+7(978)733-93-98
					</a>
				</span>
			</div>
			<div class="footer__social">
				<div class="footer__social--github social-links">
					<a href="https://github.com/by-Egorov" target="_blank" rel="noreferrer"><i class="fa fa-github" aria-hidden="true"></i></a>
				</div>
				<div class="footer__social--vk social-links">
					<a href="https://vk.com/egorov.aleks" target="_blank" rel="noreferrer"><i class="fa fa-vk" aria-hidden="true"></i></a>
				</div>
				<div class="footer__social--telegramm social-links">
					<a href="https://t.me/EgorovAlexDev" target="_blank" rel="noreferrer"><i class="fa fa-telegram" aria-hidden="true"></i></a>
				</div>
				<div class="footer__social--mail social-links">
					<a href="mailto:egorov.dev@gmail.com" rel="noreferrer"><i class="fa fa-envelope" aria-hidden="true"></i></a>
				</div>
			</div>
		</div>
	)
}

export default Footer
