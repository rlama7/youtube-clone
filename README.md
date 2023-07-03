# Youtube-Clone

A demo project to clone Youtube using RapidAPI.

:movie_camera: [Live Demo](https://youtube-clone.ratnalama.com/)

## Table fo Contents

1.  [System Design](#system-design)
2.  [Rapid API](#rapid-api)
3.  [Functional Components](#functional-components)
4.  [React Hooks](#react-hooks)
5.  [React File and Folder Structure](#react-file-and-folder-structure)
6.  [Material UI v5](#material-ui-v5)
7.  [Responsive design](#responsive-design)
8.  [Technologies](#technologies)
9.  [Deployment](#deployment)
10. [References](#references)
11. [Keywords](#keywords)
12. [Getting Started with Create React App](#getting-started-with-create-react-app)

## System Design

![Youtube Clone System Design](https://assets-s3-ratnalamacom.s3.us-west-1.amazonaws.com/youtube-clone-system-design.svg 'System Design')

## Rapid API

Rapid API is an online API marketplace that connects developers with thousands of APIs. By using Rapid API to clone Youtube I implemented following features from the Youtube namely:

- Suggested Videos
- Search
- Video Details
- Channel Details
- Channel Videos

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
│   ├── components/
│   │   ├── 
│   │   │   ├── Video.jsx
│   │   │   └── VideoDetail.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── SearchFeed.jsx
│   │   └── ...
│   │
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

This app is available for test at [Live Demo](https://youtube-clone.ratnalama.com/).

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
