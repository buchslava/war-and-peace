# Talking Code in the Real World (The Art of Programming Language Speaking)

## Preface

Humanity evolves quickly, but IT, as it sometimes seems to me, is even faster. Millions of lines of code appear every day. Some of them will not be alive till the end of the day, but some of them will live for decades. The latter tend to accumulate, and if they are unclear, then obscurity will accumulate with them. This kind of obscurity, I would say, global obscurity, is one of the problems of humanity, which is little talked about so far. The reasons for the appearance of such a code are not always obvious. The fact is that there is already a lot of good literature on this subject. Besides, year after year IT culture is growing. Despite the amount of incomprehensible code is growing. The goal of this book is to understand the non-obvious aspects of this situation and make some particular recommendations for its resolution.

### What This Book Is About

This book is about how to write perfect, supportable and readable code that describes different ideas of `The World Around Us`. The main feature of this book is that the some approaches to software development described in it are unique and have not been previously used. In addition, the book presents good practical advice, which makes it interesting for different kind of readers. And most importantly, this book instills the idea that a programming language is just a language of communication along with natural language.

### How to Read This Book

### Using Code Examples

## Chapter 1

### Is Unclear Code an Issue?

Definitely, unclear code is an issue! But how often it happens? That is the question! Unfortunately, throughout my career, I have seen an incomprehensible or unclear code much more /often than/ clear. What does it say? I hope this book would be a good answer. It may seem that unclear code is an annoying situation from point of view of the individual developer like me at this moment. But in the context of all my past experience (I have been working on IT for more than 20 years), this problem takes on a more dramatic shade. I personally lost because of an incomprehensible code, it doesn’t matter of my code or someone else’s, years and years! But I am only one soldier from a million-strong army of IT. Let's imagine what the loss of working time, for this reason, is for the whole of Humanity! In this context, the situation becomes threatening. But is it really that bad? Let's dig deeper into the issue!

### Two Kinds of Simplicity

Simplicity is the state or quality of being simple. Something easy to understand or explain seems simple, in contrast to something complicated. Alternatively, as Herbert A. Simon suggests, something is simple or complex depending on the way we choose to describe it.[1] In some uses, the label "simplicity" can imply beauty, purity, or clarity /Wiki/

There are two fundamental ways to evaluate something or make judgments about something. These are `Form` then `Content`. Judgment by the `Form` is quick, superficial, efficient and allows you to quickly assess the situation in the future. On the contrary, the judgment by the `Content` is slow, analytical and allows you to look at the root of the problem, that is, to understand the reason for the issue. But how these ideas are related to code. This question should be considered in the context of such a thing as code quality. So, we should try to apply the concepts of the `Form` and `Content` to the quality of the code. Obviously, one of important metrics of `Code Quality` is `Simplicity`. 

I want to introduce a couple of new terms.

They are:

* `Structural Simplicity`
* `Conceptual Simplicity`

So, let's associate judgment by the `Form` to `Structural Simplicity` and judgment by the `Content` to `Conceptual Simplicity`. This rule would be useful when we need to understand what way to resolve the issue is an appropriate. More info I will provide a little bit later.

### The Difference Between Structural Simplicity and Conceptual Simplicity

Since there is no rigorous (strict) mathematical definition of `Simplicity`, then consideration of the difference between `Structural Simplicity` and `Conceptual Simplicity` should be started with a description of these concepts themselves, and the best way to do this is to list the main features.

Firstly, let's look at `Structural Simplicity` that includes the main following features:

1. Clear variable names
2. Good tests coverage
3. Proper code formatting
4. Proper decomposition. Text of the code including functions, classes, methods should be considered with the next idea: their size should not be too large or too small.
5. `Actions` that code is doing should be fully understood as quick as possible during code reading

Despite `Conceptual Simplicity` can be include some points like `Clear variable names`, `Proper decomposition` from `Structural Simplicity` its main goal is regarding understand the idea of the solution instead code itself or how to code works or how code looks. That's why its features should be the following:

