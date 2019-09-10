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

Junior, Middle, Senior, Specialist... so many titles. But how much these titles say about his coding skills when you are trying to hire one?

I already made dozens of interviews for Java developer positions. Took me awhile and some studies to understand how to select good candidates with the tools that I had. To my surprise, it's really simple.

## The first experience

The first interviews that I made were just talking to the candidate: some questions about what coding books he read, some technical questions to explore his skills and experience, etc.

For some time this was considered a good approach. But the approved candidates **frequently** not show the expected quality and productivity when coding.

As you know, it was a mistake in our process: as you can't hire a magician without seeing him make some magic, you can't hire a developer without seeing some code.

## The second experience

Another idea was to create a [Coding Dojo](http://codingdojo.org/WhatIsCodingDojo/) with the candidates. We run some interviews using this technic and the results were good, I can't lie.

But we realized at least three major problems:

- The skill difference between the candidates
- Require a lot of time from interviewers
- Very stressful for introvert developers

Even with the good results, the cost-benefit was not so great. On many occasions, we spend time in the Coding Dojo to no hire any of the candidates.

## The third experience

The company started to use a complex test after the talking interview. I not participated in this decision, but basically, the test was: connect to a database, create some Hibernate entities and solve some problems about save a person and his information.

The cons: this test was hard to set up every time (because of the database), required too much specific knowledge from the candidate (I don't care if he remembers or not how to connect to a database) and consumes a lot of time of the candidate without showing relevant programming skills.

## The fourth experience

One of the first articles that open my mind was the [Guerrila guide to interviewing](https://www.joelonsoftware.com/2006/10/25/the-guerrilla-guide-to-interviewing-version-30/). Joel changes my focus on the interview and I start to looking for developers **smart**  and that **gets things done**.

But I needed to adapt some of his processes.

I'm not a big fan to [write code on board](https://www.codility.com/blog/white-board-interviews-are-a-thing-of-the-past-0), not because of not works but because it applies an aggressive filter to the candidates and we were not Google or Facebook to do that, where there is a big line of smart, experienced and confident people at the company door waiting their turn on the interview. Also, the company will not approve this kind of interview.

So, after some research and experiments, the correct filter that I found was using a [really simple test](https://blog.codinghorror.com/why-cant-programmers-program/) after the talking interview, regardless of the position is for junior or senior. And when I say "simple" it's because is very simple.

The test had 7 questions, but the first two questions were mandatory:

- The classic [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz)
- A question about validating a name of a Robot, Customer, and Manager, just to see how/if they think object-oriented.

Examples of these and other questions that were on the test you can find on [my repository](https://github.com/dherik/java-exam/tree/master/src/main/resources). We evaluated the presence of unit tests, the code quality (meaningful names, organization, etc) and the solution itself.

This test worked very well.

But many candidates that seem very good at the talking interview was not able to resolve the two tests above. Worse than this, a few junior developers have been able to resolve more than 5 problems faster and better than most of the senior developers that resolve the first 2 questions. By my experience, I'm not surprised.

The results were more than satisfactory. However, we found that the talking interviews were not working well as the first filter, because most of the candidates were able to be approved in this step but failed the programming test.

## The last (and best) experience

We just inverted the order of the process. First, the programming test. Second, talking.

This change makes us more productive on the filter the good candidates in the shortest time possible. Also, using this order we could discuss some aspects of the implemented code from the programming test.

The drawback of this situation was to convince and explain to the company HR why 90% of the candidates were being rejected. No doubt, the HR was not so glad initially, because they needed to prospect more candidates for the interview to fill the available positions. For my luck, the HR manager knew very well the IT market and the difficulty to hire good employees.

## Conclusion

This experience showed to me that hire a developer without seeing his code is not a good idea at all. No matter what the developer says in an interview, you need to have some clue about how he performs programming. If you can't do that yet on your interview process, ask if the candidate creates some Github repositories in the past months, because this is a good signal of programming skills or a developer really trying to learn more (what is also great).

Of course, I'm not saying that everyone needs to follow this process to hire a developer. The companies had different problems, tools, demands, and prerequisites. For example, some companies prefer to pass a bigger exercise for the candidate to solve in the comfort of your home and, to be honest, probably it's a better strategy. I already participated in two interview processes using this method and the experience for me, as a candidate, was positive.

Of course, even this simple interview process can accidentally filter a good candidate. But when in doubt about hire or not hire, it’s better not. As [Joel said](https://blog.codinghorror.com/why-cant-programmers-program/):

> ... it is much, much better to reject a good candidate than to accept a bad candidate

So, remember that the next time you interview a candidate.
