export let Questions = [
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<style>", "<css>", "<link></link>"],
    answer: "<style>",
    userChoice: "",
    feedback:
      "The correct tag for defining internal CSS is <style>. The <script> tag is for JavaScript, while the <link> tag is used to reference an external stylesheet file, and <css> is not even a valid tag.",
  },
  {
    question: "Which tag is used to create a form?",
    options: ["<form>", "<input>", "<select>", "<textarea></textarea>"],
    answer: "<form>",
    userChoice: "",
    feedback:
      "The <form> tag is the container for the entire form. Tags like <input>, <select>, and <textarea> define specific elements within the form, but they must be wrapped inside the main <form> tag to function as a single submission unit.",
  },
  {
    question: "What is the full form of HTML?",
    options: [
      "Hyper text markup language",
      "Hyphenation text markup language",
      "Hyphenation test marking language",
      "Hyper text marking language",
    ],
    answer: "Hyper text markup language",
    userChoice: "",
    feedback:
      "HTML stands for HyperText Markup Language. It uses 'HyperText' to link documents and 'Markup' to define the structure of the content.",
  },
  {
    question: "Which tag is used to create body text in HTML?",
    options: ["<HEAD>", "<TEXT>", "<TITLE>", "<BODY>"],
    answer: "<BODY>",
    userChoice: "",
    feedback:
      "The <body> tag defines the main content area of the HTML document that is visible to the user. <head> and <title> define information about the page (metadata), not the main content itself.",
  },
  {
    question: "Which of the following is used to create an email hyperlink?",
    options: ["mail:", "mailto:", "tomail:", "to_mail:"],
    answer: "mailto:",
    userChoice: "",
    feedback:
      "To create an email link, you use the mailto: scheme within the href attribute (e.g., <a href='mailto:example@domain.com'>). This tells the browser to open the user's default email client.",
  },
  {
    question: "What does CSS primarily control?",
    options: [
      "Web page interactivity",
      "Web page structure",
      "Web page visual style",
      "Web page server-side logic",
    ],
    answer: "Web page visual style",
    userChoice: "",
    feedback:
      "Cascading Style Sheets (CSS) is specifically designed to handle the presentation, styling, and layout of a webpage. HTML handles the structure (b), and JavaScript handles interactivity (a).",
  },
  {
    question: "How many ways can CSS be written?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    userChoice: "",
    feedback:
      "There are three primary ways to apply CSS to an HTML document: Inline styles (using the style attribute on an element), Internal styles (using the <style> tag in the <head>), and External styles (using a separate .css file linked with the <link> tag).",
  },
];