1. Clear or human-readable variable names
2. Tested in accordance with Subject Area Requirements
3. Decomposition in accordance with Subject Area
4. `Subject Area Requirements` should be fully understood as quick as possible during code reading

Why separation to `Structural Simplicity` and `Conceptual Simplicity` is important?  The answer to this question will give a short story, which I want to share with you, dear reader, right now.

<!--Представим, что в некоторой компании идет принятие решения о том браться или не браться за проект с наследством. Для решения этого вопроса собрались все ключевые технические игроки, такие как тимлиды, ПМ-ы, ввв. Первым делом они посмотрели на код и сочли, что он хорош. А именно, хорошие имена переменных, не слишком большие, но и не слишком маленькие файлы, почти 100% покрытие тестами. И даже, на первый взгляд может показаться, что проект действительно хорош. Они решили работать с проктом, составив план итерации. Итак, первая итерация прошла неудачно, вторая -тоже. Начались проблемы. Руководство компании совместно с командой начали выяснять, что произошло. Все разработчики единогласно сказали, что не могут работать с кодом, так как досконально не понимают что он должен делать. Причем сказано это было как разработчиками, присутствовавшими при принятии решения, так и теми, кого там не было. Это ошибка?

Неправда ли, странно. И чем вызвана такая резкая смена мнения о коде тех разработчиков, которые принимали решение? А ведь все они уважаемые специалисты, обладающие глубокими знаниями и не один год работающие в компании. Так в чем же причина ошибки? Как вы уже наверное догадались, дело тут во взгляде на понятие Простота. Дело в том, что при принятии решения команда смотрела проект с точки зрения `Structural Simplicity`. Напротив, при реальной работе с проектом команда была вынуждена смотреть на проект уже под другим углом, то есть с позиции `Conceptual Simplicity`. Почему так получилось? Во-первых они не знали про новые понятия относительно простоты, может конечно и догадывались, но их догадки были обусловлены исключительно интуицией. Во-вторых, оценка по Форме всегда занимает гораздо меньше времени, чем оценка по Содержанию. А ведь не секрет, что при принятии решений в ИТ время всегда ограничено, поэтому команды часто инстинктивно выбирают менее трудозатратную стратегию принятия решений. Именно это и произошло в нашем случае.

Однако, не стоит обольшаться насчет времени. Гораздо выгоднее один раз потратить дополнительное время на понимание сути решения, чем тратить во много раз больше времени, и денег, кстати в будущем.
-->

Imagine that in a certain company a decision is being made whether or not to take a project with a legacy. To address this issue, all the key technical players, such as team leaders, senior developers, etc., have gathered. First of all, they looked at the code and found it good. Namely, there are good variable names, files are not too long and not too short, it is almost 100% test coverage. At first glance, it may seem that the project is really good. They decided to work with the project by drawing up an iteration plan. So, the first iteration was unsuccessful, the second one was too. The management of the company together with the team began to find out what happened. All of developers unanimously said that they could not work with the code since they did not thoroughly understand what it should do. Moreover, this was said both by the developers who were present at the decision-making meeting and whose were not there. Where is a mistake?

This situation is weird, isn't it? But what caused such an abrupt change of opinion about the code of those developers who made the decision? But all of them are respected professionals with deep knowledge and some of them are working in the company many years. So what is the cause of the mistake? As you probably already guessed, the point here is in the point of view at the understanding of `Simplicity`. The fact is that when making a decision, the team looked at the project from the point of view of `Structural Simplicity`. On the contrary, during real work with the project, the team was forced to look at the project from a different angle, that is, from the perspective of `Conceptual Simplicity`. Why did it happen? Firstly, they didn’t know about new concepts about simplicity, they could, of course, have guessed, but their guesses were due exclusively to intuition. Secondly, the evaluation on the Form always takes much less time than the evaluation on the Content. But it's not a secret that when making decisions in IT, time is always limited, so teams often instinctively choose a less labor-intensive decision-making strategy. That is exactly what happened in our case.

