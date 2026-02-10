---
title: "Hospital 4.0"
description: " Simulate a robotic application to assist nurses in a hospital in responding to non-critical patient needs. "
video: "https://youtu.be/7Lj5-pO2FFQ?si=z12Duxx_V_gcuzS8"
github: "https://github.com/loanBRNT/delivery_packing_python"
tags: ["Python", "IsaacSim", "Multi-Robot", "Language"]
types: ["hackathon", "open-source"]
order: 0
---

This project was initiated during a robotics hackathon organized by [REVEL](https://revelstudios.io/) and [LycheeAI](https://lycheeai-hub.com/), with the objective of building a useful, manipulation-oriented robotic application.

The scenario focuses on hospital environments, where nursing staff are often burdened with non-critical logistical tasks. The goal of the project is to explore how robotic systems could assist by handling simple requests—such as delivering food, drinks, or everyday items—allowing nurses to focus on higher-value medical care.

The system is designed around natural language interaction, enabling patients to express requests in a flexible way. These requests are then interpreted and executed by one or more robotic agents within a simulated hospital environment.  
This fully working prototype won **$600** at the hackathon and can be reused or modified freely for other projects.

## Key Technical Challenges

- Designing a lightweight multi-robot coordination state machine capable of synchronizing a mobile base and a manipulator under tight hackathon time constraints.
- Translating open-ended natural language requests into structured robotic actions without relying on cloud inference, enabling execution on a standard laptop.
- Managing asynchronous execution and task handoff between robots to minimize idle time during delivery.
- Integrating perception, language interpretation, and control into a single coherent pipeline within Isaac Sim.

## System Overview

The project demonstrates two core components, both integrated into Isaac Sim:

- **Robot Collaboration:** A coordination program that synchronizes a mobile robot and a manipulator using a state machine, allowing them to work together efficiently to deliver objects to patients.
- **Language Control:** A lightweight pipeline that converts patient instructions expressed in natural language into executable robotic actions, designed to remain efficient enough to run on a laptop.
