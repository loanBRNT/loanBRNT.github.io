---
title: MAGMA-GEN
description: Turning ambiguous failures in long-horizon robot tasks into validated recovery supervision through counterfactual re-execution.
status: accepted
tags: [robot learning, long-horizon manipulation, data generation]
collaborators: [Siléane, Gepetto Team (LAAS-CNRS)]
link: https://magma-rob.github.io/magma-gen
links:
  - label: Paper
    url: https://hal.science/hal-05514580
  - label: Code
    url: https://github.com/MAGMA-rob/magma-gen
  - label: Documentation
    url: https://magma-rob.github.io/docs/use-magma-gen/overview
order: 1
featured: true
directLink: false
---

> **Accepted at CoRL 2026.** The paper will appear in the *Proceedings of Machine Learning Research (PMLR)*. The volume and page numbers will be added once the proceedings are published.

MAGMA-GEN started from a practical problem I kept encountering in long-horizon robotics: when an agent fails, the final error rarely tells us which earlier decision actually caused it. Yet failed rollouts often contain useful information. If we can extract useful supervision from them, we can expose the model to its own failure modes and teach it how to recover when similar situations occur during deployment.

## The problem I wanted to address

Long-horizon manipulation agents must make a sequence of interdependent decisions. Training under such conditions requires data that reflect multi-turn interactions. Human annotation can provide very high-quality data but it leads to two well-known problems:
- **Efficiency**: collecting enough annotated trajectories is expensive and time-consuming.
- **Distribution Shift**: training only on successful expert trajectories does not expose the model to the states it reaches after making its own mistakes.

This second point becomes particularly important over long horizons. Once an autoregressive agent makes an incorrect decision, subsequent observations and decisions can progressively move away from the state distribution seen during training.

Reinforcement learning partially addresses this issue by collecting experience under the current policy distribution. However, applying RL directly to long-horizon robotic tasks can be very sample-inefficient: rewards are sparse, interactions are expensive, and execution itself can be stochastic. We discuss this motivation in more detail in the [paper](https://hal.science/hal-05514580).

## How MAGMA-GEN works

Starting from this problem, I took inspiration from DAgger-style approaches, which collect supervision on states actually visited by the learned policy. However, keeping a human in the loop to correct every failure would still make data collection expensive. So I tried to automate this correction process using an LLM.

> I called this system coaching because I took inspiration from sports: a coach observes a team's performance, identifies what went wrong, and provides targeted advice to improve the weaknesses revealed during execution.

The pipeline follows three main steps:

1. **Diagnose** — a privileged coach examines the task objective and execution feedback to identify a possible decision-level cause of failure.
2. **Propose** — the coach suggests a localized correction or a recovery action from the state reached by the agent.
3. **Validate** — the alternative continuation is executed in simulation. A candidate is retained only when its observed outcome supports the proposed correction.

This counterfactual re-execution step is important because the diagnosis itself can be wrong. Even with privileged context, an LLM can still make mistakes. Validation prevents every plausible explanation from automatically becoming a training target.

> I do not trust the LLM, I trust the result.

## How you can use MAGMA-GEN

MAGMA-GEN is designed to help you improve your own robotic agent from its execution experience.

You provide an agent, a set of tasks, and an environment in which its actions can be executed. This environment can be a simulator or a real robotic system, as long as MAGMA-GEN can observe the outcome of the agent's decisions.

The agent is then allowed to perform the tasks with its current policy. When something goes wrong, MAGMA-GEN uses a privileged coach to identify a possible cause, propose a recovery, and test that recovery through execution. Only validated corrections are turned into training examples.

This gives you a simple training loop:

Run your agent → observe its failures → generate validated corrections → fine-tune → run again.

Unlike reinforcement-learning approaches, MAGMA-GEN does not require the model to be updated during data collection or every trajectory to be converted into a reward signal. The output is a supervised dataset that can be inspected, filtered, reused, and combined with your existing training data.

The framework was built with robotics in mind: long-horizon tasks, stochastic execution, asynchronous actions, execution failures, and agents interacting with the physical world. We evaluate it in both simulation and on a real robot, but the same pipeline can be connected to other task-level robotic agents and environments.

## A broader research project

MAGMA-GEN is one part of [MAGMA](https://magma-rob.github.io/), our broader research framework for developing robot agents that follow natural-language tasks. MAGMA brings together task design, experience generation and evaluation while keeping the models runnable locally.

The public project website contains the paper, code, documentation, overview video and current release status:

**[Explore the MAGMA project →](https://magma-rob.github.io/)**