However, it is not necessary to complain about the time. It is much more profitable once to spend extra time understanding the essence of the decision than to spend many times more time and money in the future.

<!--
Осталось решить один важный вопрос. Если команда сделала ошибку оценив проект в точки зрения Структурной простоты вместо оценки с точки зрения Понятийной простоты, от зачем же нужна оценка с точки зрения Структурной простоты?

Ответ будет прост и лаконичен. Оценка с точки зрения Структурной простоты необходима для оценки качества проекта, а оценка с точки зрения Понятийной простоты - достаточна
-->

It remains to solve one important question. If the team made a mistake in evaluating the project in terms of Structural simplicity instead of evaluation in terms of Conceptual simplicity, then why do we need evaluation in terms of Structural simplicity?

The answer will be simple and concise. Evaluation from the point of view of Structural simplicity is a necessary criterion for assessing the quality of the whole project, but at the same time, evaluation from the point of view of Conceptual simplicity is enough criteria.

### Understanding of Simplicity Properly is a Good Way to Resolve The Issue

<!-- 
А не задумывались ли вы, почему постановка одних задач требует детального выяснения функционала, а других нет? 

А почему, например, постановка задачи объединения нескольких видео потоков с камер слежения в один поток может занять меньшн времени, чем, например, постановка задачи сверки грузовой декларации с счет фактурой? 

Мне этот вопрос показался интересным. Если посмотреть на эту проблему с точки зрения типов простоты, то становиться очевидным, что в первом случае мы имеем дело с чисто технической зачачей. Эта задача безусловно сложна, однако за ней не стоит сложность, обусловленная внешним миром. В похожих случаях интеллектуальная нагрузка ложится на реализацию. Напротив, вторая задача гораздо проще в техническом исполнении, однако для ее постановки нужно досконально понимать часть процесса из реальной жизни. Я имею в виду как логистику вцелом, так и требования клиента вчастности. Скажу больше, в данном случае даже мало понимать эти процесы. Их нужно уметь их правильно формализовать, а затем понятно изложить. Ну а если и код, опивывающий этот процесс будет понятен - это уже победа! А еще более ценно - поддерживать такой чистый код годами7 А это уже сродни искусству! В своей карьере я крайне редко сталивался с таким кодом.

Из вышеизложенного следует вывод о неоднородности качества задач. Я бы сходу выделил два типа:

- Технические задачи
- задачи Реального Мира

Важно заметить, что задачи могут быть еще и комплексными, то есть включающими в себя сразу два вышеизложенных типа. В данном случае критично важна декомпозиция с раздельной оценкой подзадач с разных точек зрения. Я имею в виду оценку с точки зрения Формы и оценку с точки зрения Содержания.

А теперь пожалуй самое гравное. Итак, Техническую задачу в первую очередь нужно рассматривать с точки зрения Простоты по Форме, а задачу Реального Мира - с точки зрения Содержания.

Так вот, возвращаясь с вышеизложенному примеру (я имею в виду пример о выборе проекта) можно сделать вывод о том, что с большой долей вероятности в нем было много функционала, описывающего Реальный Мир. Очевидно что этот функционал был хорош с чтоки зрения Формы, но плох с точки зрения Содержания. Причем команда оценила его только с точки зрения Форма, что и вызвало серьезные проблемы в будущем.

-->

Have you ever wondered why the formulation of some tasks requires a detailed clarification while others do not?

Moreover, why, for example, setting a task regarding video streams representation (combining into one stream, for example) may take a shorter description than, for example, setting a task for reconciling a freight declaration with an invoice?

