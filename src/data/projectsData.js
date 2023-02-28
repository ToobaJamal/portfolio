const projectsData = {
    githubUsername: "ToobaJamal",
    name: "Tooba Jamal",
    avatarUrl: "https://avatars.githubusercontent.com/u/52610124?v=4",
    email: "tj.toobajamal@gmail.com",
    
    projects: [
      // {
      //   title: "Little Lemon Restaurant",
      //   link: "https://littlelemonrestaurantt.netlify.app/",
      //   gitHub: "https://github.com/ToobaJamal/meta-front-end-capstone",
      // imgUrl:
      //     "https://i.ibb.co/JKmyxZH/little-lemon.png",
      //   skills: ["HTML", "CSS", "React", "Controlled components"],
      //   hook: `Little Lemon table reservation is just a click away!`,
      //   detail: `Little Lemon Web App is a simple and easy-to-use restaurant reservation system built using React. 
      //   With just a few clicks, users can reserve a table at Little Lemon restaurant and receive a booking confirmation.
      //   The Home page gives an overview of the restaurant and its services and the rservations page enables the users to book a table.
      //   It's built with React(useState, useReducer, and React Router), which makes it very easy to use.`
      // },
      {
        title: "Quizzical",
        link: "https://quizzicalapptj.netlify.app/",
        gitHub: "https://github.com/ToobaJamal/quizzical",
      imgUrl:
          "https://i.ibb.co/r2dhGv2/quizzical.png",
        skills: ["HTML", "CSS", "React", "API"],
        hook: `You don't have to spend $$ to kill boredom!`,
        detail: `This quiz app uses opentdb API to fetch random quiz questions and scores players based on their answers. 
        It allows the users to check the history of their scores, play as many times as they want!
        It's built with React(useState, useContext, useEffect and React Router), which makes it very easy to use.`
      },
      {
        title: "Chrome Dashboard",
        link: "https://personalchromedashboard.netlify.app/",
      gitHub: "https://github.com/ToobaJamal/chrome-dashboard",
        imgUrl:
          "https://i.ibb.co/zQrC0bY/chrome-dashboard.png",
          skills: ["HTML", "CSS", "JavaScript", "API"],
          hook: `Keep track of your day without going through ten separate apps.`,
          detail: `This project was built using Vanilla JavaScript, and it uses Unsplash API as the background image provider. 
          The weather is based on the user's location using OpenWeatherMap API, and quotes are displayed using quotable api.
          The user can select "Keep record of daily main focus" and a todo list, 
          which will be saved on the Chrome personal dashboard.
          This personal dashboard can be used to keep track of your daily tasks.`
      },
      {
        title: "Color Scheme Generator",
        link: "https://colorschemegeneratorcsg.netlify.app/",
      gitHub: "https://github.com/ToobaJamal/color-scheme-generator",
        imgUrl:
          "https://i.ibb.co/2ZXttBQ/color-scheme.png",
          skills: ["HTML", "CSS", "JavaScript", "API"],
          hook: `There goes the bad color combinations.`,
          detail : `This project was built as a quick and easy tool for generating color schemes using Vanilla JavaScript and The Color API. 
          The user can select the base color and scheme type, and the generator will generate a new color scheme based on the inputs provided`
      },
      {
        title: "Diabetes Risk Assessment",
        link: "http://diabetesriskassessment.pythonanywhere.com/",
      gitHub: "https://github.com/ToobaJamal/diabetes_risk_assessment",
        imgUrl:
          "https://i.ibb.co/DgMFF12/diabetes-risk.png",
          skills: ["HTML", "CSS", "JavaScript", "Python", "Machine Learning"],
          hook: `Did you know that early diabetes detection may prevent severe complications?`,
          detail: `This web application uses Machine Learning to predict the risk of diabetes for people who answer a few health questions.
           The app was built using HTML, CSS and JavaScript for the front end and Python for the backend. 
           The purpose of using these languages was to keep it simple and easy to use, 
           while still being effective in tracking your health data and helping you find out what you can do to improve your diabetes risk.
          The frontend has been built with HTML and CSS to structure and style it. It also uses JavaScript to get health related news from an API and display them at home page. We used Flask as our deployment tool because it makes deployment simple when using Python, which we used for training our machine learning model on diabetes risk prediction data.`
      }
    ]
}

export default projectsData