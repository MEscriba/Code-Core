**JAVASCRIPT WEEK4**

**Week challenges (Monday)**

we learned about the characteristics of the for of, filter method, map method and reduce method.

**Week challenges (Tuesday)**

we learned about the Regular Expressions (RegEx)and method replace

**Week challenges (Wednesday)**

pause day- practice day

**Week challenges (Thursday)**


link to [linkedin](https://www.linkedin.com/in/martin-escriba/) profile

**Week challenges excercices extras**

validate username

```
function validateUsr(username) {
  /**
    - `^`        Start from the beginning of the string.
    - `[]`       Allow any character specified, including...
    - `a-z`      anything from a to z,
    - `0-9`      anything from 0 to 9,
    - `_`        and underscore.
    - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
    - `$`        End the string right after specified amount of allowed characters is given.
  */
  const validator = /^[a-z0-9_]{4,16}$/;

  return validator.test(username);
}
```