I've found this question very interesting. Indeed both of the tasks are complex. But how much complex? That is the question! If you look at this problem from the point of view of Simplicity, then it becomes obvious that in the first case we are dealing with a purely technical insight. This task is certainly difficult, but there is no difficulty behind it due to the external world. In similar cases, the intellectual burden falls on the implementation. On the contrary, the second task is much simpler in technical execution. However, it is necessary to thoroughly understand a part of the process from real life for its implementation. I mean both the Logistics in generally and the requirements of the client in particular. I would say more, in this case, it is not enough to understand these processes. They need to be formalized correctly, and after then they should be clearly implemented. Well, if the code that describes these processes is clear is already a victory! And even more valuable is an ability to maintain such a clean code for years. And this is already akin to art! I've very rarely obtained kind of code in my career.

From the above, it follows that issues regarding quality are heterogeneous. I would immediately distinguish two types of them:

- Technical tasks
- Tasks of the Real World

It is important to note that our tasks are possible to be more complex, that is, including the two above types at once. In this case, the crucially important to decompose them with a separate assessment of subtasks from different points of view. I mean evaluation in terms of Form and evaluation in terms of Content. Where Technical tasks preferably should be associated with evaluation by Form and tasks of the Real World - with Content evaluation respectively.

Now I would tell about, perhaps, the most grave thing. So, the Technical task, first of all, needs to be considered from the point of view of Simplicity on the Form, and the task of the Real World - from the point of view of the Content.

At this point, I want to notice one more important thing. What about unclear technical task implementation? My answer is quite simple. I don't give advice here, because there are a lot of different useful guides, books, courses etc. In this context, I would recommend "The Art of Readable Code" book. In my mind, this question fully answered there. Apart from that, this book is very compact and eloquent.

Also, do not forget, the solution may not be incomprehensible in real. It can only appear to them due to insufficient staff skills. This applies particularly to solutions based on a complex theoretical base.

So, returning to the above example regarding the Project, we can conclude that with a high degree of probability there was a lot of functionality in it describing the Real World. Obviously, this functionality was good in terms of Form but bad in terms of Content. And the Team appreciated it only in terms of Form, which caused serious problems in the future.

## Chapter 2

### Why good code can be bad?

The title of this chapter is 'Why good code can be bad?'. That's a very cruel and intriguing title at the same time. Isn't it? Yes, it is, indeed! First of all, this book would be useful for my colleagues in software development and some other roles like Software Architects, QA, PM, etc. Apart from that, I believe the book would also be interesting for Product Owners, (at least, I hope so)! It's an indisputable fact that IT society contains mostly experienced people who know that code written by people can be so cruel. Even inexperienced members feel this. We are spending a lot of time again and again on different projects struggling with unclear code at best and with unclear ideas at worst. It's an annoying fact. Against this background, the title is as cruel as our projects code. Do you agree with me?

In my mind, we need to answer next questions if we want to understand all the important nuances regarding code:

* What is cruel or what code is unclear?
* Is cruel code and unclear code same?
* Why we are writing it again and again?
* How to fix this situation?

These questions are too serious for an immediate single-valued answer, that's why all of this book devoted to their answering.

So, let's clarify! But first of all, I want to propose you a tricky game that we have never played.

### "The Game of Publishing House".

So, I'm very lucky.
The fact is that I was the first place of work was a publishing house, where I passed first 4 years of my career as an IT specialist in the publishing department.
It was a happy time when problems seemed smaller, and my personal growth was as great as ever.

Even though I was just an IT specialist, I had the great opportunity to learn the specifics of the work of the publishing house in all its subtleties.

<!--
Но хватит лирики.

На протяжении моей IT карьеры я все более и более нахожу, что специфика нашей работы во многом совпадает со спецификой работы издательства. И в этой связи я хочу упомянуть процесс редактирования рукописи который удивительным образом похож на процесс code review в IT. А что же их делает такими похожими? Прежде всего их объединяет ответ на вопрос 'а будет ли это прочитано просто?’. И в самом деле, какая разница между нашим естественным человеческим языком и языком программирования? Ведь как тем, так и другим мы выражаем свои мысли и вопрос простого их понимания актуален для обоих.
-->

