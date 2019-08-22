---
title: "Using only unchecked exceptions on your Java application"
published: true
categories:
  - Blog
tags:
  - java
  - exception
  - error
header:
  image: /assets/images/luca-bravo-XJXWbfSo2f0-unsplash.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

The Java checked exceptions are some kind of unique feature that most of the programming languages do not have. Is this could be a signal to not use it? The short answer is **yes**. And I will show how not use it.

The checked exceptions are [considered a mistake](https://testing.googleblog.com/2009/09/checked-exceptions-i-love-you-but-you.html) and this conclusion [is not new](http://radio-weblogs.com/0122027/stories/2003/04/01/JavasCheckedExceptionsWereAMistake.html). This helps to explain why any modern language, like [Scala](https://softwareengineering.stackexchange.com/questions/177806/decision-for-unchecked-exceptions-in-scala) or [Kotlin](https://kotlinlang.org/docs/reference/exceptions.html#checked-exceptions), not copied this idea.

There are a lot of sources on the Internet explaining how checked exceptions are bad and the advantages to not use it. Just follow the links that I share before if you prefer. But my mission here is to show how you could organize your code to work only with unchecked exceptions.

# Show me the code!

The big first step is to lose the notion to have many exceptions, representing a lot of different situations, like `FileNotFoundException`, `OrderMissingException`, `InvalidEmailException`, etc. Soon or later, you will have a bunch of very similar classes with the same purpose, not bringing with them any new information. And on this Rest API times, they will also need to be translated as a nice message for the final user some time, and these exceptions will not help you.

So, you just need a single exception extending `RuntimeException`. You can choose the name you prefer. Here I will call  `SystemException`.

To represent the different "exceptions", you can create different error codes. This is very easy using enumerators, like:

```java
public enum ErrorCode implements IErrorCode {
	
  INVALID_NAME(101),
  ORDER_NOT_FOUND(102),
  CREDIT_CARD_EXPIRED(103),
  VALUE_TOO_SHORT(104);

}
```

Every time you need to throw the exception, just pass the right error code:

```java
throw new SystemException(ErrorCode.CREDIT_CARD_EXPIRED);
```

As each error has a unique code, you are prepared to map each error on the messages.properties file:

```properties
101 = The name is invalid
102 = Order not found
103 = Credit card is expired
104 = The informed value is too short
```

With this simple approach, you are already able to share all mapped and possible error codes of your application to anyone.

If you need to pass a parameter to the message, just create the exception and set the values on it:

```java
SystemException ex = new SystemException(ErrorCode.ORDER_NOT_FOUND)
ex.set("number", "1234567");
```

No mistery on the properties:

```properties
102 = Order number {0} not found
```

When you need to deal with checked exceptions from third libraries or "legacy" code, the idea is to encapsulate the checked exception on the `SystemException`. Just choose the best error code to represent that condition and throw it. But don't forget to log the error before, like:

```java
try {
    // some third library trying to write/read a file
} catch (FileNotFoundException ex) {
    log.error("The file {} was not found", fileName, ex);
    throw new SystemException(ErrorCode.CONTRACT_NOT_FOUND);
}
```

The details about the code you can find on [my Github repository](https://github.com/dherik/java-exception-handling/tree/master/src/test/java/io/github/dherik/exception). Some parts of my implementation are slightly different from what I showed on the text, but it's just details that you can adjust. The original idea of this implementation came from [this blog](https://northconcepts.com/blog/2013/01/18/6-tips-to-improve-your-exception-handling/).
