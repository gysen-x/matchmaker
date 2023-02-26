## Matchmaker

Если вы сталкивались с тем, что не удаётся найти команду для игры, будь-то спортивная, компьютерная или настольная игра, то на нашем сайте
вы сможете найти людей, которые составят вам компанию. 

![screen-gif](/readme-assets/Mainpage.gif)

Matchmaker - это web-приложение как для организаторов игр, так и для участников. С помощью данного приложения организатор сможет в реальном времени следить за добавлением новых участников в игру, а в свою очередь участник сможет выбрать игру на любой вкус и подобрать удобную для него дату и время.

## Стек:

[<img align="left" alt="JavaScript" width="32px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />]
[<img align="left" alt="Node.js" width="32px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />]
[<img align="left" alt="PostgreSQL" width="32px" src="https://img.icons8.com/color/50/000000/postgreesql.png"/>]

<br/>
<br/>
<br/>

- Примененные технологии: Node.js, Express, PostgreSQL, Sequelize ORM, Bcrypt

## Запуск приложения

Для запуска приложения потребуется Postgress SQL

 - <strong>git clone git@github.com:gysen-x/matchmaker.git</strong> - открываем терминал в нужной папке и клонируем репозиторий
 - <strong>.env example</strong> - копируем env файл и изменяем название на <strong>'.env'</strong>
 - <strong>.env</strong> - в данном файле изменяем DATABASE=postgres://<Ваш логин>:"<Ваш пароль>"@localhost:5432/<Имя базы>
 - <strong>npm install</strong> - установка всех зависимостей
 - <strong>npx sequelize-cli db:create</strong> - создание базы данных
 - <strong>npx sequelize-cli db:migrate</strong> - миграция существующих таблиц в базу данных
 - <strong>npx sequelize db:seed:all</strong> - засеивание таблиц данными по умолчанию
 - <strong>npm run dev</strong> - запуск приложения в режиме разработки



## Пробежимся по функционалу

#### На главной странице расположен блок, в котором подробнее рассказывается о концепции информационных собеседований и шаги для подготовки к ним

<img align="center" alt="mycupofit.herokuapp.com" src="/images/2.png" />

#### На отдельной странице выведен список всех пользователей с возможностью сортировки по роли, компании и технологиям
Таким образом, каждый пользователь может найти себе подходящего собеседника для интервью

<img align="center" alt="mycupofit.herokuapp.com" src="/images/3.png" />

#### Нажимая на кнопку постучаться - открывается модальное окно с возможностью запросить встречу

<img align="center" alt="mycupofit.herokuapp.com" src="/images/3-5.png" />

#### Также реализован личный кабинет

<img align="center" alt="mycupofit.herokuapp.com" src="/images/6.png" />

#### С возможностью управлять встечами и календарем

<img align="center" alt="mycupofit.herokuapp.com" src="/images/4.png" />

#### И редактированием профиля

<img align="center" alt="mycupofit.herokuapp.com" src="/images/7.png" />

### A также в личном кабинете можно: 
- [X] Добавить и редактировать соцсети, которые отобразятся в профиле в виде иконок
- [X] Сменить статус на неактивный, если нет возможности встречаться с людьми
- [X] Сменить роль. С ментора на соискателя, если вы находитесь в поиске новой компании/информации; с соискателя на ментора если вы набрались опыта и хотите делиться своими знаниями с другими

#### Eще есть кабинет админа, в котором: 
- [X] Можно отвечать на обратную связь от пользователей, оставить которую можно нажав на кнопку в футере сайта
- [X] Добавить/редактировать компанию
- [X] Добавить/редактировать технологию

## Возможности для расширения
 - Чат. Для общения, назначения встеч
 - Видео Чат. Для проведения онлайн информационных собеседований
 - Авторизация через Github && Google
 - Cеть профессиональных знакомств


