**WEEK 10 - REACT**

**MONDAY**

TIME TO REVIEW, AND FINISH EXERCISES

**TUESDAY**

TIME TO REVIEW, AND FINISH EXERCISES

**WEDNESDAY**

[WHAT IS REACT - VIDEO](https://www.youtube.com/watch?v=N3AkSS5hXMA)

[REACT IN 30 MINUTES](https://www.youtube.com/watch?v=hQAHSlTtcmY)

**THUESDAY**

EASTER EGGS - KATA

You decide to create a simple list of your favourite Easter eggs in React.

Challenge
Learn about nesting and listing React components.

The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
Loop through the props.eggs to output a unorder list of Easter eggs.
Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.

```
import React from 'react';

export const EggList = ({nombre, edad}) => {
  return (
    <ul>
      {eggs.map((egg, index) => {
        return <EasterEgg name={egg} key={index}/>
      })}
    </ul>
  )
};

export const EasterEgg = ({name}) => {
    return <li>{name}</li>
};
```
