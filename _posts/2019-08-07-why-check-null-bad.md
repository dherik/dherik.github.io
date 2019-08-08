---
title: "Why check null is a bad smell"
published: true
categories:
  - Blog
tags:
  - java
  - null
  - optional
header:
  image: /assets/images/chris-ried-ieic5Tq8YMk-unsplash.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

Since my early years of development, the Java null was a nightmare: it just could appear anywhere, anytime.

After some years, some good practices appear to deal with the null on the code. And the best strategy until today was: **don't allow nulls traveling on your code**.

But how this could be possible?

The first thing is **not to pass a null parameter for any method**. If you assume this as the default behavior on your code, you also will never need to check if the parameter is null. All parameters are always mandatory.

Per example, if you need to create a Person and the last name is optional, instead of creating a single method where you check if the lastName parameter is null:

```java
createPerson(firstName, lastName);
```

You should create two methods:

```java
createPerson(firstName);
createPerson(firstName, lastName);
```

The second thing is **never returns a null**. You should always return an `Optional` object or an empty list to represent the absence of that information.

When using entities or DTOs, the absence of information needs to be represented with the null value on the fields, because `Optional` is not serializable. But you can modify the classes [to return an Optional value](https://vladmihalcea.com/the-best-way-to-map-a-java-1-8-optional-entity-attribute-with-jpa-and-hibernate/), like:

```java
public Optional<String> getLastName() {
    return Optional.ofNullable(this.lastname);
}
```

But, you are not always in control of all null possibilities. Some libraries, per example, return null on specific cases. The same applies when you are dealing with some not-well-documented API, where defensive programming is necessary and null checks will be inevitable. 

So, you need to be **aware of these null sources**.

In this case, make sure to isolate your code from them. As soon as your code has contact with the null, make sure to change your code to not propagate the null.

# Common questions

There is an [article on DZone](https://dzone.com/articles/why-i-never-null-check-parameters) about this subject. Seeing the comments, many developers don't understand the main idea behind the null checks. So I create some Q&A to address the doubts about this subject.

> "But some developer could just pass null for the method anytime!"

Since you are working with methods where every parameter is mandatory, accept null on any of them is itself a bug. And if some developer is just assuming that he can pass a null parameter for some method that is not prepared to deal with it, he is skipping the unit test part.

>  "I want the system to fail-fast when the offending call happens"

If you are not working with nulls on your parameters, you shouldn't bother with null values.

For example, when you are using some dependency injection framework (like [Spring](https://spring.io), [Ninject](http://www.ninject.org), [Guice](https://github.com/google/guice), etc) do you verify if the injected class is null? No, because the class will always exist. If your project is using non-null parameters as default behavior, why you should check nulls on parameters?

If some developer insists that this null could happen and needs to be checked, he needs to answer these two questions:

1. How this null could appear on that point of the code?
1. How you could handle the null before the method call?

The answers to these questions will be enough to know how to mitigate the null inside your code following the previous tips.