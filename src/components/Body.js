import React from 'react'
import myPhoto from './images/myPhoto.jpg'

const Body = () => {
	return (
		<div className='content'>
			{/* <div className="content__title">
				<h1>Егоров Александр</h1>
			</div> */}
			<div className='content__photo'>
				<div className='content__photo--img'>
					<img src={myPhoto} alt="my photo" />
				</div>
			</div>
			<div className="content__about">
				<div className="content__about_skills">
					<div className="content__about_skills--title">
						<h2>О себе:</h2>
					</div>
					<div className="content__about_skills--body">
						<p>
							Меня зовут Егоров Александр, я начинающий frontend-разработчик.
						</p>
						<p>
							Уверенно владею <span className="html">HTML</span>, <span className="css">CSS</span>, <span
								className="scss">Scss</span>. Использую и понимаю методологию <b>'BEM'</b>, систему контроля версий <b>'Git'</b>. Изучил основы <span
									className="js">JavaScript</span>, работу с <b>'DOM'</b>-элементами. Основы библиотек <span className="
								library">React</span> и <span className="
								library">jQuery</span>. Знаком с фреймворками <span className="framework">Tailwind</span> и <span
								className="framework">Bootstrap</span>.
						</p>
						<p>
							Быстро обучаюсь и нахожу решение сложных задач. Трудности с которыми сталкиваюсь в работе с тем
							или
							иным проектом становятся стимулом, что бы узнать новые технологии, и найти больше методов для
							реализации поставленных задач.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Body
