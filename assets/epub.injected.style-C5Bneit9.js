const n=`// https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html
// background-image: url('https://img.freepik.com/free-photo/old-book-open-dark-wood-background_1373-581.jpg?t=st=1728925351~exp=1728928951~hmac=46e4fcba23a8a6d6eb1406c9b0a6a1d6636b15fe7f0f2f83ce0c52c2390b2156&w=900');
body {
   background: transparent;
   padding-top: 60px !important;
   padding-bottom: 40px !important;

   box-sizing: border-box;
   word-wrap: break-word;
   line-break: strict;
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

   // =============
   --sentence-active-color: #020b11;
   --sentence-active-bgColor: rgba(239, 211, 105, 1);

   --translation-active-color: #f1f3f4;
   --translation-active-bgColor: rgba(17, 60, 85, 1);

   --translation2-active-color: #113c55;
   --translation2-active-bgColor: rgba(181, 198, 137, 1);

   // margin-right: 0.25rem;
   /* =========================== translation base style ========================== */
   /* ============================================================================= */
   .orator-sentence {
      border-radius: 4px;
      color: var(--sentence-color) !important;
      background-color: var(--sentence-bgColor) !important;
      font-size: clamp(12px, 1em, 21px) !important;
      line-height: 1.4 !important;
      transition: all 0.4s ease-in-out;

      &::selection {
         // color: var(--sentence-active-bgColor) !important;
         // background-color: var(--sentence-active-color) !important;
         color: rgba(239, 211, 105, 1) !important;
         background-color: #083003 !important;
      }
   }

   .orator-translation {
      border-radius: 4px;
      color: var(--translation-color) !important;
      background: var(--translation-bgColor) !important;
      font-size: clamp(12px, 1em, 21px) !important;
      line-height: 1.4 !important;
      transition: all 0.4s ease-in-out;

      &::selection {
         color: var(--translation-active-bgColor) !important;
         background-color: var(--translation-active-color) !important;
         // text-shadow: 1px 1px 1px #35E02CFF;
      }
   }

   .orator-translation2 {
      border-radius: 4px;
      color: var(--translation2-color) !important;
      background: var(--translation2-bgColor) !important;
      font-size: clamp(12px, 1em, 21px) !important;
      line-height: 1.4 !important;
      transition: all 0.4s ease-in-out;

      &::selection {
         color: var(--translation2-active-bgColor) !important;
         background-color: var(--translation2-active-color) !important;
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

      .orator-sentence,
      .orator-translation,
      .orator-translation2 {
         // background: red;
         // filter: brightness(50%);
         // background-blend-mode: darken;
         // backdrop-filter: brightness(50%);
      }
   }

   &:has(.orator-active) {
      cursor: pointer;
   }
   &:hover {
      cursor: url('/src/assets/cursor images/speaker-cursor-32-1.png'), pointer;
   }
}

/* =========================== active translation highlight =========================== */
/* ==================================================================================== */
.orator-sentence.orator-active {
   color: var(--sentence-active-color) !important;
   background-color: var(--sentence-active-bgColor) !important;
   line-height: 1.4;
}
.orator-translation.orator-active {
   color: var(--translation-active-color) !important;
   background-color: var(--translation-active-bgColor) !important;
   line-height: 1.4;
}

.orator-translation2.orator-active {
   color: var(--translation2-active-color) !important;
   background-color: var(--translation2-active-bgColor) !important;
   line-height: 1.4;
}
`;export{n as default};
