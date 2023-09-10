const projectsData = {
    githubUsername: "ToobaJamal",
    name: "Tooba Jamal",
    avatarUrl: "https://avatars.githubusercontent.com/u/52610124?v=4",
    email: "tj.toobajamal@gmail.com",
    
    projects: [
      {
        title: "Data Chum",
        link: "https://datachum.netlify.app/",
        gitHub: "https://github.com/ToobaJamal/DataChum",
      imgUrl:
          "https://i.ibb.co/RbjvzVk/datachum-img.png",
        skills: ["React", "Tailwind CSS"],
        hook: `Unlock the power of data with no programming skills!`,
        detail: `is a no-code data analysis website built in React. The users can upload their dataset and perform analysis including 
        summary statistics and a variety of data visualisation options. Users also have the option of downloading their analysis as 
        an image on their machine.`
      },
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