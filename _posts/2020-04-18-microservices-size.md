---
title: "Microservices was never about the 'size'"
published: true
categories:
  - Blog
tags:
  - microservices
  - best-practices
  - martin-fowler
header:
  image: /assets/images/luca-bravo-XJXWbfSo2f0-unsplash.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

There is no recipe to create a good system with microservices. But I saw many times developers committing the same mistakes that lead them to the same problems.

Recently, Martin Fowler [tweet](https://twitter.com/martinfowler/status/1247615433731198981?s=20) this:

> In 2014 @boicy and I described the emerging microservices architectural style. We identified 9 common characteristics. Size wasn't on the list.

Even some people being mad because the "micro" name can be confused and somehow related to size, the size was never a thing if you understand the meaning of the concept of microservices.  I already heard people judging the microservice just by its size and ignoring if the microservice is attending a specific and isolated business context.

The Microservices concept is about to understand the business and mold them with services with well-defined responsibilities.

And then we start to have problems. Some developers think that they already know the business enough, starting a project creating a lot of services. This is very common when a company is starting a new project and the developers don't know anything about the business core. All their focus is on creating a lot of microservices because, in that way, they will feel that are "microservicing" the system.

This will, soon or later, start the following consequences:

- The microservice will depend heavily on another. It can't be reused to process information by another microservice. It behaviors as just a single service broken on two or more.
- Sync (RPC) calls among them will be very common
- Eventual consistency will be considered a problem and not an advantage
- A lot of data replicated among the microservice databases
- The necessity to merge two or more microservices in the future.
- Throw microservice code away at the beginning of the project because made wrong assumptions
- You can't rely on your system without a big (and complex) end-to-end test suite running daily.

When starting a project about a business core that you know almost nothing, you need to assume a **humble** position on your code too.

But you can ask:

> I already see/read/heard about systems with hundreds of microservices. How they can do that without becoming a nightmare?

On yeah, you can find many examples of teams creating and managing really "tiny" services. And now I'm talking also about size :).

These developers can do that because they probably know a lot about the business. Probably they have many years working on the same system and are already able to fully understand the main business processes.

Sometimes, they already have some legacy system running to be based on and are migrating to a microservices system, having the advantage to see what makes more sense to be splited on two or more services. 

Another possibility is the business problem that they are dealing with, which helps to create this very distributed architecture.

So, looking these examples, some developers seem able to replicate that, but it's not simple. To create a good microservices system you also need to study **the way** it was done and not just the final result.
