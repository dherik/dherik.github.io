---
title: "How to hire good developers: my experience so far"
published: true
categories:
  - Blog
tags:
  - developer
  - interview
  - skill
  - java
header:
  image: /assets/images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

Junior, Middle, Senior, Specialist... so many titles. But how much do these titles say about their coding skills when you are trying to hire someone?

I already made dozens of interviews for developer positions. Took me awhile and some studies to understand how to select good candidates with the tools that I had. To my surprise, it's not that hard to select the good candidates.

## The first experience

The first interviews that I made were just talking to the candidate: some questions about what coding books he read, some technical questions to explore his skills and experience, etc.

For some time this was considered a good approach. But the approved candidates **frequently** not show the expected quality and productivity when coding.

As you can imagine, we were commiting a evident a mistake in our process: as you can't hire a magician without seeing him make some magic, you can't hire a developer without seeing him doing some code.

## The second experience

Another idea was to create a [Coding Dojo](http://codingdojo.org/WhatIsCodingDojo/) with the candidates. We did some interviews using this approach and the results were good, I can't lie.

But we realized at least three major problems:

- The skill difference between the candidates
- Requires a lot of time from interviewers
- Very stressful for introvert candidates

Even with the good results, the cost-benefit was not so great. On many occasions, we spend time in the Coding Dojo to no hire any of the candidates.

## The third experience

In this company we used to apply a complex test after the talking interview. Basically, the test was: connect to a existent database, mapping some Hibernate entities and solve some problems about save a Person entity.

The cons: this test was hard to set up every time (mainly because of the database), required too much specific knowledge from the candidate and consumes a lot of time of the candidate without showing relevant programming skills.

## The fourth experience

This experience starts with the first interview article that openned my mind, it was the [Guerrila guide to interviewing](https://www.joelonsoftware.com/2006/10/25/the-guerrilla-guide-to-interviewing-version-30/). Joel changed my focus on how evaluate a candidate in an interview and I started to looking for **smart** developers and that **gets things done**. Until today, this is the best guide to hire good developers.

But for that happen, I needed to adapt some of the current interview process.

I'm not a big fan to [write code on board](https://www.codility.com/blog/white-board-interviews-are-a-thing-of-the-past-0), not because I don't believe in the result but because it applies an aggressive filter to the candidates and we were not Google or Facebook to do that, since these companies has a big line of smart, experienced and confident people at the company door, waiting their chance for an interview. Also, the company itself will not approve this kind of interview too.

So, after some research and experiments, a good candidate filter that I found was using a [really simple test](https://blog.codinghorror.com/why-cant-programmers-program/) after the talking interview. The same test was applied regardless of the position is for Junior or Senior.

The test had a total of 7 questions, but just the first two questions were mandatory:

- The classic [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz)
- A question about validating a name of a Robot, Customer, and Manager, just to see how/if they think object-oriented.

Examples of these and other questions that were on the test you can find on [my repository](https://github.com/dherik/java-exam/tree/master/src/main/resources). We evaluated the presence of unit tests, the code quality (meaningful names, organization, etc) and the solution itself. This test worked very well.

But many candidates that seems very good at the talking interview was not able to resolve the two tests above. Worse than this, a few junior developers have been able to resolve more than 5 problems faster and better than many senior developers that solve just the first 2 questions. And to be honest, by my experience, I was not so surprised.

The results were more than satisfactory. However, we found that the talking interviews were not working well as the first filter, because most of the candidates were able to be approved in this step but failed in the programming test.

## The last (and best) experience

Compared with the previous experience, in this one we just inverted the order of the process. First, the programming test. Second, the talking.

This change makes us more productive on the filter of the good candidates. Also, we had more time to discuss some aspects of the implemented code from our candidates in the programming test.

The drawback of this situation was to convince and explain to the HR (Human Resources) department why 90% of the candidates were being rejected. I will not lie, the HR was not so glad initially, because they needed to prospect more candidates for the interview to fill the available positions. But for my luck, the HR manager was aware about the IT market and the difficulty to hire good developers.

## Conclusion

This experience showed to me that hire a developer without seeing his code is not a good idea at all. No matter what the developer says in an interview, you need to have some clue about how the person performs programming.

And of course, I'm not saying that everyone needs to follow this process to hire a developer. The companies had different problems, tools, demands, necessities, and prerequisites. For example, some companies prefer to pass a bigger exercise for the candidate to solve in the comfort of your home and, to be honest, probably it's a better strategy. I already participated in two interview processes using this method and the experience for me, as a candidate, was positive, but not every company agrees with that.

Of course, even this simple interview process can accidentally filter a good candidate. But when in doubt about hire or not hire, it’s better not hire. As [Joel said](https://blog.codinghorror.com/why-cant-programmers-program/):

> ... it is much, much better to reject a good candidate than to accept a bad candidate

So, remember that the next time you interview a candidate.
