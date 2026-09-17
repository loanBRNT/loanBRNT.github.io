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

MAGMA-GEN started from a practical problem I kept encountering in long-horizon robotics: when an agent fails, the final error rarely tells us which earlier decision actually caused it. The interesting supervision is often hidden inside the failed trajectory—but only if we can identify and validate a better continuation.

## The problem I wanted to address

Long-horizon manipulation agents must make a sequence of interdependent decisions. A small mistake can place the robot in an unfamiliar state and cause a failure much later. Traditional supervised learning provides little data for recovering from these states, while sparse task-level rewards make it difficult to assign credit to the right decision.

Rather than discarding unsuccessful rollouts, MAGMA-GEN uses the agent's own failures as a source of training data. The objective is not simply to repair a trajectory, but to turn plausible corrections into **validated recovery supervision**.

## How MAGMA-GEN works

The pipeline follows three main steps:

1. **Diagnose** — a privileged coach examines the task objective and execution feedback to identify a possible decision-level cause of failure.
2. **Propose** — the coach suggests a localized correction or a recovery action from the state reached by the agent.
3. **Validate** — the alternative continuation is executed in simulation. A candidate is retained only when its observed outcome supports the proposed correction.

This counterfactual re-execution step matters because the diagnosis itself can be wrong. Validation prevents every plausible explanation from automatically becoming a training target.

## What the paper contributes

MAGMA-GEN is an on-policy data-generation pipeline: it collects examples from the states and failures produced by the agent being improved. The resulting dataset can be used for subsequent supervised training without updating the agent's weights during collection.

We evaluate the approach on interactive, long-horizon manipulation tasks and compare it with distillation and trajectory-repair baselines. The experiments study task success and recovery under evolving constraints, in simulation and with real-robot execution.

## A broader research project

MAGMA-GEN is one part of [MAGMA](https://magma-rob.github.io/), our broader research framework for developing robot agents that follow natural-language tasks. MAGMA brings together task design, experience generation and evaluation while keeping the models runnable locally.

The public project website contains the paper, code, documentation, overview video and current release status:

**[Explore the MAGMA project →](https://magma-rob.github.io/)**

## Publication

**MAGMA-GEN: Validated Recovery Supervision from Ambiguous Failures via Counterfactual Re-Execution**<br />
Loan Bernat, Matthieu Grard, Ariane Herbulot, Florent Lamiraux<br />
Accepted at the 10th Conference on Robot Learning (CoRL 2026), Austin, Texas, USA.
