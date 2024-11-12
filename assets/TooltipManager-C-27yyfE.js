const o=`.tooltip {
   --tooltip-bg-color: whitesmoke;
   --tooltip-pointer-height: 15px;

   color: rgb(4, 5, 37);
   background: var(--tooltip-bg-color);

   padding: 10px;
   border-radius: 20px;
   box-sizing: border-box;
   font-family: system-ui, -apple-system, sans-serif;

   // filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 1));
   box-shadow: 2px 4px 12px 3px rgba(0, 0, 0, 1);
   /* backdrop-filter: blur(10px); */

   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
}

.tooltip-pointer {
   position: absolute;
   height: var(--tooltip-pointer-height);
   width: var(--tooltip-pointer-height);
   box-sizing: border-box;

   border-left: var(--tooltip-pointer-height) solid transparent;
   border-right: var(--tooltip-pointer-height) solid transparent;
   border-top: var(--tooltip-pointer-height) solid var(--tooltip-bg-color);
}

.word-wrapper {
   color: rgb(2, 2, 26);
   background: orange;
   border-radius: 4px;
}

.tooltip-details {
   width: 100%;
   display: flex;
   justify-content: end;

   .tooltip-button {
      cursor: pointer;
      color: rgb(7, 0, 7);
      background: whitesmoke;
      border-radius: 4px;
      outline: none;

      &:hover {
         color: whitesmoke;
         background: rgb(7, 0, 7);
      }
   }
}

.tooltip-body {
   font-size: 16px;
   color: rgb(3, 5, 48);
}
`;export{o as default};
