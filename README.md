# Youtube-Clone

A demo project to clone Youtube using RapidAPI.

:movie_camera: | [![](./src/assets/images/live-demo.svg)](https://youtube-clone.ratnalama.com/)

## Table fo Contents

1.  [System Design](#system-design)
2.  [Rapid API](#rapid-api)
3.  [Debounce](#debounce)
4.  [Functional Components](#functional-components)
5.  [React Hooks](#react-hooks)
6.  [React File and Folder Structure](#react-file-and-folder-structure)
7.  [Material UI v5](#material-ui-v5)
8.  [Responsive design](#responsive-design)
9.  [Technologies](#technologies)
10. [Deployment](#deployment)
11. [References](#references)
12. [Keywords](#keywords)
13. [Getting Started with Create React App](#getting-started-with-create-react-app)

## System Design

![Youtube Clone System Design](./src/assets/images/youtube-clone-system-design.svg 'Youtube Clone System Design')

- Client (mobile/desktop) makes a GET request to the server (AWS EC2 Ubuntu instance).
- Each request is intercepted by NginX which acts as a reverse proxy/load balancer.
- First checks if the reponse is stored locally in localStorage if not makes the API call to RapidAPI and stores in localStorage for future retrieval
- AWS S3 bucket acts as a object store for images
- AWS Route 53 acts as a DNS provider/resolver
- AWS Cloudfront Distribution CDN caches results
- AWS Certificate Manager is used by AWS Cloudfront Distribution to securely respond to any cached contents
- Git/GitHub/GitHub Actions work as the CICD backbone.
- When a pull request PR is made to the `main` branch, GitHub Actions Runner trigger the CICD workflow updating the latest changes.
- In the frontend React is used to display content in a user firendly format.

## Rapid API

Rapid API is an online API marketplace that connects developers with thousands of APIs. By using Rapid API to clone Youtube I implemented following features from the Youtube namely:

- Suggested Videos
- Search
- Video Details
- Channel Details
- Channel Videos

## Debounce

Events like `onChange` for inputs might be triggered too frequently and cause too many render cycles.

As a user types into a :mag: search bar, we want to wait until they pause or stop typing to perform the search. We don't want to perform the search operation with every single character they type in order to avoid overloading our server with requests. This is particularly applicable in this project since we are using `free-tier` Rapid API with rate limit on API access.

<pre>
export const debounce = (func, delay) => {
  let debounceTimer;
  
  return (...args) => {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  }
}
</pre>

`Debounce` is a higher order function that takes function as input.

`debounceTimer` is the timer that keeps track of when we call our function next.

The returned function clears any existing timer (using `clearTimeout`) and starts a new timer every time it's called. Only when the timer runs out (after the delay we specified which in this case is 500 milliseconds), original function is called with the correct context and arguments.

If the returned functin is called again before the timer runs out, it will clear the old timer and strat a new one. This means the original function (`func`) is only called once the returned function stops being called for more than `delay` milliseconds.

## Functional Components

In this project, I implemented react functional components primarily for:

- **Simplicity**: Functional components are more straightforward and concise than class components.
- **Performance**: They tend to have a slight performance boost over class components due to their simplicity.
- **Reusability**: By creating reusable commponents, we can avoid redundancy and ensure consistency across the application.

## React Hooks

React Hooks were introduced in React 16.8 and allow you to use state and other React features without writing a class. In this project, I've utilized two very fundamental hooks with best practices: `useState`, and `useEffect`.

- `useState` is used when the component has some data that changes over time, and we want it to re-render whenever data changes.

- `useEffect` lets us perform side effects in function componetns. It's like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined in class components.

**Best Practices for Using Hooks**

- Don't Use Hooks Inside Loops, Conditions, or Nested Functions.
- Only Call Hooks from React Functions.
- Use Multiple State Variables.
- Optimize by Using the Correct Dependency Array in useEffect

## React File and Folder Structure

This project utilizes a well-structured React file and folder structure to significantly improve the development experience by making the codebase more maintainable and scalable.

<pre>
youtube-clone/
│
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   │
|   |
|   ├── assets/
│   │   ├── images/
|   |       ├── youtube-clone-system-design.svg
|   |
│   ├── components/
│   │   ├── 
│   │   │   ├── Video.jsx
│   │   │   └── VideoDetail.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── SearchFeed.jsx
│   │   └── ...
│   │
|   ├── hooks/
│   │   ├────
│   │       └── useDebounce.js
|   |
│   ├── utils/
│   │   ├──── 
│   │       ├── constants.js
│   │       └── fetchFromAPI.js
│   │
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
│
├── .gitignore
├── package.json
├── README.md
├── .env (!Neved Add it to the repo! Check .gitignore rule)
└── ...
</pre>

## Material UI v5

This project leverages `Material-UI v5 (MUI v5)`, which is a popular React UI framework that follows Google's Material Design guidelines. Material-UI version 5, which was released in September 2021, brought significant changes and improvements to the library. I picked material UI for following reasons:

- New Branding and Package Naming
- Enhanced Customization
- Improved Performance
- New Components and Features
- Better Theming
- Enhanced Documentation
- Adoption of Emotion and Styled-Components
- Dark Mode Support

In summary, MUI v5 significantly benefits frontend development by providing a rich set of components and utilities, excellent customization capabilites, and performance boost. These features allowed me to create powerful, efficient, and fully responsive youtube clone applications faster and with less effort.

## Responsive Design

I've utilized fully responsive design principle in this Youtube Clone project with a goal to provide an optimal viewing and interaction experience across a wide range of devices from desktop to iOS/Android mobile phones. Here, I'll elaborate on responsie design principles that I've implemented in this project:

**Fluid Grids**

Fluid grids are essenatial because they let the layout adjust dynamically. In responsive desing, all layout elements are sized in relative units, such as percentages, rather than absoluite units like pixels. This ensures that the layout adapts to the screen's size.

```
.container {
  width: 100%;
  max-width: 1200px;
}

```

**Flexible Images**

Images should also be responsive, meaning that they should adjust their size according to the screen size. This ensures that images don't render outside their containing element.

```
img {
  max-width: 100%;
  height: auto;
}

```

**Media Queries**

Media queries allow the applications of different styles for different media types and screen sizes. They are essential in applying different layouts, font sizes, and other styling depending on the screen size.

```
@media screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }
}

```

**Usable Navigation**

Navigation should be easy to use on all devices. This often involves a menu that is horizontal on desktop screens but collapses into a "humburger" menu on mobile devices. However, for this project I've implemented horizontal scrollable menu options on mobile devices since the menu options comprised of a long list.

**Significance of Responsive Design in Web Development**

## Technologies

:gear: The list of technologies used in this projects are:

```
Javascript, React, Rapid API, Material UI v5, Axios, HTML, CSS, AWS, AWS EC2, AWS S3, AWS Route 53, Git, GitHub, VS Code, CertBot, Virtual Hosting.
```

## Deployment

This app is deployed to AWS Cloud utilizing following technologies but not limited to:
[![](./src/assets/images/live-demo.svg)](https://youtube-clone.ratnalama.com/)

- AWS EC2
- AWS S3
- AWS Route 53
- AWS CloudFront Distribution
- AWS Certificate Manager
- Nginx
- Rapid API
- Local Storage
- Git
- GitHub
- GitHub Actions Runner

## References

:star2: This project is possible based on following open source projects:

- React: https://react.dev/
- React Visualized: https://react.gg/visualized
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
- Jest: https://jestjs.io/
- Rapid API: https://rapidapi.com/ytdlfree/api/youtube-v31/
- Free Code Camp: https://www.freecodecamp.org/
- GitHub: https://github.com/adrianhajdin/project_youtube_clone
- CSS Flex Box: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
- CSS Grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
- Material UI: https://mui.com/material-ui/getting-started/overview/
- Material Tutorial: https://www.youtube.com/watch?v=Xoz31I1FuiY
- CSS Gradient: https://cssgradient.io/

## Keywords

Youtube Clone, Portfolio Showcase, React, JavaScript, ES6, JavaScript Interview, Algorithms, Datastructures, Interview Preparation, Technical Interview, Coding Challenges, Programming Challenges.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