But enough of the lyrics.

Throughout my IT career, I find more and more that the specifics of our work largely coincide with the specifics of the work of the publishing house. And in this regard, I want to mention the process of editing the manuscript which is surprisingly similar to the code review process in IT. And what makes them so similar? They are united by the answer to the question “Will it is read simply?”. Indeed, what is the difference between our natural human language and a programming language? After all, both of them express our thoughts and the question of simply understanding them is relevant for both.

<!--
Начнем пожалуй. Давайте представим себе некое издательство, в которое пришел малоизвестный писатель Лев Толстой со своим новым романом 'Анна Каренина’. Итак, одна из задач издательства - показать работу редактору с целью повышения читабельности текста. Редактор это прежде всего грамотный филолог, способный сделать красивым и понятным даже самый замысловатый текст. А каков мир нашего редактора? Прежде всего, это гуманитарий находящийся в рамках правил синтаксиса, орфографии, пунктуации, риторики итд. 
-->

Let's begin. Imagine a kind of publishing house to which the little-known writer Leo Tolstoy came with his new novel "Anna Karenina". So, one of the tasks of the publisher is to show the manuscript to the editor in order to increase the readability of the text. The editor is, first of all, a competent philologist who can make even the most intricate text beautiful and understandable. What is the environment of our editor? Obviously, his environment is regarding the rules of syntax, spelling, punctuation, rhetoric, etc.

<!--
Но как я сказал уже ранее, что это игра. А в любой игре есть место случайности. Поверьте, процесс редактирования рукописи обычным редактором не будет выглядеть как захватывающее приключение, особенно для вас, дорогие коллеги по IT. Я изменю правила игры и заменю редактора филолога на программиста. Не переживайте, он тоже очень грамотен и трудолюбив. Он тоже умеет делать текст лучше.  Однако его мир драматически отличается от мира филолога. Наш девелопер любит Javascript и живет по правилам IT. Он живет в плену переменных, функций, классов, методов и eslint. Кроме того, как истинный девелопер, он не терпит длинных описаний, он чересчур рационален и педантичен. Да, совсем забыл… Он не фанат написания текстов при помощи естественного человеческого языка. К тому-же привык решать проблемы  в один клик. Запомним это факт, он нам будет полезен в будущем.
-->

But as I said earlier, it is just a game. His Majesty Randomness should be present in this case. Believe me, the process of editing a manuscript by an ordinary editor will not look like an exciting adventure, especially for you, dear IT colleagues. I will change the rules of the game and replace the philologist-editor with a programmer. Do not worry, he is also very literate and hardworking. He also knows how to make the text better (but what text?!). However, his world is dramatically different from the world of the philologist. He like Javascript and lives by the rules of IT. He lives in captivity of variables, functions, classes, methods, and eslint. In addition, as a true developer, he does not tolerate long descriptions, he is too rational and pedantic. I completely forgot... He is not a fan of writing texts with the help of a natural human language. By the same used to solve problems in one click. Remember this fact, it will be useful to us in the future.

<!--
Итак, в вот тот текст, который и должен отредактировать наш новый редактор. Пусть это будет первый абзац романа Анна Каренина.

С большой долей вероятности я могу предположить, что глядя на данный текст наш редактор-программист скажет примерно слежующее …

О ужас! Это никуда не годиться! Как много слов в предложениях, какие длинные строки! Это же все надо прочесть. Джуны же не поймут. И приступил к чтению текста сверху вниз. Это, кстати, то немногое, что обединяет его с коллегой филологом.

Итак, он сразу находит, две интересные вещи. 
все предложения самодостаточны, те на его языке - инкапсулируемы
первое предложение сильно отличается от всех остальных и представляет из себя некое вступление
а как на языке IT называется вступление? initialization, конечно или сокращенно init.

