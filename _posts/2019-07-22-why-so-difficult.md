---
title: "Why is so difficult to convince some managers to invest on software improvement?"
published: true
categories:
  - Blog
tags:
  - manager
  - software
  - quality
header:
  image: /assets/images/chris-ried-ieic5Tq8YMk-unsplash.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

If you have some years of experience, probably you already deal with this follow situation: the software has a big problem, everybody complains about it, you have a plan on hands to solve, but your manager not buy it and the problem continues. 

# So, what I'm doing wrong?

There are many explanations for that. The first thing to look at is your communication.

When you are talking at the management level or above, the technical details are almost useless. You need numbers: what's the economy/gains will have with this solution? This is the question that the managers have in their minds. It's an obvious question for them, but not always for the developers.

And it's a hard to answer it. But your strategy to convince needs to provide strong arguments. I will give an example.

# The manager point of view

If the application is dealing with performance problems, they will say that it's cheaper to add new machines on the cluster. If the application is dealing with many developers stepping on each other's feet when changing the code, they will talk about add bureaucracy to the process. If the team is rejecting many candidates in the interview because they are not good enough, eventually they will bypass the team to hire them.

What's wrong if these actions?

Some managers can't see why just throwing machines to the cluster just add dirt to the [Big Ball of Mud](https://blog.codinghorror.com/the-big-ball-of-mud-and-other-architectural-disasters/), invalidating future strategies to improve the software quality, like break the monolith on microservices. They can't see that you need to separate the team on little squads responsable for different contexts to be more productive. They can't understand that a bad developer on the team can decrease the whole team performance and add less value to the company money.

And everything above can be translated into numbers. But it's hard to create them. Luckily, the chance that you already had these numbers somewhere is very high, so make your home lesson.

Considering what I just to say above about how some managers can't see the big picture, see these arguments.

Teams with few people are [way more productive](https://dzone.com/articles/how-jeff-bezos-2-pizza-rule-affects-productivity-i?utm_medium=feed&utm_source=feedpress.me&utm_campaign=Feed:%20dzone%2Fagile). Not only one or two times, but [many times more productive](https://spin.atomicobject.com/2012/01/11/small-teams-are-dramatically-more-efficient-than-large-teams/). And to create smaller teams work efficiently, you need to provide the appropriate scenario for them and the microservices are a path to make the [team independent](https://martinfowler.com/articles/break-monolith-into-microservices.html). Some developers can be 10x times more productive than the other and the company, maybe, only pays 2x times for him at maximum if they are compared to each other, so hire bad developers it's a bad strategy. Plus, maintaining the good coders on the team is translated into [more features on production](https://martinfowler.com/articles/is-quality-worth-cost.html).

This is just an example. You just need to adapt your arguments to the situation that you are living on.

# When arguments are useless

Sometimes even saying, explaining and proving may not be enough. Maybe the managers are holding pieces of information that he can't share with you: budget problems, dismissals scheduled, the actual software will be replaced by another one, they can't step back on hire new developers now, etc. So, pay attention to this kind of possibility too before waste your energy on change a situation that you can't.