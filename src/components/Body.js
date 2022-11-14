import React from 'react'
import myPhoto from './images/myPhoto.jpg'

const Body = () => {
	return (
		<div className='content'>
			<div className="content__title">
				<h1>Егоров Александр</h1>
			</div>
			<div class="content__photo">
				<div class="content__photo--img">
					<img src={myPhoto} alt="my photo" />
				</div>
			</div>
			<div class="content__about">
				<div class="content__about_skills">
					<div class="content__about_skills--title">
						<h2>О себе:</h2>
					</div>
					<div class="content__about_skills--body">
						<p>
							Начинающий frontend-разработчик.
						</p>
						<p>
							Уверенно владею <span class="html">HTML</span>, <span class="css">CSS</span>, <span
								class="scss">Scss</span>. Использую и понимаю методологию <b>'BEM'</b>, систему контроля версий <b>'Git'</b>. Изучил основы <span
									class="js">JavaScript</span>, работу с <b>'DOM'</b>-элементами. Основы библиотек <span class="
								library">React</span> и <span class="
								library">jQuery</span>. Знаком с фреймворками <span class="framework">Tailwind</span> и <span
								class="framework">Bootstrap</span>.
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