итак, он выносит текст  первого предложения, как ему кажется, избыточный в данном месте, в отдельную функцию init.
-->

So, here is a text that our new editor should edit. Let the text be the first paragraph of the novel "Anna Karenina".

```
Happy families are all alike; every unhappy family is unhappy in its own way.
Everything was in confusion in the Oblonskys' house. The wife had discovered that the husband was carrying on an intrigue with a French girl, who had been a governess in their family, and she had announced to her husband that she could not go on living in the same house with him. This position of affairs had now lasted three days, and not only the husband and wife themselves, but all the members of their family and household, were painfully conscious of it.
```

With high probability, I can assume that looking at this text, the editor-programmer will say something like this ...

"Oh God! It is awful! How many words in sentences, what are long lines?! Junior developers will not understand this text".

So, he began to read the text from top to bottom. This, by the way, is the little thing that unites him with his colleague philologist.

So, he immediately finds two interesting things.
 1. All sentences are self-sufficient, those in his language are encapsulated.
 2. The first sentence is very different from all the others and is a kind of introduction.

But how in language IT is called the introduction? `Initialization`, of course, or abbreviated `init`.

He moved the text of the first sentence, as it seems to him, redundant in this place, in a separate function `init`.

```
function init() {
  Happy families are all alike; every unhappy family is unhappy in its own way
}
```

Modified text looks so:

```
init();
Everything was in confusion in the Oblonskys' house. The wife had discovered that the husband was carrying on an intrigue with a French girl, who had been a governess in their family, and she had announced to her husband that she could not go on living in the same house with him. This position of affairs had now lasted three days, and not only the husband and wife themselves, but all the members of their family and household, were painfully conscious of it.
```

Further is more interesting... Let's leave the second sentence for now and focus on the third one.
This sentence is interesting in that it consists of two self-sufficient thoughts, and the second thought logically follows from the first. The editor, as I said earlier, is talented and one of his talents is the ability to call things by their proper names, that is, in IT slang, the ability to give proper names for variables. So, in the first part of the sentence, we are talking about cheating. Why not call it a "fact of cheating"? In the second part of the sentence, it is said that it is impossible to continue the relationship and live under the same roof. As a true minimalist, the editor gives this part of the sentence a truly masterfully concise title - "the end of a relationship". So, putting together the above thoughts, we get the following:

```
function cheatingFact() {
  The wife had discovered that the husband was carrying on an intrigue with a French girl, who had been a governess in their family
}

function relationshipEnd() {
  and she had announced to her husband that she could not go on living in the same house with him
}
```

Modified text looks so:

```
init().
Everything was in confusion in the Oblonskys' house.
cheatingFact() && relationshipEnd().
This position of affairs had now lasted three days, and not only the husband and wife themselves, but all the members of their family and household, were painfully conscious of it.
```

At first glance, it may seem, the editor threw out the word "and", connecting the two parts of the sentence. In fact, it is not. For a person who is not familiar with the basics of programming, strange "&&" characters don't say anything. So, I will explain briefly: "&&" characters equals "and" caluse on most of programming languages. Therefore, our editor did not make a mistake and the meaning of the sentence was represented correctly.

Well, let's look at the last sentence? The last sentence is too complex to represent it as a separate thing goodly. Apart from that, it looks like a conclusion. In this case, the editor had been in a dilemma. On the one hand, it is necessary to preserve the meaning of the paragraph, and on the other hand, it is necessary to simplify the paragraph. But as I said earlier, our editor fond of formal and compact solutions. And therefore, in this situation, minimalism won. Without hesitation, the last sentence was represented as a separate function with the name "conclusion":

```
function conclusion() {
  This position of affairs had now lasted three days, and not only the husband and wife themselves, but all the members of their family and household, were painfully conscious of it
}
```

