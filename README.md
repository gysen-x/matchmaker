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

#### На главной странице расположен блок, в котором представлены 4 категории игр

<img align="center" alt="Matchmaker" src="/images/2.png" />

#### На странице "Найти матч" отражена таблица со всеми созданными играми с возможностью сортировки по видам игр и стране проведения
Таким образом, каждый пользователь может найти себе подходящую игру по виду, времени проведения и условиям участия

<img align="center" alt="Matchmaker" src="/readme-assets/Findmatch.png" />

#### На странице "Турниры" организаторы могут разместить объявление о проводимом турнире и условиях участия

<img align="center" alt="Matchmaker" src="/readme-assets/Tournaments.png" />

#### Реализована страница "Контакты" с формой обратной связи
Все сообщения приходят на адрес электронной почты администратора

<img align="center" alt="Matchmaker" src="/readme-assets/Contacts.png" />

#### Также реализован личный кабинет с возможностью редактирования данных

<img align="center" alt="Matchmaker" src="/readme-assets/Profile.png" />

### A также в личном кабинете можно: 
- [X] Ознакомиться со всеми активными матчами, созданными данным пользователем или в которых он принимает участие
- [X] Возможность редактирования контактной информации

## Возможности для расширения
 - Добавление телеграм-бота с уведомлениями о добавлении новых участников матча
 - Мобильное приложение
 - Авторизация через Google

