# AI 辅助开发指南

> 本文档由多个课程文件合并而成

## 目录

1. [project structure](#lesson-1)
2. [brainstorm before coding](#lesson-2)
3. [break down problems](#lesson-3)
4. [chat vs agent](#lesson-4)
5. [customize ai](#lesson-5)
6. [file naming modularity](#lesson-6)
7. [always write tests](#lesson-7)
8. [keep chats focused](#lesson-8)
9. [dont just accept code](#lesson-9)
10. [getting unstuck](#lesson-10)
11. [ai struggles new tech](#lesson-11)
12. [commit often](#lesson-12)

---

## Lesson 1: project structure {#lesson-1}

> 原文件: 01-project-structure.md

## Starting with Structure, Not Code

### Summary
The most important step is setting up a clear project structure. Don't even think about writing code yet.

### Detailed Explanation
When working with AI tools, I've found that jumping straight into coding often leads to confusion and rework. The AI needs clear context about where things should go and how they fit together. By spending time on structure first, both you and the AI have a shared understanding of the project's organization.

### Tips
- Break down your project into logical components before writing any code
- Use descriptive folder names that reflect their purpose
- Include a place for documentation from the start
- Consider future scale - will this structure work when the project grows?

### Common Mistakes
- Trying to figure out structure as you go along
- Putting everything in one directory because "it's a small project"
- Not having a designated place for tests and documentation

---

## Lesson 2: brainstorm before coding {#lesson-2}

> 原文件: 02-brainstorm-before-coding.md

## Brainstorm Before Coding

### Summary
Share your thoughts with AI about tackling the problem. Once its solution steps look good, then ask it to write code.

### Detailed Explanation
Jumping straight into code generation can lead to misaligned solutions. By discussing your approach with AI first, you can validate your thinking and identify potential issues early. This pre-coding dialogue helps ensure that both you and the AI have a clear understanding of the problem and solution strategy.
This will reduce the number of prompts needed when writing the code.

### Tips
- Outline your solution strategy before asking for code
- Discuss edge cases and potential challenges
- Document Decisions and Trade-offs
- Let AI suggest alternative approaches, sometimes it gives much better ideas than yours.

### Common Mistakes
- Rushing to get code without proper planning
- Not considering edge cases during discussion, which leads to writing lots of unnecessary code
- Not documenting decisions and their rationales

---

## Lesson 3: break down problems {#lesson-3}

> 原文件: 03-break-down-problems.md

## Break Down Complex Problems

### Summary
Don't just say "Extract text from PDF and generate a summary." That's two problems! Extract text first, then generate the summary. Solve one problem at a time.

### Detailed Explanation
AI is great at solving specific, well-defined problems. When you present a complex task as one big problem, you're more likely to get confused or incomplete solutions. Breaking it down helps both you and the AI focus on solving each part correctly.

### Tips
- Identify distinct steps in your problem
- Tackle each step separately
- Test each part before moving to the next

### Common Mistakes
- Asking AI to solve multiple problems in one prompt
- Not validating intermediate results
- Making prompts too broad or unclear

---

## Lesson 4: chat vs agent {#lesson-4}

> 原文件: 04-chat-vs-agent.md

## Chat VS Agent Tabs

### Summary

I use the chat/plan tab for brainstorming/research and the agent/act tab for writing actual code.

### Detailed Explanation

When working with AI tools, understanding the distinct purposes of chat and agent interactions improves your workflow. The chat tab is ideal for exploration and discussion, while the agent tab focuses on specific code implementation.

For example, use chat mode for questions like "I need to build a URL shortener. What's the best approach?" and agent mode for specific tasks like "Create a function that generates a 6-character unique URL".

This separation helps maintain clear context in your AI interactions and reduce your LLM API costs.

### Tips

-   Keep research and exploration in chat tab
-   Use agent tab when ready to write code
-   Start new chats for unrelated topics

### Common Mistakes

-   Using agent tab for open-ended discussions
-   Mixing brainstorming and implementation
-   Keeping context scattered across different tabs


---

## Lesson 5: customize ai {#lesson-5}

> 原文件: 05-customize-ai.md

## Customize Your AI

### Summary
Create "Rules for AI" custom instructions to modify your agent's behavior as you progress, or maintain a RulesForAI.md file.

### Detailed Explanation
As you work with AI, you'll discover patterns in its responses that could be improved. Instead of repeatedly correcting these patterns, create custom instructions that guide the AI to follow your preferred practices automatically. This makes your interactions more efficient and consistent.

### Tips
- Update rules based on actual experience and your project needs
- Keep rules clear and specific
- Document why each rule exists
- Focus on patterns you notice repeatedly

### Common Mistakes
- Writing vague or contradictory rules
- Not adapting rules based on project needs


---

## Lesson 6: file naming modularity {#lesson-6}

> 原文件: 06-file-naming-modularity.md

## File Naming and Modularity Matter

### Summary
Since tools like Cursor/Windsurf don't include all files in context (to reduce their costs), accurate file naming prevents code duplication. Make sure filenames clearly describe their responsibility.

### Detailed Explanation
AI tools work with limited context to manage costs and performance. Clear file names help AI understand where code should go and what it does, preventing it from recreating existing functionality. Good modularity also makes it easier for AI to focus on specific parts of your code.

### Tips
- Give files descriptive, purpose-indicating names
- Keep related functionality together
- Structure code in logical, focused modules
- Make file responsibilities clear from their names

### Common Mistakes
- Using generic file names
- Spreading related code across multiple files
- Having files with mixed responsibilities


---

## Lesson 7: always write tests {#lesson-7}

> 原文件: 07-always-write-tests.md

## Always Write Tests

### Summary
It might feel unnecessary when your project is small, but when it grows, tests will be your hero.

### Detailed Explanation
When working with AI-generated code, tests become even more crucial. They help verify that the generated code works as intended and catch any misunderstandings between you and the AI. Tests also make it safer to accept AI's suggested changes or refactoring.

### Tips
- Write tests before accepting generated code

### Common Mistakes
- Skipping tests because "it's just a small project"
- Not testing edge cases
- Accepting AI code without test verification


---

## Lesson 8: keep chats focused {#lesson-8}

> 原文件: 08-keep-chats-focused.md

## Keep Chats Focused

### Summary
When you want to solve a new problem, start a new chat.

### Detailed Explanation
AI works best with clear context. When you mix multiple problems in one chat, the context becomes cluttered and the AI's responses may become confused or inconsistent. Starting fresh chats for new problems helps maintain clarity and focus. This will reduce your LLM API costs

### Tips
- Start new chats for unrelated problems
- Keep one main topic per conversation

### Common Mistakes
- Mixing multiple problems in one chat

---

## Lesson 9: dont just accept code {#lesson-9}

> 原文件: 09-dont-just-accept-code.md

## Don't Just Accept Working Code

### Summary
It's tempting to just accept code that works and move on. But there will be times when AI can't fix your bugs - that's when your hands need to get dirty (main reason non-tech people still need developers).

### Detailed Explanation
While AI can generate working code quickly, understanding how and why the code works is crucial. When bugs arise, you need to be able to debug and fix them yourself. This understanding also helps you make better use of AI by knowing what to ask for and how to validate its solutions.

### Tips
- Review and understand generated code
- Ask AI to explain complex parts

### Common Mistakes
- Accepting code without understanding it
- Not verifying if the solution is optimal
- Relying entirely on AI

---

## Lesson 10: getting unstuck {#lesson-10}

> 原文件: 10-getting-unstuck.md

## Getting Unstuck

### Summary
If AI can't find the problem in the code and is stuck in a loop, ask it to insert debugging statements. AI is excellent at debugging, but sometimes needs your help to point it in the right direction.

### Detailed Explanation
When AI gets stuck in a loop or can't identify the issue, it's often because it lacks visibility into what's actually happening at runtime. By asking it to add strategic debugging statements, you can help it understand the actual program flow and state.

### Tips
- Ask AI to add console.logs at key points
- Provide the debugging output back to AI

### Common Mistakes
- Letting AI keep guessing without new information
- Not providing runtime feedback to AI

---

## Lesson 11: ai struggles new tech {#lesson-11}

> 原文件: 11-ai-struggles-new-tech.md

## AI Struggles with New Tech

### Summary
When I tried integrating a new payment gateway, it hallucinated. But once I provided docs, it got it right.

### Detailed Explanation
AI's knowledge is limited to its training data, so it may not be familiar with very new technologies or recent API changes. However, by providing documentation, you can help AI understand the current specifications and generate accurate code.

### Tips
- Always provide docs for new or updated tech

### Common Mistakes
- Expecting AI to know about very recent updates

---

## Lesson 12: commit often {#lesson-12}

> 原文件: 12-commit-often.md

## Commit Often!

### Summary
If you don't, you will lose 4 months of work like [this guy](https://www.reddit.com/r/cursor/comments/1inoryp/cursor_fck_up_my_4_months_of_works/)

### Detailed Explanation
When working with AI, you might try different approaches and make many changes quickly. Regular commits help you track what worked and what didn't, and provide a safety net for experimentation. They also make it easier to revert if AI-generated changes cause unexpected issues.

### Tips
- Commit after each successful AI interaction
- Use clear commit messages

### Common Mistakes
- Waiting too long between commits

---

