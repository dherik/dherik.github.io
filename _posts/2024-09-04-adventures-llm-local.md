---
title: "My adventures running local LLM"
published: true
categories:
  - Blog
tags:
  - LLM
  - ollama
  - Llama
header:
  image: /assets/images/chris-ried-ieic5Tq8YMk-unsplash.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

A few months ago, I started experimenting with local [LLM models](https://en.wikipedia.org/wiki/Large_language_model). Before that, I was already using [ChatGPT](https://openai.com/chatgpt/) daily for various tasks, like brainstorming solutions, learning new technologies, coding, translations, and more. But up until then, I thought something so powerful was only possible on massive servers with terabytes of data and an uncountable number of dedicated GPUs.

Well, I was wrong :)

P.S.: It's been a while since I last wrote on my blog. I often think about writing something new (trust me, I have a LOT of drafts), but I always feel like there's a better article or video out there covering the topic more effectively than I could. However, I recently came across advice that said a good reason to write is to explain things in your own way, even if others have already covered the subject. So, here we are again :)

# Starting my adventure

My adventure started with the [llamafile](https://github.com/Mozilla-Ocho/llamafile). I admit that I was ignorant about the LLM and AI generative topic, and I was **very** impressed by what a 4GB file could do running 100% offline. It's not an exaggeration to say that you can now store a considerable amount of human knowledge on a single old pendrive -  I'm not saying that this was not possible before LLMs, but being able to use natural language to interact with that and even process images with this technology is amazing!

After playing around with llamafile (specifically the Llama2-7b model, to be more precise), I was thinking about what I could do with that. The obvious answer for me was being able to use my private data as input and, of course, coding. In this article, I will focus on the coding part.

I already used [Github Copilot](https://github.com/features/copilot). Very good tool, does a great job helping with development. I'm able to autocomplete my code (one line and multiline), create new tests with little effort, and explaining spaghetti code to me (also very useful when you dealing with ancient technologies, like ASP.net and VisualBasic =P).

But Github Copilot is expensive, has no privacy, and mainly... is boring. I want to get my hands dirty. So what were my alternatives?

So I discovered [Continue](https://www.continue.dev) extension. Their objective is to offer similar features that you can find in Copilot but with the flexibility to use different LLM providers. And that includes LLMs running on your machine! So this is where my journey started...

# Why is so slow?

The first challenge was to understand why the llamafile was so slow when compared with my experience with ChatGPT or Copilot Chat. The speed (measured by tokens per second) was Ok for a conversation, but not very good when you need a faster output, which is the case when you are asking for coding tips and making fine tunings to have a useful result.

The second challenge was how bright my personal AI was. Compared with ChatGPT 3.5, it was significantly more dummy. I mean, it was already very helpful in many cases but I needed to be more precise in my descriptions about what I wanted to accomplish to have a decent result.

So I learned two things: 
- The "speed" is how many **tokens** per second my computer can generate. You can understand as "token" a fraction of a word.
- The "intelligence" can be improved using different models and a bigger number of **parameters**. There are other variables too, but these are the main ones.

# Improving the generated tokens per second

So how do I do that? The answer to this question starts by looking at my computer. As I like some freedom (and in this case, trouble...), my objective was to have a decent performance using my desktop computer and my notebook, both running [Kubuntu Linux](https://kubuntu.org).

If you know something about running local LLMs, you don't even need to read the rest of my text to realize what happened to me if I say to you that I am an AMD ~~fanboy~~ guy ([since 2000](https://en.wikipedia.org/wiki/Athlon), by the way).

## The notebook saga

About my notebook, spoiler alert: my mission to have more tokens was not quite successful. My notebook has a decent processor (a Ryzen 7), and 20GB of RAM, which should be able to load models with more than 7 billion parameters. But has integrated graphics, which is a lost cause to run local LLMs, because is not possible to have anything faster than your read speed in this scenario. Like, is not that bad, is enough for chatting but impractical to use for autocomplete my code.

Driven by frustration, I started the journey to understand what was happening. This was the moment when I started to learn about [CUDA](https://pt.wikipedia.org/wiki/CUDA), [ROCm](https://en.wikipedia.org/wiki/ROCm), [Vulkan](https://en.wikipedia.org/wiki/Vulkan), and [OpenCL](https://pt.wikipedia.org/wiki/OpenCL). I also discovered that running a local LLM for tasks like chatting or autocomplete is known as 'local LLM **inference**,' which refers to the process of using a trained model to generate outputs based on input data. But, no matter the situation, my notebook was not able to improve this speed as much as I wanted.

To achieve decent performance when running an LLM model, it's crucial to have high memory bandwidth between the processor and RAM. One of the most effective ways to do this is by loading the model into your GPU’s RAM. This significantly boosts performance because the bandwidth between the GPU and its RAM is much faster than that of a CPU and standard computer RAM. However, it's still possible to achieve good speeds without a dedicated GPU, as long as the notebook meets certain requirements.

## The notebooks for local LLM

Notebooks with architectures that provide high bandwidth between the CPU and RAM can achieve excellent performance. The best examples are MacBooks with M1, M2, or M3 chips, where local LLMs run exceptionally well. Another promising option is the Snapdragon X ARM CPU, although it was just launched, so it will take some time before it becomes widely available and we start seeing local LLM performance tests.

Of course, the other option is to go with a notebook featuring a dedicated NVIDIA GPU—but remember, I'm an AMD guy, right? (╯°□°）╯︵ ┻━┻

So, staying with my current notebook, the only solutions were:
- Conform with the slow output from the best model that I could run. In this case, could be the LLama3.1-8b, from Meta.
- Try to use a small and faster model that could still deliver decent answers. In this case, Phi3-3b, from Microsoft, could be an option.

So, when I need to run a local LLM on my notebook, I alternate between both, choosing the best one according to my current use case.

# Bringing out the big guns: my Desktop

Now things get more exciting.

My current setup includes a Ryzen 5 5600, 16 GB of RAM, and an [Radeon RX 6600](https://www.amd.com/pt/products/graphics/desktops/radeon/6000-series/amd-radeon-rx-6600.html) with 8 GB of VRAM. With this amount of VRAM, I should be able to fully load a 7b/8b model.

However, just like with my notebook, the token generation was slow on my first attempt, despite my expectations that the GPU would handle it and the model would be fully loaded into the GPU’s VRAM. To investigate further, I began experimenting with various LLM tools, since their hardware support can differ enough to produce varying results.

After trying llamafile without success, my second try was [Ollama](https://ollama.com). Ollama is a very simple CLI tool for that, being able to download and run the model with very few commands. You can use it to serve different models in different Ollama servers on your machine with the right amount of flexibility that I was looking for. For my luck, they just [announced](https://ollama.com/blog/amd-preview) their support for different AMD GPUs, but mine was not included in that.

So I tried the third one, the [koboldcpp](https://github.com/LostRuins/koboldcpp) fork [with ROCm support](https://github.com/YellowRoseCx/koboldcpp-rocm). It worked like a charm in terms of speed, very fast! But the model tunning was confusing and I was receiving really weird answers to my questions even trying different configurations.

I went back to Ollama and tried to understand what was going on. After some research, I understand that the lack of support for my GPU was the cause. Some GPU models of AMD Radeon GPU were supported, but the 6600 was not on the list (at least not yet). Seeing some [folks with the same problem](https://github.com/ollama/ollama/issues/2869#issuecomment-1990941696), I figured out that I could trick the Ollama, by manually changing the detected chipset of my GPU to a different model supported and in the same architecture as my 6600 GPU.

The script to start Ollama with this configuration can be found [here](https://github.com/dherik/ddd-golang-project/blob/main/scripts/start-ollama-continue.sh).

```sh
#!/bin/bash

OLLAMA_HOST=127.0.0.1:11435 OLLAMA_MODELS=/usr/share/ollama/.ollama/models HSA_OVERRIDE_GFX_VERSION=10.3.0 ollama serve &> /dev/null &
pid1=$!
echo "Initializing server for chat"

OLLAMA_HOST=127.0.0.1:11436 OLLAMA_MODELS=/usr/share/ollama/.ollama/models HSA_OVERRIDE_GFX_VERSION=10.3.0 ollama serve &> /dev/null &
pid2=$!
echo "Initializing server for autocomplete"

echo -n "Ollama servers started"

trap "kill -INT $pid1 $pid2" SIGINT
wait $pid1 $pid2
echo -n "Ollama servers stopped"
```

You can see that I'm loading two models. The reason for that is that one model is for the chat and the other one is for autocomplete. Is not possible to use the same model for both things, because the training for a model to chat with you is different from one prepared to autocomplete.

I can load both models in the GPU because I carefully choose the models based on the number of parameters. A model with 8 billion parameters can occupy 4.5 GB of RAM and a model of 3 Billion will occupy 2 GB of RAM. In my case, I was using the model [Llama 3 8b](https://ollama.com/library/llama3) for chat and the model [Starcoder 3b](https://ollama.com/library/starcoder) for autocomplete.

With this setup, I was able to play with Continue extension in Visual Studio Code, chatting with the model, and using the autocomplete feature to help me in the coding tasks.

# Next steps

Recently, AMD launched the [RX 7600 XT](https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7600-xt.html), a new graphics card with 16 GB of VRAM — one of the best value-for-money options if you're looking to run local LLMs and play games on the side. It’ll probably be my next purchase, as it will allow me to load larger models and assist with my coding tasks.

I haven't had time to dive into this topic yet, but another personal goal is to set up a local RAG (Retrieval Augmented Generation) system using an LLM model. The idea is to feed it my personal files so it can help me answer questions about my own documents.