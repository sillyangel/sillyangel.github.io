---
author: angel

pubDatetime: 2023-11-14T12:00:00
modDatetime: 2024-09-14T12:47:13.936Z
title: Facttrack score exploit
featured: true
draft: false
tags:
  - exploit
  - javascript
  - school
description: exploit to my school district math game
---

![Proof of Concept](/public/proofofconcept.jpg)

> things are removed for their privacy, and mine privacy

This is very easy to do since they don't have the  javascript obfuscated, and with the help of Developer Tools, you too can do this but I don't recommend doing this at all.

# Tutorial

First off you have to open up a browser with Developer Tools, and then access the wesbite, after opening Developer Tools, you would open console, and follow as shown

```js
score = [your chosen score]
```

Replace [your chosen score] with the score you want to achieve. For example, if you want a score of 100000, you would enter:

```js
score = 100000;
```

After entering the command press Enter to replace the default score of 0 with your chosen score.

The next command you need to enter in the Developer Tools Console is:

```js
SubmitScore();
```

This command submits your custom score to the server. The underlying implementation of the SubmitScore() function is as follows:

```js
function SubmitScore() {
  // Checks if user is student
  if (usertype == "student") {
    // xhr https request, and where is it going to
    let xhr = new XMLHttpRequest();
    let url = "game_be.php";
    // xhr params 000000 would be the student number, and score
    var params = "studentid=000000&score=" + score;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // after submitting, refreshs page
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        window.location.reload();
      }
    };
    xhr.send(params);
  } else {
    // if not user, then reload
    window.location.reload();
  }
}
```

> comments are added extra

very simple, and one way they can fix this is by obfuscate the underlying javascript, since after all this is just a javascript game.

anyways bye bye