
import React from "react";

// Flexbox Animation Component
const FlexboxAnimation = () => {
  return (
    <div className="w-full max-w-md">
      <div className="flex flex-wrap gap-2 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white font-medium rounded-md"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

// Hover Animation Component
const HoverAnimation = () => {
  return (
    <div className="w-full max-w-md">
      <div className="p-6 bg-blue-500 text-white text-center rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600">
        Hover over me!
      </div>
    </div>
  );
};

// Grid Animation Component
const GridAnimation = () => {
  return (
    <div className="w-full max-w-md">
      <div className="grid grid-cols-3 gap-2 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div
            key={num}
            className="h-16 flex items-center justify-center bg-purple-500 text-white font-medium rounded-md"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

// Keyframe Animation Component
const KeyframeAnimation = () => {
  return (
    <div className="w-full max-w-md">
      <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center rounded-lg shadow-md animate-float">
        I'm floating!
      </div>
    </div>
  );
};

// Box Model Animation Component
const BoxModelAnimation = () => {
  return (
    <div className="w-full max-w-md">
      <div className="relative p-10 flex items-center justify-center">
        <div className="absolute inset-0 m-10 border-4 border-yellow-300 opacity-75 rounded"></div>
        <div className="absolute inset-0 m-16 border-4 border-green-400 opacity-75 rounded"></div>
        <div className="absolute inset-0 m-24 border-4 border-blue-500 opacity-75 rounded"></div>
        <div className="relative z-10 p-4 bg-purple-500 text-white text-center rounded">
          Content
        </div>
      </div>
    </div>
  );
};

// Responsive Design Animation
const ResponsiveAnimation = () => {
  return (
    <div className="w-full max-w-md">
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="h-12 flex items-center justify-center bg-green-500 text-white font-medium rounded-md"
            >
              {num}
            </div>
          ))}
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          Resize the window to see this adjust
        </div>
      </div>
    </div>
  );
};

// Sample lesson data
const lessons = {
  "html-basics": {
    title: "HTML Basics",
    description: "Learn the fundamental building blocks of web pages",
    steps: [
      {
        title: "Introduction to HTML",
        content: `
          <p>HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page using elements or tags.</p>
          <p>Each HTML element tells the browser how to display the content. HTML elements are represented by tags, which are enclosed in angle brackets.</p>
        `,
        codeHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
  </body>
</html>`,
      },
      {
        title: "HTML Elements",
        content: `
          <p>HTML elements are the building blocks of web pages. They define the structure and content of a page.</p>
          <p>Most HTML elements consist of an opening tag, content, and a closing tag. For example, <code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></p>
          <p>Some common HTML elements include:</p>
          <ul>
            <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> - Headings</li>
            <li><code>&lt;p&gt;</code> - Paragraphs</li>
            <li><code>&lt;a&gt;</code> - Links</li>
            <li><code>&lt;img&gt;</code> - Images</li>
            <li><code>&lt;div&gt;</code> - Containers</li>
          </ul>
        `,
        codeHtml: `<h1>This is a heading</h1>
<h2>This is a subheading</h2>
<p>This is a paragraph.</p>
<a href="https://www.example.com">This is a link</a>
<img src="example.jpg" alt="Example image">
<div>This is a container</div>`,
      },
      {
        title: "HTML Attributes",
        content: `
          <p>HTML attributes provide additional information about an element. They are always specified in the opening tag.</p>
          <p>Attributes usually come in name/value pairs like: <code>name="value"</code>.</p>
          <p>For example, the <code>&lt;a&gt;</code> tag includes the <code>href</code> attribute to specify the URL that the link goes to.</p>
        `,
        codeHtml: `<a href="https://www.example.com">Visit Example.com</a>
<img src="example.jpg" alt="Description of the image" width="500" height="300">
<p class="important">This paragraph has a class attribute.</p>
<div id="content">This div has an id attribute.</div>`,
        challenge: {
          description: "Create a link that opens in a new tab using the target attribute.",
          hint: "Use target=\"_blank\" to open links in a new tab.",
          solution: {
            html: `<a href="https://www.example.com" target="_blank">`,
          },
        },
      },
    ],
  },
  "css-basics": {
    title: "CSS Basics",
    description: "Learn how to style your HTML elements with CSS",
    steps: [
      {
        title: "Introduction to CSS",
        content: `
          <p>CSS (Cascading Style Sheets) is used to style and layout web pages. It controls how HTML elements appear on the screen.</p>
          <p>With CSS, you can change colors, fonts, spacing, and create layouts. CSS saves time because you can define styles once and reuse them across many pages.</p>
        `,
        codeHtml: `<h1>Welcome to My Website</h1>
<p>This paragraph will be styled with CSS.</p>`,
        codeCss: `h1 {
  color: blue;
  font-size: 32px;
  text-align: center;
}

p {
  color: #333;
  line-height: 1.5;
  margin: 16px 0;
}`,
      },
      {
        title: "CSS Selectors",
        content: `
          <p>CSS selectors are patterns used to select the HTML elements you want to style. There are several types of selectors:</p>
          <ul>
            <li><strong>Element selectors</strong> - Select elements based on tag name (e.g., <code>p</code>, <code>h1</code>)</li>
            <li><strong>Class selectors</strong> - Select elements with a specific class attribute (e.g., <code>.note</code>)</li>
            <li><strong>ID selectors</strong> - Select elements with a specific ID attribute (e.g., <code>#header</code>)</li>
            <li><strong>Attribute selectors</strong> - Select elements with a specific attribute value (e.g., <code>[type="submit"]</code>)</li>
          </ul>
        `,
        codeHtml: `<h1>Main Heading</h1>
<p>Regular paragraph text.</p>
<p class="highlight">Highlighted paragraph text.</p>
<div id="special">This is a special div.</div>`,
        codeCss: `/* Element selector */
h1 {
  color: navy;
}

/* Class selector */
.highlight {
  background-color: yellow;
  font-weight: bold;
}

/* ID selector */
#special {
  border: 2px solid red;
  padding: 10px;
}`,
      },
      {
        title: "CSS Box Model",
        content: `
          <p>The CSS box model describes the rectangular boxes that are generated for elements in the document tree and laid out according to the visual formatting model.</p>
          <p>Each box has a content area (e.g., text, images, etc.) and optional surrounding padding, border, and margin areas.</p>
        `,
        codeHtml: `<div class="box-model">This is the content area</div>`,
        codeCss: `.box-model {
  width: 300px;
  padding: 20px;
  border: 5px solid blue;
  margin: 30px;
  background-color: lightblue;
  text-align: center;
}`,
        animation: <BoxModelAnimation />,
        challenge: {
          description: "Create a box with a 2px dashed red border, 15px of padding, and 25px of margin.",
          hint: "Use the border, padding, and margin properties.",
          solution: {
            css: `border: 2px dashed red;
  padding: 15px;
  margin: 25px;`,
          },
        },
      },
    ],
  },
  "flexbox": {
    title: "Flexbox Layout",
    description: "Create flexible layouts with CSS Flexbox",
    steps: [
      {
        title: "Introduction to Flexbox",
        content: `
          <p>Flexbox, or the Flexible Box Layout, provides an efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.</p>
          <p>It's particularly useful for building responsive layouts and alignment challenges that were difficult with traditional CSS methods.</p>
        `,
        codeHtml: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,
        codeCss: `.container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
}

.item {
  background-color: #3b82f6;
  color: white;
  padding: 20px;
  margin: 10px;
  text-align: center;
  font-weight: bold;
}`,
        animation: <FlexboxAnimation />,
      },
      {
        title: "Flex Direction",
        content: `
          <p>The <code>flex-direction</code> property defines the direction of the flex items within the flex container. It can have the following values:</p>
          <ul>
            <li><code>row</code> (default) - Items are placed horizontally, from left to right</li>
            <li><code>row-reverse</code> - Items are placed horizontally, from right to left</li>
            <li><code>column</code> - Items are placed vertically, from top to bottom</li>
            <li><code>column-reverse</code> - Items are placed vertically, from bottom to top</li>
          </ul>
        `,
        codeHtml: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,
        codeCss: `.container {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  padding: 10px;
}

.item {
  background-color: #3b82f6;
  color: white;
  padding: 20px;
  margin: 10px;
  text-align: center;
  font-weight: bold;
}`,
      },
      {
        title: "Justify Content",
        content: `
          <p>The <code>justify-content</code> property aligns items along the main axis of the flex container. It helps distribute extra free space when items are inflexible or have reached their maximum size.</p>
          <p>Common values include:</p>
          <ul>
            <li><code>flex-start</code> (default) - Items are packed toward the start</li>
            <li><code>flex-end</code> - Items are packed toward the end</li>
            <li><code>center</code> - Items are centered along the line</li>
            <li><code>space-between</code> - Items are evenly distributed with the first item at the start and the last item at the end</li>
            <li><code>space-around</code> - Items are evenly distributed with equal space around them</li>
          </ul>
        `,
        codeHtml: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,
        codeCss: `.container {
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 10px;
}

.item {
  background-color: #3b82f6;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}`,
        challenge: {
          description: "Create a flex container with three items centered horizontally.",
          hint: "Use justify-content: center;",
          solution: {
            css: "justify-content: center;",
          },
        },
      },
    ],
  },
  "animations": {
    title: "CSS Animations",
    description: "Bring your websites to life with keyframes and transitions",
    steps: [
      {
        title: "CSS Transitions",
        content: `
          <p>CSS transitions allow you to change property values smoothly over a specified duration. They are a simple way to add animation to elements when a state changes (like on hover).</p>
          <p>To create a transition, you need to specify:</p>
          <ul>
            <li>The property you want to animate</li>
            <li>The duration of the animation</li>
            <li>The timing function (how the intermediate values are calculated)</li>
            <li>An optional delay</li>
          </ul>
        `,
        codeHtml: `<div class="box">Hover over me!</div>`,
        codeCss: `.box {
  background-color: #3b82f6;
  color: white;
  padding: 40px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.box:hover {
  transform: scale(1.1);
}`,
        animation: <HoverAnimation />,
      },
      {
        title: "CSS Keyframe Animations",
        content: `
          <p>CSS keyframe animations provide more control over animations than transitions. They allow you to define multiple steps in an animation sequence.</p>
          <p>You create a keyframe animation in two steps:</p>
          <ol>
            <li>Define the animation with <code>@keyframes</code>, specifying what happens at different points in the animation</li>
            <li>Assign the animation to an element using the <code>animation</code> property</li>
          </ol>
        `,
        codeHtml: `<div class="floating-box">I'm floating!</div>`,
        codeCss: `.floating-box {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  color: white;
  padding: 40px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}`,
        animation: <KeyframeAnimation />,
      },
      {
        title: "Animation Properties",
        content: `
          <p>The <code>animation</code> property is a shorthand property that combines all the animation properties in one declaration.</p>
          <p>The individual properties include:</p>
          <ul>
            <li><code>animation-name</code> - The name of the keyframe animation</li>
            <li><code>animation-duration</code> - How long the animation takes to complete one cycle</li>
            <li><code>animation-timing-function</code> - How the animation progresses through time</li>
            <li><code>animation-delay</code> - How long to wait before starting the animation</li>
            <li><code>animation-iteration-count</code> - How many times the animation should repeat</li>
            <li><code>animation-direction</code> - Whether the animation plays forward, backward, or alternates</li>
            <li><code>animation-fill-mode</code> - What styles apply before/after the animation</li>
          </ul>
        `,
        codeHtml: `<div class="pulse-box">Click me!</div>`,
        codeCss: `.pulse-box {
  background-color: #ec4899;
  color: white;
  padding: 40px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
}

.pulse-box:active {
  animation: pulse 0.3s ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}`,
        challenge: {
          description: "Create a spinning animation that rotates an element 360 degrees and repeats infinitely.",
          hint: "Use transform: rotate() in your keyframes and set animation-iteration-count to infinite.",
          solution: {
            css: `@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinning-element {
  animation: spin 2s linear infinite;
}`,
          },
        },
      },
    ],
  },
  "grid": {
    title: "CSS Grid",
    description: "Create complex two-dimensional layouts with CSS Grid",
    steps: [
      {
        title: "Introduction to CSS Grid",
        content: `
          <p>CSS Grid Layout is a two-dimensional layout system designed to handle both rows and columns simultaneously. It's excellent for creating complex layouts that were previously difficult to achieve with CSS.</p>
          <p>CSS Grid works by applying CSS rules to both a parent element (the Grid Container) and its child elements (the Grid Items).</p>
        `,
        codeHtml: `<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>`,
        codeCss: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  background-color: #f0f0f0;
  padding: 10px;
}

.grid-item {
  background-color: #8b5cf6;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}`,
        animation: <GridAnimation />,
      },
      {
        title: "Grid Template Columns & Rows",
        content: `
          <p>The <code>grid-template-columns</code> and <code>grid-template-rows</code> properties define the columns and rows of the grid, including their sizes.</p>
          <p>You can use various units to define the size of columns and rows:</p>
          <ul>
            <li>Absolute lengths (px, em, rem)</li>
            <li>Percentages (%)</li>
            <li>Fractional units (fr) - represent a fraction of the available space</li>
            <li>auto - size based on the content</li>
            <li>min-content, max-content - size based on the content's minimum or maximum size</li>
            <li>minmax(min, max) - a size range between min and max</li>
          </ul>
        `,
        codeHtml: `<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>`,
        codeCss: `.grid-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 100px 200px;
  grid-gap: 10px;
  background-color: #f0f0f0;
  padding: 10px;
}

.grid-item {
  background-color: #8b5cf6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
      },
      {
        title: "Grid Placement",
        content: `
          <p>Grid items can be placed precisely within the grid using the following properties:</p>
          <ul>
            <li><code>grid-column-start</code> and <code>grid-column-end</code> - Specify which column lines the item will start and end at</li>
            <li><code>grid-row-start</code> and <code>grid-row-end</code> - Specify which row lines the item will start and end at</li>
            <li><code>grid-column</code> and <code>grid-row</code> - Shorthand properties for the above</li>
            <li><code>grid-area</code> - A shorthand for grid-row-start, grid-column-start, grid-row-end, and grid-column-end</li>
          </ul>
        `,
        codeHtml: `<div class="grid-container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</div>`,
        codeCss: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-gap: 10px;
  height: 300px;
  background-color: #f0f0f0;
  padding: 10px;
}

.header {
  grid-column: 1 / -1;
  background-color: #8b5cf6;
  padding: 10px;
  color: white;
}

.sidebar {
  grid-row: 2 / 3;
  background-color: #3b82f6;
  padding: 10px;
  color: white;
}

.content {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: #ec4899;
  padding: 10px;
  color: white;
}

.footer {
  grid-column: 1 / -1;
  background-color: #8b5cf6;
  padding: 10px;
  color: white;
}`,
        challenge: {
          description: "Create a responsive grid layout with 3 columns on large screens and 1 column on small screens.",
          hint: "Use media queries and grid-template-columns.",
          solution: {
            css: `@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}`,
          },
        },
      },
    ],
  },
  "responsive": {
    title: "Responsive Design",
    description: "Build websites that work on any device with media queries",
    steps: [
      {
        title: "Introduction to Responsive Design",
        content: `
          <p>Responsive web design is an approach that makes web pages render well on a variety of devices and window or screen sizes. It's essential for providing a good user experience across desktop, tablet, and mobile devices.</p>
          <p>The core components of responsive design are:</p>
          <ul>
            <li>Fluid layouts - using relative units rather than fixed pixels</li>
            <li>Flexible images and media - that scale with the viewport</li>
            <li>Media queries - applying different styles based on device characteristics</li>
          </ul>
        `,
        animation: <ResponsiveAnimation />,
      },
      {
        title: "Media Queries",
        content: `
          <p>Media queries allow you to apply styles based on device characteristics, most commonly the viewport width. This lets you create different layouts for different screen sizes.</p>
          <p>A media query consists of an optional media type and any number of media feature expressions. Multiple queries can be combined using logical operators.</p>
        `,
        codeHtml: `<div class="responsive-container">
  <div class="box">This box changes color based on screen size</div>
</div>`,
        codeCss: `.responsive-container {
  padding: 20px;
  text-align: center;
}

.box {
  padding: 20px;
  border-radius: 8px;
  background-color: #3b82f6;
  color: white;
  font-weight: bold;
}

/* Small screens */
@media (max-width: 600px) {
  .box {
    background-color: #ec4899;
  }
}

/* Medium screens */
@media (min-width: 601px) and (max-width: 1024px) {
  .box {
    background-color: #8b5cf6;
  }
}

/* Large screens */
@media (min-width: 1025px) {
  .box {
    background-color: #10b981;
  }
}`,
      },
      {
        title: "Mobile-First Design",
        content: `
          <p>Mobile-first design is an approach where you design for small screens first, then progressively add more complex layouts and features for larger screens. This approach has several benefits:</p>
          <ul>
            <li>Focuses on essential content and functionality</li>
            <li>Typically leads to faster loading times on mobile devices</li>
            <li>Aligns with the growing trend of mobile internet usage</li>
          </ul>
          <p>In CSS, this means starting with styles for mobile devices and then using <code>min-width</code> media queries to enhance the design for larger screens.</p>
        `,
        codeHtml: `<div class="navbar">
  <div class="logo">Logo</div>
  <div class="menu">
    <div class="menu-item">Home</div>
    <div class="menu-item">About</div>
    <div class="menu-item">Services</div>
    <div class="menu-item">Contact</div>
  </div>
</div>`,
        codeCss: `/* Base styles for mobile */
.navbar {
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #f0f0f0;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.menu {
  display: flex;
  flex-direction: column;
}

.menu-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

/* Tablet and above */
@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    margin-bottom: 0;
  }
  
  .menu {
    flex-direction: row;
  }
  
  .menu-item {
    border-bottom: none;
    margin-left: 20px;
  }
}`,
        challenge: {
          description: "Create a responsive grid layout that displays 1 column on mobile, 2 columns on tablet, and 3 columns on desktop.",
          hint: "Use media queries with min-width and grid-template-columns.",
          solution: {
            css: `/* Mobile (default) */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

/* Tablet */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
          },
        },
      },
    ],
  },
};

export const getLessonContent = (lessonId: string | undefined) => {
  if (!lessonId) return null;
  return lessons[lessonId as keyof typeof lessons] || null;
};
