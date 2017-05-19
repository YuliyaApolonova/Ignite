/// <binding ProjectOpened='Watch - Development' />
"use strict";

module.exports = {
   entry: {
      "Classwork/Lesson19/class1/bundle": "./Classwork/Lesson19/class1/main.jsx",
      "Classwork/Lesson19/class2/bundle": "./Classwork/Lesson19/class2/main.jsx",
      "Classwork/Lesson19/class3/bundle": "./Classwork/Lesson19/class3/main.jsx",
      "Homework/Lesson19/home1/bundle": "./Homework/Lesson19/home1/main.jsx",
      "Homework/Lesson19/home2/bundle": "./Homework/Lesson19/home2/main.jsx",
      "Homework/Lesson19/home3/bundle": "./Homework/Lesson19/home3/main.jsx",
      "Classwork/Lesson20/class1/bundle": "./Classwork/Lesson20/class1/main.jsx",
      "Classwork/Lesson20/class2/bundle": "./Classwork/Lesson20/class2/main.jsx",
      "Classwork/Lesson20/class3/bundle": "./Classwork/Lesson20/class3/main.jsx",
      "Homework/Lesson20/home1/bundle": "./Homework/Lesson20/home1/main.jsx",
      "Homework/Lesson20/home2/bundle": "./Homework/Lesson20/home2/main.jsx",
      "Homework/Lesson20/home3/bundle": "./Homework/Lesson20/home3/main.jsx",
      "Classwork/Lesson21/class1/bundle": "./Classwork/Lesson21/class1/main.jsx",
      "Classwork/Lesson21/class2/bundle": "./Classwork/Lesson21/class2/main.jsx",
      "Classwork/Lesson21/class3/bundle": "./Classwork/Lesson21/class3/main.jsx",
      "Homework/Lesson21/home1/bundle": "./Homework/Lesson21/home1/main.jsx",
      "Homework/Lesson21/home2/bundle": "./Homework/Lesson21/home2/main.jsx",
      "Homework/Lesson21/home3/bundle": "./Homework/Lesson21/home3/main.jsx",
      "Classwork/Lesson22/class1/bundle": "./Classwork/Lesson22/class1/main.jsx",
      "Classwork/Lesson22/class2/bundle": "./Classwork/Lesson22/class2/main.jsx",
      "Classwork/Lesson22/class3/bundle": "./Classwork/Lesson22/class3/main.jsx",
      "Homework/Lesson22/home1/bundle": "./Homework/Lesson22/home1/main.jsx",
      "Homework/Lesson22/home2/bundle": "./Homework/Lesson22/home2/main.jsx",
      "Homework/Lesson22/home3/bundle": "./Homework/Lesson22/home3/main.jsx",
      "Classwork/Lesson23/class1/App/src/bundle": "./Classwork/Lesson23/class1/App/src/main.jsx",
      "Classwork/Lesson23/class2/bundle": "./Classwork/Lesson23/class2/main.jsx",
      "Homework/Lesson23/home1/bundle": "./Homework/Lesson23/home1/main.jsx",
      "Classwork/Lesson24/class1/bundle": "./Classwork/Lesson24/class1/main.jsx",
      "Classwork/Lesson24/class2/bundle": "./Classwork/Lesson24/class2/index.jsx",
      "Classwork/Lesson24/class3/bundle": "./Classwork/Lesson24/class3/index.jsx",
      "Homework/Lesson24/home1/bundle": "./Homework/Lesson24/home1/main.jsx",
      "Homework/Lesson24/home2/bundle": "./Homework/Lesson24/home2/main.jsx",
      "Classwork/Lesson25/class1/bundle": "./Classwork/Lesson25/class1/main.jsx",
      "Classwork/Lesson25/class2/bundle": "./Classwork/Lesson25/class2/main.jsx",
      "Classwork/Lesson25/class3/bundle": "./Classwork/Lesson25/class3/main.jsx",
      "Homework/Lesson25/home1/bundle": "./Homework/Lesson25/home1/main.jsx",
      "Homework/Lesson25/home2/bundle": "./Homework/Lesson25/home2/main.jsx",
      "Classwork/Lesson26/class1/bundle": "./Classwork/Lesson26/class1/main.jsx",
      "Classwork/Lesson26/class2/bundle": "./Classwork/Lesson26/class2/main.jsx",
      "Classwork/Lesson26/class3/bundle": "./Classwork/Lesson26/class3/main.jsx",

   } ,
   output: {
      filename: '[name].js'
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query:
                  {
                     presets: ['es2015', 'react']
                  }
         }
      ]
   }
};