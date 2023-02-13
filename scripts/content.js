const cssScrollCustom = `
body::-webkit-scrollbar {
    width: 0.5rem; /* width of the entire scrollbar */
  }
  body::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }
  body::-webkit-scrollbar-thumb {
    background-color: #73737380; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
  body::-webkit-scrollbar-thumb:hover {
    background-color: #52525280;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
  }

  body *::-webkit-scrollbar {
    width: 0.5rem; /* width of the entire scrollbar */
  }
  body *::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }
  body *::-webkit-scrollbar-thumb {
    background-color: #73737380; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
  body *::-webkit-scrollbar-thumb:hover {
    background-color: #52525280;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
  }
`;

const style = document.createElement('style');
style.textContent = cssScrollCustom;
document.head.append(style);

