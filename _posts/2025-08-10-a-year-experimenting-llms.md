---
title: "A Year of Experimenting with LLMs as a Developer"
published: true
categories:
  - Blog
tags:
  - LLM
  - Deepseek
  - Grok
  - Kimi
  - Google
  - Qwen
  - AI
  - OpenAI
  - OpenRouter
  - Anthropic
header:
  image: /assets/images/a-computer-keyboard-with-a-blue-light-on-it-dwOcAJxSuD8.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

It's been a year since [I first published a blog post](https://dherik.com/blog/adventures-llm-local/) about running LLMs locally. Back then, I didn't know much about LLMs or how to run them on my own laptop (or desktop). I had many basic questions about what terms like Inference, Thinking, Instruct, Tokens, etc., really meant. Not that I don’t still have many questions — I definitely do! But things are more clearer now than they were a year ago.

I can say that a lot has changed since then. Today, I consider myself almost an enthusiast of this technology, and I've been experimenting with different ways of using LLMs — both remotely and locally — as well as testing various tools that interact with these models. I even created an [MCP Server](https://modelcontextprotocol.io/quickstart/server)!

In this post, I want to share what I have discovered and how I have been experimenting these models. Over the past few months, I've been following the news on this topic almost daily — so there's no shortage of material to talk about.

## What's Changed?

Compared to the article I wrote a year ago, I have noticed that the "intelligence" of these models has improved significantly, even when using fewer parameters. At the time, the main reference was **GPT-3.5**. Today, there are already models you can run on your own computer that can outperform it. That should give you an idea of how far we have come since then.

That said, for programming, I still think local models need to get smaller and smarter before they can become truly accessible. But we already have impressive options, like the Qwen3 Coder family, which comes in different parameter sizes and delivers very good results for their size. I confess that I have not tried many local models recently, because none of them have been really useful to me. But if you have more than 32 GB of RAM and at least 8 GB of RAM in your GPU, you can try the [Qwen3-Coder-30B-A3B-Instruct](https://huggingface.co/Qwen/Qwen3-Coder-30B-A3B-Instruct) with an acceptable performance, which I believe is the top-notch of the "affordable" local models for the mortals right now.

In my previous article, I also mentioned the [Continue](https://www.continue.dev) extension, which allows you to run LLMs locally integrated into your favorite IDE. This tool has evolved a lot and become much more competitive. I still keep an eye on its development, but with [GitHub Copilot](https://github.com/features/copilot) now being open-sourced and allowing the use of models from other LLM providers (like [OpenRouter](https://openrouter.ai) in Visual Studio Code, Continue.dev has taken a bit of a back seat for me. I still use it occasionally in JetBrains IDEs, since GitHub Copilot's JetBrains plugin still doesn't allow other LLM providers (I even opened a [request for this](https://github.com/microsoft/copilot-intellij-feedback/issues/522#event-19046829434)).

And it is important to talk a little bit about the [OpenRouter](https://openrouter.ai). If you want to experiment different models and use them as soon as possible, this is probably your best option. You can alternate between different models and compare the results very easily. Of course they charge you a little more than hitting directly the APIs from the native providers, but the flexibility that you have worth it since every month we have some interesting model showing interesting results. You can even have a good idea about the main preference of the LLM users following their [Top Weekly](https://openrouter.ai/models?order=top-weekly) rank.

So regarding remotely hosted models, [**Claude**](https://claude.ai) from [**Anthropic**](https://www.anthropic.com) seems the preferred one (their [Engineering blog](https://www.anthropic.com/engineering) is great, btw), although some [**GPT**](https://platform.openai.com/docs/models) models from [**OpenAI**](https://openai.com) can be the [best ones](https://aider.chat/docs/leaderboards/). However, I don't use both APIs so often due to API co$t$.

My current favorite is [**DeepSeek**](https://www.deepseek.com)'s models. I started with the [**V3**](https://github.com/deepseek-ai/DeepSeek-V3), which impressed me with its cost-effectiveness. Later, I followed the release of [**R1**](https://github.com/deepseek-ai/DeepSeek-R1) and began using it before it went viral — and it truly is an excellent model for programming. It’s a bit slow since it’s a "thinking" model, but it’s still my main LLM to this day. A [major update](https://api-docs.deepseek.com/news/news250528) a few months ago made it even better: more accurate, with less "verbose" thinking that’s easier to follow (fewer "But wait!" moments), while still maintaining a great balance between quality and cost.

Other interesting programming models include:

- [**Qwen** models](https://chat.qwen.ai) — very good, with both local options (for smaller tasks) and API versions. The **Qwen3 Coder** line, aimed at developers, stands out and comes in different sizes for both local and API usage. But if you want the best one, you can use the [Qwen3-Coder-480B-A35B-Instruct](https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct)
- [**Kimi K2**](https://www.kimi.com) — in some cases, it comes close to Claude Code's performance and is priced similarly to DeepSeek. It's my main alternative when DeepSeek doesn't give me the expected results.
- [**Grok 4**](https://x.ai/news/grok-4) ([xAI](https://x.ai)'s model) — also showing solid results for coding.
- [**Gemini 2.5 Pro**](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-pro?hl=pt-br) (from Google) — excellent for complex problems, but in my experience, it's too verbose and doesn't follow instructions as precisely as I'd like.
- [**GLM 4.5**](https://z.ai/blog/glm-4.5) — very new, with good feedback so far, but I haven't looked into it much yet.

Recently, [**GPT-5**](https://openai.com/index/introducing-gpt-5/) was released. There was a lot of hype around it, but from what I've seen, expectations weren't fully met. Are we reaching the limits of what the current LLM technology can offer? It's possible.

Overall, the landscape has changed a lot. A year ago, running something competitive locally seemed far away; today, it's already a reality — and the trend is for it to get even better.

But surprisingly, what I've found most interesting over this period hasn't been the evolution of the models themselves, but rather the discovery of the different tools that have emerged to interact with them and get the most out of them (and, in some cases, out of your wallet 💸 too).

I plan to cover talk about of these tools in my next post. Until then!
