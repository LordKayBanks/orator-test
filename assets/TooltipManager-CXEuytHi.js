const n=`.word-wrapper,
.hover-word {
   cursor: pointer;
   color: rgb(2, 2, 26);
   background: orange;
   border-radius: 4px;
   transition: all 0.2s ease-in-out;
}

@keyframes tooltipAnimation {
   from {
      opacity: 0;
      height: 0px;
   }
   to {
      opacity: 1;
      height: 150px;
   }
}

@keyframes pulsate {
   0%,
   100% {
      opacity: 1;
   }
   50% {
      opacity: 0.1;
   }
}

.pulsate-animation {
   animation: pulsate 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.tooltip {
   --tooltip-bg-color: whitesmoke;
   --tooltip-pointer-height: 15px;

   cursor: default;
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
   justify-content: space-between;
   gap: 10px;

   animation: tooltipAnimation 0.2s ease-out;
}

#tooltip-selection {
   display: flex;
   align-items: center;
   gap: 12px;

   height: 30px;
   width: 100%;

   padding: 2px;
   border: 1px solid #2727d036;
   border-radius: 4px;
   // filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.8));

   #tooltip-selection-note {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1f4c80c2;
      height: 100%;
      padding: 6px;
      box-sizing: border-box;
      border-radius: 6px;

      &:hover {
         filter: contrast(0.5);
         cursor: pointer;
      }

      #tooltip-selection-note-icon {
         height: 25px;
         width: 25px;

         background-image: url('/images/note.svg'), url('/orator-test/images/note.svg');
         background-size: 25px 25px;
         background-repeat: no-repeat;
      }
      #tooltip-selection-note-text {
         font-size: 14px;
         font-weight: 500;
         color: whitesmoke;
      }
   }
}
#tooltip-selection-range {
   // height: 100%;
   height: 110%;
   flex: 1 1 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;

   box-sizing: border-box;
   padding: 4px 8px 0px;
   border-top-left-radius: 4px;
   border-top-right-radius: 4px;
   border-bottom: 3px dashed #1f4d80;
   // border-bottom: 5px solid #1f4d80;
   background-color: #1f4d801c;

   #tooltip-selection-delete {
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
      color: #1f4d80;

      cursor: default;
      pointer-events: none;
      filter: opacity(0.25);

      &:hover {
         cursor: pointer;
         filter: contrast(0.25);
         scale: 1.1;
      }

      &.show {
         cursor: pointer;
         pointer-events: all;
         filter: opacity(1);
      }
   }

   #tooltip-selection-start,
   #tooltip-selection-end {
      display: flex;

      &:hover {
         cursor: pointer;
         filter: contrast(0.5);
      }

      &.disabled {
         cursor: default;
         pointer-events: none;
         filter: opacity(0.3);
      }

      img {
         object-fit: contain;
         max-width: 20px !important;
         filter: drop-shadow(2px 4px 6px black);
      }
   }

   #tooltip-selection-start {
   }
   #tooltip-selection-end {
   }
}

#tooltip-buttons {
   width: 100%;
   display: flex;
   justify-content: space-between;

   #show-details,
   #add-to-vocabulary {
      cursor: pointer;
      border-radius: 4px;
      outline: none;
      border: none;
      filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.643));
   }
   #show-details {
      color: #1f4d80;
      border: 1px solid #1f4d80;
      &:hover {
         color: whitesmoke;
         background: #1f4d80;
      }
   }
   #add-to-vocabulary {
      color: whitesmoke;
      background: #1f4d80;
      &:hover {
         color: #1f4d80;
         background: whitesmoke;
         border: 1px solid #1f4d80;
      }
   }
}

#tooltip-body {
   display: flex;
   gap: 6px;
   font-size: 16px;
   font-weight: 500;
   font-style: normal;
   color: rgb(3, 5, 48);

   #play-word {
      height: 30px;
      width: 30px;

      background-image: url('/images/sound.svg'), url('/orator-test/images/sound.svg');
      background-size: 25px 25px;
      background-repeat: no-repeat;
      filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.643));

      &:hover {
         cursor: pointer;
      }
   }
}

#tooltip-pointer {
   position: absolute;
   height: var(--tooltip-pointer-height);
   width: var(--tooltip-pointer-height);
   box-sizing: border-box;

   border-left: var(--tooltip-pointer-height) solid transparent;
   border-right: var(--tooltip-pointer-height) solid transparent;
   border-top: var(--tooltip-pointer-height) solid var(--tooltip-bg-color);
}
`;export{n as default};
