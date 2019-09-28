---
title: "How to create a software with a good logging"
published: false
categories:
  - Blog
tags:
  - java
  - log
  - tips
  - software
  - best-practices
header:
  image: /assets/images/chris-ried-ieic5Tq8YMk-unsplash.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---


Many developers ignore the power of a good implementation of logging on a software. Good logging will help you to understand what's happening in your software without suffering from a lack of information, mainly across the most important features.

Software with good logging follow some principles:
 - Not log the same information in different places;
 - Be clear about what it's happening;
 - It's consistent;
 - Not log sensible or personal information;
 - Log it's not only for errors;
Let's see each principle in detail. I will use the [Java SLF4J](https://pt.stackoverflow.com/a/413034/4492) for the examples, but these principles are valid for any language.

## Not log the same information in different places

Many times I see developers logging the same information on different places. For example, if you are trying to save an Order on your software, you can do something like that on your OrderController:

    log.info("Order {} will be created", order.getNumber());

After that, you pass the order object to an OrderService. And, again, you repeat the same log:

    log.info("Order {} will be created", order.getNumber());

This is very confusing. 

If you are trying to follow the creation of an order, you will see two times the same log with the same information on different places. This is especially valid when logging exceptions: sometimes there is more than one place catching the same exception, so make sure to log the exception only once.

# Be clear about what it's happening;

Don't be verbose or minimalistic. When logging, you need to be very clear about what your code is doing or what's happened.

So make sure to log useful information. A log like:

log.info("Order created");

It's very generalistic: what's the number of the order? Who created the order? What's the value of the order?

You need to validate what kind of information it's important to log on to the feature of your software. A log like:

    log.info("Order {} was created by {} with the value of {} dollars", order.getNumber(), order.getAuthor(), order.getValue());

Provide some useful informations that you can use later to understand the behavior of the software.

# It's consistent;
Don't try to create a different pattern for each time that you are logging something. Copy or create some log convention and follow the same pattern every time. 

I mean, if you see the software logging information using this format:

    log.info("Order {} was created", order.getNumber());

Don't try to use this format in another place of the code:

    LOGGER.info("The person [{}] was created", person.getName());

Or:

    LOGGER.info("The person ["+ , person.getName() +"] was created");

This is not good for the code but also for those who are reading the log. 
# Not log sensible or personal information
The GDPR is already here (LGPD on Brazil is coming) and the companies need to even be more careful about the user's information.

Logging information like password or credit card numbers was already known as security failures. But now you also need to take care about pieces of information like address, e-mail, etc.

So, if you understand that some of these data it's important for the log, try to mask it. For example, to log the e-mail you can just do:

    log.info("An e-mail was sent to {}", person.getMaskedEmail());

That can produce a log like:

    "An e-mail was sent to dh******rison@g****.c**)"
# Log it's not only for errors
Many developers think that log it's only for errors. I could say that log errors it's important as logging what your software is doing. Also, the error log will certainly be less used by you than the INFO or WARN logs on the usual software.

I think that the previous tips will guide you on software where the logs will be very helpful.The last step was to point the [dherik.com](https://dherik.com) domain to [dherik.github.io](https://dherik.github.io). With a little help from CloudFare, I could do that easily.
