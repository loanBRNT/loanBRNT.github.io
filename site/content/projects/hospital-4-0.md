---
title: 'Hospital 4.0'
description: 'Simulate a robotic application to help nurse in a hospital to brings non-critics needs for patient'
video: 'https://youtu.be/7Lj5-pO2FFQ?si=z12Duxx_V_gcuzS8'
github: 'https://github.com/loanBRNT/delivery_packing_python'
tags: ['Python', 'IsaacSim', 'Multi-Robot', 'Language']
types: ['hackathon','open-source']
order: 0
---

> 🏗️ Content on this page is a work in progress and will be updated soon.

This project was initiated during a robotics hackathon organized by [REVEL](https://revelstudios.io/) and [LycheeAI](https://lycheeai-hub.com/), with the objective of building a useful manipulation-oriented robotic application.

The proposed scenario focuses on hospital environments, where nursing staff are frequently burdened with non-critical logistical tasks. The goal of the project is to explore how robotic systems could assist by handling simple requests such as delivering food, drinks, or everyday items, allowing nurses to focus on higher-value medical care.

The system is designed around natural language interaction, enabling patients to express requests in a flexible manner, which are then interpreted and executed by one or more robotic agents within a simulated hospital environment.

## System Overview

THe project shows two core elements, both of them integrated in Isaac Sim:

- **Robot Collaboration:** I create a program able to manage and synchronize multi-robot via a state machine to let a manipulator robot and a mobile robot to coordinate their work to deliver as fast as possible objects to patient.
- **Language-control:** Building a simple pipeline to transform patient instruction in natural language in a robotics action. Staying efficient enough to run on laptop pc.

