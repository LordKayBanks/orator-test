const n=`@keyframes skeleton-loading {
   0% {
      background-position: 100% 0;
   }
   100% {
      background-position: -100% 0;
   }
}

orator {
   // --sentence-bgColor : transparent;
   // --translation-color: #373c3f;
   // --translation-bgColor: #fbe1d3;

   // --sentence-color: #113c55;
   // --sentence-bgColor: #f1f3f4;

   // --translation-color: #113c55;
   // --translation-bgColor: #f06d38;

   // --translation2-color: #ffffff;
   // --translation2-bgColor: #125671ff;

   // // =============
   // --sentence-active-color: #373c3f;
   // --sentence-active-bgColor: #efd369;

   // --translation-active-color: #f1f3f4;
   // --translation-active-bgColor: #113c55;

   // --translation2-active-color: #113c55;
   // --translation2-active-bgColor: #b5c689;

   // ===========================
   --sentence-color: #373c3f;
   --sentence-bgColor: rgba(239, 211, 105, 0.15);

   --translation-color: #020b11;
   --translation-bgColor: rgba(17, 60, 85, 0.15);

   --translation2-color: #113c55;
   --translation2-bgColor: rgba(181, 198, 137, 0.45);

   /* ============= */
   --sentence-active-color: #020b11;
   --sentence-active-bgColor: rgba(239, 211, 105, 1);

   --translation-active-color: #f1f3f4;
   --translation-active-bgColor: rgba(17, 60, 85, 1);

   --translation2-active-color: #113c55;
   --translation2-active-bgColor: rgba(181, 198, 137, 1);

   // --book-font-size: 1.75rem;

   /* Create a new stacking context */
   isolation: isolate;

   /* Reset inherited styles */
   all: initial;

   /* Preserve some useful inheritances */
   * {
      isolation: isolate;
      all: unset;
      box-sizing: border-box;
   }
}

orator {
   &.orator-highlight {
      filter: opacity(0.8);
      // filter: brightness(1.5);
      // filter: hue-rotate(120deg);

      // text-decoration: underline;
      // text-decoration-style: solid;
      // text-decoration-thickness: 1px;
      // text-decoration-color: black;

      .orator-sentence {
         // background-color: rgb(132 244 182) !important;
         color: var(--sentence-active-color) !important;
         background-color: var(--sentence-active-bgColor) !important;
      }
      .orator-translation {
         // background-color: rgb(167, 158, 249) !important;
         color: var(--translation-active-color) !important;
         background-color: var(--translation-active-bgColor) !important;
      }
      .orator-translation2 {
         // background-color: rgb(210, 105, 30) !important;
         color: var(--translation2-active-color) !important;
         background-color: var(--translation2-active-bgColor) !important;
      }
   }

   /* =========================== translation base style ========================== */
   /* ============================================================================= */
   .orator-sentence,
   .orator-translation,
   .orator-translation2 {
      border-radius: 4px;

      // font-size: clamp(14px, 1.1em, 24px) !important;
      font-size: var(--book-font-size) !important;
      font-size-adjust: 0.5;
      line-height: 140% !important;
      // line-height: normal !important;
   }

   .orator-sentence {
      color: var(--sentence-color) !important;
      background-color: var(--sentence-bgColor) !important;
      transition: all 0.4s ease-in-out;

      &::selection,
      .current-word {
         // color: var(--translation-active-color) !important;
         // background-color: var(--translation-active-bgColor) !important;

         // color: rgba(239, 211, 105, 1) !important;
         // background-color: #083003 !important;

         color: whitesmoke !important;
         background-color: maroon !important;
      }
   }

   .orator-translation {
      color: var(--translation-color);
      background: var(--translation-bgColor);
      transition: all 0.4s ease-in-out;

      &::selection,
      .current-word {
         color: var(--translation-active-bgColor) !important;
         background-color: var(--translation-active-color) !important;
         box-sizing: border-box;
         border-top: 1px solid #090223;
         border-bottom: 1px solid #090223;
         // border-radius: 4px;
         // text-shadow: 1px 1px 1px #35e02cff;

         // color: maroon !important;
         // background-color: gold !important;
      }
   }

   .orator-translation2 {
      color: var(--translation2-color);
      background: var(--translation2-bgColor);
      transition: all 0.4s ease-in-out;

      &::selection,
      .current-word {
         color: white !important;
         background-color: rgb(81, 10, 81) !important;
         // color: yellow !important;
         // background-color: black !important;
         // text-shadow: 1px 1px 1px #35E02CFF;
      }
   }

   /* ======================= style parent container on child hover ====================== */
   /* ==================================================================================== */

   &:has(.orator-active),
   &:hover {
      box-sizing: border-box;

      .orator-sentence {
         color: var(--sentence-active-color) !important;
         background-color: var(--sentence-active-bgColor) !important;
      }
      .orator-translation {
         color: var(--translation-active-color) !important;
         background-color: var(--translation-active-bgColor) !important;
      }
      .orator-translation2 {
         color: var(--translation2-active-color) !important;
         background-color: var(--translation2-active-bgColor) !important;
      }
   }

   &:has(.orator-active) {
      cursor: pointer;
      filter: contrast(1.5);

      // filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.8));
      // filter: saturate(1.5);
      // filter: grayscale(75%);
   }

   /* =========================== active translation highlight =========================== */
   /* ==================================================================================== */
   .orator-sentence.orator-active {
      color: var(--sentence-active-color) !important;
      background-color: var(--sentence-active-bgColor) !important;
   }
   .orator-translation.orator-active {
      color: var(--translation-active-color) !important;
      background-color: var(--translation-active-bgColor) !important;
   }

   .orator-translation2.orator-active {
      color: var(--translation2-active-color) !important;
      background-color: var(--translation2-active-bgColor) !important;
   }
}

body.pre-load {
   .orator-translation,
   .orator-translation2 {
      display: inline-block;
      height: 1em;
      overflow: hidden;

      color: transparent;
      background-size: 200% 100%;
      animation: skeleton-loading 3s infinite linear;
      animation-delay: 1.5s;
   }

   .orator-translation {
      background: linear-gradient(
         90deg,
         rgba(17, 60, 85, 0.15) 25%,
         rgba(17, 60, 85, 0.5) 50%,
         rgba(17, 60, 85, 0.15) 75%
      );
   }
   .orator-translation:nth-child(odd) {
      width: 45%;
   }
   .orator-translation:nth-child(even) {
      width: 65%;
   }

   .orator-translation2 {
      background: linear-gradient(
         90deg,
         rgba(181, 198, 137, 0.35) 25%,
         rgba(181, 198, 137, 1) 50%,
         rgba(181, 198, 137, 0.35) 75%
      );
   }
   .orator-translation2:nth-child(odd) {
      width: 45%;
   }
   .orator-translation2:nth-child(even) {
      width: 65%;
   }
}
`;export{n as default};