Now look at this sentence and find the problem? Do you find it difficult? So do I. It's all a matter of "this". More precisely, "this" meaning is unclear in this context. If you look at the entire text as a whole, it becomes clear that the word "this" is the result of the previous sentence. The problem is that "this" here is meaningless outside the function. However, programming (fortunately, or perhaps, unfortunately) solves this problem simply. To do this, assign the result of the penultimate sentence to a variable and use it instead of a "this" in "conclusion" function. Let's look at the result.

```
init().
Everything was in confusion in the Oblonskys' house.
$RESULT = cheatingFact() && relationshipEnd().
conclusion($RESULT).
```

```
function conclusion($PREVIOUS_RESULT) {
  $PREVIOUS_RESULT position of affairs had now lasted three days, and not only the husband and wife themselves, but all the members of their family and household, were painfully conscious of it
}
```

So, whole solution is following:

```
init().
Everything was in confusion in the Oblonskys' house.
$RESULT = cheatingFact() && relationshipEnd().
conclusion($RESULT).
```
where
```
function conclusion($PREVIOUS_RESULT) {
  $PREVIOUS_RESULT position of affairs had now lasted three days, and not only the husband and wife themselves, but all the members of their family and household, were painfully conscious of it
}
function init() {
  Happy families are all alike; every unhappy family is unhappy in its own way
}
function cheatingFact() {
  The wife had discovered that the husband was carrying on an intrigue with a French girl, who had been a governess in their family
}

function relationshipEnd() {
  and she had announced to her husband that she could not go on living in the same house with him
}
```

But wait... Why the second sentence was not touched? The answer is quite simple. The editor is a realist and he understands that it is impossible to move this content to a separate function by an objective reason. The reason is regarding impossibility to give a good name for things described in the sentence. That's it.

```
init().
Everything was in confusion in the Oblonskys' house.
$RESULT = cheatingFact() && relationshipEnd().
conclusion($RESULT).
```

What thoughts may be raised looking at the following text, dear reader? Do you want to read classic literature in a similar implementation? In my opinion, I don't read it, because in case of new edition we totally lost all of the meanings. Another question, why did it happen? What kind of mistake has the editor occurred? The more detailed explanation you will find a little bit later. Despite, I'll explain this situation briefly.

The whole point is that Leo Tolstoy brought ideas from the Real World to the editor, and they were corrected as ideas from the World of Technology.

At first glance, such an error may seem trivial. In fact, it is far more serious than it might seem. For this reason, a lot of IT projects work with errors, a lot of projects thrown to the "IT garbage collector" every day. After all, the truth is, we don’t want to see errors in the ATM, falling planes, failures in medical equipment! And if so - let's understand problem of unclear code deeply.

### Two worlds of a Software Developer.
### Side Effects of Travelling Between The Worlds or 2x2=4.
### Blunt refactoring
### Summary

## Chapter 3

### Is Complexity of Real World an Annoying Fact?
### Technical vs Real-world Tasks
### Let's Get Products
### Solution in 'World of Technology' Style
### Code Hyper Communication (CHC) as a Base Principle of Human Readable Code
### Let's talk!
### Summary

## Chapter 4

### Call and Definition Conformity (CDC) as a Big Deal
### Functional Paradigm? Why not?
### Summary

## Chapter 5

### Welcome to Async World!
### Palallel and Waterfall as Main Features of Async World
### Queue Providing
### Let's Do It!
### Summary

## Chapter 6

### The Main Approaches to Make our Code Eloquent
### Storage
### Eloquence as a Key to Understanding
### Let's Synonymize
### Code for Humanities
### Back to Our World
### Summary

## Chapter 7

### Psychological Aspects of Human Readable Code Writing
### Human Readable Code Writing Guidelines
### Testability Aspects
### Conclusion

## Further Reading

### Anjana Vakil
### The Art of Readable Code
### Clean Coder
